import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// This module has to be injected to capture the ngModal values
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';

//Imports related to breadcrumb
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';

//Imports related to first time walk through
import { WalkThroughComponent } from './walk-through/walkthrough.component';

//Imports related to combobox
import { ComboBoxComponent } from './combo-box/combobox.component';
import { FilterPipe } from './combo-box/combobox.pipe';


// All components and pipes are injected as declarations
// Other modules are injected as imports

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, BreadcrumbComponent, ComboBoxComponent, FilterPipe, WalkThroughComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
