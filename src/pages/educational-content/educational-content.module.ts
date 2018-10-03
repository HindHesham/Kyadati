import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EducationalContentPage } from './educational-content';

@NgModule({
  declarations: [
    EducationalContentPage,
  ],
  imports: [
    IonicPageModule.forChild(EducationalContentPage),
  ],
})
export class EducationalContentPageModule {}
