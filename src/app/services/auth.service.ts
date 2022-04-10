import { Router } from '@angular/router';
import { UserModel } from './../login/user.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public loggedIn: boolean = false

  constructor(private router: Router) { }

  doLogin(user: UserModel) {
    if (user.email === 'ewerthon@gmail.com' &&
      user.password === '123') {
      this.loggedIn = true;
      this.router.navigate(['/home'])
    } else {
      this.loggedIn = false

    }
  }


  userAuth(){
    return this.loggedIn
  }

}
