import { AuthService } from '../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  name: any = "Ewerthon";

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    // this.name = this.authService.userMocked.name;
  }

  LoggedIn() {
    return window.sessionStorage.length;
  }

  doLogoff() {
    return this.authService.Logoff();
  }

}
