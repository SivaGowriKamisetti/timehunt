import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Dept } from 'src/app/models/dept.model';

import { deptService } from 'src/app/services/dept.service';

@Component({
  selector: 'app-department',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss'],
})
export class DepartmentComponent implements OnInit, OnDestroy {
  isSubmitted: boolean = false;
  deptForm: FormGroup;
  departments: Dept[] = [];
  private deptChangeSub: Subscription = new Subscription();
  subscription: Subscription = new Subscription();
  editMode = false;
  editedDeptIndex: any;
  editedDept: Dept | undefined;
  constructor(private dService: deptService, private formBuilder: FormBuilder, private http: HttpClient) {
    this.deptForm = this.formBuilder.group({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
        Validators.pattern('^[a-zA-Z ]*$')]),
      code: new FormControl('', [Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
        Validators.pattern('^[A-Z ]*$')]),})
  }

  ngOnInit(): void {
    this.departments = this.dService.getDepartments();
    this.deptChangeSub = this.dService.deptChanged.subscribe(
      (departments: Dept[]) => {
        this.departments = departments;
      }
    );
    this.subscription = this.dService.startEditing.subscribe((i: number) => {
      this.editedDeptIndex = i;
      this.editMode = true;
      this.editedDept = this.dService.getDepartment(i);
      this.deptForm.setValue({
        name: this.editedDept.name,
        code: this.editedDept.code,
      });
    });
  }
  onSave(deptData: { name: string; code: string }) {
    /*this.storageService.storeDept();*/
    
    this.isSubmitted = true;
    if (this.editMode) {
      console.log("department add", this.deptForm.value);
      this.http
        .post<any>('https://sailstimehunt-default-rtdb.asia-southeast1.firebasedatabase.app/dept.json', deptData)
        .subscribe(
          (responseData) => {
            
            console.log('Added departments', responseData);
          },)

      this.dService.updateDept(this.editedDeptIndex, this.deptForm.value);
    } 
    else {
      this.dService.addDept(this.deptForm.value);
    }
    this.editMode = false;
    
    //this.deptForm.reset();
  }
  editItem(i: any) {
    this.dService.startEditing.next(i);
  }
  onReset() {
    this.deptForm.reset();
    this.editMode = false;
  }
  onRemove() {
    this.dService.deleteDept(this.editedDeptIndex);
    this.onReset();
  }

 /* onRemove(element: any) {
    this.departments.forEach((value, index) => {
      if (value == element) this.departments.splice(index, 1);
    });
    this.deptForm.reset();
  }*/
  ngOnDestroy(): void {
    this.deptChangeSub.unsubscribe();
    this.subscription.unsubscribe();
  }
}
