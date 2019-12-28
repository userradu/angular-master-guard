import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Dummy1Component } from './dummy1/dummy1.component';
import { Dummy2Component } from './dummy2/dummy2.component';
import { Dummy3Component } from './dummy3/dummy3.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    Dummy1Component,
    Dummy2Component,
    Dummy3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
