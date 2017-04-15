import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
   <ma-com></ma-com> 
   <wa-com></wa-com>
   <!--<wb-com></wb-com>-->
   <!--<mb-com></mb-com> 这样不就能用 -->
    <div>
      <label>name: </label>
      <input [(ngModel)]="name" placeholder="name">
      {{name}}
    </div>
`
})
//虽然在app.module.ts中没有导入FormsModule，但是MModule中导出了，所以能在这里使用
export class AppComponent {
  name:string;
}



