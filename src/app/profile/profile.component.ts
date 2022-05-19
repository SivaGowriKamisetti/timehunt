import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Event } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  fileName = '';

  editForm = new FormGroup({
    fn: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(25),
    ]),
    ln: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(25),
    ]),
    pn: new FormControl('', [Validators.required, Validators.maxLength(10)]),

    email: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z0-9]+@+[a-zA-Z]+.+[a-zA-Z]'),
    ]),

    oldpass: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(15),
    ]),
    newpass: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(15),
    ]),
    repass: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(15),
    ]),
  });

  editUser() {
    console.warn(this.editForm.value);
  }
  onFileSelected(event: { target: { files: File[] } }) {
    const file: File = event.target.files[0];
    if (file) {
      this.fileName = file.name;
      const formData = new FormData();
      formData.append('thumbnail', file);
      const upload$ = this.http.post('/api/thumnail-upload', formData);
      upload$.subscribe();
    }
  }

  get fn() {
    return this.editForm.get('fn');
  }
  get ln() {
    return this.editForm.get('ln');
  }
  get pn() {
    return this.editForm.get('pn');
  }

  get email() {
    return this.editForm.get('email');
  }

  get oldpass() {
    return this.editForm.get('oldpass');
  }
  get newpass() {
    return this.editForm.get('newpass');
  }
  get repass() {
    return this.editForm.get('repass');
  }

  firstName: String | undefined;
  lastName: String | undefined;
  phoneNumber: Number | undefined;
  Address: String | undefined;
  emailAddress: String | undefined;
  education: String | undefined;
  experience: String | undefined;
  oldpassword: String | undefined;
  newpassword: String | undefined;
  resetpassword: String | undefined;
  constructor(private http: HttpClient) {}
  postData() {
    let url = 'http://httpbin.org/post';
    this.http
      .post(url, {
        fn: this.firstName,
        ln: this.lastName,
        pn: this.phoneNumber,
        add: this.Address,
        ed: this.experience,
        ex: this.education,
        eamil: this.emailAddress,
        oldpass: this.oldpassword,
        newpass: this.newpassword,
        repass: this.resetpassword,
      })

      .toPromise()
      .then((data: any) => {
        console.log(data);
      });
  }

  ngOnInit(): void {}
}
