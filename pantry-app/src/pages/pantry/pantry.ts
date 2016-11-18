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

  scrollTopMargin: string;
  shoppingList: any[] = [];

  constructor(public navCtrl: NavController, private app: App) {

  }

  ionViewDidEnter() {
    this.scrollTopMargin = this.summaryCard.nativeElement.offsetHeight + 16 + 'px';

    for (var i = 1; i < 101; i++) {
      this.shoppingList.push(i);
    }
  }

  goToDetail() {
    this.navCtrl.push(ProductDetailPage);
  }

}
