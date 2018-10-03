import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

// import { GoogleMap, GoogleMapsEvent, GoogleMapsLatLng } from 'ionic-native'
/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google;

@IonicPage({
  name: 'MapPage'
})
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  @ViewChild('map') mapElement;

  public map: any;
  
  public latitude: any;
  public longitude: any;

  // map: GoogleMap;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public platform: Platform,
    public Geolocation: Geolocation) {

      // this.loadMap();

      this.latitude = navParams.get('latitude');
      this.longitude = navParams.get('longitude')
     }


  //    loadMap(){
 
  //     let location = new GoogleMapsLatLng(this.latitude,this.longitude);

  //     this.map = new GoogleMap('map', {
  //       'backgroundColor': 'white',
  //       'controls': {
  //         'compass': true,
  //         'myLocationButton': true,
  //         'indoorPicker': true,
  //         'zoom': true
  //       },
  //       'gestures': {
  //         'scroll': true,
  //         'tilt': true,
  //         'rotate': true,
  //         'zoom': true
  //       },
  //       'camera': {
  //         'latLng': location,
  //         'tilt': 30,
  //         'zoom': 15,
  //         'bearing': 50
  //       }
  //     });

  //     this.map.on(GoogleMapsEvent.MAP_READY).subscribe(() => {
  //         console.log('Map is ready!');
  //     });

  // }


  ionViewDidLoad(){


    
      let latLing = new google.maps.LatLng(this.latitude, this.longitude);
      let mapOptions = {
        center: latLing,
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  
  }

}
