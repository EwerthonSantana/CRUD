import { DatasService } from './../../services/datas.service';
import { HttpClient } from '@angular/common/http';
import { CpfValidator } from './Validators/cpf';
import { EqualsTo } from './Validators/equalsTo';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { EmployeesService } from 'src/app/services/employees.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeesModel } from './employees.model';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-employees-create',
  templateUrl: './employees-create.component.html',
  styleUrls: ['./employees-create.component.css']
})
export class EmployeesCreateComponent implements OnInit {

  send: boolean = false;
  employees: EmployeesModel;
  registerForm: any;
  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  states: any;
  offices: any;
  technologies: any;

  @ViewChild('terms') terms: HTMLInputElement;

  constructor(private service: EmployeesService, private router: Router, private route: ActivatedRoute, private http: HttpClient,
    private datasService: DatasService) { }

  ngOnInit(): void {

    this.route.params.subscribe(
      (params: any) => {
        const id = params['id']
        console.log(id)
        const formUpdate = this.service.getEmployeesById(id)
        formUpdate.subscribe(datas => {
          this.populedForm(datas)
        })
      }
    )

    this.datasService.getTechnologies().subscribe(datas => { this.technologies = datas });

    this.datasService.getOffices().subscribe(datas => { this.offices = datas });

    this.datasService.getStatesBr().subscribe(datas => { this.states = datas });

    this.registerForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl("", [Validators.required, Validators.minLength(5), Validators.maxLength(80)]),
      cpf: new FormControl("", [Validators.required, CpfValidator.cpfValid]),
      fone: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.pattern(this.emailPattern)]),
      emailConfirmation: new FormControl("", [Validators.required, Validators.pattern(this.emailPattern), EqualsTo.equalsTo('email')]),
      adress: new FormGroup({
        cep: new FormControl("", [Validators.required]),
        houseNumber: new FormControl("", [Validators.required]),
        complement: new FormControl(""),
        street: new FormControl("", [Validators.required]),
        district: new FormControl("", [Validators.required]),
        city: new FormControl("", [Validators.required]),
        state: new FormControl("", [Validators.required])
      }),
      office: new FormControl("", [Validators.required]),
      technology: new FormControl("", [Validators.required]),
      frameworks: new FormGroup({
        angular: new FormControl(),
        react: new FormControl(),
        vue: new FormControl(),
        laravel: new FormControl()
      }),
      newsletter: new FormControl("", [Validators.required]),
      terms: new FormControl("", [Validators.required])

    })

  }

  populedForm(datas: any) {
    this.registerForm.patchValue({
      id: datas.id,
      name: datas.name,
      cpf: datas.cpf,
      fone: datas.fone,
      email: datas.email,
      emailConfirmation: datas.emailConfirmation,
      adress: {
        cep: datas.adress.cep,
        houseNumber: datas.adress.houseNumber,
        complement: datas.adress.complement,
        street: datas.adress.street,
        district: datas.adress.district,
        city: datas.adress.city,
        state: datas.adress.state
      },
      office: datas.office,
      technology: datas.technology,
      frameworks: {
        angular: datas.frameworks.angular,
        react: datas.frameworks.react,
        vue: datas.frameworks.vue,
        laravel: datas.frameworks.laravel
      },
      newsletter: datas.newsletter

    })
  }

  sendEmployees(form: any) {

    if (this.registerForm.valid) {

      if (this.registerForm.value.id) {
        this.service.putEmployees(this.registerForm.value).subscribe(response => {
          alert('Empregado atualizado com sucesso!');
          this.router.navigate(['/home']);
          this.send = true;
        })
      }

      else {
        this.service.postEmployees(this.registerForm.value).subscribe(Response => {
          alert('Empregado registrado com sucesso');
          this.router.navigate(['/home'])
          this.send = true;
        });

      }

    } else {
      this.verifyValidForm(this.registerForm);
    }
  }

  verifyValidForm(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(controls => {
      const control = formGroup.get(controls);
      control!.markAsTouched();
      if (control instanceof FormGroup) {
        this.verifyValidForm(control)
      }
    });
  }

  cancelRegister() {
    this.router.navigate(['/home'])
  }


  //Faz a consulta da API ViaCep com tratamento do cep
  consultCEP() {

    let cep = this.registerForm.get('adress.cep').value

    //Nova variável "cep" somente com dígitos.
    cep = cep.replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep != "") {

      //Expressão regular para validar o CEP.
      var validateCEP = /^[0-9]{8}$/;

      //Valida o formato do CEP.
      if (validateCEP.test(cep)) {
        this.http.get(`//viacep.com.br/ws/${cep}/json/`)
          .pipe(map((datas: any) => datas))
          .subscribe(datas => this.populedDataCep(datas));

      }
    }
  }

  //Popula os campos de Endereço atráves do CEP
  populedDataCep(datas: any) {

    this.registerForm.patchValue({
      adress: {
        complement: datas.complemento,
        street: datas.logradouro,
        district: datas.bairro,
        city: datas.localidade,
        state: datas.uf
      }
    })

  }

  acceptTerms(){
    this.registerForm.get('terms').setValue(true);
    let closeModal = document.getElementById('outModal');
    closeModal.click();
  }

  verifyValid(control: any): boolean {
    return this.registerForm.get(control).valid;

  }


  setCssValidator(control: any) {
    return {
      'is-valid': this.verifyValid(control) && this.registerForm.get(control).touched,
      'is-invalid': !this.verifyValid(control) && this.registerForm.get(control).touched
    }
  }


}
