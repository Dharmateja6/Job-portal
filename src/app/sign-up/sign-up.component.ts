import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { VerifyService } from '../verify.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  
  userForm1!:FormGroup;

  constructor(private  verfityService:VerifyService,private fb:FormBuilder,private router:Router  ) { }

  ngOnInit(): void {
    this.userForm1 =this.fb.group({
      FirstName:[''],
      LastName:[''],
      username:[''],
      email:[''],
      password:['']
    });
   
    
  }
  OnSignUp(){
    this.verfityService.signup(this.userForm1.value).subscribe({
       next:(res:any)=>
      {alert(res.message)
         this.userForm1.reset();
         this.router.navigate(['login']);
        },
        error:(err:any)=>{
          alert(err?.error.message)
        }
      })
    }

}
