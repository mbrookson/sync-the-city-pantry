import { ProductDetailPage } from './../product-detail/product-detail';
import { Component, ViewChild, ElementRef } from '@angular/core';

import { NavController, App, Card, Content, Scroll } from 'ionic-angular';

@Component({
  selector: 'page-pantry',
  templateUrl: 'pantry.html'
})
export class PantryPage {
  @ViewChild('content') content: Content;
  @ViewChild('summaryCard') summaryCard: ElementRef;

  scrollHeight: string;
  shoppingList: any[] = [];

  constructor(public navCtrl: NavController, private app: App) {

  }

  ionViewDidEnter() {
    var contentElement = this.content.getScrollElement();
    var cardElement = this.summaryCard.nativeElement;

    var contentHeight = contentElement.offsetHeight;
    var cardHeight = cardElement.offsetHeight;

    this.scrollHeight = contentHeight - cardHeight - 32 + 'px';

    for (var i = 1; i < 101; i++) {
      this.shoppingList.push(i);
    }
  }

  goToDetail() {
    this.navCtrl.push(ProductDetailPage);
  }

}
