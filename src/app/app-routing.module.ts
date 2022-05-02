import { AuthGuard } from './guard/auth.guard';
import { LoginComponent } from './authentication/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesFormComponent } from './employees/employees-form/employees-form.component';
import { ListEmployeesComponent } from './employees/list-employees/list-employees.component';
import { UserDeactivateGuard } from './guard/deactivate.guard';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthenticationComponent } from './authentication/authentication/authentication.component';
import { HomeComponent } from './employees/home/home.component';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: ListEmployeesComponent },
      {
        path: 'registerEmployess', component: EmployeesFormComponent, canDeactivate: [UserDeactivateGuard]

      },
      {
        path: 'update/:id', component: EmployeesFormComponent, canDeactivate: [UserDeactivateGuard]
      }

    ], canActivate: [AuthGuard]
  },
  {
    path: '',
    component: AuthenticationComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent }
    ]
  },
  { path: '**', component: NotFoundComponent }]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
