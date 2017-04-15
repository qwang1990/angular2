import {Component} from "@angular/core";
import {WAService} from "../W/wa.service";
/**
 * Created by wangqi on 17/4/15.
 */

@Component({
  selector: 'mb-com',
  template: `
    <h1>I am MB</h1>
    {{info}}
  `
})
export class MBComponent {
  constructor(private waService:WAService){}

  info = this.waService.getMAInfo();

}
