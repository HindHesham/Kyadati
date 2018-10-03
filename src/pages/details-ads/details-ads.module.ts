import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailsAdsPage } from './details-ads';
import {CustomIconsModule} from 'ionic2-custom-icons';

@NgModule({
  declarations: [
    DetailsAdsPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailsAdsPage),
    CustomIconsModule
  ],
})
export class DetailsAdsModul {}
