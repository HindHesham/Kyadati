import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DeletePopoverPage } from './delete-popover';
import { Ionic2RatingModule } from 'ionic2-rating';

@NgModule({
  declarations: [
    DeletePopoverPage,
  ],
  imports: [
    IonicPageModule.forChild(DeletePopoverPage),
    Ionic2RatingModule
  ],
})
export class DeletePopoverPageModule {}
