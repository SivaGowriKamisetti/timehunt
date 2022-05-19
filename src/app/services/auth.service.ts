// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { map } from 'rxjs/operators';
// export interface loginForm {
//   email: string;
//   password: string;
// }
// @Injectable({ providedIn: 'root' })
// export class authService {
//   constructor(private http: HttpClient) {}
//   login(loginForm: loginForm) {
//     return this.http
//       .post<any>('http://localhost:8080/login', {
//         email: loginForm.email,
//         password: loginForm.password,
//       })
//       .pipe(
//         map((token) => {
//           console.log('token');
//           localStorage.setItem('blog-token', token.access_token);
//           return token;
//         })
//       );
//   }
// }

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { AuthRespose } from '../models/auth-response.interface';
import { User } from '../models/user.model';
// import { ErrorHandlingService } from './error-handling.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  user = new Subject<User>();
  constructor(
    private http: HttpClient // private errService: ErrorHandlingService
  ) {}
  signIn(email: any, password: any) {
    return this.http.post<AuthRespose>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB4tIqyTP_AaUbl4F5hdc_2d1DjXe_aI3Q',
      { email: email, password: password, returnSecureToken: true }
    );
    // .pipe(
    //   catchError((err) => {
    //     return this.errService.handleError(err);
    //   }),
    //   tap((res) => {
    //     this.authenticatedUser(
    //       res.email,
    //       res.localId,
    //       res.idToken,
    //       +res.expiresIn
    //     );
    //   })
    // );
  }
  // private authenticatedUser(
  //   email: any,
  //   userId: any,
  //   token: any,
  //   expiresIn: any
  // ) {
  //   const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
  //   const user = new User(email, userId, token, expirationDate);
  //   console.log('User data =', user);
  //   this.user.next(user);
  // }
}
