import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PopoverPage } from './popover';
import { Ionic2RatingModule } from 'ionic2-rating';

@NgModule({
  declarations: [
    PopoverPage,
  ],
  imports: [
    IonicPageModule.forChild(PopoverPage),
    Ionic2RatingModule
  ],
})
export class PopoverPageModule {}
