import { Injectable } from "@angular/core";
import 'rxjs/add/operator/map';
import { HTTP, HTTPResponse } from '@ionic-native/http';


@Injectable()

export class drivingSchoolProvider {

    drivingSchoolUrl = "http://car.zodiacstudio.net/driving_schools";
    drivingSchoolDescriptionUrl = "http://car.zodiacstudio.net/driving_school_description";

    constructor(public httpPlugin: HTTP) { }

    allDrivingSchool(){
        
        let headers = { };
        this.httpPlugin.setDataSerializer("json");
       
        let params = { "secret_code": "6CA9DB8E111A727DE7A57FDF7877A" }     
        
        return this.httpPlugin.post(this.drivingSchoolUrl, params, {'Content-Type': 'application/json; charset=utf-8', 'Access-Control-Allow-Origin': '*'})
           
    }

    drivingSchoolDescription(drivingSchoolId){
       
        let headers = { };
        this.httpPlugin.setDataSerializer("json");
       
        let params = { "secret_code": "6CA9DB8E111A727DE7A57FDF7877A",
                        "id": drivingSchoolId
                    }     

        return this.httpPlugin.post(this.drivingSchoolDescriptionUrl, params, {'Content-Type': 'application/json; charset=utf-8', 'Access-Control-Allow-Origin': '*'})
    }

}