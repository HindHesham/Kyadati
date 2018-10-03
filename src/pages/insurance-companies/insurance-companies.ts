import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';

import { NativeStorage } from '@ionic-native/native-storage';
import { insuranceCompaniesProvider } from '../../providers/insuranceCompanies.service';
import { citiesProvider } from '../../providers/cities.service';

/**
 * Generated class for the InsuranceCompaniesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'InsuranceCompaniesPage'
})
@Component({
  selector: 'page-insurance-companies',
  templateUrl: 'insurance-companies.html',
})
export class InsuranceCompaniesPage {

  public insuranceCompaniesObj: any;
  public selected: string;
  public citiesObj: any = [];
  public filteredInsuranceCompaniesObj: any = [];
  public result: any;
  public citiesResult: any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    private nativeStorage: NativeStorage,
    public citiesProvider: citiesProvider,
    public insuranceCompaniesProvider: insuranceCompaniesProvider) {

      this.selected = 'all';
  }

  ngOnInit(){

    this.insuranceCompanies();
    this.allCities();
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InsuranceCompaniesPage');
  }

  gotoProfileDetails(companyId){

    this.navCtrl.push('InsuranceCompaniesDetailsPage',{
      companyId: companyId
    })
  }

  insuranceCompanies(){

    let loader = this.loadingCtrl.create({
      spinner: 'crescent',
      content: ''
    });

    loader.present().then(() => {

   

              this.insuranceCompaniesProvider.allinsuranceCompanies()
              .then(result=>{

                this.result = JSON.parse(result.data);

                //console.log("insurance companies result is: "+ JSON.stringify(result));
                if(this.result.status_code === 200){

                  loader.dismiss();
                  this.insuranceCompaniesObj = this.result.insurance_companies;
                  this.getAllInsuranceCompanies();
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

  getAllInsuranceCompanies(){

    return this.insuranceCompaniesObj;

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
      this.getAllInsuranceCompanies();
    }
    else{
      this.filteredInsuranceCompaniesObj = this.insuranceCompaniesObj.filter(value => value.city_name === e );
      this.getAllFilteredInsuranceCompanies();
    }
   
  }

  getAllFilteredInsuranceCompanies(){

    return this.filteredInsuranceCompaniesObj;
  }

}
