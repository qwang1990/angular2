import {Component} from "@angular/core";
import {MAService} from "../M/ma.service";
/**
 * Created by wangqi on 17/4/15.
 */

@Component({
  selector: 'wa-com',
  template: `
    <h1>I am WA</h1>
    <h2>{{info}}</h2>
  `
})
export class WAComponent {

  constructor(private maService:MAService){}

  info: string = this.maService.getMAInfo();

}
