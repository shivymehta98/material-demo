import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatSelectModule, MatRadioModule, MatFormFieldModule, MatInputModule,  MatCardModule, MatButtonModule, MatToolbarModule} from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
RegisterRoutingModule,FormsModule, ReactiveFormsModule,MatFormFieldModule,MatSelectModule,MatRadioModule,MatInputModule,MatCardModule, MatButtonModule,MatToolbarModule
  ],
  declarations: [RegisterComponent ]
})
export class RegisterModule { }