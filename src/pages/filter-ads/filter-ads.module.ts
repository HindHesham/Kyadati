import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FilterAdsPage } from './filter-ads';
import {CustomIconsModule} from 'ionic2-custom-icons';


@NgModule({
  declarations: [
    FilterAdsPage,
  ],
  imports: [
    IonicPageModule.forChild(FilterAdsPage),
    CustomIconsModule
  ],
})
export class FilterAdsPageModule {}
