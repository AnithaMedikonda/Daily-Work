import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { SingleemployeeComponent } from './singleemployee/singleemployee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { UserComponent } from './user/user.component';
import { AddUserComponent } from './user/add-user/add-user.component';


const routes: Routes = [
  {path: '', component: EmployeeComponent}, 
  {path:'add-user', component: AddUserComponent},
  {path:'add-employee', component: AddEmployeeComponent}, 
  {path:'user', component: UserComponent},
  {path:'employee/:id', component:  SingleemployeeComponent},
  {path:'update-employees', component: UpdateEmployeeComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
