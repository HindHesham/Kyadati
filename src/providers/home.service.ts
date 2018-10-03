import { Injectable } from "@angular/core";
import 'rxjs/add/operator/map';
import { HTTP, HTTPResponse } from '@ionic-native/http';


@Injectable()

export class userHomeProvider {

    user_homeUrl = "http://car.zodiacstudio.net/user_home";

    constructor( public httpPlugin: HTTP) { }

    user_home(){

        let headers = { };
        this.httpPlugin.setDataSerializer("json");
       
        let params = { "secret_code": "6CA9DB8E111A727DE7A57FDF7877A" }     

        return this.httpPlugin.post(this.user_homeUrl, params, {'Content-Type': 'application/json; charset=utf-8', 'Access-Control-Allow-Origin': '*'})
        
    }
}