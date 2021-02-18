import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FirebaseModule } from '../firebase.module';
import { RouterModule } from '@angular/router';
import { ShopListComponent } from './shop-list/shop-list.component';
import { ShopDetailsComponent } from './shop-details/shop-details.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { WishListComponent } from './wish-list/wish-list.component';



@NgModule({
  declarations: [
    HeaderComponent, FooterComponent, ShopListComponent, ShopDetailsComponent,
    CategoryListComponent,CategoryDetailsComponent, WishListComponent
  ],
  imports: [
    // Module
    CommonModule,
    NgbModule,
    RouterModule,
    FirebaseModule,

  ],
  exports:[
    // Module
    NgbModule,

    // Component
    HeaderComponent, FooterComponent,ShopListComponent,
    ShopDetailsComponent,CategoryListComponent,CategoryDetailsComponent,
    WishListComponent
  ],
  entryComponents:[]
})
export class SharedModule { }
