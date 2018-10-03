import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { governmentPlacesDetailsPage } from './government_places_details';
import {CustomIconsModule} from 'ionic2-custom-icons';
import { Ionic2RatingModule } from 'ionic2-rating';

@NgModule({
  declarations: [
    governmentPlacesDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(governmentPlacesDetailsPage),
    CustomIconsModule,
    Ionic2RatingModule
  ],
})
export class governmentPlacesDetailsPageModule {}
