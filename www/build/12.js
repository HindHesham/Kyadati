webpackJsonp([12],{

/***/ 976:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "governmentPlacesDetailsPageModule", function() { return governmentPlacesDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__government_places_details__ = __webpack_require__(998);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic2_custom_icons__ = __webpack_require__(579);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic2_rating__ = __webpack_require__(580);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var governmentPlacesDetailsPageModule = (function () {
    function governmentPlacesDetailsPageModule() {
    }
    governmentPlacesDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__government_places_details__["a" /* governmentPlacesDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__government_places_details__["a" /* governmentPlacesDetailsPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ionic2_custom_icons__["a" /* CustomIconsModule */],
                __WEBPACK_IMPORTED_MODULE_4_ionic2_rating__["a" /* Ionic2RatingModule */]
            ],
        })
    ], governmentPlacesDetailsPageModule);
    return governmentPlacesDetailsPageModule;
}());

//# sourceMappingURL=government_places_details.module.js.map

/***/ }),

/***/ 998:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return governmentPlacesDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_importantPlaces_service__ = __webpack_require__(584);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var governmentPlacesDetailsPage = (function () {
    function governmentPlacesDetailsPage(navCtrl, navParams, popoverCtrl, menu, toastCtrl, loadingCtrl, nativeStorage, importantPlacesProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.menu = menu;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.nativeStorage = nativeStorage;
        this.importantPlacesProvider = importantPlacesProvider;
        this.rate = 4;
        this.governmentPlaceObj = [];
        this.menu.enable(false, 'menu');
        this.placeId = navParams.get('placeId');
    }
    governmentPlacesDetailsPage.prototype.ngOnInit = function () {
        this.government_places_details();
    };
    governmentPlacesDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfileDetailsPage');
    };
    governmentPlacesDetailsPage.prototype.government_places_details = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            spinner: 'crescent',
            content: ''
        });
        loader.present().then(function () {
            _this.placeId = _this.navParams.get('placeId');
            if (_this.placeId) {
                _this.importantPlacesProvider.government_place_description(_this.placeId)
                    .then(function (result) {
                    _this.result = JSON.parse(result.data);
                    if (_this.result.status_code === 200) {
                        loader.dismiss();
                        _this.governmentPlaceObj = _this.result.government_place;
                        _this.map();
                    }
                    else {
                        alert("error");
                        loader.dismiss();
                        _this.navCtrl.pop();
                        var toast = _this.toastCtrl.create({
                            message: "You're offline Check your connection and try again",
                            duration: 3000,
                            position: 'bottom'
                        });
                        toast.present();
                    }
                }).catch(function (error) {
                    loader.dismiss();
                    _this.navCtrl.pop();
                    var toast = _this.toastCtrl.create({
                        message: "You're offline Check your connection and try again",
                        duration: 3000,
                        position: 'bottom'
                    });
                    toast.present();
                });
            }
            else {
                loader.dismiss();
                _this.navCtrl.pop();
                var toast = _this.toastCtrl.create({
                    message: "You're Offline",
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
            }
        });
    };
    governmentPlacesDetailsPage.prototype.saveUserRating = function (e) {
        console.log('clicked: ', e);
    };
    governmentPlacesDetailsPage.prototype.gotoMap = function () {
        this.navCtrl.push('MapPage', {
            "latitude": this.governmentPlaceObj.latitude,
            "longitude": this.governmentPlaceObj.longitude
        });
    };
    governmentPlacesDetailsPage.prototype.map = function () {
        var latLing = new google.maps.LatLng(this.governmentPlaceObj.latitude, this.governmentPlaceObj.longitude);
        var mapOptions = {
            center: latLing,
            zoom: 8,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('map'),
        __metadata("design:type", Object)
    ], governmentPlacesDetailsPage.prototype, "mapElement", void 0);
    governmentPlacesDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-government-places-details',template:/*ion-inline-start:"/Users/hindhesham/Desktop/Kyadati/src/pages/government_places_details/government_places_details.html"*/`\n<ion-header no-border class="headerShadow">\n  <ion-navbar >\n      <ion-buttons end disable>\n          <button style="background:transparent">\n              \n          </button>\n      </ion-buttons>\n    <ion-row id="schoolLogoRow">\n      <div class="logoSchool">\n        <img *ngIf="governmentPlaceObj.image" src="http://car.zodiacstudio.net{{governmentPlaceObj.image}}" />\n        <img *ngIf="!governmentPlaceObj.image" src="assets/imgs/avatar.png" />\n      </div>\n    </ion-row>\n    \n    <div style="text-align:center">\n     <p id="schoolName" > {{governmentPlaceObj.title}} </p>\n     <p id="schoolCountry"> {{governmentPlaceObj.city_name}}, {{governmentPlaceObj.area}} </p>\n    </div> \n  </ion-navbar>\n   \n</ion-header>\n\n<ion-content padding>\n\n    <!-- important Places Government view-->\n    <ion-list>\n        <ion-row class="rowShadow" >\n          <p>\n            {{governmentPlaceObj.description}} \n          </p>\n        </ion-row>\n   \n          <div id="map" #map>\n             \n          </div>\n  \n\n    </ion-list>\n\n</ion-content>\n`/*ion-inline-end:"/Users/hindhesham/Desktop/Kyadati/src/pages/government_places_details/government_places_details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_3__providers_importantPlaces_service__["a" /* importantPlacesProvider */]])
    ], governmentPlacesDetailsPage);
    return governmentPlacesDetailsPage;
}());

//# sourceMappingURL=government_places_details.js.map

/***/ })

});
//# sourceMappingURL=12.js.map