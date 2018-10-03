import { Injectable } from "@angular/core";
import { HTTP, HTTPResponse } from '@ionic-native/http';
import 'rxjs/add/operator/map';


@Injectable()

export class importantPlacesProvider {

    government_placesUrl = "http://car.zodiacstudio.net/government_places";
    government_place_descriptionUrl = "http://car.zodiacstudio.net/government_place_description";

    maintenanace_centersUrl = "http://car.zodiacstudio.net/maintenanace_centers";
    maintenanace_center_descriptionUrl = "http://car.zodiacstudio.net/maintenanace_center_description";

    constructor(public httpPlugin: HTTP) { }

    government_places(){

        let headers = { };
        this.httpPlugin.setDataSerializer("json");
       
        let params = { "secret_code": "6CA9DB8E111A727DE7A57FDF7877A" }                

        //console.log("body: "+ JSON.stringify(body));
        return this.httpPlugin.post(this.government_placesUrl, params, {'Content-Type': 'application/json; charset=utf-8', 'Access-Control-Allow-Origin': '*'})

    }

    government_place_description(id){

        let headers = { };
        this.httpPlugin.setDataSerializer("json");
       
        let params = { "secret_code": "6CA9DB8E111A727DE7A57FDF7877A",
                        "id": id
                    }                

        //console.log("body: "+ JSON.stringify(body));
        return this.httpPlugin.post(this.government_place_descriptionUrl, params, {'Content-Type': 'application/json; charset=utf-8', 'Access-Control-Allow-Origin': '*'})
   
    }

    maintenance_center_description(id){

        let headers = { };
        this.httpPlugin.setDataSerializer("json");
       
        let params = { "secret_code": "6CA9DB8E111A727DE7A57FDF7877A",
                        "id": id
                    }                

        //console.log("body: "+ JSON.stringify(body));
        return this.httpPlugin.post(this.maintenanace_center_descriptionUrl, params, {'Content-Type': 'application/json; charset=utf-8', 'Access-Control-Allow-Origin': '*'})

    }

    maintenanace_centers(){

        let headers = { };
        this.httpPlugin.setDataSerializer("json");
       
        let params = { "secret_code": "6CA9DB8E111A727DE7A57FDF7877A" }                


        //console.log("body: "+ JSON.stringify(body));
        return this.httpPlugin.post(this.maintenanace_centersUrl, params, {'Content-Type': 'application/json; charset=utf-8', 'Access-Control-Allow-Origin': '*'})

    }
}