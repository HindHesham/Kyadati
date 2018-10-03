import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, ToastController, LoadingController} from 'ionic-angular';
import { PopoverController } from 'ionic-angular';

import { drivingSchoolProvider } from '../../providers/drivingSchool.service';
import { NativeStorage } from '@ionic-native/native-storage';
import { CallNumber } from '@ionic-native/call-number';

/**
 * Generated class for the DirvingSchoolDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name:'DirvingSchoolDetailsPage'
})

@Component({
  selector: 'page-dirving-school-details',
  templateUrl: 'dirving-school-details.html',
})

export class DirvingSchoolDetailsPage {

  rate: any ;  
  public drivingSchoolId: any;
  public commentsObj: any = [];
  public divingSchoolDescriptionObj: any = [];
  public token: any;
  private phone: any;
  public result: any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public popoverCtrl: PopoverController,
    public loadingCtrl: LoadingController,
    public menu: MenuController,
    public toastCtrl: ToastController,
    public drivingSchoolProvider: drivingSchoolProvider,
    private nativeStorage: NativeStorage,
    private callNumber: CallNumber) {
      
      this.menu.enable(false, 'menu');

  }

  

  ionViewDidEnter(){

    let loader = this.loadingCtrl.create({
      spinner: 'crescent',
      content: ''
    });

    loader.present().then(() => {

      this.drivingSchoolId = this.navParams.get('drivingSchoolId');
      if(this.drivingSchoolId){

              this.drivingSchoolProvider.drivingSchoolDescription(this.drivingSchoolId)
                .then( result =>{

                  this.result = JSON.parse(result.data);
                  //alert("result is: "+ JSON.stringify(result))
                  if(this.result.status_code === 200){

                    loader.dismiss();
                    this.divingSchoolDescriptionObj = this.result.driving_school;
                    this.commentsObj = this.result.driving_school.comments;
                    this.phone = this.result.driving_school.phone;
                    //alert("comment obj is: "+this.commentsObj);
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
                    message: "أنت غير متصل بالانترنت",
                    duration: 3000,
                    position: 'bottom'
                  }); toast.present();
                })

      }
      else{

        loader.dismiss();
        this.navCtrl.pop();
        let toast = this.toastCtrl.create({
          message: "أنت غير متصل بالانترنت",
          duration: 3000,
          position: 'bottom'
        }); toast.present();
      }
    })
  }

  ionViewDidLoad() { }

  presentPopover(e) {

    this.nativeStorage.getItem('myitem')
    .then(
      data =>{
        
        let popover = this.popoverCtrl.create('PopoverPage',{
         
          id: this.divingSchoolDescriptionObj.id,
          type: 1
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


  getAllComments(){

    return this.commentsObj;
  }

  gotoMap(){

    this.navCtrl.push('MapPage',{
      "latitude": this.divingSchoolDescriptionObj.latitude,
      "longitude": this.divingSchoolDescriptionObj.longitude
    });
  }

  phoneCall(){
    this.callNumber.callNumber(this.phone, true)
    .then(res => console.log('Launched dialer!'+ res))
    .catch(err => console.log('Error launching dialer'+ err));
  }
}
