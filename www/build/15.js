webpackJsonp([15],{

/***/ 973:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationalContentPageModule", function() { return EducationalContentPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__educational_content__ = __webpack_require__(995);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EducationalContentPageModule = (function () {
    function EducationalContentPageModule() {
    }
    EducationalContentPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__educational_content__["a" /* EducationalContentPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__educational_content__["a" /* EducationalContentPage */]),
            ],
        })
    ], EducationalContentPageModule);
    return EducationalContentPageModule;
}());

//# sourceMappingURL=educational-content.module.js.map

/***/ }),

/***/ 995:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EducationalContentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(586);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_educationalContent_service__ = __webpack_require__(590);
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
 * Generated class for the EducationalContentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EducationalContentPage = (function () {
    function EducationalContentPage(navCtrl, navParams, nativeStorage, toastCtrl, loadingCtrl, iab, educationalContentProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.nativeStorage = nativeStorage;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.iab = iab;
        this.educationalContentProvider = educationalContentProvider;
        this.educationalContentObj = [];
        this.learningType = 'video';
        this.status = 'فيديوهات';
    }
    EducationalContentPage.prototype.ngOnInit = function () {
        this.educationalContent();
    };
    EducationalContentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EducationalContentPage');
    };
    EducationalContentPage.prototype.showVideo = function (path) {
        var browser = this.iab.create(path);
        browser.show();
    };
    EducationalContentPage.prototype.gotoFullSize = function (contentPath, type) {
        this.navCtrl.push('InphographicsFullSizePage', {
            path: contentPath,
            type: type
        });
    };
    EducationalContentPage.prototype.educationalContent = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            spinner: 'crescent',
            content: ''
        });
        loader.present().then(function () {
            _this.educationalContentProvider.educational_content(_this.learningType)
                .then(function (result) {
                _this.result = JSON.parse(result.data);
                if (_this.result.status_code === 200) {
                    loader.dismiss();
                    _this.educationalContentObj = _this.result.educational_content;
                    _this.getAllEducationalContent();
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
                    message: "Check your connection and try again",
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
            });
        });
    };
    EducationalContentPage.prototype.getAllEducationalContent = function () {
        return this.educationalContentObj;
    };
    EducationalContentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-educational-content',template:/*ion-inline-start:"/Users/hindhesham/Desktop/Kyadati/src/pages/educational-content/educational-content.html"*/`<!--\n  Generated template for the EducationalContentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="headerShadow" no-border>\n  <ion-navbar color="white">\n    <button ion-button menuToggle>\n      <ion-icon name="menu" color="primary"></ion-icon>\n    </button>\n    <ion-title> تعليم </ion-title>\n  </ion-navbar>\n  <ion-toolbar color="white" no-border-bottom>\n      <ion-segment [(ngModel)]="learningType" >\n        <ion-segment-button value="video" (click)="educationalContent(); status = \'فيديوهات\'" >\n          فيديوهات\n        </ion-segment-button>\n        <ion-segment-button value="image"  (click)="educationalContent(); status = \'احصائيات\'">\n            احصائيات\n        </ion-segment-button>\n      </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n  <!-- Motion Graphics -->\n  <ion-list *ngIf="status === \'فيديوهات\'" style="height:100%">\n    <div id="mainDiv" class="shadowAndRadius" *ngFor="let content of getAllEducationalContent()">\n      <!-- \n      <video  poster="assets/imgs/video.png" width="100%" height="100%" (click)="showFullSize(content.path)">\n          <source src="{{content.path}}" type="video/mp4" >\n        </video>\n      -->\n        <div class="graphicDiv" (click)="showVideo(content.path)">\n          <img src="{{content.poster}}" />\n        </div>\n        <div id="inphographicsName" class="patternimgAndColor">\n          <p>\n              {{content.title}}\n          </p>\n        </div>\n    </div>\n  </ion-list>\n\n  <!-- Info Graphics -->\n  <ion-list *ngIf="status === \'احصائيات\'" style="height:100% ">\n    <div id="mainDiv" class="shadowAndRadius" *ngFor="let content of getAllEducationalContent()">\n      <div class="graphicDiv" (click)="gotoFullSize(content.path, \'image\')">\n          <img src="http://car.zodiacstudio.net{{content.path}}" />\n      </div>\n      <div id="inphographicsName" class="patternimgAndColor">\n        <p>\n            {{content.title}}\n        </p>\n      </div>\n    </div>\n  </ion-list>\n</ion-content>\n`/*ion-inline-end:"/Users/hindhesham/Desktop/Kyadati/src/pages/educational-content/educational-content.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_4__providers_educationalContent_service__["a" /* educationalContentProvider */]])
    ], EducationalContentPage);
    return EducationalContentPage;
}());

//# sourceMappingURL=educational-content.js.map

/***/ })

});
//# sourceMappingURL=15.js.map