import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-control-input',
  templateUrl: './control-input.component.html',
  styleUrls: ['./control-input.component.css']
})
export class ControlInputComponent implements OnInit {

  @Input() label: string;
  @Input() control: any;

  constructor() { }

  ngOnInit(): void {
  }


}
