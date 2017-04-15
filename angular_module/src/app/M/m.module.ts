import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MAComponent} from "./ma.component";
import {MBComponent} from "./mb.component";
import {MAService} from "./ma.service";
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
    MAComponent,
    MBComponent
  ],
  providers: [
    MAService
  ],
  exports: [
    MAComponent,
    FormsModule
  ]
})
export class MModule { }
