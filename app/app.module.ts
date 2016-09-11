import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { WalkThroughComponent } from './walk-through/walkthrough.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, BreadcrumbComponent, WalkThroughComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
