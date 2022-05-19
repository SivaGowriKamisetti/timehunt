import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/users.model';
import { usersService } from 'src/app/services/users.services';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.scss'],
})
export class TimesheetComponent implements OnInit {
  constructor(private userService: usersService, private http: HttpClient) {}
  userslist: User[] = this.userService.employees;
  employees: any;
  ngOnInit(): void {
    this.http.get<any>('http://localhost:8080/api/v1/users').subscribe(
      (data) => {
        console.log('working in users');
        this.employees = data;
        console.log('data', this.employees);
      },
      (error) => {
        console.log('error');
      }
    );
  }
}
