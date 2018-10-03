import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';

import { NativeStorage } from '@ionic-native/native-storage';
import { drivingSchoolProvider } from '../../providers/drivingSchool.service';
import { citiesProvider } from '../../providers/cities.service';

/**
 * Generated class for the DrivingSchoolsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'DrivingSchoolsPage'
})
@Component({
  selector: 'page-driving-schools',
  templateUrl: 'driving-schools.html',
})
export class DrivingSchoolsPage {
  public rate: any;
  public drivingSchoolObj: any =[];
  public filterDrivingSchoolObj : any = [];
  public citiesObj: any = [];
  public selected: string;
  public token = '15245142205ade3dac3c933';
  public result: any;
  public citiesResult: any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    private nativeStorage: NativeStorage,
    public toastCtrl: ToastController,
    public drivingSchoolProvider: drivingSchoolProvider,
    public citiesProvider: citiesProvider) { 

      this.selected = 'all';
     }

  ngOnInit() {

    this.allDrivingSchools();
    this.allCities();
    
  }

  ionViewDidLoad() {}
 
  allDrivingSchools(){

    let loader = this.loadingCtrl.create({
      spinner: 'crescent',
      content: ''
    });

    loader.present().then(() => {

              this.drivingSchoolProvider.allDrivingSchool()
              .then(result=>{

                this.result = JSON.parse(result.data);
                //console.log("driving school result is: "+ JSON.stringify(result));
                if(this.result.status_code === 200){

                  loader.dismiss();
                  this.drivingSchoolObj = this.result.driving_schools;
                  this.getAllDrivingSchool();
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
                  message: "أنت لست متصل بالانترنت",
                  duration: 3000,
                  position: 'bottom'
                }); toast.present();

              });
            
         
    })
  }

  getAllDrivingSchool(){
    
    return this.drivingSchoolObj;
  }

  allCities(){


            this.citiesProvider.cities()
            .then(result=>{

              //console.log("cities result is: "+ JSON.stringify(result));
              this.citiesResult = JSON.parse(result.data);

              if(this.citiesResult.status_code === 200){
                
                this.citiesObj = this.citiesResult.cities;
                this.getAllCities();
              }

              else{
                let toast = this.toastCtrl.create({
                  message: "Check Your internet connection and try again",
                  duration: 3000,
                  position: 'bottom'
                }); toast.present();
              }

            }).catch(error => {
              let toast = this.toastCtrl.create({
                message: "You're Offline",
                duration: 3000,
                position: 'bottom'
              }); toast.present();
            });
           
         
      
  }

  getAllCities(){
    return this.citiesObj;
  }

  cityChange(e){
    
    if(e === 'all'){
      this.getAllDrivingSchool();
    }
    else{
      this.filterDrivingSchoolObj = this.drivingSchoolObj.filter(value => value.city_name === e );
      this.getAllFilteredDrivingSchool();
    }
   
  }

  getAllFilteredDrivingSchool(){
    return this.filterDrivingSchoolObj;
  }

  gotoSchoolProfile(drivingSchoolId){
    //e.stopPropagation();
   // alert("from click method: " + drivingSchoolObj);
    this.navCtrl.push('DirvingSchoolDetailsPage', {
      drivingSchoolId: drivingSchoolId
    });
  }

  saveUserRating(e) {
    console.log('clicked: ', e);
  }

 
  
}
