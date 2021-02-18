import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/layouts/default/home/home.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { DefaultComponent } from './default.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UserWishListComponent } from './user-wish-list/user-wish-list.component';

const routes: Routes = [
  {
    path: '', component: DefaultComponent,
    children: [
      {
        path: '', redirectTo:'/Default/Home', pathMatch:'full',
      },
      {
        path: 'Home', component:HomeComponent, pathMatch: 'full'
      },
      {
        path: 'Shopping', component:ProductListComponent, pathMatch:'full'
      },
      {
        path: 'Wish', component:UserWishListComponent, pathMatch:'full'
      },
      {
        path: 'Cart', component:CartListComponent, pathMatch:'full'
      },


    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefaultRoutingModule { }
