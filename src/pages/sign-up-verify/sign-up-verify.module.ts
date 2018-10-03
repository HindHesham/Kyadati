import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignUpVerifyPage } from './sign-up-verify';

@NgModule({
  declarations: [
    SignUpVerifyPage,
  ],
  imports: [
    IonicPageModule.forChild(SignUpVerifyPage),
  ],
})
export class SignUpVerifyPageModule {}
