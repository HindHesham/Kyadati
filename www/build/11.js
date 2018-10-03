webpackJsonp([11],{

/***/ 977:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(999);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic2_rating__ = __webpack_require__(580);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HomePageModule = (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
                __WEBPACK_IMPORTED_MODULE_3_ionic2_rating__["a" /* Ionic2RatingModule */]
            ],
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 999:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(586);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_home_service__ = __webpack_require__(591);
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
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomePage = (function () {
    function HomePage(navCtrl, navParams, loadingCtrl, userHomeProvider, nativeStorage, iab, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.userHomeProvider = userHomeProvider;
        this.nativeStorage = nativeStorage;
        this.iab = iab;
        this.toastCtrl = toastCtrl;
        this.drivingSchoolObj = [];
        this.imagesObj = [];
        this.videoObj = [];
        this.governmentPlacesObj = [];
        this.maintenanaceCentersObj = [];
    }
    HomePage.prototype.ngOnInit = function () {
        this.user_home();
    };
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    HomePage.prototype.user_home = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            spinner: 'crescent',
            content: ''
        });
        loader.present().then(function () {
            _this.userHomeProvider.user_home()
                .then(function (result) {
                _this.result = JSON.parse(result.data);
                //alert("user home result is: "+ this.result);
                if (_this.result.status_code === 200) {
                    loader.dismiss();
                    _this.imagesObj = _this.result.images;
                    _this.videoObj = _this.result.videos;
                    _this.adsObj = _this.result.ads;
                    _this.governmentPlacesObj = _this.result.government_places;
                    _this.maintenanaceCentersObj = _this.result.maintenanace_centers;
                    _this.drivingSchoolObj = _this.result.driving_schools;
                    _this.getAllAds();
                    _this.getAllDrivingSchool();
                    _this.getAllGovernmentPlaces();
                    _this.getAllMaintenanaceCenters();
                    _this.getAllImages();
                    _this.getAllVideos();
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
                    message: "أنت غير متصل بالانترنت",
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
            });
        });
    };
    HomePage.prototype.getAllImages = function () {
        return this.imagesObj;
    };
    HomePage.prototype.getAllVideos = function () {
        return this.videoObj;
    };
    HomePage.prototype.getAllDrivingSchool = function () {
        return this.drivingSchoolObj;
    };
    HomePage.prototype.getAllAds = function () {
        return this.adsObj;
    };
    HomePage.prototype.getAllMaintenanaceCenters = function () {
        return this.maintenanaceCentersObj;
    };
    HomePage.prototype.getAllGovernmentPlaces = function () {
        return this.governmentPlacesObj;
    };
    HomePage.prototype.gotoSchoolProfile = function (drivingSchoolId) {
        this.navCtrl.push('DirvingSchoolDetailsPage', {
            drivingSchoolId: drivingSchoolId
        });
    };
    HomePage.prototype.gotoAdsProfile = function (adId) {
        this.navCtrl.push('DetailsAdsPage', {
            adId: adId
        });
    };
    HomePage.prototype.showVideo = function (path) {
        var browser = this.iab.create(path);
        browser.show();
    };
    HomePage.prototype.gotoFullSize = function (contentPath, type) {
        this.navCtrl.push('InphographicsFullSizePage', {
            path: contentPath,
            type: type
        });
    };
    HomePage.prototype.maintenanaceCenterDescription = function (maintenanceplaceId) {
        this.navCtrl.push('MaintenanaceCenterDescriptionPage', {
            maintenanceplaceId: maintenanceplaceId
        });
    };
    HomePage.prototype.gotoGovernmentPlaceDescription = function (placeId) {
        this.navCtrl.push('governmentPlacesDetailsPage', {
            placeId: placeId
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/hindhesham/Desktop/Kyadati/src/pages/home/home.html"*/`\n\n<ion-content class="outer-content">\n    <ion-list>\n      <ion-row id="categoriesRow" >\n  \n        <div id="div1">\n          <img src="assets/icon/Categories/1.png" />\n        </div>\n        <div id="div2">\n          <img src="assets/icon/Categories/2.png" />\n        </div>\n        \n        <div id="div3">\n          <img src="assets/icon/Categories/3.png" />\n        </div>\n        \n        <div id="div4">\n          <img src="assets/icon/Categories/4.png" />\n        </div>\n        \n        <div id="div5">\n          <img src="assets/icon/Categories/5.png" />\n        </div>\n        \n        <div id="div6">\n          <img src="assets/icon/Categories/6.png" />\n        </div>\n        \n        <div id="div7">\n          <img src="assets/icon/Categories/7.svg" />\n        </div>\n      \n      </ion-row>\n  \n      <!-- اعلانااات -->\n      <ion-row class="SecTitleRow patternimgAndColor">\n        <div id="secTitle">\n          إعلانات مميزة\n        </div>\n      </ion-row>\n      <ion-row class="adsSecRow" padding>\n          <ion-list class="listSchools" no-lines>\n            <div id="adsDiv" class="shadowAndRadius" *ngFor="let ad of getAllAds()" (click)="gotoAdsProfile(ad.id)">\n              <div id="imgDiv" >\n                <img *ngIf="ad.first_image" src="http://car.zodiacstudio.net/{{ad.first_image}}" />\n                <img *ngIf="!ad.first_image" src="assets/imgs/avatar.png" />\n              </div>\n              <div id="ratinrDiv" class="patternimgAndColor">\n                <p> {{ad.title}} </p>\n                <p id="adsPrice" style="margin:0">السعر: <span>{{ad.price}}</span></p>\n              </div>\n            </div> \n  \n          </ion-list> \n      </ion-row>\n  \n      <!-- مدارس القياده -->\n    \n      <ion-row class="SecTitleRow patternimgAndColor">\n        <div id="secTitle">\n          مدارس تعليم القيادة الاكثر تقييماً\n        </div>\n      </ion-row>\n      <ion-row class="adsSecRow" padding>\n        <ion-list class="listSchools" no-lines>\n          <div id="listSchoolHomeDiv" class="shadowAndRadius" *ngFor="let drivingSchool of getAllDrivingSchool()" (click)="gotoSchoolProfile(drivingSchool.id)">\n              <div id="imgDiv" >\n                <img *ngIf="drivingSchool.image" src="http://car.zodiacstudio.net{{drivingSchool.image}}" />\n                <img *ngIf="!drivingSchool.image" src="assets/imgs/avatar.png" />            \n              </div>\n              <div id="ratinrDiv" class="patternimgAndColor">\n                <p>{{drivingSchool.title}} </p>\n                <rating class="ratingClass" no-padding no-mrgin [(ngModel)]="drivingSchool.rate" readOnly="true" max="5" emptyStarIconName="star-outline" halfStarIconName="star-half" starIconName="star" nullable="false" ></rating>\n              </div>\n            \n          </div> \n\n        </ion-list>\n      </ion-row>\n    \n      <!-- انفودرافيك -->\n      \n      <ion-row class="SecTitleRow patternimgAndColor">\n        <div id="secTitle">\n            إنفوجرافيك\n        </div>\n      </ion-row>\n      <ion-row class="adsSecRow" padding>\n          <ion-list class="listSchools" no-lines>\n            <div id="inphogtraficHYomeDiv" class="shadowAndRadius" *ngFor="let image of getAllImages()" (click)="gotoFullSize(image.path, \'image\')">\n              <div id="imgDiv">\n                <img src="http://car.zodiacstudio.net{{image.path}}" />\n              </div>\n              <div id="ratinrDiv" class="patternimgAndColor">\n                <p>{{image.title}}</p>\n              </div>\n            </div> \n\n          </ion-list>\n      </ion-row>\n    \n        <!-- فيديوهات -->\n        \n        <ion-row class="SecTitleRow patternimgAndColor">\n            <div id="secTitle">\n                فيديوهات\n            </div>\n        </ion-row>\n        <ion-row class="adsSecRow" padding>\n              <ion-list class="listSchools" no-lines>\n  \n                <div id="inphogtraficHYomeDiv" class="shadowAndRadius" *ngFor="let video of getAllVideos()" (click)="showVideo(video.path)">\n                  <div id="imgDiv" >\n                    <img src="{{video.poster}}" />\n                  </div>\n                  <div id="ratinrDiv" class="patternimgAndColor">\n                    <p> {{video.title}} </p>\n                  </div>\n                </div>\n              </ion-list>\n        </ion-row>\n    \n  \n        <!-- اماكن تهمك -->\n        \n        <ion-row class="SecTitleRow patternimgAndColor">\n            <div id="secTitle">\n                اماكن تهمك\n            </div>\n        </ion-row>\n        <ion-row class="adsSecRow" padding>\n              <ion-list class="listSchools" no-lines>\n                \n                <div id="inphogtraficHYomeDiv" class="shadowAndRadius" *ngFor="let governmentPlace of getAllGovernmentPlaces()" (click)="gotoGovernmentPlaceDescription(governmentPlace.id)">\n                  <div id="imgDiv" >\n                    <img *ngIf="governmentPlace.img" src="http://car.zodiacstudio.net{{governmentPlace.img}}" />\n                    <img *ngIf="!governmentPlace.img" src="assets/imgs/avatar.png" />                  \n                  </div>\n                  <div id="ratinrDiv" class="patternimgAndColor">\n                    <p> {{ governmentPlace.title }} </p>\n                  </div>\n                </div> \n\n                <div id="inphogtraficHYomeDiv" class="shadowAndRadius"  *ngFor="let maintenanaceCenter of getAllMaintenanaceCenters()" (click)="maintenanaceCenterDescription(maintenanaceCenter.id)">\n                  <div id="imgDiv" >\n                    <img *ngIf="maintenanaceCenter.img" src="http://car.zodiacstudio.net{{maintenanaceCenter.img}}" />\n                    <img *ngIf="!maintenanaceCenter.img" src="assets/imgs/avatar.png" />\n                  </div>\n                  <div id="ratinrDiv" class="patternimgAndColor">\n                    <p>{{ maintenanaceCenter.title }}</p>\n                  </div>\n                </div> \n\n              </ion-list>\n        </ion-row>\n\n    </ion-list>\n  </ion-content>`/*ion-inline-end:"/Users/hindhesham/Desktop/Kyadati/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_home_service__["a" /* userHomeProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ToastController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=11.js.map