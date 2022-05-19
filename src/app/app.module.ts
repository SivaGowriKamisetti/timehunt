import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from 'src/app/admin/users/users.component';

import { deptService } from './services/dept.service';
import { ClientsComponent } from 'src/app/admin/clients/clients.component';
import { TimesheetComponent } from 'src/app/admin/timesheet/timesheet.component';

import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AdminComponent } from './admin/admin.component';
import { DepartmentComponent } from './admin/departments/departments.component';
import { ProjectsComponent } from './admin/projects/projects.component';
import { ProjectDetailComponent } from './admin/projects/project-detail/project-detail.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './login/reset-password/reset-password.component';
import { projectSearch } from './admin/projects/project-detail/projectSearch.pipe';
import { ProfileComponent } from './profile/profile.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

import {
  ScheduleModule,
  DayService,
  WeekService,
  WorkWeekService,
  MonthService,
  AgendaService,
  MonthAgendaService,
 
} from '@syncfusion/ej2-angular-schedule';
import { DateTimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { AuthenticationService } from './services/auth.service';
import { EmployeeComponent } from './admin/employee/employee.component';
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ProjectsComponent,
    AdminHeaderComponent,
    UsersComponent,
    DepartmentComponent,
    ClientsComponent,
    TimesheetComponent,

    PagenotfoundComponent,
    ProjectDetailComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    projectSearch,
    ProfileComponent,
    UserDashboardComponent,
    EmployeeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,

    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    ScheduleModule,
    AppRoutingModule,
    DateTimePickerModule,
    FontAwesomeModule,
  ],
  providers: [
    deptService,
    DayService,
    WeekService,
    WorkWeekService,
    AgendaService,
    MonthService,
    MonthAgendaService,
    AuthenticationService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
