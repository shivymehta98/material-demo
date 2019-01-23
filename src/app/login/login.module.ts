import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {    MatToolbarModule,MatSelectModule, MatFormFieldModule, MatInputModule,  MatCardModule, MatButtonModule} from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
LoginRoutingModule,FormsModule, ReactiveFormsModule,MatFormFieldModule,MatInputModule,MatToolbarModule,MatCardModule,MatButtonModule
  ],
  declarations: [LoginComponent ]
})
export class LoginModule { }