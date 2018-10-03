webpackJsonp([16],{

/***/ 972:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrivingSchoolsPageModule", function() { return DrivingSchoolsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__driving_schools__ = __webpack_require__(994);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic2_rating__ = __webpack_require__(580);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic2_custom_icons__ = __webpack_require__(579);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DrivingSchoolsPageModule = (function () {
    function DrivingSchoolsPageModule() {
    }
    DrivingSchoolsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__driving_schools__["a" /* DrivingSchoolsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__driving_schools__["a" /* DrivingSchoolsPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ionic2_rating__["a" /* Ionic2RatingModule */],
                __WEBPACK_IMPORTED_MODULE_4_ionic2_custom_icons__["a" /* CustomIconsModule */]
            ],
        })
    ], DrivingSchoolsPageModule);
    return DrivingSchoolsPageModule;
}());

//# sourceMappingURL=driving-schools.module.js.map

/***/ }),

/***/ 994:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrivingSchoolsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_drivingSchool_service__ = __webpack_require__(585);
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
 * Generated class for the DrivingSchoolsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DrivingSchoolsPage = (function () {
    function DrivingSchoolsPage(navCtrl, navParams, loadingCtrl, nativeStorage, toastCtrl, drivingSchoolProvider, citiesProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.nativeStorage = nativeStorage;
        this.toastCtrl = toastCtrl;
        this.drivingSchoolProvider = drivingSchoolProvider;
        this.citiesProvider = citiesProvider;
        this.drivingSchoolObj = [];
        this.filterDrivingSchoolObj = [];
        this.citiesObj = [];
        this.token = '15245142205ade3dac3c933';
        this.selected = 'all';
    }
    DrivingSchoolsPage.prototype.ngOnInit = function () {
        this.allDrivingSchools();
        this.allCities();
    };
    DrivingSchoolsPage.prototype.ionViewDidLoad = function () { };
    DrivingSchoolsPage.prototype.allDrivingSchools = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            spinner: 'crescent',
            content: ''
        });
        loader.present().then(function () {
            _this.drivingSchoolProvider.allDrivingSchool()
                .then(function (result) {
                _this.result = JSON.parse(result.data);
                //console.log("driving school result is: "+ JSON.stringify(result));
                if (_this.result.status_code === 200) {
                    loader.dismiss();
                    _this.drivingSchoolObj = _this.result.driving_schools;
                    _this.getAllDrivingSchool();
                }
                else {
                    loader.dismiss();
                    var toast = _this.toastCtrl.create({
                        message: "check your internet connection",
                        duration: 3000,
                        position: 'bottom'
                    });
                    toast.present();
                }
            }).catch(function (error) {
                loader.dismiss();
                var toast = _this.toastCtrl.create({
                    message: "أنت لست متصل بالانترنت",
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
            });
        });
    };
    DrivingSchoolsPage.prototype.getAllDrivingSchool = function () {
        return this.drivingSchoolObj;
    };
    DrivingSchoolsPage.prototype.allCities = function () {
        var _this = this;
        this.citiesProvider.cities()
            .then(function (result) {
            //console.log("cities result is: "+ JSON.stringify(result));
            _this.citiesResult = JSON.parse(result.data);
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
    DrivingSchoolsPage.prototype.getAllCities = function () {
        return this.citiesObj;
    };
    DrivingSchoolsPage.prototype.cityChange = function (e) {
        if (e === 'all') {
            this.getAllDrivingSchool();
        }
        else {
            this.filterDrivingSchoolObj = this.drivingSchoolObj.filter(function (value) { return value.city_name === e; });
            this.getAllFilteredDrivingSchool();
        }
    };
    DrivingSchoolsPage.prototype.getAllFilteredDrivingSchool = function () {
        return this.filterDrivingSchoolObj;
    };
    DrivingSchoolsPage.prototype.gotoSchoolProfile = function (drivingSchoolId) {
        //e.stopPropagation();
        // alert("from click method: " + drivingSchoolObj);
        this.navCtrl.push('DirvingSchoolDetailsPage', {
            drivingSchoolId: drivingSchoolId
        });
    };
    DrivingSchoolsPage.prototype.saveUserRating = function (e) {
        console.log('clicked: ', e);
    };
    DrivingSchoolsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-driving-schools',template:/*ion-inline-start:"/Users/hindhesham/Desktop/Kyadati/src/pages/driving-schools/driving-schools.html"*/`<!--\n  Generated template for the DrivingSchoolsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border class="headerShadow">\n  <ion-navbar >\n    <button ion-button menuToggle>\n        <ion-icon name="menu" color="white"></ion-icon>\n    </button>\n    <ion-title >مدارس تعليم القيادة</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding >\n  <ion-list style="margin-top:2%">\n    <ion-row id="mapSelectionRow" >\n      <ion-item id="mapSelectionItem" class="shadowAndRadius" no-lines>\n        \n          <ion-select (ionChange)="cityChange($event)" placeholder="اختار المدينة" [(ngModel)]="selected">\n            <ion-option value="all">كل المدن </ion-option>\n            <ion-option *ngFor="let city of getAllCities()" value="{{city.name}}"> {{ city.name }} </ion-option>\n          </ion-select>\n        \n      </ion-item>\n    </ion-row>\n    <ion-row class="listRow">\n        <ion-list class="listSchools" no-lines *ngIf="selected === \'all\'">\n\n          <div id="listSchoolDiv" class="shadowAndRadius" *ngFor="let schoolDrive of getAllDrivingSchool()">\n            <div id="imgDiv" (click)="gotoSchoolProfile(schoolDrive.id)">\n              <img *ngIf="schoolDrive.image" src="http://car.zodiacstudio.net{{schoolDrive.image}}" />\n              <img *ngIf="!schoolDrive.image" src="assets/imgs/avatar.png" />\n            </div>\n            <div id="ratinrDiv" class="patternimgAndColor">\n              <p (click)="gotoSchoolProfile()" style="margin-bottom:0">{{ schoolDrive.title }}</p>\n              <rating class="ratingClass" no-padding no-mrgin [(ngModel)]="schoolDrive.rate" readOnly="true" max="5" emptyStarIconName="star-outline" halfStarIconName="star-half" starIconName="star" nullable="false" (ngModelChange)="saveUserRating($event)"></rating>\n            </div>\n          </div> \n          \n        </ion-list>\n\n        <ion-list class="listSchools" no-lines *ngIf="selected !== \'all\'">\n\n          <div id="listSchoolDiv" class="shadowAndRadius" *ngFor="let schoolDrive of getAllFilteredDrivingSchool()">\n            <div id="imgDiv" (click)="gotoSchoolProfile(schoolDrive.id)">\n              <img *ngIf="schoolDrive.image" src="http://car.zodiacstudio.net{{schoolDrive.image}}" />\n              <img *ngIf="!schoolDrive.image" src="assets/imgs/avatar.png" />\n            </div>\n            <div id="ratinrDiv" class="patternimgAndColor">\n              <p (click)="gotoSchoolProfile()" style="margin-bottom:0">{{ schoolDrive.title }}</p>\n              <rating class="ratingClass" no-padding no-mrgin [(ngModel)]="schoolDrive.rate" readOnly="true" max="5" emptyStarIconName="star-outline" halfStarIconName="star-half" starIconName="star" nullable="false" (ngModelChange)="saveUserRating($event)"></rating>\n            </div>\n          </div> \n          \n        </ion-list>\n\n    </ion-row>\n  </ion-list>\n</ion-content>\n\n`/*ion-inline-end:"/Users/hindhesham/Desktop/Kyadati/src/pages/driving-schools/driving-schools.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_drivingSchool_service__["a" /* drivingSchoolProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_cities_service__["a" /* citiesProvider */]])
    ], DrivingSchoolsPage);
    return DrivingSchoolsPage;
}());

//# sourceMappingURL=driving-schools.js.map

/***/ })

});
//# sourceMappingURL=16.js.map