import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateAdsPage } from './create-ads';

@NgModule({
  declarations: [
    CreateAdsPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateAdsPage),
  ],
})
export class CreateAdsPageModule {}
