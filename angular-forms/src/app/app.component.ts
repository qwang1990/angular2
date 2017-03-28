import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
    <hero-form></hero-form>
    <br>
    <my-sizer [size]="1"></my-sizer>
  `
})
export class AppComponent { }
