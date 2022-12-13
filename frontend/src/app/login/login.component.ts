import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';
import jwt_decode from 'jwt-decode';
import { NgToastService } from 'ng-angular-popup';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  decoded: any;

  loginForm = new FormGroup({

    email: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required])
   });
 

  constructor(private authService: AuthService, private userService: UserService ,private toastservice: NgToastService, private router: Router) { }

  ngOnInit(): void {
  }
  get f(){
    return this.loginForm.controls;
   }

   login(){
  
    this.authService.login();
    if(this.loginForm.controls.email && this.loginForm.controls.password){
  
    console.log(this.loginForm.value);
    this.userService.login(this.loginForm.value).subscribe((data:any)=>{
      this.decoded = jwt_decode(data.token)
      console.log('Login successsfull');
      this.toastservice.success({detail:'Success', summary:'Successfully login!', sticky:false,position:'tr', duration:6000})
  
      this.router.navigate(['/blog']);
      sessionStorage.setItem('logginToken', data.token)
      sessionStorage.setItem('loggedEmail', this.decoded.email);
  
    },(error)=>{
      this.toastservice.warning({detail: 'Warning', summary: 'Email or Password is invalid', sticky:false,position:'tr', duration:6000})
    }
    )
   }
  }

}
