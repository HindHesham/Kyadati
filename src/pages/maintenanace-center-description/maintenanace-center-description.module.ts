import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MaintenanaceCenterDescriptionPage } from './maintenanace-center-description';
import {CustomIconsModule} from 'ionic2-custom-icons';
import { Ionic2RatingModule } from 'ionic2-rating';

@NgModule({
  declarations: [
    MaintenanaceCenterDescriptionPage,
  ],
  imports: [
    IonicPageModule.forChild(MaintenanaceCenterDescriptionPage),
    CustomIconsModule,
    Ionic2RatingModule
  ],
})
export class MaintenanaceCenterDescriptionPageModule {}
