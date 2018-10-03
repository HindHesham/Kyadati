webpackJsonp([6],{

/***/ 1004:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaintenanaceCenterDescriptionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__ = __webpack_require__(582);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_importantPlaces_service__ = __webpack_require__(584);
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
 * Generated class for the MaintenanaceCenterDescriptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MaintenanaceCenterDescriptionPage = (function () {
    function MaintenanaceCenterDescriptionPage(navCtrl, navParams, menu, popoverCtrl, toastCtrl, loadingCtrl, nativeStorage, callNumber, importantPlacesProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.popoverCtrl = popoverCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.nativeStorage = nativeStorage;
        this.callNumber = callNumber;
        this.importantPlacesProvider = importantPlacesProvider;
        this.maintenanceCenterObj = [];
        this.commentsObj = [];
        this.menu.enable(false, 'menu');
    }
    MaintenanaceCenterDescriptionPage.prototype.ionViewDidEnter = function () {
        this.maintenane_centers_details();
    };
    MaintenanaceCenterDescriptionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MaintenanaceCenterDescriptionPage');
    };
    MaintenanaceCenterDescriptionPage.prototype.maintenane_centers_details = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            spinner: 'crescent',
            content: ''
        });
        loader.present().then(function () {
            _this.placeId = _this.navParams.get('maintenanceplaceId');
            if (_this.placeId) {
                _this.importantPlacesProvider.maintenance_center_description(_this.placeId)
                    .then(function (result) {
                    _this.result = JSON.parse(result.data);
                    //alert("result is: "+ JSON.stringify(result))
                    if (_this.result.status_code === 200) {
                        loader.dismiss();
                        _this.maintenanceCenterObj = _this.result.maintenanace_center;
                        //alert("obj"+ this.maintenanceCenterObj);
                        _this.commentsObj = _this.result.maintenanace_center.comments;
                        _this.phone = _this.result.maintenanace_center.phone;
                        _this.getAllComments();
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
    MaintenanaceCenterDescriptionPage.prototype.presentPopover = function (myEvent) {
        var _this = this;
        this.nativeStorage.getItem('myitem')
            .then(function (data) {
            var popover = _this.popoverCtrl.create('PopoverPage', {
                id: _this.maintenanceCenterObj.id,
                type: 2
            });
            popover.present({});
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
    MaintenanaceCenterDescriptionPage.prototype.saveUserRating = function (e) {
        console.log('clicked: ', e);
    };
    MaintenanaceCenterDescriptionPage.prototype.getAllComments = function () {
        return this.commentsObj;
    };
    MaintenanaceCenterDescriptionPage.prototype.gotoMap = function () {
        this.navCtrl.push('MapPage', {
            "latitude": this.maintenanceCenterObj.latitude,
            "longitude": this.maintenanceCenterObj.longitude
        });
    };
    MaintenanaceCenterDescriptionPage.prototype.phoneCall = function () {
        this.callNumber.callNumber(this.phone, true)
            .then(function (res) { return console.log('Launched dialer!' + res); })
            .catch(function (err) { return console.log('Error launching dialer' + err); });
    };
    MaintenanaceCenterDescriptionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-maintenanace-center-description',template:/*ion-inline-start:"/Users/hindhesham/Desktop/Kyadati/src/pages/maintenanace-center-description/maintenanace-center-description.html"*/`<ion-header no-border class="headerShadow">\n    <ion-navbar >\n        \n        <ion-buttons end disable>\n            <button style="background:transparent">\n                \n            </button>\n        </ion-buttons>\n     \n      <ion-row id="schoolLogoRow">\n        <div class="logoSchool">\n          <img *ngIf="maintenanceCenterObj.image" src="http://car.zodiacstudio.net{{maintenanceCenterObj.image}}" />\n          <img *ngIf="!maintenanceCenterObj.image" src="assets/imgs/avatar.png" />\n        </div>\n      </ion-row>\n      \n      <div style="text-align:center">\n       <p id="schoolName" > {{maintenanceCenterObj.title}} </p>\n       <rating class="ratingClass" no-padding no-mrgin [(ngModel)]="maintenanceCenterObj.rate" readOnly="false" max="5" emptyStarIconName="star-outline" halfStarIconName="star-half" starIconName="star" nullable="false" (ngModelChange)="saveUserRating($event)"></rating>\n       <p id="schoolCountry"> {{maintenanceCenterObj.city_name}}, {{maintenanceCenterObj.area}} </p>\n      </div> \n    </ion-navbar>\n     \n</ion-header>\n\n<ion-content padding>\n  \n  <ion-list>\n    <ion-row id="iconRow" class="shadowAndRadius" >\n        <ion-col (click)="gotoMap()">\n            <ion-buttons class="iconContaine">\n                <button ion-button icon-only clear>\n                  <custom-icon set="evil" name="map" ></custom-icon>\n                </button>\n            </ion-buttons>\n            الخريطه\n          \n        </ion-col>\n        <ion-col (click)="phoneCall()">\n            <ion-buttons class="iconContaine">\n                <button ion-button icon-only clear>\n                  <custom-icon set="evil" name="call" ></custom-icon>\n                </button>\n              </ion-buttons>\n              إتصال\n              \n        </ion-col>\n        <ion-col (click)="presentPopover()">\n            <ion-buttons class="iconContaine">\n                <button ion-button icon-only clear>\n                  <custom-icon set="evil" name="comment" ></custom-icon>\n                </button>\n              </ion-buttons>\n              إضافة تعليق\n        </ion-col>\n    </ion-row>\n\n      <ion-row class="rowShadow" >\n        <p>\n          {{ maintenanceCenterObj.description}}\n        </p>\n      </ion-row>\n    \n      <h5 style="font-weight:bold">\n        التعليقات\n      </h5>\n\n      <ion-row class="rowShadow" id="commentRow" *ngFor="let comment of getAllComments()">\n        <div id="usernameDiv" *ngIf="comment.user_name">\n          <p id="userNameForComment">\n              {{comment.user_name}}\n          </p>\n          <rating class="ratingClass" no-padding no-mrgin [(ngModel)]="comment.rate" readOnly="false" max="5" emptyStarIconName="star-outline" halfStarIconName="star-half" starIconName="star" nullable="false" (ngModelChange)="saveUserRating($event)"></rating>            \n        </div>\n        <div *ngIf="comment.user_name">\n            <p >\n                {{comment.comment}}\n            </p>\n        </div>\n        \n      </ion-row >\n    \n  </ion-list>\n\n</ion-content>\n`/*ion-inline-end:"/Users/hindhesham/Desktop/Kyadati/src/pages/maintenanace-center-description/maintenanace-center-description.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_4__providers_importantPlaces_service__["a" /* importantPlacesProvider */]])
    ], MaintenanaceCenterDescriptionPage);
    return MaintenanaceCenterDescriptionPage;
}());

//# sourceMappingURL=maintenanace-center-description.js.map

/***/ }),

/***/ 982:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintenanaceCenterDescriptionPageModule", function() { return MaintenanaceCenterDescriptionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__maintenanace_center_description__ = __webpack_require__(1004);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic2_custom_icons__ = __webpack_require__(579);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic2_rating__ = __webpack_require__(580);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var MaintenanaceCenterDescriptionPageModule = (function () {
    function MaintenanaceCenterDescriptionPageModule() {
    }
    MaintenanaceCenterDescriptionPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__maintenanace_center_description__["a" /* MaintenanaceCenterDescriptionPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__maintenanace_center_description__["a" /* MaintenanaceCenterDescriptionPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ionic2_custom_icons__["a" /* CustomIconsModule */],
                __WEBPACK_IMPORTED_MODULE_4_ionic2_rating__["a" /* Ionic2RatingModule */]
            ],
        })
    ], MaintenanaceCenterDescriptionPageModule);
    return MaintenanaceCenterDescriptionPageModule;
}());

//# sourceMappingURL=maintenanace-center-description.module.js.map

/***/ })

});
//# sourceMappingURL=6.js.map