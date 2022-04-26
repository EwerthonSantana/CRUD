import { Component, ContentChild, Input, OnInit } from '@angular/core';
import { FormControlName } from '@angular/forms';

@Component({
  selector: 'app-control-error',
  templateUrl: './control-error.component.html',
  styleUrls: ['./control-error.component.css']
})
export class ControlErrorComponent implements OnInit {

  @Input() hasError: boolean;
  @Input() errorMessage: string;
  

  constructor() { }

  ngOnInit(): void {

   
  }


}
