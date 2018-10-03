import {Component} from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
   template: `
    <ion-header>
        <ion-navbar>
            
            <ion-title>Tabs</ion-title>
        </ion-navbar>
    </ion-header>
    <ion-content padding>
        MyContent
    </ion-content>
`
})
export class TabIconTextPage {
}

@Component({
   templateUrl: 'tabs.page.html'
})
export class TabsPage {
   public tabOne = 'HomePage';
   public tabTwo = 'DrivingSchoolsPage';
   public tabThree = 'EducationalContentPage';
   public tabFour = 'AdsPage';
   public tabFive = 'ImportantPlacesPage';
   public tabSix = 'InsuranceCompaniesPage';
   myIndex: number;

   constructor(navParams: NavParams) {
    // Set the active tab based on the passed index from menu.ts
    this.myIndex = navParams.data.tabIndex || 0;
  }
}
