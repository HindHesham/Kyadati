webpackJsonp([14],{

/***/ 974:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterAdsResultPageModule", function() { return FilterAdsResultPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filter_ads_result__ = __webpack_require__(996);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FilterAdsResultPageModule = (function () {
    function FilterAdsResultPageModule() {
    }
    FilterAdsResultPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__filter_ads_result__["a" /* FilterAdsResultPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__filter_ads_result__["a" /* FilterAdsResultPage */]),
            ],
        })
    ], FilterAdsResultPageModule);
    return FilterAdsResultPageModule;
}());

//# sourceMappingURL=filter-ads-result.module.js.map

/***/ }),

/***/ 996:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterAdsResultPage; });
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
 * Generated class for the FilterAdsResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FilterAdsResultPage = (function () {
    function FilterAdsResultPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.filterAdsObj = navParams.get('filterAds');
    }
    FilterAdsResultPage.prototype.ngOnInit = function () {
        this.getAllFilterAds();
    };
    FilterAdsResultPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FilterAdsResultPage');
    };
    FilterAdsResultPage.prototype.getAllFilterAds = function () {
        return this.filterAdsObj;
    };
    FilterAdsResultPage.prototype.gotoAdsProfile = function (adId) {
        this.navCtrl.push('DetailsAdsPage', {
            adId: adId,
            page: 'my_ads'
        });
    };
    FilterAdsResultPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-filter-ads-result',template:/*ion-inline-start:"/Users/hindhesham/Desktop/Kyadati/src/pages/filter-ads-result/filter-ads-result.html"*/`<!--\n  Generated template for the FilterAdsResultPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border class="headerShadow">\n    \n  <ion-navbar>\n      <ion-title> نتائج البحث </ion-title> \n  </ion-navbar>\n  \n</ion-header>\n\n<ion-content padding>\n  <ion-list >\n      <ion-row class="listRow">\n        \n        \n          <ion-list  style="height:100%" >\n              <div id="mainDiv" class="shadowAndRadius" *ngFor="let ad of getAllFilterAds()" (click)="gotoAdsProfile(ad.id)">\n             \n\n                <div >\n                  <div class="graphicDiv">\n                    <img src="http://car.zodiacstudio.net\/{{ad.first_image}}"/>\n                  </div>\n                  <div id="detailsMainDiv" class="patternimgAndColor">\n                    <div id="adsName">\n                      <p> {{ ad.title }} </p>\n                    </div>\n                    <div id="adsPriceMain">\n                      <div id="price">\n                         {{ad.price}}\n                      </div>\n                      <div id="moneyName">\n                          ريال سعودي\n                      </div>\n                    </div>\n                  </div>\n                </div>\n\n              </div> \n            </ion-list>\n      </ion-row>\n    \n  </ion-list>\n</ion-content>\n`/*ion-inline-end:"/Users/hindhesham/Desktop/Kyadati/src/pages/filter-ads-result/filter-ads-result.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], FilterAdsResultPage);
    return FilterAdsResultPage;
}());

//# sourceMappingURL=filter-ads-result.js.map

/***/ })

});
//# sourceMappingURL=14.js.map