import { AuthGuard } from './guard/auth.guard';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesCreateComponent } from './employees/employees-create/employees-create.component';
import { HomeComponent } from './home/home.component';
import { UserDeactivateGuard } from './guard/deactivate.guard';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [
  {path: 'register', component: EmployeesCreateComponent, canActivate: [AuthGuard], canDeactivate: [UserDeactivateGuard]},
  {path: 'update/:id', component: EmployeesCreateComponent, canActivate: [AuthGuard], canDeactivate: [UserDeactivateGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: '', component: LoginComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
