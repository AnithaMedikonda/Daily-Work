import { Component } from "@angular/core";
//import {Employees} from 'emplyee.mock';
import { EMPLOYEES } from "../employee.mock";
@Component({
    selector:'app-employees',
    templateUrl:'./employees.component.html',
    styleUrls:['./employees.component.css']
})
export class Employee{
  employees = {name:'anitha' , age:22}
  emp=EMPLOYEES;
}
//export class EmployeeComponent{
  //  employees = EMPLOYEES;
//}