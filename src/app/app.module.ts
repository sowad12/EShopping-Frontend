import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StoreModule } from './components/store/store.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
// import { PaginationModule } from 'ngx-bootstrap/pagination';
import { SharedModule } from './components/shared/shared.module';
import { PagerModule } from '@progress/kendo-angular-pager';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule,
    SharedModule,
    PagerModule,
    // PaginationModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
