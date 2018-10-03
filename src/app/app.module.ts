import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';
import {CustomIconsModule} from 'ionic2-custom-icons';
import { Ionic2RatingModule } from 'ionic2-rating';
import { ImagePicker } from '@ionic-native/image-picker';
import { Base64 } from '@ionic-native/base64';
import { FCM } from '@ionic-native/fcm';
import { NativeStorage } from '@ionic-native/native-storage';
import { CallNumber } from '@ionic-native/call-number';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { CloudModule} from '@ionic/cloud-angular';

import {MyApp} from './app.component';
import {TabsPage, TabIconTextPage} from '../pages/tabs/tabs.page';
import { registerProvider } from '../providers/register';
import { drivingSchoolProvider } from '../providers/drivingSchool.service';
import { educationalContentProvider } from '../providers/educationalContent.service';
import { insuranceCompaniesProvider } from '../providers/insuranceCompanies.service';
import { importantPlacesProvider } from '../providers/importantPlaces.service';
import { adsProvider } from '../providers/ads.service';
import { commentProvider } from '../providers/comment.service';
import { userHomeProvider } from '../providers/home.service';
import { citiesProvider } from '../providers/cities.service';
import { HTTP } from '@ionic-native/http';
import { Geolocation } from '@ionic-native/geolocation';
@NgModule({
   declarations: [
      MyApp,
      TabsPage,
      TabIconTextPage
    ],
   imports: [
      [HttpModule],
      BrowserModule,
      Ionic2RatingModule,
      IonicModule.forRoot(MyApp,{
        tabsHideOnSubPages: true,
        backButtonText: '',
        
      }), 
      
      CloudModule.forRoot({
        'core':{
          'app_id':""
        },
        'push':{
          "sender_id":"205703043839",
          'pluginConfig':{
            'ios':{
              'badge':true,
              'sound':true
            },
            'android':{
              'sound':true
            }
          }
        }
      }),
      CustomIconsModule
   ],
   bootstrap: [IonicApp],
   entryComponents: [
      MyApp,
      TabsPage,
      TabIconTextPage
   ],
   providers: [
      StatusBar,
      SplashScreen,
      ImagePicker,
      Base64,
      registerProvider,
      drivingSchoolProvider,
      educationalContentProvider,
      insuranceCompaniesProvider,
      importantPlacesProvider,
      adsProvider,
      commentProvider,
      userHomeProvider,
      citiesProvider,
      FCM,
      NativeStorage,
      CallNumber,
      InAppBrowser,
      HTTP,
      Geolocation,
      
      {provide: ErrorHandler, useClass: IonicErrorHandler}
   ]
})
export class AppModule {
}
