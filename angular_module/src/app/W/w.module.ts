import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { WAComponent} from "./wa.component";
import { WBComponent} from "./wb.component";
import { WAService} from "./wa.service";
import {FormsModule} from "@angular/forms";
/**
 * Created by wangqi on 17/4/15.
 */
@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    WAComponent,
    WBComponent
  ],
  providers: [
    WAService
  ],
  exports: [
    WAComponent
  ]
})
export class WModule { }
