import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ProjectDetailComponent } from './admin/projects/project-detail/project-detail.component';
import { ClientsComponent } from './admin/clients/clients.component';

import { DepartmentComponent } from 'src/app/admin/departments/departments.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TimesheetComponent } from 'src/app/admin/timesheet/timesheet.component';

import { UsersComponent } from 'src/app/admin/users/users.component';
import { ProjectsComponent } from './admin/projects/projects.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './login/reset-password/reset-password.component';
import { ProfileComponent } from './profile/profile.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { EmployeeComponent } from './admin/employee/employee.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'admin' },
  { path: 'admin', component: AdminComponent },

  {
    path: 'projectsPage/:id',
    component: ProjectDetailComponent,
  },
  { path: 'login', component: LoginComponent },
  { path: 'forgotpassword', component: ForgotPasswordComponent },
  { path: 'resetpassword', component: ResetPasswordComponent },
  { path: 'users', component: UsersComponent },
  { path: 'department', component: DepartmentComponent },
  { path: 'client', component: ClientsComponent },
  { path: 'timesheet', component: TimesheetComponent },
  { path: 'project', component: ProjectsComponent },
  { path: 'project-detail', component: ProjectDetailComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'userDashboard', component: UserDashboardComponent },
  {path: 'employee', component:EmployeeComponent},
  { path: '**', pathMatch: 'full', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
