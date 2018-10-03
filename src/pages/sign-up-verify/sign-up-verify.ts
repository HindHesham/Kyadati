import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController  } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import {TabsPage, TabIconTextPage} from '../tabs/tabs.page';
import { registerProvider } from '../../providers/register';
import { NativeStorage } from '@ionic-native/native-storage';

@IonicPage({
  name: 'SignUpVerifyPage'
})
@Component({
  selector: 'page-sign-up-verify',
  templateUrl: 'sign-up-verify.html',
})
export class SignUpVerifyPage {

  public verificationParam: any;
  public token_api: any;
  public id: any;
  public input1: any;

  verifyForm: FormGroup;
  submitAttempt: boolean = false;

  verifyInput: AbstractControl;


  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private nativeStorage: NativeStorage,
    public registerProvider: registerProvider) {

      this.verificationParam = navParams.get('verification');
      this.token_api = navParams.get('token_api');
      this.id = navParams.get('id');

      this.verifyForm = formBuilder.group({
        verifyInput: ['', Validators.compose([Validators.required])]
      });
      this.verifyInput = this.verifyForm.controls['verifyInput'];


  }


  ionViewLoaded() {}
  
 
  verifyCode(){

    let loader = this.loadingCtrl.create({
      spinner: 'crescent',
      content: ''
    });

    loader.present().then(() => {

        if(this.input1 == this.verificationParam){
        
          this.nativeStorage.setItem('myitem', {token_api : this.token_api, id: this.id})
            .then(
              () =>{
                //console.log('Stored item!');
                loader.dismiss();
                this.navCtrl.setRoot(TabsPage);
              },
                error => {
                  loader.dismiss();
                  let toast = this.toastCtrl.create({
                    message: "Please check your internet connection and try again",
                    duration: 3000,
                    position: 'bottom'
                  }); toast.present();
                }
              );
        }
        else{
          loader.dismiss();
          let toast = this.toastCtrl.create({
            message: "Please enter valid verification code",
            duration: 3000,
            position: 'bottom'
          }); toast.present();
        }
    })
  }

}
