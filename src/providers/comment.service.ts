import { Injectable } from "@angular/core";
import { HTTP, HTTPResponse } from '@ionic-native/http';
import 'rxjs/add/operator/map';


@Injectable()

export class commentProvider {
    
    addCommentUrl = "http://car.zodiacstudio.net/comment";
    addRateUrl = "http://car.zodiacstudio.net/rate";
  

    constructor(public httpPlugin: HTTP) { }

    add_comment(token_api, id, type, comment){

        let headers = { };
        this.httpPlugin.setDataSerializer("json");
       
        let params = { "token_api": token_api,
                        "id": id,
                        "type": type,
                        "comment": comment
                    }     
        
        return this.httpPlugin.post(this.addCommentUrl, params, {'Content-Type': 'application/json; charset=utf-8', 'Access-Control-Allow-Origin': '*'})

    }

    add_rate(token_api, id, type, count, comment_id){
        
        let headers = { };
        this.httpPlugin.setDataSerializer("json");
       
        let params = { "token_api": token_api,
                        "id": id,
                        "type": type,
                        "count": count,
                        "comment_id": comment_id
                    }     

        return this.httpPlugin.post(this.addRateUrl, params ,  {'Content-Type': 'application/json; charset=utf-8', 'Access-Control-Allow-Origin': '*'})
    
    }
}