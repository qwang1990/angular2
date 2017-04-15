import {Component} from "@angular/core";
import {MAService} from "./ma.service";
/**
 * Created by wangqi on 17/4/15.
 */

@Component({
  selector: 'ma-com',
  template: `
    <h1>I am MA</h1>
    <h2>{{info}}</h2>
    <mb-com></mb-com>
  `
})
export class MAComponent {

  constructor(private maService:MAService){}

  info: string = this.maService.getMAInfo();

}
