import { LOCAL_STORAGE } from '@ng-toolkit/universal';
import { Component, OnInit , Inject} from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

export interface Courses {
  value: string;
  viewValue: string;
}

export interface courseGroup {
  // disabled?: boolean;
  name: string;
  field: Courses[];
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 courseControl = new FormControl();
  courseGroups: courseGroup[] = [
    {
      name: 'Engineering',
      field: [
        {value: 'csc', viewValue: 'Computer Science'},
        {value: 'me', viewValue: 'Mechanical Engineering'},
        {value: 'ce', viewValue: 'Chemical Engineering'}
      ]
    },
    {
      name: 'H.S.C',
      field: [
        {value: 'Sci', viewValue: 'Science'},
        {value: 'comm', viewValue: 'Commerce'},
        {value: 'arts', viewValue: 'Humanity'}
      ]
    },
    {
      name: 'Science',    
      field: [
        {value: 'maths', viewValue: 'Mahs'},
        {value: 'bio', viewValue: 'Biology'},
   
      ]
    },
    {
      name: 'Medical',
      field: [
        {value: 'mbbs', viewValue: 'MBBS'},
        {value: 'md', viewValue: 'M.D'},
      ]
    }
  ];

    registerForm: FormGroup = new FormGroup({
    fname: new FormControl('s', Validators.required),
    lname: new FormControl('m', Validators.required),
    email: new FormControl('a@a.com', [Validators.email, Validators.required]),
    username: new FormControl('1', Validators.required),
    password: new FormControl('1', Validators.required),
    cpass: new FormControl('1', Validators.required),
   
  })
   userdata: any = [];
  constructor(@Inject(LOCAL_STORAGE) private localStorage: any, private router : Router) { }

  ngOnInit() {
  }

 register()
   {
      if (!this.registerForm.valid || (this.registerForm.controls.password.value != this.registerForm.controls.cpass.value))
       {console.log('Invalid Form'); return;
      }
      this.userdata = {
       email: this.registerForm.controls.email.value,
       fname: this.registerForm.controls.fname.value,
       lname: this.registerForm.controls.lname.value,
       username: this.registerForm.controls.username.value,
       pass: this.registerForm.controls.password.value,
       cpass: this.registerForm.controls.cpass.value
    };
    console.log(this.userdata);
    let inputEmail = this.localStorage.setItem("userdata", JSON.stringify(this.userdata));
    this.localStorage.setItem("userRegInfo", 'yes');
    this.router.navigate(['/login']);
    console.log(JSON.stringify(this.registerForm.value));
   }
}
