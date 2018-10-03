import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';

import { importantPlacesProvider } from '../../providers/importantPlaces.service';
import { NativeStorage } from '@ionic-native/native-storage';
import { citiesProvider } from '../../providers/cities.service';

/**
 * Generated class for the ImportantPlacesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'ImportantPlacesPage'
})
@Component({
  selector: 'page-important-places',
  templateUrl: 'important-places.html',
})
export class ImportantPlacesPage {
  public placesType: String= "اماكن حكوميه";
  public status: String;
  public result: any;
  public citiesResult: any;
  public mintenanaceRresult: any;
  rate: any;
  public governmentPlacesObj: any = [];
  public maintenanaceCentersObj: any = [];
  public citiesObj: any = [];
  public selected: string;
  public filteredGovernmentPlacesObj: any = [];
  public filteredMaintenanaceCentersObj: any = [];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    private nativeStorage: NativeStorage,
    public citiesProvider: citiesProvider,
    private importantPlacesProvider: importantPlacesProvider) {
      this.selected = 'all';
      this.status = 'اماكن حكوميه'
  }

  ngOnInit(){

    this.government_places();
    this.maintenanace_centers();
    this.allCities();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImportantPlacesPage');
  }

  government_places(){

    let loader = this.loadingCtrl.create({
      spinner: 'crescent',
      content: ''
    });

    loader.present().then(() => {

     
            

              this.importantPlacesProvider.government_places()
              .then(result=>{

                this.result = JSON.parse(result.data);

                //console.log(" government_places is: "+ JSON.stringify(result));
                if(this.result.status_code === 200){

                  loader.dismiss();
                  this.governmentPlacesObj = this.result.government_places;
                  this.getAllGovernmentPlaces();
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

  getAllGovernmentPlaces(){

    return this.governmentPlacesObj;
  }

  maintenanace_centers(){

    let loader = this.loadingCtrl.create({
      spinner: 'crescent',
      content: ''
    });

    loader.present().then(() => {

         

              this.importantPlacesProvider.maintenanace_centers()
              .then(result=>{

                this.mintenanaceRresult = JSON.parse(result.data);
                //console.log("maintenanace_centers result is: "+ JSON.stringify(result));
                if(this.citiesResult.status_code === 200){

                  loader.dismiss();
                  this.maintenanaceCentersObj = this.mintenanaceRresult.maintenanace_centers;
                  this.getAllMaintenanaceCenters();
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

  getAllMaintenanaceCenters(){

    return this.maintenanaceCentersObj;
  }

  allCities(){

            this.citiesProvider.cities()
            .then(result=>{

              this.citiesResult = JSON.parse(result.data);

              //console.log("cities result is: "+ JSON.stringify(result));
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
      this.getAllGovernmentPlaces();
      this.getAllMaintenanaceCenters();
    }
    else{
      this.filteredGovernmentPlacesObj = this.governmentPlacesObj.filter(value => value.city_name === e );
      this.filteredMaintenanaceCentersObj = this.maintenanaceCentersObj.filter(value => value.city_name === e );

      this.getAllFilteredGovernmentPlaces();
      this.getAllFilteredMaintenanaceCenters();
    }
   
  }

  getAllFilteredGovernmentPlaces(){

    return this.filteredGovernmentPlacesObj;
  }

  getAllFilteredMaintenanaceCenters(){

    return this.filteredMaintenanaceCentersObj;

  }

  gotoGovernmentPlaceDescription(placeId){
    this.navCtrl.push('governmentPlacesDetailsPage', {
      placeId: placeId
    });
  }

  maintenanaceCenterDescription(maintenanceplaceId){
    
    this.navCtrl.push('MaintenanaceCenterDescriptionPage', {
      maintenanceplaceId: maintenanceplaceId
    });
  }
  saveUserRating(e) {
    console.log('clicked: ', e);
  }

}
