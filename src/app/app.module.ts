import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FeaturesModule } from './features/features.module';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'primeng/api';
import { ComponentsModule } from "./shared/components/components.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { httpInterceptorProviders } from './core/util/interceptors/http.interceptor';

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [httpInterceptorProviders,],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CommonModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        FeaturesModule,
        CoreModule,
        HttpClientModule,
        SharedModule,
        ComponentsModule,
    ]
})
export class AppModule { }
