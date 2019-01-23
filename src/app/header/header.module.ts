import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';
import { HeaderComponent } from './header.component';
import {MatButtonModule, MatCheckboxModule,MatToolbarModule } from '@angular/material';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,HeaderRoutingModule,MatButtonModule, MatCheckboxModule ,MatToolbarModule
  ],
  exports: [HeaderComponent],
})
export class HeaderModule { }
