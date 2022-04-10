import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { EmployeesService } from '../services/employees.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  employees: any
  id: any

  constructor(private service: EmployeesService, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    if(this.employees === null){
      alert('Não há usuários cadastrados, cadastre alguns!')
    } else {
      this.readEmployees()

    }
  }

  readEmployees(){
    this.service.getEmployees().subscribe(response => {
      this.employees = response})
  }

  updateEmploye(id: any) {
    this.router.navigate(['update', id])
  }

  deleteEmploye(id: any) {
    this.service.deleteEmployees(id).subscribe(response => {
      alert('Empregado deletado com Sucesso!')
      this.router.navigate(['/home'])
      this.readEmployees()
    })
  }

  checkLoggedIn(){
    return this.authService.loggedIn
  }


}
