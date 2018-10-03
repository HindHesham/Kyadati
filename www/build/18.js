webpackJsonp([18],{

/***/ 970:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsAdsModul", function() { return DetailsAdsModul; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__details_ads__ = __webpack_require__(992);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic2_custom_icons__ = __webpack_require__(579);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DetailsAdsModul = (function () {
    function DetailsAdsModul() {
    }
    DetailsAdsModul = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__details_ads__["a" /* DetailsAdsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__details_ads__["a" /* DetailsAdsPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ionic2_custom_icons__["a" /* CustomIconsModule */]
            ],
        })
    ], DetailsAdsModul);
    return DetailsAdsModul;
}());

//# sourceMappingURL=details-ads.module.js.map

/***/ }),

/***/ 992:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsAdsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_ads_service__ = __webpack_require__(581);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__ = __webpack_require__(582);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DetailsAdsPage = (function () {
    function DetailsAdsPage(navCtrl, navParams, popoverCtrl, nativeStorage, adsProvider, loadingCtrl, toastCtrl, callNumber) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.nativeStorage = nativeStorage;
        this.adsProvider = adsProvider;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.callNumber = callNumber;
        this.adDescriptionObj = [];
        this.pageType = this.navParams.get('page');
    }
    DetailsAdsPage.prototype.ngOnInit = function () {
        this.getAdsDescription();
    };
    DetailsAdsPage.prototype.ionViewDidLoad = function () { };
    DetailsAdsPage.prototype.ionViewDidEnter = function () {
        //
        this.slides._rtl = true;
        console.log("ionViewDidEnter");
    };
    DetailsAdsPage.prototype.getAdsDescription = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            spinner: 'crescent',
            content: ''
        });
        loader.present().then(function () {
            _this.adId = _this.navParams.get('adId');
            if (_this.adId) {
                _this.nativeStorage.getItem('myitem')
                    .then(function (data) {
                    //alert("from ads details View: "+ data);
                    _this.userId = data.id;
                    //alert(this.userId);
                    _this.adsProvider.adDescription(_this.adId)
                        .then(function (result) {
                        _this.result = JSON.parse(result.data);
                        //alert("ad description result is: "+ this.result);
                        if (_this.result.status_code === 200) {
                            loader.dismiss();
                            _this.adDescriptionObj = _this.result.ad;
                            _this.phone = _this.result.ad.mobile;
                        }
                        else {
                            loader.dismiss();
                            _this.navCtrl.pop();
                            var toast = _this.toastCtrl.create({
                                message: "You're offline Check your connection and try again",
                                duration: 3000,
                                position: 'bottom'
                            });
                            toast.present();
                        }
                    });
                }, function (error) {
                    loader.dismiss();
                    _this.adsProvider.adDescription(_this.adId)
                        .then(function (result) {
                        _this.result = JSON.parse(result.data);
                        //alert("ad description result is: "+ this.result);
                        if (_this.result.status_code === 200) {
                            loader.dismiss();
                            _this.adDescriptionObj = _this.result.ad;
                            _this.phone = _this.result.ad.mobile;
                        }
                        else {
                            loader.dismiss();
                            _this.navCtrl.pop();
                            var toast = _this.toastCtrl.create({
                                message: "You're offline Check your connection and try again",
                                duration: 3000,
                                position: 'bottom'
                            });
                            toast.present();
                        }
                    });
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
    DetailsAdsPage.prototype.delete = function (adId) {
        var _this = this;
        var loader = this.loadingCtrl.create({
            spinner: 'crescent',
            content: ''
        });
        loader.present().then(function () {
            _this.nativeStorage.getItem('myitem')
                .then(function (data) {
                if (data.token_api) {
                    _this.adsProvider.delete_ad(data.token_api, adId)
                        .then(function (result) {
                        _this.deleteRes = JSON.parse(result.data);
                        //alert("delete ad result is: "+ JSON.stringify(result))
                        if (_this.deleteRes.status_code === 200) {
                            loader.dismiss();
                            _this.navCtrl.push('MyAdsPage');
                            var toast = _this.toastCtrl.create({
                                message: "تم مسح الاعلان",
                                duration: 3000,
                                position: 'bottom'
                            });
                            toast.present();
                        }
                        else {
                            loader.dismiss();
                            var toast = _this.toastCtrl.create({
                                message: "You're offline Check your connection and try again",
                                duration: 3000,
                                position: 'bottom'
                            });
                            toast.present();
                        }
                    }).catch(function (error) {
                        loader.dismiss();
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
                    _this.navCtrl.setRoot('UserNamePage');
                    var toast = _this.toastCtrl.create({
                        message: "You're Offline",
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
    DetailsAdsPage.prototype.presentPopover = function (adId) {
        var popover = this.popoverCtrl.create('DeletePopoverPage', {
            adId: adId
        });
        popover.present({});
    };
    DetailsAdsPage.prototype.phoneCall = function () {
        this.callNumber.callNumber(this.phone, true)
            .then(function (res) { return console.log('Launched dialer!' + res); })
            .catch(function (err) { return console.log('Error launching dialer' + err); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Slides */])
    ], DetailsAdsPage.prototype, "slides", void 0);
    DetailsAdsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-details-ads',template:/*ion-inline-start:"/Users/hindhesham/Desktop/Kyadati/src/pages/details-ads/details-ads.html"*/`<ion-header no-border class="headerShadow">\n    \n      <ion-navbar>\n        <ion-title > {{ adDescriptionObj.title }} </ion-title>\n\n        <ion-buttons *ngIf="pageType === \'my_ads\'" end style="margin:0 12px" >\n            <button (click)="delete( adDescriptionObj.id)" style="background:transparent">\n                <ion-icon name="ios-trash-outline" color="white" id="deleteIcon"></ion-icon>\n            </button>\n        </ion-buttons>\n\n      </ion-navbar>\n  </ion-header>\n\n<ion-content>\n  <ion-grid>\n\n      <ion-row>\n      \n          <ion-col *ngIf="adDescriptionObj.status === 1 && adDescriptionObj.user_id === userId" class="adStatusColGreen"> \n            <p><ion-icon name="checkmark-circle"></ion-icon> الاعلان منشور </p>\n          </ion-col> \n\n         <ion-col *ngIf="adDescriptionObj.status === 0 && adDescriptionObj.user_id === userId" class="adStatusColRed">\n            <p><ion-icon name="alert"></ion-icon> في انتظار موافقة الأدمن لنشر الاعلان </p>\n         </ion-col>\n\n      </ion-row>\n\n    <ion-row id="slideRow">\n\n        <ion-slides spaceBetween="5" slidesPerView=\'auto\' centeredSlides="true">\n          <ion-slide *ngIf="adDescriptionObj.first_image !== null ">\n            <img src="http://car.zodiacstudio.net\/{{adDescriptionObj.first_image}}">\n          </ion-slide>\n\n          <ion-slide *ngIf="adDescriptionObj.second_image !== null ">\n            <img src="http://car.zodiacstudio.net\/{{adDescriptionObj.second_image}}">              \n          </ion-slide>\n\n          <ion-slide *ngIf="adDescriptionObj.third_image !== null ">\n            <img src="http://car.zodiacstudio.net\/{{adDescriptionObj.third_image}}">              \n          </ion-slide>\n\n          <ion-slide *ngIf="adDescriptionObj.forth_image !== null ">\n            <img src="http://car.zodiacstudio.net\/{{adDescriptionObj.forth_image}}">              \n          </ion-slide>\n\n          <ion-slide *ngIf="adDescriptionObj.fifth_image !== null ">\n            <img src="http://car.zodiacstudio.net\/{{adDescriptionObj.fifth_image}}">              \n          </ion-slide>\n\n        </ion-slides>\n    </ion-row>\n\n    <ion-row id="secondRow">\n      <ion-col no-padding>\n        <div id="mainDiv1" class="shadowAndRadius">\n          <div class="detailsTitleDiv">\n            <p>\n                الموديل \n            </p>\n            \n          </div>\n          <div class="typeSalleryDetailsDiv">\n            <p class="name"> {{ adDescriptionObj.type }}</p>\n            <!--<p class="sallery">3000 سي سي</p>-->\n          </div>\n        </div>\n      </ion-col>\n      <ion-col no-padding>\n          <div id="mainDiv2" class="shadowAndRadius" >\n              <div class="detailsTitleDiv">\n                <p>\n                    السعر \n                </p>\n                \n              </div>\n              <div class="typeSalleryDetailsDiv">\n                <p class="name">{{ adDescriptionObj.price }} </p>\n                <p class="sallery">ريال سعودي</p>\n              </div>\n            </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-list id="thirdRow" class="shadowAndRadius">\n      <ion-list-header id="title" no-lines >\n          تفاصيل السيارة\n      </ion-list-header>\n      <ion-row class="detailsRow">\n        <ion-col>\n          <ion-label >سنة الصنع</ion-label>\n          <p>{{ adDescriptionObj.production_year }} </p>\n        </ion-col>\n        <ion-col>\n            <ion-label >سعة المحرك</ion-label>\n            <p> {{ adDescriptionObj.engine }} </p>\n        </ion-col>\n      </ion-row>\n\n      <ion-row class="detailsRow">\n          <ion-col>\n            <ion-label > الأميال المقطوعة</ion-label>\n            <p>{{ adDescriptionObj.kilometres }}</p>\n          </ion-col>\n          <ion-col>\n              <ion-label > نوع الوقود</ion-label>\n              <p>{{ adDescriptionObj.fuel }} </p>\n          </ion-col>\n         \n          \n        </ion-row>\n      \n        \n    </ion-list>\n  </ion-grid>\n  <ion-fab  bottom right edge >\n      <button ion-fab (click)="phoneCall()"><ion-icon name="call"></ion-icon></button>\n  </ion-fab>\n</ion-content>\n<ion-footer no-border>\n  <ion-toolbar no-lines>\n\n  </ion-toolbar>\n</ion-footer>`/*ion-inline-end:"/Users/hindhesham/Desktop/Kyadati/src/pages/details-ads/details-ads.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_3__providers_ads_service__["a" /* adsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__["a" /* CallNumber */]])
    ], DetailsAdsPage);
    return DetailsAdsPage;
}());

//# sourceMappingURL=details-ads.js.map

/***/ })

});
//# sourceMappingURL=18.js.map