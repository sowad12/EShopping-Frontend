import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { PagenationComponent } from './pagenation/pagenation.component';
import { ServerErrorComponent } from './server-error/server-error.component';
import { UnAuthenticatedComponent } from './un-authenticated/un-authenticated.component';
import { PagerModule } from '@progress/kendo-angular-pager';
import { CarouselModule } from 'ngx-bootstrap/carousel';
@NgModule({
  declarations: [
    NotFoundComponent,
    PagenationComponent,
    ServerErrorComponent,
    UnAuthenticatedComponent
  ],
  imports: [
    CommonModule,
    PagerModule,
    CarouselModule

  ],
  exports:[
    NotFoundComponent,
    PagenationComponent,
    ServerErrorComponent,
    UnAuthenticatedComponent
  ]
})
export class SharedModule { }
