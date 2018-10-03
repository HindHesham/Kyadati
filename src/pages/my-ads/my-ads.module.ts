import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyAdsPage } from './my-ads';
import {CustomIconsModule} from 'ionic2-custom-icons';

@NgModule({
  declarations: [
    MyAdsPage,
  ],
  imports: [
    IonicPageModule.forChild(MyAdsPage),
    CustomIconsModule
  ],
})
export class MyAdsPageModule {}
