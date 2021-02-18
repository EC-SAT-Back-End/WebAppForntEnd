import { Component, OnInit } from '@angular/core';
import detail from '../../../../assets/data/details.json';
@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
})
export class CartListComponent implements OnInit {
  public details:{
    id: string,
    masterId: string,
    productId: string,
    productName: string,
    quantityIn: string,
    quantityOut: string,
    balance: string,
    price: string,
    discount: string,
     imgUrl:string
  }[] = detail;
  // Pagination
  page: number = 1;
  pageSize: number = 10;
  collectionSize: number = 0;
  // pagination
  //  master: Master;
  // details: ProductForDetailsDto[] = [];
  // details: any;

  //  masterId: string;
  // this is use to convert promis to observe
  // observable$: Subscription;
  // this is use delete animation
  isDelete: boolean = false;
  // used to ref
  index: number = -1;
  // used it toggle
  isToggle = true;

  constructor() {}

  ngOnInit(): void {
    fetch('./assets/data/details.json')
    .then(res => res.json())
    .then(data => {this.details = data});
    this.details.push()
  }


  GetNetTotal(): number {
    let sum = 0;
    for (const item of this.details) {
      sum += parseFloat(item.quantityOut) * (parseFloat(item.price) - (parseFloat(item.price) * parseFloat(item.discount) / 100));
    }
    return sum;
  }
  GetBeforTotal(): number {
    let sum = 0;
    for (const item of this.details) {
      sum += parseFloat(item.quantityOut) * parseFloat(item.price);
    }
    return sum;
  }
  GetDiscountTotal(): number {
    return this.GetBeforTotal() - this.GetNetTotal();
  }
  // GetMasterData() {
  //   const date = new Date().toLocaleDateString('en-US',{year: 'numeric', month: '2-digit', day: '2-digit'});
  //   this.master = new Master(
  //     '1', this.authService.userId, this.authService.userName, (date as unknown as Date)
  //     , this.GetBeforTotal(), this.GetNetTotal(), this.GetDiscountTotal()
  //   );
  //   this.masterId = this.masterService.afs.createId();
  // }
  // onSubmite() {
  //   if (this.details.length) {
  //     this.spinner.show();
  //     this.GetMasterData();
  //     this.observable$ = from(this.masterService.AddWithId('/master/', this.masterId, this.master).catch(error => {
  //       this.toaster.error(error, 'Ecommerce App');
  //     })
  //     ).subscribe(res => {
  //       for (const item of this.details) {
  //         item.masterId = this.masterId;
  //         // because this is from ProductForDetailsDto we need only obj type of Details to save Firbase
  //         item.imgUrl = '';
  //         // ================

  //         this.detailsService.Add('details', item);
  //       }
  //       this.spinner.hide();
  //       this.master = null;
  //       this.masterId = null;
  //       this.cartService.details = [];
  //       this.cartService.cartArry.next(this.cartService.details);
  //       this.details = [];
  //       this.observable$.unsubscribe();
  //       this.toaster.success('Submitted Successfully', 'Ecommerce App');
  //     });

  //   }

  // }
  delete(index: number) {
    this.index = index;
    setTimeout(() => {
    this.details.splice(index, 1);
    // this.cartService.cartArry.next(this.details);
    }, 2000);
  }
  deleteAll() {
    this.details = [];
    // this.cartService.cartArry.next(this.details);
  }




  showCart() {
    this.isToggle = true;
  }
  showTable() {
    this.isToggle = false;
  }
}
