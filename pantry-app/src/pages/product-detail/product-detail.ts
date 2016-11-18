import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, Content } from 'ionic-angular';

@Component({
  selector: 'page-product-detail',
  templateUrl: 'product-detail.html'
})
export class ProductDetailPage {
  @ViewChild('content') content: Content;
  @ViewChild('summaryCard') summaryCard: ElementRef;

  scrollTopMargin: string;

  recommended: any[] = [];

  constructor(public navCtrl: NavController) {}

  ionViewDidEnter() {
    this.scrollTopMargin = this.summaryCard.nativeElement.offsetHeight + 16 + 'px';

    for (var i = 1; i < 5; i++) {
      this.recommended.push(i);
    }
  }

}
