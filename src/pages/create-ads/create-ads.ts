import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController} from 'ionic-angular';
import { ImagePicker } from '@ionic-native/image-picker';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { NativeStorage } from '@ionic-native/native-storage';
import { adsProvider } from '../../providers/ads.service';


@IonicPage({
  name: 'CreateAdsPage'
})
@Component({
  selector: 'page-create-ads',
  templateUrl: 'create-ads.html',
})
export class CreateAdsPage {
  public images = [];
  public base64Obj = [];
  public imagebase64: string;
  public splitStr: any;
  public result: any;

  public first_image: any;
  public second_image: any;
  public third_image: any;
  public forth_image: any;
  public fifth_image: any;
 
  eventKey:any;
  public title: any;
  public production_year: any;
  public kilometres: any;
  public type: any;
  public engine: any;
  public fuel: any;
  public price: any;
  
  createAdsForm: FormGroup;
  submitAttempt: boolean = false;

  titleFormName: AbstractControl;
  production_yearFormName: AbstractControl;
  kilometrsFormName: AbstractControl;
  engineFormName: AbstractControl;
  priceFormName: AbstractControl;

  constructor( public navCtrl: NavController, 
    public navParams: NavParams, 
    public toastCtrl: ToastController,
    private imagePicker: ImagePicker,
    private nativeStorage: NativeStorage,
    public formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    public adsProvider: adsProvider) {

      this.first_image = "";
      this.second_image = "";
      this.third_image = "";
      this.forth_image = "";
      this.fifth_image = "";

      this.createAdsForm = formBuilder.group({
        titleFormName: ['', Validators.compose([Validators.required])],
        production_yearFormName: ['', Validators.compose([Validators.required])],
        kilometrsFormName: ['', Validators.compose([Validators.required])],
        engineFormName: ['', Validators.compose([Validators.required])],
        priceFormName: ['', Validators.compose([Validators.required])],
    });
    this.titleFormName = this.createAdsForm.controls['titleFormName'];
    this.production_yearFormName = this.createAdsForm.controls['production_yearFormName'];
    this.kilometrsFormName = this.createAdsForm.controls ['kilometrsFormName'];
    this.engineFormName = this.createAdsForm.controls ['engineFormName'];
    this.priceFormName = this.createAdsForm.controls ['priceFormName'];    

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateAdsPage');
  }

  onKeyPress(event) {
    console.log(event)
    //this.eventKey = event.key;
  }

  getPictures(){ 

    const options = {
      maximumImagesCount: 5,
      quality: 50,
      outputType: 1
      }
      
      this.imagePicker.getPictures(options).then((results) => {
      for (var i = 0; i < results.length; i++) {

        this.imagebase64 = 'data:image/jpeg;base64,' + results[i];
        //alert(this.imagebase64);
        this.base64Obj.push(this.imagebase64);

        }
      }, (err) => {
      console.log('err' + err);
      });

  }

  addAds(){

    let loader = this.loadingCtrl.create({
      spinner: 'crescent',
      content: ''
    });

    loader.present().then(() => {

        if(this.base64Obj[0]){
          this.first_image = this.base64Obj[0];
        }else{
          this.first_image = ""
        }
        if(this.base64Obj[1] ){
          this.second_image = this.base64Obj[1];
        }else{
          this.second_image = ""
        }
        if(this.base64Obj[2]){
          this.third_image = this.base64Obj[2];
        }else{
          this.third_image = "";
        }
        if(this.base64Obj[3]){
          this.forth_image = this.base64Obj[3];
        }else{
          this.forth_image = "";
        }
        if(this.base64Obj[4]){
          this.fifth_image = this.base64Obj[4];
        }else{
          this.fifth_image = "";
        }
        
        this.nativeStorage.getItem('myitem')
        .then(
          data =>{

            if(data.token_api){

              this.adsProvider.add_ads(data.token_api, this.first_image, this.second_image, this.third_image, this.forth_image, this.fifth_image,
              this.title, this.type, this.production_year, this.kilometres, this.engine, this.fuel, this.price)
              
              .then( result => {

//alert("subscribe result is: " +this.result);
                this.result = JSON.parse(result.data);

                if(this.result.status_code === 200){
                  
                  this.images = [];
                  this.base64Obj = [];
                  this.imagebase64 = "";

                  loader.dismiss();
                  this.navCtrl.pop();
                  let toast = this.toastCtrl.create({
                    message: "في انتظار موافقة الأدمن لنشر الاعلان",
                    duration: 3000,
                    position: 'bottom'
                  }); toast.present();
                }

                else if(this.result.status_code === 402 || this.result.status_code === 406){

                  loader.dismiss();
                  let toast = this.toastCtrl.create({
                    message: "You're Offline",
                    duration: 3000,
                    position: 'bottom'
                  }); toast.present();
                }

                else{

                  loader.dismiss();
                  let toast = this.toastCtrl.create({
                    message: "Please Insert Valid Data",
                    duration: 3000,
                    position: 'bottom'
                  }); toast.present();
                }
              }).catch(error =>{
                loader.dismiss();
                  let toast = this.toastCtrl.create({
                    message: "Check your internet connection and try again",
                    duration: 3000,
                    position: 'bottom'
                  }); toast.present();
              })

            }else{

              loader.dismiss();
         
              let toast = this.toastCtrl.create({
                message: "Check your internet connection and try again",
                duration: 3000,
                position: 'bottom'
              }); toast.present();
            }

          },error => {
            loader.dismiss();
            alert(error)
          }
        );
      })
  }
  

}
