
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { loginData } from '../models/forgetPd.model';
import { AuthenticationService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isSubmitted: boolean = false;
  loginForm: FormGroup;
  //postData: any;
 

  //loginData: loginData = new loginData();
  constructor(
    //private authService: AuthenticationService,
    private router: Router,
  
    private http:HttpClient,
    private formBuilder: FormBuilder
  ) {
    this.loginForm = this.formBuilder.group({
      
        
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(80),
        Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(12)
      ])
    });
  }

  ngOnInit() {
    
  }
  // onSubmit(empData: { email: string; password: string }) {
  //   this.http.get<any>('http://localhost:3000/credentials').subscribe(
  //     (data) => {
  //       console.log('working in users');
  //       this.loginData = data;
  //       console.log('login', data);
  //     },
  //     (error) => {
  //       console.log('error', error);
  //     }
  //   );
  // }
  onSubmit(user:{email:string; password: string}) {
    this.isSubmitted = true;
    if (this.loginForm.valid) {
      console.log("Login User Data::",this.loginForm.value);
      this.http
        .post<any>('https://sailstimehunt-default-rtdb.asia-southeast1.firebasedatabase.app/login.json', user)
        .subscribe(
          (responseData) => {
            this.router.navigate(['admin']);
            console.log('userLogined ', responseData);
          },)
     /* this.postData = this.loginForm.value.userData;

      this.authService
        .signIn(this.postData.email, this.postData.password)
        .subscribe(
          (res) => {
            console.log(res);
            this.router.navigate(['admin']);
          },
          (err) => {
            console.log(err);
            // this.error = err.error.error.message;
            // this.error = err;
          }
        );*/
    }
  }
}


