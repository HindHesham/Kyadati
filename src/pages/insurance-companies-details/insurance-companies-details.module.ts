import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InsuranceCompaniesDetailsPage } from './insurance-companies-details';
import {CustomIconsModule} from 'ionic2-custom-icons';

@NgModule({
  declarations: [
    InsuranceCompaniesDetailsPage,
    
  ],
  imports: [
    IonicPageModule.forChild(InsuranceCompaniesDetailsPage),
    CustomIconsModule
  ],
})
export class InsuranceCompaniesDetailsPageModule {}
