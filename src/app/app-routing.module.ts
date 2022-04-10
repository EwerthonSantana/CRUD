import { AuthGuard } from './guard/auth.guard';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesCreateComponent } from './employees/employees-create/employees-create.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'register', component: EmployeesCreateComponent, canActivate: [AuthGuard]},
  {path: 'update/:id', component: EmployeesCreateComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
