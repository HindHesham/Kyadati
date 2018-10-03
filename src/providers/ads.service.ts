import { Injectable } from "@angular/core";
import { HTTP, HTTPResponse } from '@ionic-native/http';
import 'rxjs/add/operator/map';


@Injectable()

export class adsProvider {
    
    addAdsUrl = "http://car.zodiacstudio.net/add_ads";
    allAdslUrl = "http://car.zodiacstudio.net/all_ads";
    adDescriptionUrl = "http://car.zodiacstudio.net/ad_description";
    myAdsUrl = "http://car.zodiacstudio.net/my_ads";
    deleteAdUrl = "http://car.zodiacstudio.net/delete_ad";


    constructor(public httpPlugin: HTTP) { }

    add_ads(token_api, first_image, second_image, third_image, forth_image, fifth_image, title, type, production_year, kilometres, engine, fuel, price){
        
        
        let headers = { };
        this.httpPlugin.setDataSerializer("json");
       
        let params = { "token_api": token_api,
                        "first_image": first_image,
                        "second_image": second_image,
                        "third_image": third_image,
                        "forth_image": forth_image,
                        "fifth_image": fifth_image,
                        "title": title,
                        "type": type,
                        "production_year": production_year,
                        "kilometres": kilometres,
                        "engine": engine,
                        "fuel": fuel,
                        "price": price
                    }     
        
        
        return this.httpPlugin.post(this.addAdsUrl, params, {'Content-Type': 'application/json; charset=utf-8', 'Access-Control-Allow-Origin': '*'})
           
    }

    allAds(){
        
        
        let headers = { };
        this.httpPlugin.setDataSerializer("json");
       
        let params = { "secret_code": "6CA9DB8E111A727DE7A57FDF7877A" }     

        return this.httpPlugin.post(this.allAdslUrl, params, {'Content-Type': 'application/json; charset=utf-8', 'Access-Control-Allow-Origin': '*'})
           
    }

    adDescription(adId){

        
        let headers = { };
        this.httpPlugin.setDataSerializer("json");
       
        let params = { "secret_code": "6CA9DB8E111A727DE7A57FDF7877A",
                        "id":adId 
                    }     

        return this.httpPlugin.post(this.adDescriptionUrl, params, {'Content-Type': 'application/json; charset=utf-8', 'Access-Control-Allow-Origin': '*'})
    
    }

    myAds(token_api){

       
        let headers = { };
        this.httpPlugin.setDataSerializer("json");
       
        let params = { "token_api": token_api }     
        
        return this.httpPlugin.post(this.myAdsUrl, params, {'Content-Type': 'application/json; charset=utf-8', 'Access-Control-Allow-Origin': '*'})

    }

    delete_ad(token_api, adId){

        
        let headers = { };
        this.httpPlugin.setDataSerializer("json");
       
        let params = { "token_api": token_api,
                        "id":adId 
                    }    
        

        return this.httpPlugin.post(this.deleteAdUrl, params, {'Content-Type': 'application/json; charset=utf-8', 'Access-Control-Allow-Origin': '*'})

    }
}