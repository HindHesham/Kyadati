webpackJsonp([8],{

/***/ 1002:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InsuranceCompaniesDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_insuranceCompanies_service__ = __webpack_require__(587);
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
 * Generated class for the InsuranceCompaniesDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InsuranceCompaniesDetailsPage = (function () {
    function InsuranceCompaniesDetailsPage(navCtrl, navParams, toastCtrl, loadingCtrl, popoverCtrl, nativeStorage, callNumber, insuranceCompaniesProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.popoverCtrl = popoverCtrl;
        this.nativeStorage = nativeStorage;
        this.callNumber = callNumber;
        this.insuranceCompaniesProvider = insuranceCompaniesProvider;
        this.companyDescriptionObj = [];
        this.commentsObj = [];
    }
    InsuranceCompaniesDetailsPage.prototype.ionViewDidEnter = function () {
        this.getCompanyDetails();
    };
    InsuranceCompaniesDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InsuranceCompaniesDetailsPage');
    };
    InsuranceCompaniesDetailsPage.prototype.getCompanyDetails = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            spinner: 'crescent',
            content: ''
        });
        loader.present().then(function () {
            _this.companyId = _this.navParams.get('companyId');
            if (_this.companyId) {
                _this.insuranceCompaniesProvider.insuranceCompanyDescription(_this.companyId)
                    .then(function (result) {
                    _this.result = JSON.parse(result.data);
                    //console.log("result is: "+ JSON.stringify(result))
                    if (_this.result.status_code === 200) {
                        loader.dismiss();
                        _this.companyDescriptionObj = _this.result.insurance_company;
                        _this.commentsObj = _this.result.insurance_company.comments;
                        _this.phone = _this.result.insurance_company.phone;
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
    InsuranceCompaniesDetailsPage.prototype.getAllComments = function () {
        return this.commentsObj;
    };
    InsuranceCompaniesDetailsPage.prototype.gotoMap = function () {
        this.navCtrl.push('MapPage', {
            "latitude": this.companyDescriptionObj.latitude,
            "longitude": this.companyDescriptionObj.longitude
        });
    };
    InsuranceCompaniesDetailsPage.prototype.phoneCall = function () {
        this.callNumber.callNumber(this.phone, true)
            .then(function (res) { return console.log('Launched dialer!' + res); })
            .catch(function (err) { return console.log('Error launching dialer' + err); });
    };
    InsuranceCompaniesDetailsPage.prototype.presentPopover = function (myEvent) {
        var _this = this;
        this.nativeStorage.getItem('myitem')
            .then(function (data) {
            var popover = _this.popoverCtrl.create('PopoverPage', {
                id: _this.companyDescriptionObj.id,
                type: 3
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
    InsuranceCompaniesDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-insurance-companies-details',template:/*ion-inline-start:"/Users/hindhesham/Desktop/Kyadati/src/pages/insurance-companies-details/insurance-companies-details.html"*/`<!--\n  Generated template for the InsuranceCompaniesDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border class="headerShadow">\n    <ion-navbar >\n            <ion-buttons end disable>\n                    <button style="background:transparent">\n                        \n                    </button>\n                </ion-buttons>\n        <ion-row style="margin-top:20px">\n            <div class="logoSchool">\n                <img *ngIf="companyDescriptionObj.image" src="http://car.zodiacstudio.net{{companyDescriptionObj.image}}" />\n                <img *ngIf="!companyDescriptionObj.image" src="assets/imgs/avatar.png" />\n            </div>\n        </ion-row>\n\n        <div style="text-align:center">\n            <p id="schoolName" > {{companyDescriptionObj.title}} </p>\n            <p id="schoolCountry"> {{companyDescriptionObj.city_name}}, {{companyDescriptionObj.area}} </p>\n        </div> \n    </ion-navbar>     \n</ion-header>\n\n<ion-content padding>\n    \n        <ion-list>\n          <ion-row id="iconRow" class="shadowAndRadius" >\n              <ion-col (click)="gotoMap()">\n                  <ion-buttons class="iconContaine">\n                      <button ion-button icon-only clear>\n                        <custom-icon set="evil" name="map" ></custom-icon>\n                      </button>\n                  </ion-buttons>\n                  الخريطه\n              </ion-col>\n\n              <ion-col (click)="phoneCall()">\n                  <ion-buttons class="iconContaine">\n                      <button ion-button icon-only clear>\n                        <custom-icon set="evil" name="call" ></custom-icon>\n                      </button>\n                    </ion-buttons>\n                    إتصال\n              </ion-col>\n\n              <ion-col (click)="presentPopover()">\n                  <ion-buttons class="iconContaine">\n                      <button ion-button icon-only clear>\n                        <custom-icon set="evil" name="comment" ></custom-icon>\n                      </button>\n                    </ion-buttons>\n                    إضافة تعليق\n              </ion-col>\n              \n          </ion-row>\n          <ion-row id="secondRow" class="rowShadow">\n              <p>\n                 {{companyDescriptionObj.description}}        \n              </p>\n            </ion-row>\n           \n            <ion-row id="boxRow">\n                <ion-col class="shadowAndRadius" style="margin-left:16px;">\n                    \n                    <div class="titleBoxRow">\n                       <P>تأمين شامل</P>\n                    </div>\n                    <div class="detailsBoxRow">\n                        <p class="sallery">{{companyDescriptionObj.full_insurance}}</p>\n                        <p class="name">ريال سعودي</p>\n                    </div>\n                </ion-col>\n                <ion-col class="shadowAndRadius">\n                    <div class="titleBoxRow">\n                        <P> ضد الغير </P>\n                    </div>\n                    <div class="detailsBoxRow">\n                        <p class="sallery">{{companyDescriptionObj.against_others}}</p>\n                        <p class="name">ريال سعودي</p>\n                    </div>\n                </ion-col>\n            </ion-row>\n        \n            <h5>\n                التعليقات\n            </h5>\n            \n            <ion-row class="rowShadow" id="commentRow" *ngFor="let comment of getAllComments()">\n                <div id="usernameDiv" *ngIf="comment.user_name">\n                    <p id="userNameForComment">\n                        {{comment.user_name}}\n                    </p>\n\n                </div>\n                <div *ngIf="comment.user_name">\n                    <p >\n                        {{comment.comment}}\n                    </p>\n                </div>\n\n            </ion-row>\n          \n        </ion-list>\n</ion-content>\n`/*ion-inline-end:"/Users/hindhesham/Desktop/Kyadati/src/pages/insurance-companies-details/insurance-companies-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_3__providers_insuranceCompanies_service__["a" /* insuranceCompaniesProvider */]])
    ], InsuranceCompaniesDetailsPage);
    return InsuranceCompaniesDetailsPage;
}());

//# sourceMappingURL=insurance-companies-details.js.map

/***/ }),

/***/ 980:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsuranceCompaniesDetailsPageModule", function() { return InsuranceCompaniesDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__insurance_companies_details__ = __webpack_require__(1002);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic2_custom_icons__ = __webpack_require__(579);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var InsuranceCompaniesDetailsPageModule = (function () {
    function InsuranceCompaniesDetailsPageModule() {
    }
    InsuranceCompaniesDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__insurance_companies_details__["a" /* InsuranceCompaniesDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__insurance_companies_details__["a" /* InsuranceCompaniesDetailsPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ionic2_custom_icons__["a" /* CustomIconsModule */]
            ],
        })
    ], InsuranceCompaniesDetailsPageModule);
    return InsuranceCompaniesDetailsPageModule;
}());

//# sourceMappingURL=insurance-companies-details.module.js.map

/***/ })

});
//# sourceMappingURL=8.js.map