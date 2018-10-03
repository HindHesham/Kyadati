import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import { adsProvider } from '../../providers/ads.service';
/**
 * Generated class for the MyAdsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'MyAdsPage'
})
@Component({
  selector: 'page-my-ads',
  templateUrl: 'my-ads.html',
})
export class MyAdsPage {

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

  ionViewDidEnter() {
    this.allAds();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyAdsPage');
  }

  allAds(){

    let loader = this.loadingCtrl.create({
      spinner: 'crescent',
      content: ''
    });

    loader.present().then(() => {

      this.nativeStorage.getItem('myitem')
        .then(
          data =>{
            //alert("from my ads view : " + JSON.stringify(data));
            if(data.token_api){
              
              this.adsProvider.myAds(data.token_api)
              .then(result=>{

                this.result = JSON.parse(result.data);
                //alert("all my ads result is: "+ JSON.stringify(result));
                
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
            }

            else{

              loader.dismiss();
              this.navCtrl.setRoot('UserNamePage');
              let toast = this.toastCtrl.create({
                message: "PLese Login First",
                duration: 3000,
                position: 'bottom'
              }); toast.present();
            }
            
          },
          error => {
            loader.dismiss();
            console.error(error)
          }
        );
    })
  }

  getAllAds(){
    
    return this.allAdsObj;
  }

  
  gotoAdsProfile(adId){

    this.navCtrl.push('DetailsAdsPage',{
      adId: adId,
      page: 'my_ads'
    });
  }

  close(){
    this.navCtrl.setRoot('AdsPage');
  }
  createAds(){
    this.navCtrl.push('CreateAdsPage');
  }
}
