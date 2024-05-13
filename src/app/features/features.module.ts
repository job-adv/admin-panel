import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from './home/home.component';
import {ComponentsModule} from "../shared/components/components.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputGroupAddonModule} from "primeng/inputgroupaddon";
import {InputGroupModule} from "primeng/inputgroup";
import {PasswordModule} from "primeng/password";
import {ProgressSpinnerModule} from "primeng/progressspinner";
import {DividerModule} from "primeng/divider";
import {ToggleButtonModule} from "primeng/togglebutton";
import {PanelModule} from "primeng/panel";
import {CardModule} from "primeng/card";
import {ToolbarModule} from "primeng/toolbar";
import { CheckboxModule } from "primeng/checkbox";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { CategoriesComponent } from './categories/categories.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';
import { ReportsComponent } from './reports/reports.component';
import { TpComponent } from './tp/tp.component';
import { TableModule } from "primeng/table";
import { ChartModule } from 'primeng/chart';
import { SplitButtonModule } from 'primeng/splitbutton';
import { BadgeModule } from 'primeng/badge';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ServicesComponent } from './services/services.component';

@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    PostsComponent,
    UsersComponent,
    CategoriesComponent,
    SuggestionsComponent,
    ReportsComponent,
    TpComponent,
    ServicesComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    InputGroupAddonModule,
    InputGroupModule,
    InputTextModule,
    SplitButtonModule,
    BadgeModule,
    PasswordModule,
    CheckboxModule,
    ProgressSpinnerModule,
    DividerModule,
    ToggleButtonModule,
    PanelModule,
    CardModule,
    ToolbarModule,
    ButtonModule,
    ToastModule,
    TableModule,
    ChartModule,
    DialogModule,
    InputTextareaModule,
  ],
  exports: [
  ]
})
export class FeaturesModule {
}
