import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { forgotPd } from 'src/app/models/forgetPd.model';
import { ForgetPdService } from 'src/app/services/forget-pd.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  
  signupForm: FormGroup = new FormGroup({
    userData: new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email,Validators.minLength(5),
        Validators.maxLength(80),
        Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")]),
    }),
  });
  falock = faLock;
  famail = faEnvelope;
  email: string | undefined;
  response: boolean | undefined;
  submitted: boolean = false;

  forgetPdModel: forgotPd = new forgotPd();
  constructor(private forgetPd: ForgetPdService) {}
  ngOnInit() {}
  onSubmit() {
    // console.log(this.signupForm);
    // console.log(this.signupForm.value.userData.email);
    this.forgetPdModel.email = this.signupForm.value.userData.email;
    this.submitted = true;
    this.forgetPd.postEmail(this.forgetPdModel).subscribe(
      (res) => {
        // console.log(res);
        this.response = true;
        console.log(res);
        // alert('mail sent successfully');
      },
      (err) => {
        this.response = false;

        // alert('something went wrong');
      }
    );
  }
  successDisplay() {
    this.submitted = false;
  }
}
