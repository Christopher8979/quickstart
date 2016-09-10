import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ComboBoxComponent } from './combo-box/combobox.component';
import { FilterPipe } from './combo-box/combobox.pipe';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, BreadcrumbComponent, ComboBoxComponent, FilterPipe ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
