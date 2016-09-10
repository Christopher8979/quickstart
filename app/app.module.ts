import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, BreadcrumbComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
