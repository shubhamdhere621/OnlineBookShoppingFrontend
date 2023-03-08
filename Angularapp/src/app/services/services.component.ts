import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

import { User, UserType } from '../models/models';



@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
@Injectable({
  providedIn: 'root',
})
export class ServicesComponent {
  baseUrl = 'https://localhost:7038/api/Library/';
  constructor(private http: HttpClient, private jwt: JwtHelperService) {}

  createAccount(user: User) {
    return this.http.post(this.baseUrl + 'CreateAccount', user, {
      responseType: 'text',
    });
  }

  login(loginInfo: any) {
    let params = new HttpParams()
      .append('email', loginInfo.email)
      .append('password', loginInfo.password);
    return this.http.get(this.baseUrl + 'Login', {
      params: params,
      responseType: 'text',
    });
  }

  saveToken(token: string) {
    localStorage.setItem('access_token', token);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('access_token');
  }

  deleteToken() {
    localStorage.removeItem('access_token');
    location.reload();
  }

  getTokenUserInfo(): User | null {
    if (!this.isLoggedIn()) return null;
    let token = this.jwt.decodeToken();
    let user: User = {
      id: token.id,
      firstName: token.firstName,
      lastName: token.lastName,
      email: token.email,
      password: '',

      userType: token.userType === 'USER' ? UserType.USER : UserType.ADMIN,
    
     
    };
    return user;
  }

}
