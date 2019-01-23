import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FooterRoutingModule } from './footer-routing.module';
import { FooterComponent } from './footer.component';
import {MatToolbarModule } from '@angular/material';


@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,FooterRoutingModule,MatToolbarModule
  ],
    exports: [FooterComponent],

})
export class FooterModule { }
