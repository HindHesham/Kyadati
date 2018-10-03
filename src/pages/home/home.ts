import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController  } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { userHomeProvider } from '../../providers/home.service';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({ name: 'HomePage'})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  
  public drivingSchoolObj: any =[];
  public imagesObj: any = [];
  public videoObj: any = [];
  public adsObj: any [];
  public governmentPlacesObj: any = [];
  public maintenanaceCentersObj: any = [];
  public result: any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public userHomeProvider: userHomeProvider,
    private nativeStorage: NativeStorage,
    private iab: InAppBrowser,
    public toastCtrl: ToastController ) {
      
  }

  ngOnInit(){

    this.user_home();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  user_home(){

    let loader = this.loadingCtrl.create({
      spinner: 'crescent',
      content: ''
    });

    loader.present().then(() => {

              this.userHomeProvider.user_home()
              .then(result=>{

                this.result = JSON.parse(result.data);
                //alert("user home result is: "+ this.result);

                if(this.result.status_code === 200){
                  loader.dismiss();

                  this.imagesObj = this.result.images;
                  this.videoObj = this.result.videos;
                  this.adsObj = this.result.ads;
                  this.governmentPlacesObj = this.result.government_places;
                  this.maintenanaceCentersObj = this.result.maintenanace_centers;
                  this.drivingSchoolObj = this.result.driving_schools;
                  this.getAllAds();
                  this.getAllDrivingSchool();
                  this.getAllGovernmentPlaces();
                  this.getAllMaintenanaceCenters();
                  this.getAllImages();
                  this.getAllVideos();

                }
                else{
                  loader.dismiss();
                  let toast = this.toastCtrl.create({
                    message: "check your internet connection",
                    duration: 3000,
                    position: 'bottom'
                  }); toast.present();
                }

              }).catch(error => {
              
                loader.dismiss();
                let toast = this.toastCtrl.create({
                  message: "أنت غير متصل بالانترنت",
                  duration: 3000,
                  position: 'bottom'
                }); toast.present();
              });
    })
  }

  getAllImages(){

    return this.imagesObj;

  }

  getAllVideos(){

    return this.videoObj;
  
  }

  getAllDrivingSchool(){

    return this.drivingSchoolObj;

  }

  getAllAds(){

    return this.adsObj;

  }

  getAllMaintenanaceCenters(){

    return this.maintenanaceCentersObj;

  }

  getAllGovernmentPlaces(){

    return this.governmentPlacesObj;

  }

  gotoSchoolProfile(drivingSchoolId){
    
    this.navCtrl.push('DirvingSchoolDetailsPage', {
      drivingSchoolId: drivingSchoolId
    });
  }

  gotoAdsProfile(adId){

    this.navCtrl.push('DetailsAdsPage',{
      adId: adId
    });
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

  maintenanaceCenterDescription(maintenanceplaceId){
    
    this.navCtrl.push('MaintenanaceCenterDescriptionPage', {
      maintenanceplaceId: maintenanceplaceId
    });
  }

  gotoGovernmentPlaceDescription(placeId){
    this.navCtrl.push('governmentPlacesDetailsPage', {
      placeId: placeId
    });
  }
}
