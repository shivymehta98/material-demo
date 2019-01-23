import { Component, OnInit } from '@angular/core';

import {FormControl} from '@angular/forms';
import { Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];

  constructor(private meta: Meta) { 
        this.meta.addTag({ name: 'description', content: 'A login Site with Material' });
          this.meta.addTag({ name: 'keywords', content: 'Login, Registration' });
              this.meta.addTag({ name: 'viewport', content: 'width=device-width, initial-scale=1.0'});
  }

  ngOnInit() {
  }

}
