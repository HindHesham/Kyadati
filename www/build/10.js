webpackJsonp([10],{

/***/ 1000:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImportantPlacesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_importantPlaces_service__ = __webpack_require__(584);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_cities_service__ = __webpack_require__(583);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ImportantPlacesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ImportantPlacesPage = (function () {
    function ImportantPlacesPage(navCtrl, navParams, loadingCtrl, toastCtrl, nativeStorage, citiesProvider, importantPlacesProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.nativeStorage = nativeStorage;
        this.citiesProvider = citiesProvider;
        this.importantPlacesProvider = importantPlacesProvider;
        this.placesType = "اماكن حكوميه";
        this.governmentPlacesObj = [];
        this.maintenanaceCentersObj = [];
        this.citiesObj = [];
        this.filteredGovernmentPlacesObj = [];
        this.filteredMaintenanaceCentersObj = [];
        this.selected = 'all';
        this.status = 'اماكن حكوميه';
    }
    ImportantPlacesPage.prototype.ngOnInit = function () {
        this.government_places();
        this.maintenanace_centers();
        this.allCities();
    };
    ImportantPlacesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ImportantPlacesPage');
    };
    ImportantPlacesPage.prototype.government_places = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            spinner: 'crescent',
            content: ''
        });
        loader.present().then(function () {
            _this.importantPlacesProvider.government_places()
                .then(function (result) {
                _this.result = JSON.parse(result.data);
                //console.log(" government_places is: "+ JSON.stringify(result));
                if (_this.result.status_code === 200) {
                    loader.dismiss();
                    _this.governmentPlacesObj = _this.result.government_places;
                    _this.getAllGovernmentPlaces();
                }
                else {
                    loader.dismiss();
                    _this.navCtrl.pop();
                    var toast = _this.toastCtrl.create({
                        message: "Check your connection and try again",
                        duration: 3000,
                        position: 'bottom'
                    });
                    toast.present();
                }
            }).catch(function (error) {
                loader.dismiss();
                var toast = _this.toastCtrl.create({
                    message: "You're Offline",
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
            });
        });
    };
    ImportantPlacesPage.prototype.getAllGovernmentPlaces = function () {
        return this.governmentPlacesObj;
    };
    ImportantPlacesPage.prototype.maintenanace_centers = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            spinner: 'crescent',
            content: ''
        });
        loader.present().then(function () {
            _this.importantPlacesProvider.maintenanace_centers()
                .then(function (result) {
                _this.mintenanaceRresult = JSON.parse(result.data);
                //console.log("maintenanace_centers result is: "+ JSON.stringify(result));
                if (_this.citiesResult.status_code === 200) {
                    loader.dismiss();
                    _this.maintenanaceCentersObj = _this.mintenanaceRresult.maintenanace_centers;
                    _this.getAllMaintenanaceCenters();
                }
                else {
                    loader.dismiss();
                    _this.navCtrl.pop();
                    var toast = _this.toastCtrl.create({
                        message: "Check your connection and try again",
                        duration: 3000,
                        position: 'bottom'
                    });
                    toast.present();
                }
            }).catch(function (error) {
                loader.dismiss();
                var toast = _this.toastCtrl.create({
                    message: "You're Offline",
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
            });
        });
    };
    ImportantPlacesPage.prototype.getAllMaintenanaceCenters = function () {
        return this.maintenanaceCentersObj;
    };
    ImportantPlacesPage.prototype.allCities = function () {
        var _this = this;
        this.citiesProvider.cities()
            .then(function (result) {
            _this.citiesResult = JSON.parse(result.data);
            //console.log("cities result is: "+ JSON.stringify(result));
            if (_this.citiesResult.status_code === 200) {
                _this.citiesObj = _this.citiesResult.cities;
                _this.getAllCities();
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: "Check Your internet connection and try again",
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
            }
        }).catch(function (error) {
            var toast = _this.toastCtrl.create({
                message: "You're Offline",
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        });
    };
    ImportantPlacesPage.prototype.getAllCities = function () {
        return this.citiesObj;
    };
    ImportantPlacesPage.prototype.cityChange = function (e) {
        if (e === 'all') {
            this.getAllGovernmentPlaces();
            this.getAllMaintenanaceCenters();
        }
        else {
            this.filteredGovernmentPlacesObj = this.governmentPlacesObj.filter(function (value) { return value.city_name === e; });
            this.filteredMaintenanaceCentersObj = this.maintenanaceCentersObj.filter(function (value) { return value.city_name === e; });
            this.getAllFilteredGovernmentPlaces();
            this.getAllFilteredMaintenanaceCenters();
        }
    };
    ImportantPlacesPage.prototype.getAllFilteredGovernmentPlaces = function () {
        return this.filteredGovernmentPlacesObj;
    };
    ImportantPlacesPage.prototype.getAllFilteredMaintenanaceCenters = function () {
        return this.filteredMaintenanaceCentersObj;
    };
    ImportantPlacesPage.prototype.gotoGovernmentPlaceDescription = function (placeId) {
        this.navCtrl.push('governmentPlacesDetailsPage', {
            placeId: placeId
        });
    };
    ImportantPlacesPage.prototype.maintenanaceCenterDescription = function (maintenanceplaceId) {
        this.navCtrl.push('MaintenanaceCenterDescriptionPage', {
            maintenanceplaceId: maintenanceplaceId
        });
    };
    ImportantPlacesPage.prototype.saveUserRating = function (e) {
        console.log('clicked: ', e);
    };
    ImportantPlacesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-important-places',template:/*ion-inline-start:"/Users/hindhesham/Desktop/Kyadati/src/pages/important-places/important-places.html"*/`\n<ion-header class="headerShadow" no-border>\n\n  <ion-navbar color="white">\n    <button ion-button menuToggle>\n      <ion-icon name="menu" color="primary"></ion-icon>\n    </button>\n    <ion-title>أماكن تهمك</ion-title>\n  </ion-navbar>\n  <ion-toolbar color="white" no-border-bottom>\n    <ion-segment [(ngModel)]="placesType" >\n      <ion-segment-button value="اماكن حكوميه" (click)="status = \'اماكن حكوميه\'">\n        اماكن حكوميه\n      </ion-segment-button>\n      <ion-segment-button value="اماكن صيانه"  (click)="status = \'اماكن صيانه\'">\n        اماكن صيانه\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n    \n<ion-content padding class="outer-content">\n    <ion-list >\n      <ion-row id="mapSelectionRow" >\n        <ion-item id="mapSelectionItem" class="shadowAndRadius" no-lines>\n          <ion-select (ionChange)="cityChange($event)" placeholder="اختار المدينة" [(ngModel)]="selected">\n            <ion-option value="all">كل المدن </ion-option>\n            <ion-option *ngFor="let city of getAllCities()" value="{{city.name}}"> {{ city.name }} </ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-row>\n      <ion-row class="listRow">\n\n        <!-- اماكن حكوميه -->\n          <ion-list *ngIf="status === \'اماكن حكوميه\' && selected === \'all\'" class="listSchools" no-lines style="height:100% ">\n            \n            <div *ngFor="let governmentPlace of getAllGovernmentPlaces()" id="listSchoolDiv" style="height:212px" class="shadowAndRadius" (click)="gotoGovernmentPlaceDescription(governmentPlace.id)">\n              <div id="imgDiv" style="height:163px">\n                <img *ngIf="governmentPlace.image" src="http://car.zodiacstudio.net{{governmentPlace.image}}" />\n                <img *ngIf="!governmentPlace.image" src="assets/imgs/avatar.png" />\n              </div>\n              <div class="patternimgAndColor" id="ratinrDiv" style="height:44px">\n                  <p> {{ governmentPlace.title }} </p>\n              </div>\n            </div>\n\n          </ion-list>\n\n          <ion-list *ngIf="status === \'اماكن حكوميه\' && selected !== \'all\'" class="listSchools" no-lines style="height:100% ">\n            \n            <div *ngFor="let governmentPlace of getAllFilteredGovernmentPlaces()" id="listSchoolDiv" style="height:212px" class="shadowAndRadius" (click)="gotoGovernmentPlaceDescription(governmentPlace.id)">\n              <div id="imgDiv" style="height:163px">\n                <img *ngIf="governmentPlace.image" src="http://car.zodiacstudio.net{{governmentPlace.image}}" />\n                <img *ngIf="!governmentPlace.image" src="assets/imgs/avatar.png" />\n              </div>\n              <div class="patternimgAndColor" id="ratinrDiv" style="height:44px">\n                  <p> {{ governmentPlace.title }} </p>\n              </div>\n            </div>\n\n        </ion-list>\n\n        <!-- اماكن صيانه -->\n        <ion-list *ngIf="status === \'اماكن صيانه\' && selected === \'all\'" class="listSchools" no-lines >\n            <div *ngFor="let maintenanaceCenter of getAllMaintenanaceCenters()" id="listSchoolDiv" class="shadowAndRadius" (click)="maintenanaceCenterDescription(maintenanaceCenter.id)">\n              <div id="imgDiv">\n                <img *ngIf="maintenanaceCenter.image" src="http://car.zodiacstudio.net{{maintenanaceCenter.image}}" />\n                <img *ngIf="!maintenanaceCenter.image" src="assets/imgs/avatar.png" />\n              </div>\n              <div id="ratinrDiv" class="patternimgAndColor">\n                <p> {{ maintenanaceCenter.title }} </p>\n                <rating class="ratingClass" no-padding no-mrgin [(ngModel)]="maintenanaceCenter.rate" readOnly="false" max="5" emptyStarIconName="star-outline" halfStarIconName="star-half" starIconName="star" nullable="false" (ngModelChange)="saveUserRating($event)"></rating>    \n              </div>\n            </div>\n        </ion-list>\n\n        <ion-list *ngIf="status === \'اماكن صيانه\' && selected !== \'all\'" class="listSchools" no-lines >\n          \n          <div *ngFor="let maintenanaceCenter of  getAllFilteredMaintenanaceCenters()" id="listSchoolDiv" class="shadowAndRadius" (click)="maintenanaceCenterDescription(maintenanaceCenter.id)">\n            <div id="imgDiv">\n              <img *ngIf="maintenanaceCenter.image" src="http://car.zodiacstudio.net{{maintenanaceCenter.image}}" />\n              <img *ngIf="!maintenanaceCenter.image" src="assets/imgs/avatar.png" />\n            </div>\n            <div id="ratinrDiv" class="patternimgAndColor">\n              <p> {{ maintenanaceCenter.title }} </p>\n              <rating class="ratingClass" no-padding no-mrgin [(ngModel)]="maintenanaceCenter.rate" readOnly="false" max="5" emptyStarIconName="star-outline" halfStarIconName="star-half" starIconName="star" nullable="false" (ngModelChange)="saveUserRating($event)"></rating>    \n            </div>\n          </div>\n\n      </ion-list>\n\n      </ion-row>\n    </ion-list>\n  </ion-content>\n`/*ion-inline-end:"/Users/hindhesham/Desktop/Kyadati/src/pages/important-places/important-places.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_4__providers_cities_service__["a" /* citiesProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_importantPlaces_service__["a" /* importantPlacesProvider */]])
    ], ImportantPlacesPage);
    return ImportantPlacesPage;
}());

//# sourceMappingURL=important-places.js.map

/***/ }),

/***/ 978:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportantPlacesPageModule", function() { return ImportantPlacesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__important_places__ = __webpack_require__(1000);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic2_rating__ = __webpack_require__(580);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ImportantPlacesPageModule = (function () {
    function ImportantPlacesPageModule() {
    }
    ImportantPlacesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__important_places__["a" /* ImportantPlacesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__important_places__["a" /* ImportantPlacesPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ionic2_rating__["a" /* Ionic2RatingModule */]
            ],
        })
    ], ImportantPlacesPageModule);
    return ImportantPlacesPageModule;
}());

//# sourceMappingURL=important-places.module.js.map

/***/ })

});
//# sourceMappingURL=10.js.map