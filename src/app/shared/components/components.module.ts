import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ButtonModule } from "primeng/button";
import { DropdownModule } from "primeng/dropdown";
import { AvatarModule } from "primeng/avatar";
import { SidebarModule } from 'primeng/sidebar';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { InputSwitchModule } from 'primeng/inputswitch';
import { TableModule } from 'primeng/table';
import { TabMenuModule } from 'primeng/tabmenu';
import { TabViewModule } from 'primeng/tabview';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ContextMenuModule } from 'primeng/contextmenu';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ProgressBarModule } from 'primeng/progressbar';
import { TagModule } from 'primeng/tag';
import { CalendarModule } from 'primeng/calendar';
import { FieldsetModule } from 'primeng/fieldset';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DialogModule } from 'primeng/dialog';
import { SelectButtonModule } from "primeng/selectbutton";
import { SplitterModule } from 'primeng/splitter';
import { BadgeModule } from 'primeng/badge';
import {ToolbarModule} from "primeng/toolbar";
import {ImageModule} from "primeng/image";
import {RippleModule} from "primeng/ripple";
import {StyleClassModule} from "primeng/styleclass";
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';

@NgModule({
    imports: [
        CommonModule,
        MenubarModule,
        SplitButtonModule,
        BadgeModule,
        MenuModule,
        MenubarModule,
        ButtonModule,
        SidebarModule,
        MessagesModule,
        ToastModule,
        InputTextModule,
        InputSwitchModule,
        TableModule,
        TabMenuModule,
        SelectButtonModule,
        TabViewModule,
        AutoCompleteModule,
        ContextMenuModule,
        ConfirmDialogModule,
        ProgressBarModule,
        TagModule,
        CalendarModule,
        FieldsetModule,
        CheckboxModule,
        RadioButtonModule,
        DialogModule,
        SplitterModule,
        DropdownModule,
        SplitButtonModule,
        AvatarModule,
        CheckboxModule,
        ToolbarModule,
        ImageModule,
        RippleModule,
        StyleClassModule
    ],
  declarations: [
    SidebarComponent,
    TopbarComponent
  ],
    exports: [
      BadgeModule,
      MenubarModule,
      SplitButtonModule,
      MenuModule,
      MenubarModule,
      ButtonModule,
      SidebarModule,
      MessagesModule,
      ToastModule,
      InputTextModule,
      InputSwitchModule,
      TableModule,
      TabMenuModule,
      SelectButtonModule,
      TabViewModule,
      AutoCompleteModule,
      ContextMenuModule,
      ConfirmDialogModule,
      ProgressBarModule,
      TagModule,
      CalendarModule,
      SidebarModule,
      FieldsetModule,
      CheckboxModule,
      RadioButtonModule,
      DialogModule,
      SplitterModule,
      DropdownModule,
      SplitButtonModule,
      AvatarModule,
      CheckboxModule,
      SidebarComponent,
      TopbarComponent,
    ]
})
export class ComponentsModule { }
