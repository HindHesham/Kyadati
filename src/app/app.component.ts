import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {TabsPage, TabIconTextPage} from '../pages/tabs/tabs.page';

import { NativeStorage } from '@ionic-native/native-storage';
import { Push } from '@ionic/cloud-angular';


@Component({
   templateUrl: 'app.html'
})
export class MyApp {
   @ViewChild(Nav) nav: Nav;


  rootPage: any;
  public token_api: any;
  pages: Array<{title: string, component: any, icon: string,tabComponent: string, index: number}>;

    constructor( public platform: Platform,  
        public statusBar: StatusBar, 
        public splashScreen: SplashScreen,
        private nativeStorage: NativeStorage,
        public push:Push
       ) {

         

      this.platform.ready().then(() => {

        statusBar.styleDefault();
       
        
        push.register().then(token=>{
        });
        // Step #2 Listening Service.
        push.rx.notification().subscribe(msg=>{
          
        });
        
        this.nativeStorage.getItem('myitem')
        .then(
          data =>{
            //console.log("from app component: ", data);
            this.token_api = data.token_api;

            if(this.token_api){

              splashScreen.hide();
               this.rootPage = TabsPage;
             }
             else{

              splashScreen.hide();
               this.rootPage = TabsPage;
             }
          },
          error => {
            //console.error(error);
            splashScreen.hide();
            this.rootPage = TabsPage;
          }

        ); 

 
      });

      this.pages = [
        { title: 'الصفحة الرئيسية', component: "HomePage", icon: "home", tabComponent: 'HomePage', index: 0},
        { title: 'مدارس تعليمية', component: "DrivingSchoolsPage", icon: "drivingschools", tabComponent: 'DrivingSchoolsPage', index: 1},
        { title: 'فيديوهات تعليمية', component: "EducationalContentPage", icon: "videos", tabComponent: 'EducationalContentPage', index: 2},
        { title: 'بيع/شراء سيارات', component: "AdsPage", icon: "sell", tabComponent: 'AdsPage', index: 3 },
        { title: 'أماكن تهمك', component: "ImportantPlacesPage", icon: "importantplace", tabComponent: 'ImportantPlacesPage', index: 4},
        { title: 'شركات تأمين', component: "InsuranceCompaniesPage", icon: "security", tabComponent: 'InsuranceCompaniesPage', index: 5},

      ];
   }
   
   openPage(page) {


    let params = {};
 
    // The index is equal to the order of our tabs inside tabs.ts
    if (page.index) {
      params = { tabIndex: page.index };
    }
    // The active child nav is our Tabs Navigation
    if (this.nav.getActiveChildNav() && page.index != undefined) {
      this.nav.getActiveChildNav().select(page.index);
    } else {
      // Tabs are not active, so reset the root page 
      // In this case: moving to or from SpecialPage
      this.nav.setRoot(page.component, params);
    }
  }
 
  isActive(page) {
    // Again the Tabs Navigation
    let childNav = this.nav.getActiveChildNav();
 
    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return;
    }
 
    // Fallback needed when there is no active childnav (tabs not active)
    if (this.nav.getActive() && this.nav.getActive().name === page.component) {
      return 'primary';
    }
    return;
  }
    
}
