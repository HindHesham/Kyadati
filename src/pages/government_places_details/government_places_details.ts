import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, ToastController, LoadingController } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';

import { NativeStorage } from '@ionic-native/native-storage';
import { importantPlacesProvider } from '../../providers/importantPlaces.service';

declare var google;

@IonicPage({
  name: 'governmentPlacesDetailsPage'
})
@Component({
  selector: 'page-government-places-details',
  templateUrl: 'government_places_details.html',
})
export class governmentPlacesDetailsPage {
  @ViewChild('map') mapElement;

  rate: any = 4;  
  public placeId: any;
  public governmentPlaceObj: any = [];
  public result: any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public popoverCtrl: PopoverController,
    public menu: MenuController,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    private nativeStorage: NativeStorage,
    private importantPlacesProvider: importantPlacesProvider) {
      
      this.menu.enable(false, 'menu')
      this.placeId = navParams.get('placeId');
  }

  ngOnInit(){
    this.government_places_details();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileDetailsPage');
  }

  government_places_details(){

    let loader = this.loadingCtrl.create({
      spinner: 'crescent',
      content: ''
    });

    loader.present().then(() => {

      this.placeId = this.navParams.get('placeId');
      if(this.placeId){

              this.importantPlacesProvider.government_place_description(this.placeId)
                .then( result =>{

                  this.result = JSON.parse(result.data);
                  
                  if(this.result.status_code === 200){

                    loader.dismiss();
                    this.governmentPlaceObj = this.result.government_place;
                    this.map();
                  }

                  else{
                    alert("error");

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
                  this.navCtrl.pop();
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

  saveUserRating(e) {
    console.log('clicked: ', e);
  }

  gotoMap(){

    this.navCtrl.push('MapPage',{
      "latitude": this.governmentPlaceObj.latitude,
      "longitude": this.governmentPlaceObj.longitude
    });

  }

  map(){

    let latLing = new google.maps.LatLng(this.governmentPlaceObj.latitude, this.governmentPlaceObj.longitude);
      let mapOptions = {
        center: latLing,
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  }
  
}
