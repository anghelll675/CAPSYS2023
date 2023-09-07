import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { IMenu } from '../models/menu-model';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})

export class AuthService {
  jwtHelper = new JwtHelperService();
  constructor(
    private router: Router
  ) {
  }

  DecodeToken() {
    console.log(this.jwtHelper.decodeToken<any>(localStorage.getItem(environment.LOCALSTORAGENAME)));
    return this.jwtHelper.decodeToken<any>(localStorage.getItem(environment.LOCALSTORAGENAME));
  }

  public LogOut() {
    localStorage.removeItem(environment.LOCALSTORAGENAME);
    this.router.navigate(['/login']);
  }

  public isTokenExpired(): boolean {
    try {
      const token = localStorage.getItem(environment.LOCALSTORAGENAME);
      const isTokenExpired = this.jwtHelper.isTokenExpired(token);
      if (isTokenExpired === true) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      return true;
    }

  }
}
