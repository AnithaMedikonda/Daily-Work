import { Component, OnInit } from '@angular/core';
// import { EMPLOYEES } from '../employee.mock';
import {Employee} from '../model/employee';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit  {
employees: Employee[];
  
  constructor(private employeeService:EmployeeService) {}
    ngOnInit(): void {
      this.employees=this.employeeService.getAllEmployees();
    }
  

  emp={name:"Anitha", company:"cts", address:"Ongole"}

}
