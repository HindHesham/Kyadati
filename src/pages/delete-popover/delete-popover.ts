import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';

import { NativeStorage } from '@ionic-native/native-storage';
import { adsProvider } from '../../providers/ads.service';

@IonicPage({
  name: 'DeletePopoverPage'
})
@Component({
  selector: 'page-delete-popover',
  templateUrl: 'delete-popover.html',
})
export class DeletePopoverPage {
  public adId: any;
  public result: any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private nativeStorage: NativeStorage,
    private adsProvider: adsProvider,
    public toastCtrl: ToastController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopoverPage');
  }

  delete(){

    this.adId = this.navParams.get('adId');
    if(this.adId){

      this.nativeStorage.getItem('myitem')
      .then(
        data =>{
          
          if(data.token_api){
            this.adsProvider.delete_ad(data.token_api, this.adId)
              .then( result =>{

                this.result = JSON.parse(result.data);
               //alert("delete ad result is: "+ JSON.stringify(result))
                if(this.result.status_code === 200){

                  this.navCtrl.setRoot('MyAdsPage');
                  let toast = this.toastCtrl.create({
                    message: "تم مسح الاعلان",
                    duration: 3000,
                    position: 'bottom'
                  }); toast.present();
                
                }
                else{
                  this.viewCtrl.dismiss();
                  let toast = this.toastCtrl.create({
                    message: "You're offline Check your connection and try again",
                    duration: 3000,
                    position: 'bottom'
                  }); toast.present();
                }
              })
          }else{
            this.viewCtrl.dismiss();
            let toast = this.toastCtrl.create({
              message: "You're Offline",
              duration: 3000,
              position: 'bottom'
            }); toast.present();
          }
        },error => console.error(error)
      );

    }
    else{
      this.viewCtrl.dismiss();
      let toast = this.toastCtrl.create({
        message: "You're Offline",
        duration: 3000,
        position: 'bottom'
      }); toast.present();
    }

  }

  close() {
    this.viewCtrl.dismiss();
  }

}
