import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductModule } from './components/product/product.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
// import { PaginationModule } from 'ngx-bootstrap/pagination';
import { SharedModule } from './components/shared/shared.module';
import { PagerModule } from '@progress/kendo-angular-pager';
import { HomeComponent } from './components/home/home.component';


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
    // PaginationModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
