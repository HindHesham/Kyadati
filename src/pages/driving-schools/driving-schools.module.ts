import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DrivingSchoolsPage } from './driving-schools';
import { Ionic2RatingModule } from 'ionic2-rating';
import {CustomIconsModule} from 'ionic2-custom-icons';

@NgModule({
  declarations: [
    DrivingSchoolsPage,
  ],
  imports: [
    IonicPageModule.forChild(DrivingSchoolsPage),
    Ionic2RatingModule,
    CustomIconsModule
  ],
})
export class DrivingSchoolsPageModule {}
