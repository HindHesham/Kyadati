import { Injectable } from "@angular/core";
import { Http, Response,Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { HTTP, HTTPResponse } from '@ionic-native/http';

@Injectable()

export class registerProvider {

    registerUrl = "http://car.zodiacstudio.net/register";

    constructor(public http: Http, public httpPlugin: HTTP ) { }


       register(user_name, phone, token_device, email){
        //alert("token from service " + token_device)
       
        let headers = { };
        this.httpPlugin.setDataSerializer("json");
       
        let params = { "token_device": token_device,
                        "email": email,
                        "phone": phone,
                        "user_name": user_name
                    }

        return this.httpPlugin.post(this.registerUrl, params, {'Content-Type': 'application/json; charset=utf-8', 'Access-Control-Allow-Origin': '*'})
     
    }

            
            
           
  
}