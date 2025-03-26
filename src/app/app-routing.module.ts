import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/shared/not-found/not-found.component';
import { UnAuthenticatedComponent } from './components/shared/un-authenticated/un-authenticated.component';
import { ServerErrorComponent } from './components/shared/server-error/server-error.component';
import { ProductsComponent } from './components/product/products.component';
import { ProductDetailsComponent } from './components/product/product-details/product-details.component';

const routes: Routes = [
 {path:'',component:HomeComponent},
 {path:'not-found',component:NotFoundComponent},
 {path:'un-authenticated',component:UnAuthenticatedComponent},
 {path:'server-error',component:ServerErrorComponent},
 {path:'product',component:ProductsComponent},
 {path:'product/:id',component:ProductDetailsComponent},
 {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
