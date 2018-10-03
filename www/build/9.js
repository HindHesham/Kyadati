webpackJsonp([9],{

/***/ 1001:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InphographicsFullSizePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
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
 * Generated class for the InphographicsFullSizePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InphographicsFullSizePage = (function () {
    function InphographicsFullSizePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.path = navParams.get('path');
        this.type = navParams.get('type');
    }
    InphographicsFullSizePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InphographicsFullSizePage');
    };
    InphographicsFullSizePage.prototype.gotoPrevPage = function () {
        this.navCtrl.pop();
    };
    InphographicsFullSizePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-inphographics-full-size',template:/*ion-inline-start:"/Users/hindhesham/Desktop/Kyadati/src/pages/inphographics-full-size/inphographics-full-size.html"*/`<ion-content>\n<!--\n  <video *ngIf="type===\'video\'" controls preload class="inphographicsDiv" autoplay>\n    <source src="{{path}}" type="video/mp4">\n  </video>-->\n  <img class="inphographicsDiv" src="http://car.zodiacstudio.net{{path}}"/>\n  <ion-buttons left class="closeBtn">\n      <button ion-button icon-only class="closeButtonBtn" (click)="gotoPrevPage();"><ion-icon name="ios-close" ></ion-icon></button>\n  </ion-buttons>\n\n   \n</ion-content>\n`/*ion-inline-end:"/Users/hindhesham/Desktop/Kyadati/src/pages/inphographics-full-size/inphographics-full-size.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], InphographicsFullSizePage);
    return InphographicsFullSizePage;
}());

//# sourceMappingURL=inphographics-full-size.js.map

/***/ }),

/***/ 979:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InphographicsFullSizePageModule", function() { return InphographicsFullSizePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inphographics_full_size__ = __webpack_require__(1001);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InphographicsFullSizePageModule = (function () {
    function InphographicsFullSizePageModule() {
    }
    InphographicsFullSizePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__inphographics_full_size__["a" /* InphographicsFullSizePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__inphographics_full_size__["a" /* InphographicsFullSizePage */]),
            ],
        })
    ], InphographicsFullSizePageModule);
    return InphographicsFullSizePageModule;
}());

//# sourceMappingURL=inphographics-full-size.module.js.map

/***/ })

});
//# sourceMappingURL=9.js.map