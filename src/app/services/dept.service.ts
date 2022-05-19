import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Dept } from '../models/dept.model';

@Injectable({ providedIn: 'root' })
export class deptService {
  deptChanged = new Subject<Dept[]>();
  startEditing = new Subject<number>();
  constructor(private http: HttpClient) {}

  departments: Dept[] = [
    new Dept('Developer', 'DEV'),
    new Dept('FrontEnd', 'FE'),
    new Dept('BackEnd', 'BE'),
    new Dept('FullStack', 'FS'),
  ];
  getDepartments() {
    return this.departments.slice();
  }
  getDepartment(i: number) {
    return this.departments[i];
  }
  addDept(department: Dept) {
    this.departments.push(department);
    this.deptChanged.next(this.departments.slice());
  }
  updateDept(i: number, newDept: Dept) {
    this.departments[i] = newDept;
    this.deptChanged.next(this.departments.slice());
  }
  deleteDept(i: number) {
    this.departments.splice(i, 1);
    this.deptChanged.next(this.departments.slice());
  }
}
