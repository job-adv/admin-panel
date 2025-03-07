import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpService} from './services/http/http.service';
import {AuthenticationService} from './services/authentication/authentication.service';
import {UserRepository} from "./repositories/user/user.repository";
import {SessionManager} from "./util/managers/session.manager";
import {StorageManager} from "./util/managers/storage.manager";
import {BusinessErrorHandler} from "./util/handlers/business-error.handler";
import {PrintingHandler} from "./util/handlers/printing.handler";
import {NotificationHandler} from "./util/handlers/notification.handler";
import {DateConverter} from "./util/converters/date-converter";
import { PostRepository } from './repositories/post/post.repository';
import { PostService } from './services/post/post.service';
import { UserService } from './services/user/user.service';
import { CategoryRepository } from './repositories/category/category.repository';
import { CategoryService } from './services/category/category.service';
import { SuggestionRepository } from './repositories/suggestion/suggestion.repository';
import { SuggestionService } from './services/suggestion/suggestion.service';
import { ReportService } from './services/report/report.service';
import { ReportRepository } from './repositories/report/report.repository';
import { TpService } from './services/tp/tp.service';
import { TpRepository } from './repositories/tp/tp.repository';
import { NotificationService } from './services/notification/notification.service';
import { NotificationRepository } from './repositories/notification/notification.repository';
import { MessageService } from 'primeng/api';
import { UserServiceService } from './services/service/service.service';
import { ServiceRepository } from './repositories/service/service.repository';
import { SubcategoryService } from './services/subcategory/subcategory.service';
import { SubcategoryRepository } from './repositories/subcategory/subcategory.repository';

@NgModule({
  declarations: [
  ],
  providers: [
    DateConverter,

    SessionManager,
    StorageManager,

    PrintingHandler,
    NotificationHandler,
    BusinessErrorHandler,

    HttpService,
    AuthenticationService,
    PostService,
    UserService,
    CategoryService,
    SuggestionService,
    ReportService,
    TpService,
    NotificationService,
    MessageService,
    UserServiceService,
    SubcategoryService,

    UserRepository,
    PostRepository,
    CategoryRepository,
    SuggestionRepository,
    ReportRepository,
    TpRepository,
    NotificationRepository,
    ServiceRepository,
    SubcategoryRepository,
  ],
  imports: [
    CommonModule
  ],
  exports: [
  ]
})
export class CoreModule {
}
