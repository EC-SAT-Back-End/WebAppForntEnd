import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {
  page = 1;
  pageSize = 8;
  filteredProducts: string[] =['assets/img/offer1.png','assets/img/offer2.jpg','assets/img/offer3.jpg','assets/img/offer4.jpg'
  ,'assets/img/offer5.jpg','assets/img/offer6.jpg','assets/img/offer7.jpg','assets/img/offer8.jpg',
  'assets/img/offer9.jpg','assets/img/offer10.jpg','assets/img/offer11.jpg','assets/img/offer12.jpg','assets/img/offer13.jpg'];
  qty: number = 0;
  constructor() { }

  ngOnInit(): void {
  }
  addToCart(){
    this.qty = 1;
  }

}
