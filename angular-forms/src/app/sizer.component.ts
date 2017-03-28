import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'my-sizer',
  template: `
    <div>
      <button (click)="dec()" title="smaller">-</button>
      <button (click)="inc()" title="bigger">+</button>
      <input [(ngModel)]="size">  
      <label [style.font-size.px]="size">FontSize: {{size}}px</label>
    </div>
    <div>
      <input
        #test = "testName"
        [ngModel]="testName"
        (ngModelChange)="testName = toUp($event.target.value)">
      <label>{{testName}}</label>
      <label>{{test}}</label>
    </div>
  `
})
export class SizerComponent {
  @Input()  size: number | string;
  testName : string;
  @Output() sizeChange = new EventEmitter<number>();
  dec() { this.resize(-1); }
  inc() { this.resize(+1); }
  resize(delta: number) {
    this.size = Math.min(40, Math.max(8, +this.size + delta));
    this.sizeChange.emit(this.size);
  }

  toUp(temp:string) {
    return temp.toUpperCase;
  }
}
