import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { LoginGuard } from './core/guards/login.guard';
import { PostsComponent } from './features/posts/posts.component';
import { AuthGuard } from './core/guards/auth.guard';
import { HomeComponent } from './features/home/home.component';
import { UsersComponent } from './features/users/users.component';
import { CategoriesComponent } from './features/categories/categories.component';
import { SuggestionsComponent } from './features/suggestions/suggestions.component';
import { ReportsComponent } from './features/reports/reports.component';
import { TpComponent } from './features/tp/tp.component';
import { ServicesComponent } from './features/services/services.component';
import { SubcategoriesComponent } from './features/subcategories/subcategories.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'dashboard',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'posts',
    component: PostsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'services',
    component: ServicesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'categories',
    component: CategoriesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'subcategories',
    component: SubcategoriesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'suggestions',
    component: SuggestionsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'reports',
    component: ReportsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'tp',
    component: TpComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
