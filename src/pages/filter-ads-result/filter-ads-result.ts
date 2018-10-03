import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FilterAdsResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'FilterAdsResultPage'
})
@Component({
  selector: 'page-filter-ads-result',
  templateUrl: 'filter-ads-result.html',
})
export class FilterAdsResultPage {

  public filterAdsObj: any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams) {

      this.filterAdsObj = navParams.get('filterAds');
  }

  ngOnInit(){
    
    this.getAllFilterAds();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilterAdsResultPage');
  }

  getAllFilterAds(){

    return this.filterAdsObj;
  }

  gotoAdsProfile(adId){

    this.navCtrl.push('DetailsAdsPage',{
      adId: adId,
      page: 'my_ads'
    });
  }
  
}
