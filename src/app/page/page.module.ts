import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { PageRoutingModule } from "./page-routing.module";
import { PageComponent } from "./page.component";

@NgModule({
  declarations: [
    PageComponent
  ],
  imports: [
    CommonModule,
    PageRoutingModule,
    SharedModule
  ],
  entryComponents:[
  ]
})
export class PageModule { }
