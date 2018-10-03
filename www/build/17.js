webpackJsonp([17],{

/***/ 971:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirvingSchoolDetailsPageModule", function() { return DirvingSchoolDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dirving_school_details__ = __webpack_require__(993);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic2_custom_icons__ = __webpack_require__(579);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic2_rating__ = __webpack_require__(580);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DirvingSchoolDetailsPageModule = (function () {
    function DirvingSchoolDetailsPageModule() {
    }
    DirvingSchoolDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__dirving_school_details__["a" /* DirvingSchoolDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__dirving_school_details__["a" /* DirvingSchoolDetailsPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ionic2_custom_icons__["a" /* CustomIconsModule */],
                __WEBPACK_IMPORTED_MODULE_4_ionic2_rating__["a" /* Ionic2RatingModule */]
            ],
        })
    ], DirvingSchoolDetailsPageModule);
    return DirvingSchoolDetailsPageModule;
}());

//# sourceMappingURL=dirving-school-details.module.js.map

/***/ }),

/***/ 993:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirvingSchoolDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_drivingSchool_service__ = __webpack_require__(585);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__ = __webpack_require__(191);
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






/**
 * Generated class for the DirvingSchoolDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DirvingSchoolDetailsPage = (function () {
    function DirvingSchoolDetailsPage(navCtrl, navParams, popoverCtrl, loadingCtrl, menu, toastCtrl, drivingSchoolProvider, nativeStorage, callNumber) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.loadingCtrl = loadingCtrl;
        this.menu = menu;
        this.toastCtrl = toastCtrl;
        this.drivingSchoolProvider = drivingSchoolProvider;
        this.nativeStorage = nativeStorage;
        this.callNumber = callNumber;
        this.commentsObj = [];
        this.divingSchoolDescriptionObj = [];
        this.menu.enable(false, 'menu');
    }
    DirvingSchoolDetailsPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            spinner: 'crescent',
            content: ''
        });
        loader.present().then(function () {
            _this.drivingSchoolId = _this.navParams.get('drivingSchoolId');
            if (_this.drivingSchoolId) {
                _this.drivingSchoolProvider.drivingSchoolDescription(_this.drivingSchoolId)
                    .then(function (result) {
                    _this.result = JSON.parse(result.data);
                    //alert("result is: "+ JSON.stringify(result))
                    if (_this.result.status_code === 200) {
                        loader.dismiss();
                        _this.divingSchoolDescriptionObj = _this.result.driving_school;
                        _this.commentsObj = _this.result.driving_school.comments;
                        _this.phone = _this.result.driving_school.phone;
                        //alert("comment obj is: "+this.commentsObj);
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
                        message: "أنت غير متصل بالانترنت",
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
                    message: "أنت غير متصل بالانترنت",
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
            }
        });
    };
    DirvingSchoolDetailsPage.prototype.ionViewDidLoad = function () { };
    DirvingSchoolDetailsPage.prototype.presentPopover = function (e) {
        var _this = this;
        this.nativeStorage.getItem('myitem')
            .then(function (data) {
            var popover = _this.popoverCtrl.create('PopoverPage', {
                id: _this.divingSchoolDescriptionObj.id,
                type: 1
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
    DirvingSchoolDetailsPage.prototype.getAllComments = function () {
        return this.commentsObj;
    };
    DirvingSchoolDetailsPage.prototype.gotoMap = function () {
        this.navCtrl.push('MapPage', {
            "latitude": this.divingSchoolDescriptionObj.latitude,
            "longitude": this.divingSchoolDescriptionObj.longitude
        });
    };
    DirvingSchoolDetailsPage.prototype.phoneCall = function () {
        this.callNumber.callNumber(this.phone, true)
            .then(function (res) { return console.log('Launched dialer!' + res); })
            .catch(function (err) { return console.log('Error launching dialer' + err); });
    };
    DirvingSchoolDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-dirving-school-details',template:/*ion-inline-start:"/Users/hindhesham/Desktop/Kyadati/src/pages/dirving-school-details/dirving-school-details.html"*/`<!--\n  Generated template for the DirvingSchoolDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header no-border class="headerShadow">\n    <ion-navbar>\n        <ion-buttons end disable>\n            <button style="background:transparent">\n                \n            </button>\n        </ion-buttons>\n        \n      <ion-row id="schoolLogoRow">\n        <div class="logoSchool">\n            <img *ngIf="divingSchoolDescriptionObj.image" src="http://car.zodiacstudio.net{{divingSchoolDescriptionObj.image}}" />\n            <img *ngIf="!divingSchoolDescriptionObj.image" src="assets/imgs/avatar.png" />\n          </div>\n      </ion-row>\n      \n      <div style="text-align:center">\n        <p id="schoolName"> {{divingSchoolDescriptionObj.title}} </p>\n        <rating class="ratingClass" no-padding no-mrgin [(ngModel)]="divingSchoolDescriptionObj.rate" readOnly="true" max="5" emptyStarIconName="star-outline" halfStarIconName="star-half" starIconName="star" nullable="false" ></rating>      \n        <p id="schoolCountry">{{divingSchoolDescriptionObj.area}}, {{divingSchoolDescriptionObj.city_name}}</p>\n      </div> \n   \n    </ion-navbar>\n        \n     \n  </ion-header>\n\n\n<ion-content padding>\n\n    <ion-list>\n       \n        <ion-row id="iconRow" class="shadowAndRadius" >\n            <ion-col (click)="gotoMap()">\n                <ion-buttons class="iconContaine">\n                    <button ion-button icon-only clear>\n                      <custom-icon set="evil" name="map" ></custom-icon>\n                    </button>\n                </ion-buttons>\n                الخريطه\n              \n            </ion-col>\n            <ion-col (click)="phoneCall()">\n                <ion-buttons class="iconContaine">\n                    <button ion-button icon-only clear>\n                      <custom-icon set="evil" name="call" ></custom-icon>\n                    </button>\n                  </ion-buttons>\n                  إتصال\n                  \n            </ion-col>\n            <ion-col (click)="presentPopover(e)">\n                <ion-buttons class="iconContaine">\n                    <button ion-button icon-only clear>\n                      <custom-icon set="evil" name="comment" ></custom-icon>\n                    </button>\n                  </ion-buttons>\n                  إضافة تعليق\n            </ion-col>\n        </ion-row>\n  \n        <ion-row class="rowShadow" >\n          <p>\n            {{divingSchoolDescriptionObj.description}} \n          </p>\n        </ion-row>\n      \n        <h5 style="font-weight:bold">\n          التعليقات\n        </h5>\n  \n        <!-- comment row --> \n\n        <ion-row class="rowShadow" id="commentRow" *ngFor="let comment of getAllComments()">\n          \n            <div id="usernameDiv" *ngIf="comment.user_name">\n              <p id="userNameForComment">\n                {{comment.user_name}}\n              </p>\n              <rating  class="ratingClass" no-padding no-mrgin [(ngModel)]="comment.rate" readOnly="true" max="5" emptyStarIconName="star-outline" halfStarIconName="star-half" starIconName="star" nullable="false"></rating>            \n            </div>\n            <div *ngIf="comment.user_name">\n              <p>\n                {{comment.comment}}\n              </p>\n            </div>\n          \n        </ion-row >  \n      </ion-list>\n\n</ion-content>\n`/*ion-inline-end:"/Users/hindhesham/Desktop/Kyadati/src/pages/dirving-school-details/dirving-school-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_drivingSchool_service__["a" /* drivingSchoolProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__["a" /* CallNumber */]])
    ], DirvingSchoolDetailsPage);
    return DirvingSchoolDetailsPage;
}());

//# sourceMappingURL=dirving-school-details.js.map

/***/ })

});
//# sourceMappingURL=17.js.map