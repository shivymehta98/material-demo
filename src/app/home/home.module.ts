import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {  MatAutocompleteModule,   MatFormFieldModule,MatInputModule} from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,FormsModule, ReactiveFormsModule,MatAutocompleteModule,MatFormFieldModule,MatInputModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }