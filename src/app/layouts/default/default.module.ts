import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultRoutingModule } from './default-routing.module';
import { DefaultComponent } from './default.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { WidgetCarouselComponent } from './widgets/widget-carousel/widget-carousel.component';


@NgModule({
  declarations:
  [
    DefaultComponent,
    HomeComponent,
    WidgetCarouselComponent
  ],
  imports: [
    CommonModule,
    DefaultRoutingModule,
    SharedModule
  ]
})
export class DefaultModule { }
