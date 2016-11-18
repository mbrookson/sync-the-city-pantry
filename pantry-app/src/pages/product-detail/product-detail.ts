import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, Content } from 'ionic-angular';

@Component({
  selector: 'page-product-detail',
  templateUrl: 'product-detail.html'
})
export class ProductDetailPage {
  @ViewChild('content') content: Content;
  @ViewChild('summaryCard') summaryCard: ElementRef;

  scrollHeight: string;

  recommended: any[] = [];

  constructor(public navCtrl: NavController) {}

  ionViewDidEnter() {
    var contentElement = this.content.getScrollElement();
    var cardElement = this.summaryCard.nativeElement;

    var contentHeight = contentElement.offsetHeight;
    var cardHeight = cardElement.offsetHeight;

    this.scrollHeight = contentHeight - cardHeight - 32 + 'px';

    for (var i = 1; i < 5; i++) {
      this.recommended.push(i);
    }
  }

}
