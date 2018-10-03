webpackJsonp([21],{

/***/ 967:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdsPageModule", function() { return AdsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ads__ = __webpack_require__(989);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic2_custom_icons__ = __webpack_require__(579);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AdsPageModule = (function () {
    function AdsPageModule() {
    }
    AdsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__ads__["a" /* AdsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__ads__["a" /* AdsPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ionic2_custom_icons__["a" /* CustomIconsModule */]
            ],
        })
    ], AdsPageModule);
    return AdsPageModule;
}());

//# sourceMappingURL=ads.module.js.map

/***/ }),

/***/ 989:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_ads_service__ = __webpack_require__(581);
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
 * Generated class for the AdsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdsPage = (function () {
    function AdsPage(navCtrl, navParams, nativeStorage, adsProvider, toastCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.nativeStorage = nativeStorage;
        this.adsProvider = adsProvider;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.allAdsObj = [];
    }
    AdsPage.prototype.ngOnInit = function () {
    };
    AdsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdsPage');
    };
    AdsPage.prototype.ionViewDidEnter = function () {
        this.allAds();
    };
    AdsPage.prototype.allAds = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            spinner: 'crescent',
            content: ''
        });
        loader.present().then(function () {
            _this.adsProvider.allAds()
                .then(function (result) {
                _this.result = JSON.parse(result.data);
                if (_this.result.status_code === 200) {
                    loader.dismiss();
                    _this.allAdsObj = _this.result.ads;
                    _this.getAllAds();
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
    AdsPage.prototype.getAllAds = function () {
        return this.allAdsObj;
    };
    AdsPage.prototype.gotoAdsProfile = function (adId) {
        this.navCtrl.push('DetailsAdsPage', {
            adId: adId
        });
    };
    AdsPage.prototype.createAds = function () {
        var _this = this;
        this.nativeStorage.getItem('myitem')
            .then(function (data) {
            _this.navCtrl.push('CreateAdsPage');
        }, function (error) {
            _this.navCtrl.push('SignUpPage');
            var toast = _this.toastCtrl.create({
                message: "يجب التسجيل اولا",
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        });
    };
    AdsPage.prototype.gotoFilter = function () {
        this.navCtrl.push('FilterAdsPage', {
            adsObj: this.allAdsObj
        });
    };
    AdsPage.prototype.showMyAds = function () {
        var _this = this;
        this.nativeStorage.getItem('myitem')
            .then(function (data) {
            _this.navCtrl.push('MyAdsPage');
        }, function (error) {
            _this.navCtrl.push('SignUpPage');
            var toast = _this.toastCtrl.create({
                message: "يجب التسجيل اولا",
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        });
    };
    AdsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-ads',template:/*ion-inline-start:"/Users/hindhesham/Desktop/Kyadati/src/pages/ads/ads.html"*/`<!--\n  Generated template for the AdsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border class="headerShadow">\n    <ion-navbar >\n        <ion-title> إعلانات </ion-title> \n        <button ion-button menuToggle start>\n            <ion-icon name="menu" color="white"></ion-icon>\n        </button> \n        <ion-buttons end style="margin:0 12px" >\n            <button (click)="gotoFilter();" style="background:transparent">\n                <custom-icon set="evil" name="filter" color="white"></custom-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n  \n</ion-header>\n\n<ion-content padding>\n  <ion-list >\n      <!--\n    <ion-row id="mapSelectionRow" >\n      <ion-item id="mapSelectionItem" class="shadowAndRadius" no-lines>\n        <ion-select (ionChange)="cityChange($event)" placeholder="اختار المدينة" [(ngModel)]="selected">\n            <ion-option value="all">كل المدن </ion-option>\n            <ion-option *ngFor="let city of getAllCities()" value="{{city.name}}"> {{ city.name }} </ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-row>\n-->\n    <ion-row class="listRow">\n        <ion-list  style="height:100%" >\n\n            <div id="mainDiv" class="shadowAndRadius" *ngFor="let ad of getAllAds()" (click)="gotoAdsProfile(ad.id)">\n                <div class="graphicDiv">\n                    <img src="http://car.zodiacstudio.net\/{{ad.first_image}}"/>\n                </div>\n                <div id="detailsMainDiv" class="patternimgAndColor">\n                  <div id="adsName">\n                    <p>{{ ad.title }}</p>\n                  </div>\n                  <div id="adsPriceMain">\n                    <div id="price">\n                        {{ ad.price }}\n                    </div>\n                    <div id="moneyName">\n                        ريال سعودي\n                    </div>\n                  </div>\n                </div>\n            </div> \n\n        </ion-list>\n\n    </ion-row>\n    <ion-row class="downloadBtn" no-margin no-padding>\n        <ion-col id="firstCol">\n            <button ion-button clear (click)= "createAds()" id="colBtn"> أضف اعلانك</button>\n        </ion-col>\n        <ion-col id="secondCol">\n            <button ion-button clear (click)= "showMyAds()" id="colBtn"> شاهد اعلاناتك </button>                \n        </ion-col>\n    </ion-row>\n  </ion-list>\n \n</ion-content>\n`/*ion-inline-end:"/Users/hindhesham/Desktop/Kyadati/src/pages/ads/ads.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_3__providers_ads_service__["a" /* adsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], AdsPage);
    return AdsPage;
}());

//# sourceMappingURL=ads.js.map

/***/ })

});
//# sourceMappingURL=21.js.map