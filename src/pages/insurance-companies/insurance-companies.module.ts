import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InsuranceCompaniesPage } from './insurance-companies';
import {CustomIconsModule} from 'ionic2-custom-icons';

@NgModule({
  declarations: [
    InsuranceCompaniesPage,
  ],
  imports: [
    IonicPageModule.forChild(InsuranceCompaniesPage),
    CustomIconsModule
  ],
})
export class InsuranceCompaniesPageModule {}
