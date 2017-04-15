import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

/* App Root */
import { AppComponent }   from './app.component';
import {MModule} from "./M/m.module";
import {WModule} from "./W/w.module";

/* Feature Modules */

/* Routing Module */

@NgModule({
  imports: [
    BrowserModule,
    MModule,
    WModule
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }


