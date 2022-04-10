import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { EmployeesCreateComponent } from './employees/employees-create/employees-create.component';
import { EmployeesService } from './services/employees.service';
import { LoginComponent } from './login/login.component';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    EmployeesCreateComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot({
      dropSpecialCharacters: false // ao salvar vai manter a máscara
    })
  ],
  providers: [EmployeesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
