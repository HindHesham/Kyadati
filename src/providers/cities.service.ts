import { Injectable } from "@angular/core";
import { HTTP, HTTPResponse } from '@ionic-native/http';
import 'rxjs/add/operator/map';


@Injectable()

export class citiesProvider {
    
    citiesUrl = "http://car.zodiacstudio.net/cities";
    

    constructor(public httpPlugin: HTTP) { }

    cities(){
        
        let headers = { };
        this.httpPlugin.setDataSerializer("json");
       
        let params = { "secret_code": "6CA9DB8E111A727DE7A57FDF7877A" }     
        
        return this.httpPlugin.post(this.citiesUrl, params, {'Content-Type': 'application/json; charset=utf-8', 'Access-Control-Allow-Origin': '*'})
           
    }
    
}
