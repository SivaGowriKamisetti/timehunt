// import { HttpErrorResponse } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { throwError } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// export class ErrorHandlingService {
//   constructor() {}
//   handleError(err: HttpErrorResponse) {
//     if (!err.error || !err.error.error) {
//       return throwError(this.errorMsgs['UNKNOWN']);
//       // this.error = this.errMsgs['UNKNOWN'];
//     } else {
//       // this.error = this.errMsgs[err.error.error.message];
//       //   return throwError(this.errorMsgs[err.error.error.message]);
//       console.log('else condition in eror handling service');
//     }
//   }
//   errorMsgs = {
//     UNKNOWN: 'An unknown error is occured',
//     EMAIL_NOT_FOUND: 'Invalid Credentials',
//     INVALID_PASSWORD: 'Incorrect Password',
//   };
// }
