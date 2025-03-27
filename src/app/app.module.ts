import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductModule } from './components/product/product.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from "ngx-spinner";
import { SharedModule } from './components/shared/shared.module';
import { PagerModule } from '@progress/kendo-angular-pager';
import { HomeComponent } from './components/home/home.component';
import { ErrorInterceptor } from './interceptor/error.interceptor';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { LoaderInterceptor } from './interceptor/loader.interceptor';
import { CarouselModule } from 'ngx-bootstrap/carousel';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ProductModule,
    SharedModule,
    PagerModule,
    BreadcrumbModule,
    NgxSpinnerModule,
    CarouselModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
      {provide:HTTP_INTERCEPTORS,useClass:ErrorInterceptor,multi:true},      
      {provide:HTTP_INTERCEPTORS,useClass:LoaderInterceptor,multi:true}      
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
