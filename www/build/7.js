webpackJsonp([7],{

/***/ 1003:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InsuranceCompaniesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_insuranceCompanies_service__ = __webpack_require__(587);
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
 * Generated class for the InsuranceCompaniesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InsuranceCompaniesPage = (function () {
    function InsuranceCompaniesPage(navCtrl, navParams, toastCtrl, loadingCtrl, nativeStorage, citiesProvider, insuranceCompaniesProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.nativeStorage = nativeStorage;
        this.citiesProvider = citiesProvider;
        this.insuranceCompaniesProvider = insuranceCompaniesProvider;
        this.citiesObj = [];
        this.filteredInsuranceCompaniesObj = [];
        this.selected = 'all';
    }
    InsuranceCompaniesPage.prototype.ngOnInit = function () {
        this.insuranceCompanies();
        this.allCities();
    };
    InsuranceCompaniesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InsuranceCompaniesPage');
    };
    InsuranceCompaniesPage.prototype.gotoProfileDetails = function (companyId) {
        this.navCtrl.push('InsuranceCompaniesDetailsPage', {
            companyId: companyId
        });
    };
    InsuranceCompaniesPage.prototype.insuranceCompanies = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            spinner: 'crescent',
            content: ''
        });
        loader.present().then(function () {
            _this.insuranceCompaniesProvider.allinsuranceCompanies()
                .then(function (result) {
                _this.result = JSON.parse(result.data);
                //console.log("insurance companies result is: "+ JSON.stringify(result));
                if (_this.result.status_code === 200) {
                    loader.dismiss();
                    _this.insuranceCompaniesObj = _this.result.insurance_companies;
                    _this.getAllInsuranceCompanies();
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
    InsuranceCompaniesPage.prototype.getAllInsuranceCompanies = function () {
        return this.insuranceCompaniesObj;
    };
    InsuranceCompaniesPage.prototype.allCities = function () {
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
    InsuranceCompaniesPage.prototype.getAllCities = function () {
        return this.citiesObj;
    };
    InsuranceCompaniesPage.prototype.cityChange = function (e) {
        if (e === 'all') {
            this.getAllInsuranceCompanies();
        }
        else {
            this.filteredInsuranceCompaniesObj = this.insuranceCompaniesObj.filter(function (value) { return value.city_name === e; });
            this.getAllFilteredInsuranceCompanies();
        }
    };
    InsuranceCompaniesPage.prototype.getAllFilteredInsuranceCompanies = function () {
        return this.filteredInsuranceCompaniesObj;
    };
    InsuranceCompaniesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-insurance-companies',template:/*ion-inline-start:"/Users/hindhesham/Desktop/Kyadati/src/pages/insurance-companies/insurance-companies.html"*/`<!--\n  Generated template for the InsuranceCompaniesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border class="headerShadow">\n    \n      <ion-navbar>\n            <ion-title>  شركات تأمين </ion-title> \n            <button ion-button menuToggle start>\n                <ion-icon name="menu" color="white"></ion-icon>\n            </button> \n      </ion-navbar>\n    \n  </ion-header>\n\n\n  <ion-content padding class="outer-content">\n      <ion-list >\n        \n        <ion-row id="mapSelectionRow" >\n          <ion-item id="mapSelectionItem" class="shadowAndRadius" no-lines>\n            <ion-select (ionChange)="cityChange($event)" placeholder="اختار المدينة" [(ngModel)]="selected">\n              <ion-option value="all">كل المدن </ion-option>\n              <ion-option *ngFor="let city of getAllCities()" value="{{city.name}}"> {{ city.name }} </ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-row>\n      \n        <ion-row class="listRow">\n\n            <ion-list class="listSchools" no-lines style="height:100%" *ngIf="selected === \'all\'">\n               \n              <div *ngFor="let company of getAllInsuranceCompanies()" id="listSchoolDiv" style="height:212px" class="shadowAndRadius" (click)="gotoProfileDetails(company.id)">\n                  <div id="imgDiv" style="height:163px">\n                    <img *ngIf="company.image" src="http://car.zodiacstudio.net{{company.image}}" />\n                    <img *ngIf="!company.image" src="assets/imgs/avatar.png" />\n                  </div>\n                  <div class="patternimgAndColor" id="ratinrDiv" style="height:44px">\n                    <p> {{company.title}} </p>\n                  </div>\n              </div>\n\n            </ion-list>\n\n            <ion-list class="listSchools" no-lines style="height:100%" *ngIf="selected !== \'all\'">\n               \n                <div *ngFor="let company of getAllFilteredInsuranceCompanies()" id="listSchoolDiv" style="height:212px" class="shadowAndRadius" (click)="gotoProfileDetails(company.id)">\n                    <div id="imgDiv" style="height:163px">\n                      <img *ngIf="company.image" src="http://car.zodiacstudio.net{{company.image}}" />\n                      <img *ngIf="!company.image" src="assets/imgs/avatar.png" />\n                    </div>\n                    <div class="patternimgAndColor" id="ratinrDiv" style="height:44px">\n                      <p> {{company.title}} </p>\n                    </div>\n                </div>\n  \n              </ion-list>\n\n          </ion-row>\n      </ion-list>\n\n</ion-content>\n`/*ion-inline-end:"/Users/hindhesham/Desktop/Kyadati/src/pages/insurance-companies/insurance-companies.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_4__providers_cities_service__["a" /* citiesProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_insuranceCompanies_service__["a" /* insuranceCompaniesProvider */]])
    ], InsuranceCompaniesPage);
    return InsuranceCompaniesPage;
}());

//# sourceMappingURL=insurance-companies.js.map

/***/ }),

/***/ 981:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsuranceCompaniesPageModule", function() { return InsuranceCompaniesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__insurance_companies__ = __webpack_require__(1003);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic2_custom_icons__ = __webpack_require__(579);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var InsuranceCompaniesPageModule = (function () {
    function InsuranceCompaniesPageModule() {
    }
    InsuranceCompaniesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__insurance_companies__["a" /* InsuranceCompaniesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__insurance_companies__["a" /* InsuranceCompaniesPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ionic2_custom_icons__["a" /* CustomIconsModule */]
            ],
        })
    ], InsuranceCompaniesPageModule);
    return InsuranceCompaniesPageModule;
}());

//# sourceMappingURL=insurance-companies.module.js.map

/***/ })

});
//# sourceMappingURL=7.js.map