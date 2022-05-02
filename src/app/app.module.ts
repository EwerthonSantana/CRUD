import { AuthGuard } from './guard/auth.guard';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { SharedModule } from './shared/shared.module';
import { NgxMaskModule } from 'ngx-mask';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees/list-employees.component';
import { HeaderComponent } from './templates/header/header.component';
import { EmployeesFormComponent } from './employees/employees-form/employees-form.component';
import { EmployeesService } from './services/employees.service';
import { LoginComponent } from './authentication/login/login.component';
import { UserDeactivateGuard } from './guard/deactivate.guard';
import { HomeComponent } from './employees/home/home.component';
import { AuthenticationComponent } from './authentication/authentication/authentication.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component';
import { ControlErrorService } from './services/control-error.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmployeesFormComponent,
    LoginComponent,
    ListEmployeesComponent,
    HomeComponent,
    AuthenticationComponent,
    NotFoundComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot({

    })
  ],
  providers: [EmployeesService, AuthGuard, UserDeactivateGuard, ControlErrorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
