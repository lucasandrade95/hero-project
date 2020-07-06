
import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  redirectUrl: string;
  baseUrl:string = "http://localhost/hero-project/php";
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();

  constructor(private httpClient : HttpClient) { }

  public userlogin(username, password) {
    return this.httpClient.post<any>(this.baseUrl + '/login.php', { username, password })
      .pipe(map(Users => {
        this.setToken(Users[0].name);
        this.getLoggedInName.emit(true);
        return Users;
      }));
  }

  public userregistration(name,email,pwd) {
    return this.httpClient.post<any>(this.baseUrl + '/register.php', { name, email, pwd })
      .pipe(map(Users => {
        return Users;
      }));
  }

  public cadasterUser(name, date, address, message) {
    return this.httpClient.post<any>(this.baseUrl + '/cadaster.php', { name, date, address, message })
      .pipe(map(Users => {
        return Users;
      }));
  }

  public getCadaster() {
    return this.httpClient.get<any>(this.baseUrl + '/get-cadaster.php')
      .pipe(map(Users => {
        return Users;
      }));
  }

//token
  setToken(token: string) {
    localStorage.setItem('token', token);
  }
  getToken() {
    return localStorage.getItem('token');
  }
  deleteToken() {
    localStorage.removeItem('token');
  }
  isLoggedIn() {
    const usertoken = this.getToken();
    if (usertoken != null) {
      return true
    }
    return false;
  }
}
