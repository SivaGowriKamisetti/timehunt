import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../models/users.model';

@Injectable({ providedIn: 'root' })
export class usersService {
  empChanged = new Subject<User[]>();
 startEditing = new Subject<number>();
 
  constructor(private http: HttpClient) {}
  public employees: User[] = [
    
  ];
  // httpOptions = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  // };
  setEmp(employees:User[]){
    this.employees=employees;
    this.empChanged.next(this.employees.slice())
  }
  getEmployees() {
    return this.employees.slice();
  }
  getEmployee(i: number) {
    return this.employees[i];
  }
  addEmp(employee: User) {
    this.employees.push(employee);
    this.empChanged.next(this.employees.slice());
    
  }
  updateEmp(i: number, newDept: User) {
    this.employees[i] = newDept;
    // console.log('check', this.startEditing);

    this.empChanged.next(this.employees.slice());
    console.log("edit",i,newDept)
  }
  deleteEmp(i: number) {
    this.employees.splice(i, 1);
    this.empChanged.next(this.employees.slice());
    
  }
  
  // getEmpData() {
  //   this.http.get<any>('http://localhost:8080/api/v1/users').subscribe(
  //     (data) => {
  //       console.log('working in users');
  //       this.employees = data;
  //       console.log('data', this.employees);
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // }*/
}
