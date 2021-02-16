import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-widget-carousel',
  templateUrl: './widget-carousel.component.html',
  styleUrls: ['./widget-carousel.component.scss']
})
export class WidgetCarouselComponent implements OnInit {

  showNavigationArrows = false;
  showNavigationIndicators = false;
  images = ['assets/img/offer1.png','assets/img/offer2.jpg','assets/img/offer3.jpg','assets/img/offer4.jpg'
  ,'assets/img/offer5.jpg','assets/img/offer6.jpg','assets/img/offer7.jpg','assets/img/offer8.jpg',
  'assets/img/offer9.jpg','assets/img/offer10.jpg','assets/img/offer11.jpg','assets/img/offer12.jpg','assets/img/offer13.jpg'];

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }

  ngOnInit(): void {
  }

}
