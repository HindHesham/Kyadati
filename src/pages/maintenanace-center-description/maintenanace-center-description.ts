import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController,LoadingController, MenuController, PopoverController} from 'ionic-angular';

import { CallNumber } from '@ionic-native/call-number';
import { NativeStorage } from '@ionic-native/native-storage';
import { importantPlacesProvider } from '../../providers/importantPlaces.service';
/**
 * Generated class for the MaintenanaceCenterDescriptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage({
  name: 'MaintenanaceCenterDescriptionPage'
})
@Component({
  selector: 'page-maintenanace-center-description',
  templateUrl: 'maintenanace-center-description.html',
})
export class MaintenanaceCenterDescriptionPage {

  public placeId: any;
  public maintenanceCenterObj: any = [];
  public commentsObj: any = [];
  public phone: any;
  public token: any;
  public result: any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public menu: MenuController,
    public popoverCtrl: PopoverController,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    private nativeStorage: NativeStorage,
    private callNumber: CallNumber,
    private importantPlacesProvider: importantPlacesProvider) {

      this.menu.enable(false, 'menu')
  }

  ionViewDidEnter(){
    this.maintenane_centers_details();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MaintenanaceCenterDescriptionPage');
  }

  maintenane_centers_details(){

    let loader = this.loadingCtrl.create({
      spinner: 'crescent',
      content: ''
    });

    loader.present().then(() => {

      this.placeId = this.navParams.get('maintenanceplaceId');
      if(this.placeId){
  
              this.importantPlacesProvider.maintenance_center_description(this.placeId)
                .then( result =>{

                  this.result = JSON.parse(result.data);
                  //alert("result is: "+ JSON.stringify(result))
                  if(this.result.status_code === 200){

                    loader.dismiss();
                    this.maintenanceCenterObj = this.result.maintenanace_center;
                    //alert("obj"+ this.maintenanceCenterObj);
                    this.commentsObj = this.result.maintenanace_center.comments;
                    this.phone = this.result.maintenanace_center.phone;
                    this.getAllComments();
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
        this.navCtrl.pop();
        let toast = this.toastCtrl.create({
          message: "You're Offline",
          duration: 3000,
          position: 'bottom'
        }); toast.present();
      }
    })

  }

  presentPopover(myEvent) {

    this.nativeStorage.getItem('myitem')
    .then(
      data =>{
        
        let popover = this.popoverCtrl.create('PopoverPage',{
          id: this.maintenanceCenterObj.id,
          type: 2
        });
        popover.present({
        });
        
    },error => {

      this.navCtrl.push('SignUpPage');
              let toast = this.toastCtrl.create({
                message: "يجب التسجيل اولا",
                duration: 3000,
                position: 'bottom'
              }); toast.present();

    });
   
  }

  saveUserRating(e) {

    console.log('clicked: ', e);
  }

  getAllComments(){

    return this.commentsObj;
  }

  gotoMap(){

    this.navCtrl.push('MapPage',{
      "latitude": this.maintenanceCenterObj.latitude,
      "longitude": this.maintenanceCenterObj.longitude
    });
  }

  phoneCall(){

      this.callNumber.callNumber(this.phone, true)
      .then(res => console.log('Launched dialer!'+ res))
      .catch(err => console.log('Error launching dialer'+ err));
    }
}
