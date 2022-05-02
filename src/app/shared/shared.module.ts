import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlErrorComponent } from './control-error/control-error.component';
import { ControlInputComponent } from './control-input/control-input.component';
import { PhonePipe } from './phone-pipe/phone.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    ControlErrorComponent,
    ControlInputComponent,
    PhonePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  exports: [
    ControlErrorComponent,
    ControlInputComponent,
    PhonePipe
  ]
})
export class SharedModule { }
