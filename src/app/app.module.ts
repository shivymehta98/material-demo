import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';//disable animations

import {FormsModule, ReactiveFormsModule,} from '@angular/forms';
import { HeaderModule } from './header/header.module';
import { HeaderRoutingModule } from './header/header-routing.module';
import { FooterRoutingModule } from './footer/footer-routing.module';

import { FooterModule } from './footer/footer.module';
import{SidenavModule} from './sidenav/sidenav.module';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports:[
 CommonModule,
NgtUniversalModule,
 
 TransferHttpCacheModule,
HttpClientModule,
 
    
    AppRoutingModule,BrowserAnimationsModule,NoopAnimationsModule,FormsModule ,
    ReactiveFormsModule,HeaderModule,FooterModule,HeaderRoutingModule,FooterRoutingModule,SidenavModule
  ],
  providers: [],
})
export class AppModule { }
