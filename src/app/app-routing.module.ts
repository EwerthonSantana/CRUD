import { AuthGuard } from './guard/auth.guard';
import { LoginComponent } from './Authentication/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesFormComponent } from './employees/employees-form/employees-form.component';
import { ListEmployeesComponent } from './employees/ListEmployees/ListEmployees.component';
import { UserDeactivateGuard } from './guard/deactivate.guard';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { AuthenticationComponent } from './Authentication/authentication/authentication.component';
import { HomeComponent } from './employees/home/home.component';
import { AuthService } from './services/auth.service';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: ListEmployeesComponent },
      {
        path: 'registerEmployess', component: EmployeesFormComponent

      },
      {
        path: 'update/:id', component: EmployeesFormComponent
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
