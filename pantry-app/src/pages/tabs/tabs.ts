import { Component } from '@angular/core';

import { PantryPage } from '../pantry/pantry';
import { RecommendationsPage } from '../recommendations/recommendations';
import { ProfilePage } from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = PantryPage;
  tab2Root: any = RecommendationsPage;
  tab3Root: any = ProfilePage;

  constructor() {

  }
}
