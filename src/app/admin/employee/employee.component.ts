import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Validators, FormControl, FormArray, FormGroup, FormBuilder } from '@angular/forms';
//import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
declare var window:any;
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls:['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  title = 'first';
  registrationForm: FormGroup;
  isSubmitted: boolean = false;
  closeResult: string | undefined;
formModal:any;
  
 /* openBackDropCustomClass(content) {
    this.modalService.open(content, {backdropClass: 'light-blue-backdrop'});
  }

  openWindowCustomClass(content) {
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }

  openSm(content) {
    this.modalService.open(content, { size: 'sm' });
  }

  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  openXl(content) {
    this.modalService.open(content, { size: 'xl' });
  }

  openFullscreen(content) {
    this.modalService.open(content, { fullscreen: true });
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

  openScrollableContent(longContent) {
    this.modalService.open(longContent, { scrollable: true });
  }

  openModalDialogCustomClass(content) {
    this.modalService.open(content, { modalDialogClass: 'dark-modal' });
  
}*/

  constructor(private formBuilder: FormBuilder) {
    this.registrationForm = this.formBuilder.group({
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
        Validators.pattern('^[a-zA-Z ]*$')]),
      lastName: new FormControl('', [Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
        Validators.pattern('^[a-zA-Z ]*$')]),
      addressGroup: this.formBuilder.group({
        address: new FormControl('', [
          Validators.required,
          Validators.maxLength(255)
        ]),
        city: new FormControl('', [Validators.minLength(3),
          Validators.maxLength(30),
          Validators.pattern('^[a-zA-Z ]*$')]),
        state: new FormControl('', [Validators.minLength(3),
          Validators.maxLength(30),
          Validators.pattern('^[a-zA-Z ]*$')]),
        pincode: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(8),
          Validators.pattern('^[a-zA-Z0-9]*$')])
      }),
      hobbies : new FormArray([]),
      phoneNumber: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(12),
        Validators.pattern('^[0-9]*$')]),
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

 




  onRegistrationFormSubmit() {
    this.isSubmitted = true;
    if(this.registrationForm.valid){
      console.log("User Registration Form Submit", this.registrationForm.value);
    }

  }
  onAddHobby(){
    const control = new FormControl(null,[Validators.required]);
    (<FormArray>this.registrationForm.get('hobbies')).push(control);
  }
  get hobbyControls(){
    return (<FormArray>this.registrationForm.get('hobbies')).controls;
  }

  ngOnInit(): void {
    this.formModal=new window.bootstrap.Modal(
      document.getElementById("exampleModal")
    )
  }
openModal(){
  this.formModal.show();
}
doSomething(){
  this.formModal.hide();
}
}
