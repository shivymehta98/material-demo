import { LOCAL_STORAGE } from '@ng-toolkit/universal';
import { Component, OnInit , Inject} from '@angular/core';


import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   retrievedData: any = [];
 loginForm: FormGroup;
  constructor(@Inject(LOCAL_STORAGE) private localStorage: any, private router : Router) { }

  ngOnInit() {
      this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, Validators.required)
    });   
    }

  login() {
    this.retrievedData = JSON.parse(this.localStorage.getItem("userdata"));
    console.log('email', this.retrievedData.email);
    console.log('password', this.retrievedData.pass);

    if (this.loginForm.controls.email.value === this.retrievedData.email && this.loginForm.controls.password.value == this.retrievedData.pass) {
     
      alert('You are logged in.');
    } else {
      alert('ERROR.');
    }
    if (this.loginForm.valid) {
      this.router.navigate(['/home']);
    } else {
      alert('Invalid Email or password.');
    }
    console.log(JSON.stringify(this.loginForm.value));
  }
  


}
