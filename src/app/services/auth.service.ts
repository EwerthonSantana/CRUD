import { Router } from '@angular/router';
import { UserModel } from '../Models/user.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userMocked: UserModel;

  constructor(private router: Router) { }

  login(user: UserModel) {
    if (user.email === 'ewerthon@gmail.com' &&
      user.password === '123') {
        this.userMocked = user;
      window.sessionStorage.setItem('user', user.email);
      this.router.navigate(['/'])
    } else {
      alert('Email ou senha inválidos!')
    }
  }

  Logoff() {
    window.sessionStorage.clear();
    this.router.navigate(['/login']);
  }

}
