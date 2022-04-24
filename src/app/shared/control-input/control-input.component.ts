import { Component, ContentChild, Input, OnInit } from '@angular/core';
import { FormControlName } from '@angular/forms';

@Component({
  selector: 'app-control-input',
  templateUrl: './control-input.component.html',
  styleUrls: ['./control-input.component.css']
})
export class ControlInputComponent implements OnInit {

  @Input() label: string;
  @Input() errorMessage: string;
  input: any;

  @ContentChild(FormControlName) control: FormControlName;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit() {
    this.input = this.control
  }

  hasSuccess(): boolean {
    return this.input.valid && this.input.touched;
  }

  hasError(): boolean {
    return this.input.invalid && this.input.touched;
  }

}
