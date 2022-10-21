import { EgressService } from './egress/egress.service';
import { EntryService } from './entry/entry.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EntryComponent } from './entry/entry.component';
import { EgressComponent } from './egress/egress.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EntryComponent,
    EgressComponent,
    FormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [EntryService, EgressService],
  bootstrap: [AppComponent]
})
export class AppModule { }
