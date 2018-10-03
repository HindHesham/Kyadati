import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdsPage } from './ads';
import {CustomIconsModule} from 'ionic2-custom-icons';

@NgModule({
  declarations: [
    AdsPage,
  ],
  imports: [
    IonicPageModule.forChild(AdsPage),
    CustomIconsModule
  ],
})
export class AdsPageModule {}
