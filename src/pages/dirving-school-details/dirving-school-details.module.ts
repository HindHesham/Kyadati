import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DirvingSchoolDetailsPage } from './dirving-school-details';
import {CustomIconsModule} from 'ionic2-custom-icons';
import { Ionic2RatingModule } from 'ionic2-rating';

@NgModule({
  declarations: [
    DirvingSchoolDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(DirvingSchoolDetailsPage),
    CustomIconsModule,
    Ionic2RatingModule
  ],
})
export class DirvingSchoolDetailsPageModule {}
