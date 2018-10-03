import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController} from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { educationalContentProvider } from '../../providers/educationalContent.service';

/**
 * Generated class for the EducationalContentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'EducationalContentPage'
})
@Component({
  selector: 'page-educational-content',
  templateUrl: 'educational-content.html',
})
export class EducationalContentPage {
  public learningType: String ;
  public status: String;
  public educationalContentObj: any =[];
  public result: any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private nativeStorage: NativeStorage,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    private iab: InAppBrowser,
    public educationalContentProvider: educationalContentProvider) {
      
    this.learningType = 'video';
    this.status = 'فيديوهات'
  }

  ngOnInit(){

    this.educationalContent();
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad EducationalContentPage');
  }

  showVideo(path){

    const browser = this.iab.create(path);
    browser.show();


  }

  gotoFullSize(contentPath, type){

    this.navCtrl.push('InphographicsFullSizePage',{
      path: contentPath,
      type: type
    })
  }

  educationalContent(){


    let loader = this.loadingCtrl.create({
      spinner: 'crescent',
      content: ''
    });

    loader.present().then(() => {

              this.educationalContentProvider.educational_content(this.learningType)
              .then( result=> {

                this.result = JSON.parse(result.data);
                  if(this.result.status_code === 200){

                    loader.dismiss();
                    this.educationalContentObj = this.result.educational_content;
                    this.getAllEducationalContent();
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
              }).catch(error=>{

                    loader.dismiss();
                    let toast = this.toastCtrl.create({
                      message: "Check your connection and try again",
                      duration: 3000,
                      position: 'bottom'
                    }); toast.present();
              })
         
    })
  }

  getAllEducationalContent(){

    return this.educationalContentObj;
  }


}
