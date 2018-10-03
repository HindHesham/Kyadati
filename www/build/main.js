webpackJsonp([22],{

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabIconTextPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TabIconTextPage = (function () {
    function TabIconTextPage() {
    }
    TabIconTextPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: "\n    <ion-header>\n        <ion-navbar>\n            \n            <ion-title>Tabs</ion-title>\n        </ion-navbar>\n    </ion-header>\n    <ion-content padding>\n        MyContent\n    </ion-content>\n"
        })
    ], TabIconTextPage);
    return TabIconTextPage;
}());

var TabsPage = (function () {
    function TabsPage(navParams) {
        this.tabOne = 'HomePage';
        this.tabTwo = 'DrivingSchoolsPage';
        this.tabThree = 'EducationalContentPage';
        this.tabFour = 'AdsPage';
        this.tabFive = 'ImportantPlacesPage';
        this.tabSix = 'InsuranceCompaniesPage';
        // Set the active tab based on the passed index from menu.ts
        this.myIndex = navParams.data.tabIndex || 0;
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/hindhesham/Desktop/Kyadati/src/pages/tabs/tabs.page.html"*/`<ion-tabs class="tabs-icon-text">\n    <ion-tab customIconSet="evil" customIconName="home" tabTitle=" الرئيسية" [root]="tabOne"></ion-tab>\n    <ion-tab customIconSet="evil" customIconName="icon1" tabTitle="مدارس تعليم" [root]="tabTwo"></ion-tab>\n    <ion-tab customIconSet="evil" customIconName="icon2" tabTitle="تعليم" [root]="tabThree"></ion-tab>\n    <ion-tab customIconSet="evil" customIconName="ads" tabTitle="إعلانات" [root]="tabFour"></ion-tab>\n    <ion-tab customIconSet="evil" customIconName="icon4" tabTitle="أماكن تهمك"  [root]="tabFive"></ion-tab>\n    <ion-tab customIconSet="evil" customIconName="icon3" tabTitle="شركات تأمين" [root]="tabSix"></ion-tab>\n\n</ion-tabs>\n`/*ion-inline-end:"/Users/hindhesham/Desktop/Kyadati/src/pages/tabs/tabs.page.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.page.js.map

/***/ }),

/***/ 205:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 205;

/***/ }),

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/ads/ads.module": [
		967,
		21
	],
	"../pages/create-ads/create-ads.module": [
		968,
		20
	],
	"../pages/delete-popover/delete-popover.module": [
		969,
		19
	],
	"../pages/details-ads/details-ads.module": [
		970,
		18
	],
	"../pages/dirving-school-details/dirving-school-details.module": [
		971,
		17
	],
	"../pages/driving-schools/driving-schools.module": [
		972,
		16
	],
	"../pages/educational-content/educational-content.module": [
		973,
		15
	],
	"../pages/filter-ads-result/filter-ads-result.module": [
		974,
		14
	],
	"../pages/filter-ads/filter-ads.module": [
		975,
		13
	],
	"../pages/government_places_details/government_places_details.module": [
		976,
		12
	],
	"../pages/home/home.module": [
		977,
		11
	],
	"../pages/important-places/important-places.module": [
		978,
		10
	],
	"../pages/inphographics-full-size/inphographics-full-size.module": [
		979,
		9
	],
	"../pages/insurance-companies-details/insurance-companies-details.module": [
		980,
		8
	],
	"../pages/insurance-companies/insurance-companies.module": [
		981,
		7
	],
	"../pages/maintenanace-center-description/maintenanace-center-description.module": [
		982,
		6
	],
	"../pages/map/map.module": [
		983,
		5
	],
	"../pages/my-ads/my-ads.module": [
		985,
		4
	],
	"../pages/popover/popover.module": [
		984,
		3
	],
	"../pages/sign-up-verify/sign-up-verify.module": [
		986,
		2
	],
	"../pages/sign-up/sign-up.module": [
		987,
		1
	],
	"../pages/user-name/user-name.module": [
		988,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 250;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 581:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return adsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var adsProvider = (function () {
    function adsProvider(httpPlugin) {
        this.httpPlugin = httpPlugin;
        this.addAdsUrl = "http://car.zodiacstudio.net/add_ads";
        this.allAdslUrl = "http://car.zodiacstudio.net/all_ads";
        this.adDescriptionUrl = "http://car.zodiacstudio.net/ad_description";
        this.myAdsUrl = "http://car.zodiacstudio.net/my_ads";
        this.deleteAdUrl = "http://car.zodiacstudio.net/delete_ad";
    }
    adsProvider.prototype.add_ads = function (token_api, first_image, second_image, third_image, forth_image, fifth_image, title, type, production_year, kilometres, engine, fuel, price) {
        var headers = {};
        this.httpPlugin.setDataSerializer("json");
        var params = { "token_api": token_api,
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
        };
        return this.httpPlugin.post(this.addAdsUrl, params, { 'Content-Type': 'application/json; charset=utf-8', 'Access-Control-Allow-Origin': '*' });
    };
    adsProvider.prototype.allAds = function () {
        var headers = {};
        this.httpPlugin.setDataSerializer("json");
        var params = { "secret_code": "6CA9DB8E111A727DE7A57FDF7877A" };
        return this.httpPlugin.post(this.allAdslUrl, params, { 'Content-Type': 'application/json; charset=utf-8', 'Access-Control-Allow-Origin': '*' });
    };
    adsProvider.prototype.adDescription = function (adId) {
        var headers = {};
        this.httpPlugin.setDataSerializer("json");
        var params = { "secret_code": "6CA9DB8E111A727DE7A57FDF7877A",
            "id": adId
        };
        return this.httpPlugin.post(this.adDescriptionUrl, params, { 'Content-Type': 'application/json; charset=utf-8', 'Access-Control-Allow-Origin': '*' });
    };
    adsProvider.prototype.myAds = function (token_api) {
        var headers = {};
        this.httpPlugin.setDataSerializer("json");
        var params = { "token_api": token_api };
        return this.httpPlugin.post(this.myAdsUrl, params, { 'Content-Type': 'application/json; charset=utf-8', 'Access-Control-Allow-Origin': '*' });
    };
    adsProvider.prototype.delete_ad = function (token_api, adId) {
        var headers = {};
        this.httpPlugin.setDataSerializer("json");
        var params = { "token_api": token_api,
            "id": adId
        };
        return this.httpPlugin.post(this.deleteAdUrl, params, { 'Content-Type': 'application/json; charset=utf-8', 'Access-Control-Allow-Origin': '*' });
    };
    adsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_http__["a" /* HTTP */]])
    ], adsProvider);
    return adsProvider;
}());

//# sourceMappingURL=ads.service.js.map

/***/ }),

/***/ 583:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return citiesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var citiesProvider = (function () {
    function citiesProvider(httpPlugin) {
        this.httpPlugin = httpPlugin;
        this.citiesUrl = "http://car.zodiacstudio.net/cities";
    }
    citiesProvider.prototype.cities = function () {
        var headers = {};
        this.httpPlugin.setDataSerializer("json");
        var params = { "secret_code": "6CA9DB8E111A727DE7A57FDF7877A" };
        return this.httpPlugin.post(this.citiesUrl, params, { 'Content-Type': 'application/json; charset=utf-8', 'Access-Control-Allow-Origin': '*' });
    };
    citiesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_http__["a" /* HTTP */]])
    ], citiesProvider);
    return citiesProvider;
}());

//# sourceMappingURL=cities.service.js.map

/***/ }),

/***/ 584:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return importantPlacesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var importantPlacesProvider = (function () {
    function importantPlacesProvider(httpPlugin) {
        this.httpPlugin = httpPlugin;
        this.government_placesUrl = "http://car.zodiacstudio.net/government_places";
        this.government_place_descriptionUrl = "http://car.zodiacstudio.net/government_place_description";
        this.maintenanace_centersUrl = "http://car.zodiacstudio.net/maintenanace_centers";
        this.maintenanace_center_descriptionUrl = "http://car.zodiacstudio.net/maintenanace_center_description";
    }
    importantPlacesProvider.prototype.government_places = function () {
        var headers = {};
        this.httpPlugin.setDataSerializer("json");
        var params = { "secret_code": "6CA9DB8E111A727DE7A57FDF7877A" };
        //console.log("body: "+ JSON.stringify(body));
        return this.httpPlugin.post(this.government_placesUrl, params, { 'Content-Type': 'application/json; charset=utf-8', 'Access-Control-Allow-Origin': '*' });
    };
    importantPlacesProvider.prototype.government_place_description = function (id) {
        var headers = {};
        this.httpPlugin.setDataSerializer("json");
        var params = { "secret_code": "6CA9DB8E111A727DE7A57FDF7877A",
            "id": id
        };
        //console.log("body: "+ JSON.stringify(body));
        return this.httpPlugin.post(this.government_place_descriptionUrl, params, { 'Content-Type': 'application/json; charset=utf-8', 'Access-Control-Allow-Origin': '*' });
    };
    importantPlacesProvider.prototype.maintenance_center_description = function (id) {
        var headers = {};
        this.httpPlugin.setDataSerializer("json");
        var params = { "secret_code": "6CA9DB8E111A727DE7A57FDF7877A",
            "id": id
        };
        //console.log("body: "+ JSON.stringify(body));
        return this.httpPlugin.post(this.maintenanace_center_descriptionUrl, params, { 'Content-Type': 'application/json; charset=utf-8', 'Access-Control-Allow-Origin': '*' });
    };
    importantPlacesProvider.prototype.maintenanace_centers = function () {
        var headers = {};
        this.httpPlugin.setDataSerializer("json");
        var params = { "secret_code": "6CA9DB8E111A727DE7A57FDF7877A" };
        //console.log("body: "+ JSON.stringify(body));
        return this.httpPlugin.post(this.maintenanace_centersUrl, params, { 'Content-Type': 'application/json; charset=utf-8', 'Access-Control-Allow-Origin': '*' });
    };
    importantPlacesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_http__["a" /* HTTP */]])
    ], importantPlacesProvider);
    return importantPlacesProvider;
}());

//# sourceMappingURL=importantPlaces.service.js.map

/***/ }),

/***/ 585:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return drivingSchoolProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_http__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var drivingSchoolProvider = (function () {
    function drivingSchoolProvider(httpPlugin) {
        this.httpPlugin = httpPlugin;
        this.drivingSchoolUrl = "http://car.zodiacstudio.net/driving_schools";
        this.drivingSchoolDescriptionUrl = "http://car.zodiacstudio.net/driving_school_description";
    }
    drivingSchoolProvider.prototype.allDrivingSchool = function () {
        var headers = {};
        this.httpPlugin.setDataSerializer("json");
        var params = { "secret_code": "6CA9DB8E111A727DE7A57FDF7877A" };
        return this.httpPlugin.post(this.drivingSchoolUrl, params, { 'Content-Type': 'application/json; charset=utf-8', 'Access-Control-Allow-Origin': '*' });
    };
    drivingSchoolProvider.prototype.drivingSchoolDescription = function (drivingSchoolId) {
        var headers = {};
        this.httpPlugin.setDataSerializer("json");
        var params = { "secret_code": "6CA9DB8E111A727DE7A57FDF7877A",
            "id": drivingSchoolId
        };
        return this.httpPlugin.post(this.drivingSchoolDescriptionUrl, params, { 'Content-Type': 'application/json; charset=utf-8', 'Access-Control-Allow-Origin': '*' });
    };
    drivingSchoolProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_http__["a" /* HTTP */]])
    ], drivingSchoolProvider);
    return drivingSchoolProvider;
}());

//# sourceMappingURL=drivingSchool.service.js.map

/***/ }),

/***/ 587:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return insuranceCompaniesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var insuranceCompaniesProvider = (function () {
    function insuranceCompaniesProvider(httpPlugin) {
        this.httpPlugin = httpPlugin;
        this.insuranceCompaniesUrl = "http://car.zodiacstudio.net/insurance_companies";
        this.insuranceCompanyDescriptionUrl = "http://car.zodiacstudio.net/insurance_company_description";
    }
    insuranceCompaniesProvider.prototype.allinsuranceCompanies = function () {
        var headers = {};
        this.httpPlugin.setDataSerializer("json");
        var params = { "secret_code": "6CA9DB8E111A727DE7A57FDF7877A" };
        return this.httpPlugin.post(this.insuranceCompaniesUrl, params, { 'Content-Type': 'application/json; charset=utf-8', 'Access-Control-Allow-Origin': '*' });
    };
    insuranceCompaniesProvider.prototype.insuranceCompanyDescription = function (companyId) {
        var headers = {};
        this.httpPlugin.setDataSerializer("json");
        var params = { "secret_code": "6CA9DB8E111A727DE7A57FDF7877A",
            "id": companyId
        };
        //console.log("body: "+ JSON.stringify(body)); 
        return this.httpPlugin.post(this.insuranceCompanyDescriptionUrl, params, { 'Content-Type': 'application/json; charset=utf-8', 'Access-Control-Allow-Origin': '*' });
    };
    insuranceCompaniesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_http__["a" /* HTTP */]])
    ], insuranceCompaniesProvider);
    return insuranceCompaniesProvider;
}());

//# sourceMappingURL=insuranceCompanies.service.js.map

/***/ }),

/***/ 588:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return registerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_http__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var registerProvider = (function () {
    function registerProvider(http, httpPlugin) {
        this.http = http;
        this.httpPlugin = httpPlugin;
        this.registerUrl = "http://car.zodiacstudio.net/register";
    }
    registerProvider.prototype.register = function (user_name, phone, token_device, email) {
        //alert("token from service " + token_device)
        var headers = {};
        this.httpPlugin.setDataSerializer("json");
        var params = { "token_device": token_device,
            "email": email,
            "phone": phone,
            "user_name": user_name
        };
        return this.httpPlugin.post(this.registerUrl, params, { 'Content-Type': 'application/json; charset=utf-8', 'Access-Control-Allow-Origin': '*' });
    };
    registerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_http__["a" /* HTTP */]])
    ], registerProvider);
    return registerProvider;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 590:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return educationalContentProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var educationalContentProvider = (function () {
    function educationalContentProvider(httpPlugin) {
        this.httpPlugin = httpPlugin;
        this.educational_contentUrl = "http://car.zodiacstudio.net/educational_content";
    }
    educationalContentProvider.prototype.educational_content = function (type) {
        var headers = {};
        this.httpPlugin.setDataSerializer("json");
        var params = { "secret_code": "6CA9DB8E111A727DE7A57FDF7877A",
            "type": type
        };
        return this.httpPlugin.post(this.educational_contentUrl, params, { 'Content-Type': 'application/json; charset=utf-8', 'Access-Control-Allow-Origin': '*' });
    };
    educationalContentProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_http__["a" /* HTTP */]])
    ], educationalContentProvider);
    return educationalContentProvider;
}());

//# sourceMappingURL=educationalContent.service.js.map

/***/ }),

/***/ 591:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return userHomeProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_http__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var userHomeProvider = (function () {
    function userHomeProvider(httpPlugin) {
        this.httpPlugin = httpPlugin;
        this.user_homeUrl = "http://car.zodiacstudio.net/user_home";
    }
    userHomeProvider.prototype.user_home = function () {
        var headers = {};
        this.httpPlugin.setDataSerializer("json");
        var params = { "secret_code": "6CA9DB8E111A727DE7A57FDF7877A" };
        return this.httpPlugin.post(this.user_homeUrl, params, { 'Content-Type': 'application/json; charset=utf-8', 'Access-Control-Allow-Origin': '*' });
    };
    userHomeProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_http__["a" /* HTTP */]])
    ], userHomeProvider);
    return userHomeProvider;
}());

//# sourceMappingURL=home.service.js.map

/***/ }),

/***/ 593:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return commentProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var commentProvider = (function () {
    function commentProvider(httpPlugin) {
        this.httpPlugin = httpPlugin;
        this.addCommentUrl = "http://car.zodiacstudio.net/comment";
        this.addRateUrl = "http://car.zodiacstudio.net/rate";
    }
    commentProvider.prototype.add_comment = function (token_api, id, type, comment) {
        var headers = {};
        this.httpPlugin.setDataSerializer("json");
        var params = { "token_api": token_api,
            "id": id,
            "type": type,
            "comment": comment
        };
        return this.httpPlugin.post(this.addCommentUrl, params, { 'Content-Type': 'application/json; charset=utf-8', 'Access-Control-Allow-Origin': '*' });
    };
    commentProvider.prototype.add_rate = function (token_api, id, type, count, comment_id) {
        var headers = {};
        this.httpPlugin.setDataSerializer("json");
        var params = { "token_api": token_api,
            "id": id,
            "type": type,
            "count": count,
            "comment_id": comment_id
        };
        return this.httpPlugin.post(this.addRateUrl, params, { 'Content-Type': 'application/json; charset=utf-8', 'Access-Control-Allow-Origin': '*' });
    };
    commentProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_http__["a" /* HTTP */]])
    ], commentProvider);
    return commentProvider;
}());

//# sourceMappingURL=comment.service.js.map

/***/ }),

/***/ 595:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(596);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(600);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 600:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic2_custom_icons__ = __webpack_require__(579);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic2_rating__ = __webpack_require__(580);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_image_picker__ = __webpack_require__(589);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_base64__ = __webpack_require__(651);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_fcm__ = __webpack_require__(594);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_native_storage__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_call_number__ = __webpack_require__(582);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_in_app_browser__ = __webpack_require__(586);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_cloud_angular__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_component__ = __webpack_require__(966);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_tabs_tabs_page__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_register__ = __webpack_require__(588);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_drivingSchool_service__ = __webpack_require__(585);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_educationalContent_service__ = __webpack_require__(590);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_insuranceCompanies_service__ = __webpack_require__(587);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_importantPlaces_service__ = __webpack_require__(584);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_ads_service__ = __webpack_require__(581);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_comment_service__ = __webpack_require__(593);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_home_service__ = __webpack_require__(591);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_cities_service__ = __webpack_require__(583);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_geolocation__ = __webpack_require__(592);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_16__pages_tabs_tabs_page__["b" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_tabs_tabs_page__["a" /* TabIconTextPage */]
            ],
            imports: [
                [__WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */]],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7_ionic2_rating__["a" /* Ionic2RatingModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* MyApp */], {
                    tabsHideOnSubPages: true,
                    backButtonText: '',
                }, {
                    links: [
                        { loadChildren: '../pages/ads/ads.module#AdsPageModule', name: 'AdsPage', segment: 'ads', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/create-ads/create-ads.module#CreateAdsPageModule', name: 'CreateAdsPage', segment: 'create-ads', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/delete-popover/delete-popover.module#DeletePopoverPageModule', name: 'DeletePopoverPage', segment: 'delete-popover', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/details-ads/details-ads.module#DetailsAdsModul', name: 'DetailsAdsPage', segment: 'details-ads', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dirving-school-details/dirving-school-details.module#DirvingSchoolDetailsPageModule', name: 'DirvingSchoolDetailsPage', segment: 'dirving-school-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/driving-schools/driving-schools.module#DrivingSchoolsPageModule', name: 'DrivingSchoolsPage', segment: 'driving-schools', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/educational-content/educational-content.module#EducationalContentPageModule', name: 'EducationalContentPage', segment: 'educational-content', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/filter-ads-result/filter-ads-result.module#FilterAdsResultPageModule', name: 'FilterAdsResultPage', segment: 'filter-ads-result', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/filter-ads/filter-ads.module#FilterAdsPageModule', name: 'FilterAdsPage', segment: 'filter-ads', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/government_places_details/government_places_details.module#governmentPlacesDetailsPageModule', name: 'governmentPlacesDetailsPage', segment: 'government_places_details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/important-places/important-places.module#ImportantPlacesPageModule', name: 'ImportantPlacesPage', segment: 'important-places', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/inphographics-full-size/inphographics-full-size.module#InphographicsFullSizePageModule', name: 'InphographicsFullSizePage', segment: 'inphographics-full-size', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/insurance-companies-details/insurance-companies-details.module#InsuranceCompaniesDetailsPageModule', name: 'InsuranceCompaniesDetailsPage', segment: 'insurance-companies-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/insurance-companies/insurance-companies.module#InsuranceCompaniesPageModule', name: 'InsuranceCompaniesPage', segment: 'insurance-companies', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/maintenanace-center-description/maintenanace-center-description.module#MaintenanaceCenterDescriptionPageModule', name: 'MaintenanaceCenterDescriptionPage', segment: 'maintenanace-center-description', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/map/map.module#MapPageModule', name: 'MapPage', segment: 'map', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/popover/popover.module#PopoverPageModule', name: 'PopoverPage', segment: 'popover', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my-ads/my-ads.module#MyAdsPageModule', name: 'MyAdsPage', segment: 'my-ads', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sign-up-verify/sign-up-verify.module#SignUpVerifyPageModule', name: 'SignUpVerifyPage', segment: 'sign-up-verify', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sign-up/sign-up.module#SignUpPageModule', name: 'SignUpPage', segment: 'sign-up', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-name/user-name.module#UserNamePageModule', name: 'UserNamePage', segment: 'user-name', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_14__ionic_cloud_angular__["a" /* CloudModule */].forRoot({
                    'core': {
                        'app_id': ""
                    },
                    'push': {
                        "sender_id": "205703043839",
                        'pluginConfig': {
                            'ios': {
                                'badge': true,
                                'sound': true
                            },
                            'android': {
                                'sound': true
                            }
                        }
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_6_ionic2_custom_icons__["a" /* CustomIconsModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_16__pages_tabs_tabs_page__["b" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_tabs_tabs_page__["a" /* TabIconTextPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_image_picker__["a" /* ImagePicker */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_base64__["a" /* Base64 */],
                __WEBPACK_IMPORTED_MODULE_17__providers_register__["a" /* registerProvider */],
                __WEBPACK_IMPORTED_MODULE_18__providers_drivingSchool_service__["a" /* drivingSchoolProvider */],
                __WEBPACK_IMPORTED_MODULE_19__providers_educationalContent_service__["a" /* educationalContentProvider */],
                __WEBPACK_IMPORTED_MODULE_20__providers_insuranceCompanies_service__["a" /* insuranceCompaniesProvider */],
                __WEBPACK_IMPORTED_MODULE_21__providers_importantPlaces_service__["a" /* importantPlacesProvider */],
                __WEBPACK_IMPORTED_MODULE_22__providers_ads_service__["a" /* adsProvider */],
                __WEBPACK_IMPORTED_MODULE_23__providers_comment_service__["a" /* commentProvider */],
                __WEBPACK_IMPORTED_MODULE_24__providers_home_service__["a" /* userHomeProvider */],
                __WEBPACK_IMPORTED_MODULE_25__providers_cities_service__["a" /* citiesProvider */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_fcm__["a" /* FCM */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_native_storage__["a" /* NativeStorage */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_call_number__["a" /* CallNumber */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_http__["a" /* HTTP */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_geolocation__["a" /* Geolocation */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 966:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs_page__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_storage__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_cloud_angular__ = __webpack_require__(302);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, nativeStorage, push) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.nativeStorage = nativeStorage;
        this.push = push;
        this.platform.ready().then(function () {
            statusBar.styleDefault();
            push.register().then(function (token) {
            });
            // Step #2 Listening Service.
            push.rx.notification().subscribe(function (msg) {
            });
            _this.nativeStorage.getItem('myitem')
                .then(function (data) {
                //console.log("from app component: ", data);
                _this.token_api = data.token_api;
                if (_this.token_api) {
                    splashScreen.hide();
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs_page__["b" /* TabsPage */];
                }
                else {
                    splashScreen.hide();
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs_page__["b" /* TabsPage */];
                }
            }, function (error) {
                //console.error(error);
                splashScreen.hide();
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs_page__["b" /* TabsPage */];
            });
        });
        this.pages = [
            { title: 'الصفحة الرئيسية', component: "HomePage", icon: "home", tabComponent: 'HomePage', index: 0 },
            { title: 'مدارس تعليمية', component: "DrivingSchoolsPage", icon: "drivingschools", tabComponent: 'DrivingSchoolsPage', index: 1 },
            { title: 'فيديوهات تعليمية', component: "EducationalContentPage", icon: "videos", tabComponent: 'EducationalContentPage', index: 2 },
            { title: 'بيع/شراء سيارات', component: "AdsPage", icon: "sell", tabComponent: 'AdsPage', index: 3 },
            { title: 'أماكن تهمك', component: "ImportantPlacesPage", icon: "importantplace", tabComponent: 'ImportantPlacesPage', index: 4 },
            { title: 'شركات تأمين', component: "InsuranceCompaniesPage", icon: "security", tabComponent: 'InsuranceCompaniesPage', index: 5 },
        ];
    }
    MyApp.prototype.openPage = function (page) {
        var params = {};
        // The index is equal to the order of our tabs inside tabs.ts
        if (page.index) {
            params = { tabIndex: page.index };
        }
        // The active child nav is our Tabs Navigation
        if (this.nav.getActiveChildNav() && page.index != undefined) {
            this.nav.getActiveChildNav().select(page.index);
        }
        else {
            // Tabs are not active, so reset the root page 
            // In this case: moving to or from SpecialPage
            this.nav.setRoot(page.component, params);
        }
    };
    MyApp.prototype.isActive = function (page) {
        // Again the Tabs Navigation
        var childNav = this.nav.getActiveChildNav();
        if (childNav) {
            if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
                return 'primary';
            }
            return;
        }
        // Fallback needed when there is no active childnav (tabs not active)
        if (this.nav.getActive() && this.nav.getActive().name === page.component) {
            return 'primary';
        }
        return;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/hindhesham/Desktop/Kyadati/src/app/app.html"*/`<ion-menu [content]="content" side="right" id="menu" type="overlay">\n    <ion-content>\n      <ion-list>\n        <div id="menuImgContainer">\n            <custom-icon  id="logoIcon" set="evil" name="drivingschools" color="white"></custom-icon>\n\n          <!--<img src="./assets/icon/logo.svg" width="64px" height="65.5" />-->\n          <div>قيادتي</div>\n        </div>\n        <button menuClose ion-item no-lines *ngFor="let p of pages" (click)="openPage(p)" class="menuBtn">\n            <custom-icon set="evil" [name]="p.icon" item-left color="primary"></custom-icon>\n          {{p.title}}\n        </button>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n  \n  <!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n  <ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>`/*ion-inline-end:"/Users/hindhesham/Desktop/Kyadati/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_cloud_angular__["b" /* Push */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[595]);
//# sourceMappingURL=main.js.map