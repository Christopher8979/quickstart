import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';

import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { WalkThroughComponent } from './walk-through/walkthrough.component';
import { ComboBoxComponent } from './combo-box/combobox.component';
import { FilterPipe } from './combo-box/combobox.pipe';


@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, BreadcrumbComponent, ComboBoxComponent, FilterPipe, WalkThroughComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
