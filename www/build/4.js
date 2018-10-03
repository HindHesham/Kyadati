webpackJsonp([4],{

/***/ 1007:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyAdsPage; });
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
 * Generated class for the MyAdsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyAdsPage = (function () {
    function MyAdsPage(navCtrl, navParams, nativeStorage, adsProvider, toastCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.nativeStorage = nativeStorage;
        this.adsProvider = adsProvider;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.allAdsObj = [];
    }
    MyAdsPage.prototype.ngOnInit = function () {
    };
    MyAdsPage.prototype.ionViewDidEnter = function () {
        this.allAds();
    };
    MyAdsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyAdsPage');
    };
    MyAdsPage.prototype.allAds = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            spinner: 'crescent',
            content: ''
        });
        loader.present().then(function () {
            _this.nativeStorage.getItem('myitem')
                .then(function (data) {
                //alert("from my ads view : " + JSON.stringify(data));
                if (data.token_api) {
                    _this.adsProvider.myAds(data.token_api)
                        .then(function (result) {
                        _this.result = JSON.parse(result.data);
                        //alert("all my ads result is: "+ JSON.stringify(result));
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
                }
                else {
                    loader.dismiss();
                    _this.navCtrl.setRoot('UserNamePage');
                    var toast = _this.toastCtrl.create({
                        message: "PLese Login First",
                        duration: 3000,
                        position: 'bottom'
                    });
                    toast.present();
                }
            }, function (error) {
                loader.dismiss();
                console.error(error);
            });
        });
    };
    MyAdsPage.prototype.getAllAds = function () {
        return this.allAdsObj;
    };
    MyAdsPage.prototype.gotoAdsProfile = function (adId) {
        this.navCtrl.push('DetailsAdsPage', {
            adId: adId,
            page: 'my_ads'
        });
    };
    MyAdsPage.prototype.close = function () {
        this.navCtrl.setRoot('AdsPage');
    };
    MyAdsPage.prototype.createAds = function () {
        this.navCtrl.push('CreateAdsPage');
    };
    MyAdsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-my-ads',template:/*ion-inline-start:"/Users/hindhesham/Desktop/Kyadati/src/pages/my-ads/my-ads.html"*/`<!--\n  Generated template for the MyAdsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border class="headerShadow">\n    \n    <ion-navbar hideBackButton="true">\n        <ion-title> إعلاناتي </ion-title> \n        <ion-buttons start>\n          <button (click)="close()" style="background:transparent">\n            <custom-icon set="evil" name="close" color="white" style="font-size:2em"></custom-icon> \n          </button>\n          \n        </ion-buttons> \n      </ion-navbar>\n    \n  </ion-header>\n\n<ion-content padding>\n    <ion-list >\n        <ion-row class="listRow">\n            <ion-list  style="height:100% ">\n\n                <div id="mainDiv" class="shadowAndRadius" *ngFor="let ad of getAllAds()" (click)="gotoAdsProfile(ad.id)">\n                    <div class="graphicDiv">\n                      <img src="http://car.zodiacstudio.net\/{{ad.first_image}}"/>\n                    </div>\n                    <div id="detailsMainDiv" class="patternimgAndColor">\n                      <div id="adsName">\n                        <p> {{ ad.title }} </p>\n                      </div>\n                      <div id="adsPriceMain">\n                        <div id="price">\n                           {{ad.price}}\n                        </div>\n                        <div id="moneyName">\n                            ريال سعودي\n                        </div>\n                      </div>\n                    </div>\n                  </div>  \n               \n              </ion-list>\n        </ion-row>\n        <ion-row>\n            <div class="downloadBtn">\n              <button ion-button round (click)= "createAds()" > أضف اعلانك</button>                \n            </div>\n        </ion-row>\n    </ion-list>\n</ion-content>\n`/*ion-inline-end:"/Users/hindhesham/Desktop/Kyadati/src/pages/my-ads/my-ads.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_3__providers_ads_service__["a" /* adsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], MyAdsPage);
    return MyAdsPage;
}());

//# sourceMappingURL=my-ads.js.map

/***/ }),

/***/ 985:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAdsPageModule", function() { return MyAdsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_ads__ = __webpack_require__(1007);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic2_custom_icons__ = __webpack_require__(579);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MyAdsPageModule = (function () {
    function MyAdsPageModule() {
    }
    MyAdsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__my_ads__["a" /* MyAdsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__my_ads__["a" /* MyAdsPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ionic2_custom_icons__["a" /* CustomIconsModule */]
            ],
        })
    ], MyAdsPageModule);
    return MyAdsPageModule;
}());

//# sourceMappingURL=my-ads.module.js.map

/***/ })

});
//# sourceMappingURL=4.js.map