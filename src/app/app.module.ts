import { AuthGuard } from './guard/auth.guard';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/ListEmployees/ListEmployees.component';
import { HeaderComponent } from './Templates/header/header.component';
import { EmployeesFormComponent } from './employees/employees-form/employees-form.component';
import { EmployeesService } from './services/employees.service';
import { LoginComponent } from './Authentication/login/login.component';
import { NgxMaskModule } from 'ngx-mask';
import { ControlInputComponent } from './shared/control-input/control-input.component';
import { UserDeactivateGuard } from './guard/deactivate.guard';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { ControlErrorComponent } from './shared/control-error/control-error.component';
import { HomeComponent } from './employees/home/home.component';
import { AuthenticationComponent } from './Authentication/authentication/authentication.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmployeesFormComponent,
    LoginComponent,
    ControlInputComponent,
    NotFoundComponent,
    ControlErrorComponent,
    ListEmployeesComponent,
    HomeComponent,
    AuthenticationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot({
     
    })
  ],
  providers: [EmployeesService, AuthGuard, UserDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
