import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { UserserviceService } from '../service/userservice.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users:User[];
  
  constructor(private userService:UserserviceService, private router:Router) {}
    ngOnInit(): void {

      this.userService.getAllUsers().subscribe(data=> {
        this.users=data;

      });
    }
      updateEmployee(user: User): void{
        localStorage.removeItem('id');
        localStorage.setItem('id', user.id.toString());
        this.router.navigate(['update-users']);
      }
      deleteEmployee(user: User): void {
        this.userService.deleteUserById(user.id).subscribe();
        this.users=this.users.filter(e=>e !==user);
      
    }

}
