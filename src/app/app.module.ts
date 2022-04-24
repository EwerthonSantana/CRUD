import { AuthGuard } from './guard/auth.guard';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { EmployeesCreateComponent } from './employees/employees-create/employees-create.component';
import { EmployeesService } from './services/employees.service';
import { LoginComponent } from './login/login.component';
import { NgxMaskModule } from 'ngx-mask';
import { ControlInputComponent } from './shared/control-input/control-input.component';
import { UserDeactivateGuard } from './guard/deactivate.guard';
import { NotFoundComponent } from './shared/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    EmployeesCreateComponent,
    LoginComponent,
    ControlInputComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot({
      dropSpecialCharacters: false // ao salvar vai manter a máscara no db.json
    })
  ],
  providers: [EmployeesService, AuthGuard, UserDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
