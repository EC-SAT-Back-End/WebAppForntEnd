import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultRoutingModule } from './default-routing.module';
import { DefaultComponent } from './default.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { WidgetCarouselComponent } from './widgets/widget-carousel/widget-carousel.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { UserWishListComponent } from './user-wish-list/user-wish-list.component';
import { CartListComponent } from './cart-list/cart-list.component';


@NgModule({
  declarations:
  [
    DefaultComponent,
    HomeComponent,
    WidgetCarouselComponent,
    ProductListComponent,
    ProductDetailsComponent,
    UserWishListComponent,
    CartListComponent,
  ],
  imports: [
    CommonModule,
    DefaultRoutingModule,
    SharedModule
  ]
})
export class DefaultModule { }
