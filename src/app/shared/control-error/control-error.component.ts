import { Component, ContentChild, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControlName } from '@angular/forms';
import { ControlErrorService } from 'src/app/services/control-error.service';

@Component({
  selector: 'app-control-error',
  templateUrl: './control-error.component.html',
  styleUrls: ['./control-error.component.css']
})
export class ControlErrorComponent implements OnInit {

  @Input() control!: AbstractControl;
  @Input() label!: string;

  constructor(private error: ControlErrorService) { }

  ngOnInit() {}

  get errorMessage() {
    for (const propertyName in this.control?.errors) {
      if (this.control?.errors.hasOwnProperty(propertyName)) {
        return this.error.getErrorMsg(this.label, propertyName, this.control.errors[propertyName]);
      }
    }

    return null;
  }


}
