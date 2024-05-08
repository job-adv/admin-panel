import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SplitButtonModule} from "primeng/splitbutton";
import {AutoCompleteModule} from "primeng/autocomplete";
import {FormsModule} from "@angular/forms";
import {FloatLabelModule} from "primeng/floatlabel";
import {ChipsModule} from "primeng/chips";
import {InputGroupAddonModule} from "primeng/inputgroupaddon";
import {InputGroupModule} from "primeng/inputgroup";

@NgModule({
  declarations: [
  ],
  providers: [],
  imports: [
    CommonModule,
    SplitButtonModule,
    AutoCompleteModule,
    FormsModule,
    FloatLabelModule,
    ChipsModule,
    InputGroupAddonModule,
    InputGroupModule
  ],
  exports: [
  ]
})
export class UiModule {
}
