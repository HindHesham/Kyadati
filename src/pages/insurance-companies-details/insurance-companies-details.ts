import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, PopoverController, LoadingController} from 'ionic-angular';

import { NativeStorage } from '@ionic-native/native-storage';
import { insuranceCompaniesProvider } from '../../providers/insuranceCompanies.service';
import { CallNumber } from '@ionic-native/call-number';

/**
 * Generated class for the InsuranceCompaniesDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'InsuranceCompaniesDetailsPage'
})
@Component({
  selector: 'page-insurance-companies-details',
  templateUrl: 'insurance-companies-details.html',
})
export class InsuranceCompaniesDetailsPage {
  public companyId: any;
  public companyDescriptionObj: any = [];
  public commentsObj: any = [];
  public phone: any;
  public token: any;
  public result: any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public popoverCtrl: PopoverController,
    private nativeStorage: NativeStorage,
    private callNumber: CallNumber,
    public insuranceCompaniesProvider: insuranceCompaniesProvider) {
  }

  ionViewDidEnter(){
    this.getCompanyDetails();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InsuranceCompaniesDetailsPage');
  }

  getCompanyDetails(){

    let loader = this.loadingCtrl.create({
      spinner: 'crescent',
      content: ''
    });

    loader.present().then(() => {

      this.companyId = this.navParams.get('companyId');
      if(this.companyId){

              this.insuranceCompaniesProvider.insuranceCompanyDescription( this.companyId)
                .then( result =>{

                  this.result = JSON.parse(result.data);

                  //console.log("result is: "+ JSON.stringify(result))
                  if(this.result.status_code === 200){

                    loader.dismiss();
                    this.companyDescriptionObj = this.result.insurance_company;
                    this.commentsObj = this.result.insurance_company.comments;
                    this.phone = this.result.insurance_company.phone;
                    
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

  getAllComments(){

    return this.commentsObj;
  }

  gotoMap(){

    this.navCtrl.push('MapPage',{
      "latitude": this.companyDescriptionObj.latitude,
      "longitude": this.companyDescriptionObj.longitude
    });
  }

  phoneCall(){
    this.callNumber.callNumber(this.phone, true)
    .then(res => console.log('Launched dialer!'+ res))
    .catch(err => console.log('Error launching dialer'+ err));
  }

  presentPopover(myEvent) {

    this.nativeStorage.getItem('myitem')
    .then(
      data =>{
        
        let popover = this.popoverCtrl.create('PopoverPage',{
          id: this.companyDescriptionObj.id,
          type: 3
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

}
