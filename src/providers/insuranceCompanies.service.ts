import { Injectable } from "@angular/core";
import { HTTP, HTTPResponse } from '@ionic-native/http';
import 'rxjs/add/operator/map';


@Injectable()

export class insuranceCompaniesProvider {

    insuranceCompaniesUrl = "http://car.zodiacstudio.net/insurance_companies";
    insuranceCompanyDescriptionUrl = "http://car.zodiacstudio.net/insurance_company_description";

    constructor(public httpPlugin: HTTP) { }

    allinsuranceCompanies(){

        let headers = { };
        this.httpPlugin.setDataSerializer("json");
       
        let params = { "secret_code": "6CA9DB8E111A727DE7A57FDF7877A" }     
        
        return this.httpPlugin.post(this.insuranceCompaniesUrl, params, {'Content-Type': 'application/json; charset=utf-8', 'Access-Control-Allow-Origin': '*'})

    }

    insuranceCompanyDescription(companyId){

        let headers = { };
        this.httpPlugin.setDataSerializer("json");
       
        let params = { "secret_code": "6CA9DB8E111A727DE7A57FDF7877A",
                        "id": companyId
                    }  
        //console.log("body: "+ JSON.stringify(body)); 
    
        return this.httpPlugin.post(this.insuranceCompanyDescriptionUrl, params, {'Content-Type': 'application/json; charset=utf-8', 'Access-Control-Allow-Origin': '*'})

    }
    

}