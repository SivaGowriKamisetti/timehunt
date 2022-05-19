import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { deptService } from './dept.service';
@Injectable({ providedIn: 'root' })
export class DeptStorageService {
  constructor(private http: HttpClient, private deptService: deptService) {}
  storeDept() {
    const departments = this.deptService.getDepartments();
    this.http
      .put(
        'https://sails-5c3a3-default-rtdb.firebaseio.com/dept.json',
        departments
      )
      .subscribe((response) => {
        console.log(response);
      });
    /*this.http
      .post(
        'https://sails-5c3a3-default-rtdb.firebaseio.com/dept.json',
        departments
      )
      .subscribe((Response) => {
        console.log(Response);
      });*/
  }
}
