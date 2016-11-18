import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-pantry',
  templateUrl: 'pantry.html'
})
export class PantryPage {
  shoppingList: any[] = [];

  constructor(public navCtrl: NavController) {

  }

  ionViewWillEnter() {
    for (var i = 1; i < 101; i++) {
      this.shoppingList.push(i);
    }
  }

}
