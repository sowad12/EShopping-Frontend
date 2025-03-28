import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/shared/not-found/not-found.component';
import { UnAuthenticatedComponent } from './components/shared/un-authenticated/un-authenticated.component';
import { ServerErrorComponent } from './components/shared/server-error/server-error.component';
const routes: Routes = [
 {path:'',component:HomeComponent},
 {path:'not-found',component:NotFoundComponent},
 {path:'un-authenticated',component:UnAuthenticatedComponent},
 {path:'server-error',component:ServerErrorComponent},
 {path:'product', loadChildren: () => import('./components/product/product.module').then(m => m.ProductModule)},
 {path:'basket', loadChildren: () => import('./components/basket/basket.module').then(m => m.BasketModule)},
 {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
