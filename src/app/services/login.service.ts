import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { loginData } from '../models/forgetPd.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}
  login(data: any) {
    // console.log(data, 'service here');
    return this.http.post<any>('http://localhost:8080/login', {
      data,
    });
  }
  /* login(login: loginData): Observable<object> {
    return this.http.post<Object>(`${this.baseUrl}`, login);
  }*/
}
