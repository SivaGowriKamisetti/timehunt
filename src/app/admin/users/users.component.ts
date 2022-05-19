import { HttpClient } from '@angular/common/http';
import { Component,  OnDestroy,  OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray} from '@angular/forms';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/models/users.model';

import { faBars, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { usersService } from 'src/app/services/users.services';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit, OnDestroy {
  userId :any = ''
 
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  employees: User[]=[]
  employeeForm: FormGroup;
  editMode = false;
  isSubmitted: boolean = false;
 
  navToggle = faBars;
  dropdownToggle = faCaretDown;
  private empChangeSub: Subscription = new Subscription();
  subscription: Subscription = new Subscription();
 
  editedEmpIndex: any;
  editedEmp: User | undefined;
  constructor(
    private userService: usersService,
   
    private http: HttpClient,
    private formBuilder: FormBuilder
  ) {
    this.employeeForm = this.formBuilder.group({
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
        Validators.pattern('^[a-zA-Z ]*$')]),
      lastName: new FormControl('', [Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
        Validators.pattern('^[a-zA-Z ]*$')]),
       email: new FormControl('', [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(80),
          Validators.email,
         Validators.pattern(this.emailPattern),
          // Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
        ]),
       // email: new FormControl('', Validators.compose([Validators.required, Validators.pattern(this.emailPattern)])),
        department: new FormControl(null,  [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(30),]),
        phone : new FormArray([]),})
  }


  ngOnInit(): void {
    
   this.http
        .get<User[]>('https://sailstimehunt-default-rtdb.asia-southeast1.firebasedatabase.app/user.json')
        .pipe(
          map(
            (data)=>{
              const parray=[]
              for (const key in data){
                // console.log("get",key, data[key])
                if(data.hasOwnProperty(key)){
                  parray.push({
                    id: key,
                    ...data[key]
                  })
                }
              }
              return parray
            }
          )
        )
        .subscribe(
          (responseData) => {
            
            console.log('getting User', responseData);
            this.userService.setEmp(responseData);
            this.employees = responseData;
            console.log("employess", this.employees)
          },)

  // this.employees = this.userService.getEmployees();
  
  
   this.empChangeSub = this.userService.empChanged.subscribe(
      (employees: User[]) => {
        this.employees = employees;
      }
    );
    
    this.subscription = this.userService.startEditing.subscribe((i: number) => {
      this.editedEmpIndex = i;
      this.editMode = true;
      // this.editedEmp = 
      this.employees.map((eachItem:any)=>{
        if(eachItem.id===i){
          this.userId = eachItem.id
          this.employeeForm.setValue({
            firstName: eachItem.firstName,
            lastName: eachItem.lastName,
            email: eachItem.email,
            department: eachItem.department,
            phone:eachItem.phone
            
          });
        }
      })
      
    });

   
  }
  onSave(empData: {
    firstName: string;
    lastName: string;
    email: string;
    department: string;
    phone:number;
  }) {
   this.isSubmitted=true;
    
   if(this.editMode) {
      console.log("id", this.userId)
       this.http
          .put<any>('https://sailstimehunt-default-rtdb.asia-southeast1.firebasedatabase.app/user/'+this.userId+'.json', empData)
          .subscribe(
            (responseData) => {
              
              console.log('edited User', responseData);
            },)
  
     this.userService.updateEmp(this.editedEmpIndex, this.employeeForm.value);
      } 
      else{
        
        this.http
        .post<any>('https://sailstimehunt-default-rtdb.asia-southeast1.firebasedatabase.app/user.json', empData)
        .subscribe(
          (responseData) => {
            
            console.log('added User', responseData);
          },)
        this.userService.addEmp(this.employeeForm.value);
      }
      
    
    this.editMode=false;
    
    this.employeeForm.reset();
  }
  onAddphone(){
    const control = new FormControl(null,[Validators.required, Validators.minLength(6),
      Validators.maxLength(12),
      ]);
    (<FormArray>this.employeeForm.get('phone')).push(control);
  }
  get phoneControls(){
    return (<FormArray>this.employeeForm.get('phone')).controls;
  }
  removeItem(i:any) {
    this.phoneControls.pop();
    
 }
  editItem(i: any) {
    // console.log("editItem", i)
    this.userService.startEditing.next(i);
    
  }
  onUserAdded(e:User){
    this.employees.push()
  }

  onReset() {
    this.employeeForm.reset();
    this.editMode = false;
    
  }

  onRemove(i:any) {
    this.http
        .delete<any>('https://sailstimehunt-default-rtdb.asia-southeast1.firebasedatabase.app/user/'+i+".json")
        .subscribe(
          (responseData) => {
            
            console.log('delete User', responseData);
          },)
  // this.userService.deleteEmp(i);
  this.onReset();
   
  }
  ngOnDestroy(): void {
    this.empChangeSub.unsubscribe();
   this.subscription.unsubscribe();
  }
}
