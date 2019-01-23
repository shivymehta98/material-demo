import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav.component';

import { SidenavRoutingModule } from './sidenav-routing.module';
import {MatToolbarModule,MatSidenavModule ,MatSlideToggleModule} from '@angular/material';


@NgModule({
  declarations: [SidenavComponent],
  imports: [
    CommonModule,
    SidenavRoutingModule,MatToolbarModule,MatSidenavModule ,MatSlideToggleModule
  ],
    exports: [SidenavComponent],
})
export class SidenavModule { }
