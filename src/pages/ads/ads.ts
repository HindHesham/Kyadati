import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import { adsProvider } from '../../providers/ads.service';

/**
 * Generated class for the AdsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'AdsPage'
})
@Component({
  selector: 'page-ads',
  templateUrl: 'ads.html',
})
export class AdsPage {

  public allAdsObj: any = [];
  public result: any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private nativeStorage: NativeStorage,
    private adsProvider: adsProvider,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController) {

  }

  ngOnInit(){

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdsPage');
  }

  ionViewDidEnter() {
    this.allAds();
  }

  allAds(){

    let loader = this.loadingCtrl.create({
      spinner: 'crescent',
      content: ''
    });

    loader.present().then(() => {


              
              this.adsProvider.allAds()
              .then(result=>{

                this.result = JSON.parse(result.data);

                if(this.result.status_code === 200){

                  loader.dismiss();
                  this.allAdsObj = this.result.ads;
                  this.getAllAds();
                }
                else{
                
                  loader.dismiss();
                  this.navCtrl.pop();
                  let toast = this.toastCtrl.create({
                    message: "Check your connection and try again",
                    duration: 3000,
                    position: 'bottom'
                  }); toast.present();
                }

              }).catch(error => {
                loader.dismiss();
                let toast = this.toastCtrl.create({
                  message: "You're Offline",
                  duration: 3000,
                  position: 'bottom'
                }); toast.present();
              });
         
    })
  }

  getAllAds(){

    return this.allAdsObj;
  }

  gotoAdsProfile(adId){

    this.navCtrl.push('DetailsAdsPage',{
      adId: adId
    });
  }

  createAds(){

    this.nativeStorage.getItem('myitem')
    .then(
      data =>{
        
        this.navCtrl.push('CreateAdsPage');
        
    },error => {

      this.navCtrl.push('SignUpPage');
              let toast = this.toastCtrl.create({
                message: "يجب التسجيل اولا",
                duration: 3000,
                position: 'bottom'
              }); toast.present();

    });
   
  }

  gotoFilter(){

    this.navCtrl.push('FilterAdsPage',{
      adsObj: this.allAdsObj
    });
  }

  showMyAds(){

    this.nativeStorage.getItem('myitem')
    .then(
      data =>{
        
        this.navCtrl.push('MyAdsPage')
        
    },error => {

      this.navCtrl.push('SignUpPage');
              let toast = this.toastCtrl.create({
                message: "يجب التسجيل اولا",
                duration: 3000,
                position: 'bottom'
              }); toast.present();

    });
    
  }

}
