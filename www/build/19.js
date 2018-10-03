webpackJsonp([19],{

/***/ 969:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeletePopoverPageModule", function() { return DeletePopoverPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__delete_popover__ = __webpack_require__(991);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic2_rating__ = __webpack_require__(580);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DeletePopoverPageModule = (function () {
    function DeletePopoverPageModule() {
    }
    DeletePopoverPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__delete_popover__["a" /* DeletePopoverPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__delete_popover__["a" /* DeletePopoverPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ionic2_rating__["a" /* Ionic2RatingModule */]
            ],
        })
    ], DeletePopoverPageModule);
    return DeletePopoverPageModule;
}());

//# sourceMappingURL=delete-popover.module.js.map

/***/ }),

/***/ 991:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeletePopoverPage; });
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




var DeletePopoverPage = (function () {
    function DeletePopoverPage(navCtrl, navParams, viewCtrl, nativeStorage, adsProvider, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.nativeStorage = nativeStorage;
        this.adsProvider = adsProvider;
        this.toastCtrl = toastCtrl;
    }
    DeletePopoverPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PopoverPage');
    };
    DeletePopoverPage.prototype.delete = function () {
        var _this = this;
        this.adId = this.navParams.get('adId');
        if (this.adId) {
            this.nativeStorage.getItem('myitem')
                .then(function (data) {
                if (data.token_api) {
                    _this.adsProvider.delete_ad(data.token_api, _this.adId)
                        .then(function (result) {
                        _this.result = JSON.parse(result.data);
                        //alert("delete ad result is: "+ JSON.stringify(result))
                        if (_this.result.status_code === 200) {
                            _this.navCtrl.setRoot('MyAdsPage');
                            var toast = _this.toastCtrl.create({
                                message: "تم مسح الاعلان",
                                duration: 3000,
                                position: 'bottom'
                            });
                            toast.present();
                        }
                        else {
                            _this.viewCtrl.dismiss();
                            var toast = _this.toastCtrl.create({
                                message: "You're offline Check your connection and try again",
                                duration: 3000,
                                position: 'bottom'
                            });
                            toast.present();
                        }
                    });
                }
                else {
                    _this.viewCtrl.dismiss();
                    var toast = _this.toastCtrl.create({
                        message: "You're Offline",
                        duration: 3000,
                        position: 'bottom'
                    });
                    toast.present();
                }
            }, function (error) { return console.error(error); });
        }
        else {
            this.viewCtrl.dismiss();
            var toast = this.toastCtrl.create({
                message: "You're Offline",
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        }
    };
    DeletePopoverPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    DeletePopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-delete-popover',template:/*ion-inline-start:"/Users/hindhesham/Desktop/Kyadati/src/pages/delete-popover/delete-popover.html"*/`<ion-content padding no-margin >\n  <ion-list>\n    <ion-item no-lines>\n      <p id="title">هل تريد مسح الاعلان </p>\n    </ion-item>\n\n    <div>\n      <button ion-button color="primary" (click)="delete()">مسح</button>          \n      <button ion-button outline color="black" id="cancelBtn" (click)="close()">إلغاء</button>\n    </div>\n  </ion-list>\n</ion-content>\n`/*ion-inline-end:"/Users/hindhesham/Desktop/Kyadati/src/pages/delete-popover/delete-popover.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_3__providers_ads_service__["a" /* adsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ToastController */]])
    ], DeletePopoverPage);
    return DeletePopoverPage;
}());

//# sourceMappingURL=delete-popover.js.map

/***/ })

});
//# sourceMappingURL=19.js.map