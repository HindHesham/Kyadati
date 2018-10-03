import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the FilterAdsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'FilterAdsPage'
})
@Component({
  selector: 'page-filter-ads',
  templateUrl: 'filter-ads.html',
})
export class FilterAdsPage {

  public allAdsObj: any = [];
  public filterAdsObj: any = [];
  public carType: any;
  public fuel: any; 
  public productionYear: any;
  public kilometres: any;
  public engine: any;
  public startPrice: any;
  public endPrice: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController) {

      this.allAdsObj = navParams.get('adsObj');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilterAdsPage');
  }
  ionViewWillEnter() {
    this.viewCtrl.showBackButton(false);
  }
  close(){
    this.navCtrl.pop();
  }

  filter(){

    this.filterAdsObj = this.allAdsObj.filter(value => value.production_year === this.productionYear || value.kilometres === this.kilometres || value.engine === this.engine || value.fuel === this.fuel || value.type === this.carType || (this.startPrice <= value.price >= this.endPrice) );

    this.navCtrl.push('FilterAdsResultPage',{
      filterAds: this.filterAdsObj
    })
  }

}
