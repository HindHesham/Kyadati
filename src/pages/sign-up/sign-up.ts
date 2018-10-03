import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController, MenuController} from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import {TabsPage, TabIconTextPage} from '../tabs/tabs.page';

import { registerProvider } from '../../providers/register';
import { FCM } from '@ionic-native/fcm';
import { NativeStorage } from '@ionic-native/native-storage';
import { HTTP, HTTPResponse } from '@ionic-native/http';

/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'SignUpPage'
})
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {
  public phoneNumber: string;
  public token_api: any;
  public id: any;
  registerForm: FormGroup;
  submitAttempt: boolean = false;

  usernameFormName: AbstractControl;
  phone: AbstractControl;
  code: AbstractControl;
  email: AbstractControl;

  public username: string;
  public phoneNum: any;
  public codeNum: any;
  public emailText: any;
  public confirmationResult: any;
  public data: any;
  public result : any;

  constructor(public navCtrl: NavController, 
    public menu: MenuController,
    public navParams: NavParams, 
    public toastCtrl: ToastController,
    public formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    public registerProvider: registerProvider,
    private fcm: FCM,
    private nativeStorage: NativeStorage) {

      this.menu.enable(false, 'menu');

      //this.userNameParam = navParams.get('userNameParam'); 
      this.registerForm = formBuilder.group({
        usernameFormName: ['', Validators.compose([Validators.minLength(1), Validators.required])],
        phone: ['', Validators.compose([Validators.minLength(7), Validators.required])],
        code: ['', Validators.compose([Validators.minLength(2), Validators.required])],
        email: ['', Validators.compose([Validators.minLength(10), Validators.required])]
    });
    this.usernameFormName = this.registerForm.controls['usernameFormName'];
    this.phone = this.registerForm.controls['phone'];
    this.code = this.registerForm.controls['code'];
    this.email = this.registerForm.controls['email'];
  }

  ionViewDidLoad() {}

  signup(code, phone, email){

    if(!this.registerForm.valid){
      this.submitAttempt = true;
  } else {


    let loader = this.loadingCtrl.create({
      spinner: 'crescent',
      content: ''
    });

    loader.present().then(() => {

        this.submitAttempt = false;
        const phoneNumberString = code+phone;

        this.fcm.getToken().then(token=>{

          if(token){

            this.registerProvider.register(this.username, phoneNumberString, token, email)
            .then(result =>{

              this.result = JSON.parse(result.data);
        
            if(this.result.status_code === 200){

              this.nativeStorage.setItem('myitem', {token_api : this.result.token_api, id: this.result.id})
              .then(
                () =>{
                  //console.log('Stored item!');
                  loader.dismiss();
                  this.navCtrl.pop();
                },
                  error => {

                    //alert("not stored " + JSON.stringify( error));
                    
                    loader.dismiss();
                    let toast = this.toastCtrl.create({
                      message: "Please check your internet connection and try again",
                      duration: 3000,
                      position: 'bottom'
                    }); toast.present();
                  }
                );
                /*
                 this.navCtrl.push('SignUpVerifyPage',{
                    verification: this.result.verification,
                    token_api: this.result.token_api,
                    id: this.result.id
                  });*/
                  
              }
              else{
                loader.dismiss();
                let toast = this.toastCtrl.create({
                  message: "Please enter valid data",
                  duration: 3000,
                  position: 'bottom'
                }); toast.present();
              }

            }).catch(error => {
              
              loader.dismiss();
              let toast = this.toastCtrl.create({
                message: "Please check your internet connection and try again",
                duration: 3000,
                position: 'bottom'
              }); toast.present();
            });
          }
        })
        err=>{
          loader.dismiss();
          let toast = this.toastCtrl.create({
            message: "Please check your internet connection and try again",
            duration: 3000,
            position: 'bottom'
          }); toast.present();
        }
      })
    }
  }

}
