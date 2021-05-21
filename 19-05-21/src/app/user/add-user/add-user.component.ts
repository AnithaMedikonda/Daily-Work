import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserserviceService } from 'src/app/service/userservice.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  // @Input() countFromParent: number;
  user: User;
  // @Output() countFromChild = new EventEmitter<number>();
  signupForm: FormGroup;
  constructor(private router: Router, private userService: UserserviceService) { }

  ngOnInit(): void {
    this.signupForm=new FormGroup({
      id: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required), 
      username: new FormControl(null, Validators.required), //Note we can add more than one validator, if we have email we can add validator for the email.
      address: new FormControl(null, Validators.required), 
      //age: new FormControl(null, Validators.required),
      phone: new FormControl(null, Validators.required)
    });
  }

  onSubmit(): void {
    //this.countFromChil.emit(this.countFromParent+5);
    this.userService.createUser(this.signupForm.value).subscribe(data=>{
      console.log("Data added Successfully");      
      this.router.navigate(['user']);  
    });
    console.log(this.signupForm);


  }

}
