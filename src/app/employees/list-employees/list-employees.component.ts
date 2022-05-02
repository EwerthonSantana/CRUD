import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  employees: any[] = []
  id: any

  constructor(private service: EmployeesService, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {

    this.readEmployees()
  }

  readEmployees() {
    this.service.getEmployees().subscribe(response => {
      this.employees = response;
    })
  }

  updateEmploye(id: any) {
    this.router.navigate(['update', id])
  }

  deleteEmploye(id: any) {
    this.service.deleteEmployees(id).subscribe(response => {
      alert('Empregado deletado com Sucesso!');
      this.readEmployees();
    })
  }

  isLoggedIn(){
    return window.sessionStorage.length;
  }

}
