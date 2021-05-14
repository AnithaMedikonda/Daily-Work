import { Component } from "@angular/core";

@Component({
    selector:'app-employees',
    templateUrl:'./employees.component.html',
    styleUrls:['./employees.component.css']
})
export class Employee{
    employees = {name:'anitha' , age:22}
}