import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {ComponentsModule} from "./components/components.module";
import {UiService} from "./services/ui.service";

@NgModule({
  declarations: [],
  providers: [
    UiService
  ],
  imports: [
    CommonModule,
    ComponentsModule,
  ],
  exports: [ComponentsModule,]
})
export class SharedModule {
}
