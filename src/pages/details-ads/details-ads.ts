import { ViewChild, Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { Slides, PopoverController } from 'ionic-angular';

import { NativeStorage } from '@ionic-native/native-storage';
import { adsProvider } from '../../providers/ads.service';
import { CallNumber } from '@ionic-native/call-number';

@Component({

  selector: 'page-details-ads',
  templateUrl: 'details-ads.html',
})

@IonicPage({
  name: 'DetailsAdsPage'
})

export class DetailsAdsPage {

  @ViewChild(Slides) slides: Slides;
  public adId: any;
  public pageType: any;
  public adDescriptionObj: any = [];
  private phone: any;
  public userId: any;
  public result: any;
  public deleteRes: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public popoverCtrl: PopoverController,
    private nativeStorage: NativeStorage,
    private adsProvider: adsProvider,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    private callNumber: CallNumber) {

      this.pageType = this.navParams.get('page');
  }

  ngOnInit(){
    this.getAdsDescription();
  }

  ionViewDidLoad() {}

  ionViewDidEnter() {
    //
     this.slides._rtl = true 
    console.log("ionViewDidEnter");
  }

  getAdsDescription(){

    let loader = this.loadingCtrl.create({
      spinner: 'crescent',
      content: ''
    });

    loader.present().then(() => {

      this.adId = this.navParams.get('adId');
      if(this.adId){

        this.nativeStorage.getItem('myitem')
        .then(
          data =>{
            //alert("from ads details View: "+ data);
  

              this.userId = data.id;
              //alert(this.userId);
              this.adsProvider.adDescription(this.adId)
                .then( result =>{
                  
                  this.result = JSON.parse(result.data);

                  //alert("ad description result is: "+ this.result);
                  if(this.result.status_code === 200){

                    loader.dismiss();
                    this.adDescriptionObj = this.result.ad;
                    this.phone = this.result.ad.mobile;
                  
                  }

                  else{
                    loader.dismiss();
                    this.navCtrl.pop();
                    let toast = this.toastCtrl.create({
                      message: "You're offline Check your connection and try again",
                      duration: 3000,
                      position: 'bottom'
                    }); toast.present();
                  }

                });
          
          },error => {
            loader.dismiss();
            this.adsProvider.adDescription(this.adId)
                .then( result =>{
                  
                  this.result = JSON.parse(result.data);

                  //alert("ad description result is: "+ this.result);
                  if(this.result.status_code === 200){

                    loader.dismiss();
                    this.adDescriptionObj = this.result.ad;
                    this.phone = this.result.ad.mobile;
                  
                  }

                  else{
                    loader.dismiss();
                    this.navCtrl.pop();
                    let toast = this.toastCtrl.create({
                      message: "You're offline Check your connection and try again",
                      duration: 3000,
                      position: 'bottom'
                    }); toast.present();
                  }

                });
          }
        );

      }
      else{
        loader.dismiss();
        this.navCtrl.pop();
        let toast = this.toastCtrl.create({
          message: "You're Offline",
          duration: 3000,
          position: 'bottom'
        }); toast.present();
      }
    })
  }

  delete(adId){

    let loader = this.loadingCtrl.create({
      spinner: 'crescent',
      content: ''
    });

    loader.present().then(() => {

      this.nativeStorage.getItem('myitem')
      .then(
        data =>{
          
          if(data.token_api){

            this.adsProvider.delete_ad(data.token_api, adId)
              .then( result =>{

                this.deleteRes = JSON.parse(result.data);

              //alert("delete ad result is: "+ JSON.stringify(result))
                if(this.deleteRes.status_code === 200){

                  loader.dismiss();
                  this.navCtrl.push('MyAdsPage');
                  let toast = this.toastCtrl.create({
                    message: "تم مسح الاعلان",
                    duration: 3000,
                    position: 'bottom'
                  }); toast.present();
                
                }
                else{

                  loader.dismiss();
                  let toast = this.toastCtrl.create({
                    message: "You're offline Check your connection and try again",
                    duration: 3000,
                    position: 'bottom'
                  }); toast.present();
                }

              }).catch(error=>{

                loader.dismiss();
                let toast = this.toastCtrl.create({
                  message: "You're offline Check your connection and try again",
                  duration: 3000,
                  position: 'bottom'
                }); toast.present();
              })
          }
          else{

            loader.dismiss();
            this.navCtrl.setRoot('UserNamePage')
            let toast = this.toastCtrl.create({
              message: "You're Offline",
              duration: 3000,
              position: 'bottom'
            }); toast.present();
          }

        },error => {
            loader.dismiss();
            console.error(error)
          }
      );
  })
}

  presentPopover( adId) {

    let popover = this.popoverCtrl.create('DeletePopoverPage',{
      adId: adId
    });
    popover.present({

    });
  }

  phoneCall(){
  
    this.callNumber.callNumber(this.phone, true)
    .then(res => console.log('Launched dialer!'+ res))
    .catch(err => console.log('Error launching dialer'+ err));
    
  }

}
