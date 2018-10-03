import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ImportantPlacesPage } from './important-places';
import { Ionic2RatingModule } from 'ionic2-rating';

@NgModule({
  declarations: [
    ImportantPlacesPage,
  ],
  imports: [
    IonicPageModule.forChild(ImportantPlacesPage),
    Ionic2RatingModule
  ],

})
export class ImportantPlacesPageModule {}
