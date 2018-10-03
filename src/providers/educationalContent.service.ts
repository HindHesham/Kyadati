import { Injectable } from "@angular/core";
import { HTTP, HTTPResponse } from '@ionic-native/http';
import 'rxjs/add/operator/map';


@Injectable()

export class educationalContentProvider {

    educational_contentUrl = "http://car.zodiacstudio.net/educational_content";

    constructor(public httpPlugin: HTTP) { }

    educational_content(type){
         
        let headers = { };
        this.httpPlugin.setDataSerializer("json");
       
        let params = { "secret_code": "6CA9DB8E111A727DE7A57FDF7877A",
                        "type": type
                    }          

        return this.httpPlugin.post(this.educational_contentUrl, params,  {'Content-Type': 'application/json; charset=utf-8', 'Access-Control-Allow-Origin': '*'})

    }
}