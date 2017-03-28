import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import { HeroFormComponent } from './hero-form.component';
import {SizerComponent} from './sizer.component';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    HeroFormComponent,
    SizerComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
