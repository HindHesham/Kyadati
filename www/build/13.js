webpackJsonp([13],{

/***/ 975:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterAdsPageModule", function() { return FilterAdsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filter_ads__ = __webpack_require__(997);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic2_custom_icons__ = __webpack_require__(579);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FilterAdsPageModule = (function () {
    function FilterAdsPageModule() {
    }
    FilterAdsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__filter_ads__["a" /* FilterAdsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__filter_ads__["a" /* FilterAdsPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ionic2_custom_icons__["a" /* CustomIconsModule */]
            ],
        })
    ], FilterAdsPageModule);
    return FilterAdsPageModule;
}());

//# sourceMappingURL=filter-ads.module.js.map

/***/ }),

/***/ 997:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterAdsPage; });
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
 * Generated class for the FilterAdsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FilterAdsPage = (function () {
    function FilterAdsPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.allAdsObj = [];
        this.filterAdsObj = [];
        this.allAdsObj = navParams.get('adsObj');
    }
    FilterAdsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FilterAdsPage');
    };
    FilterAdsPage.prototype.ionViewWillEnter = function () {
        this.viewCtrl.showBackButton(false);
    };
    FilterAdsPage.prototype.close = function () {
        this.navCtrl.pop();
    };
    FilterAdsPage.prototype.filter = function () {
        var _this = this;
        this.filterAdsObj = this.allAdsObj.filter(function (value) { return value.production_year === _this.productionYear || value.kilometres === _this.kilometres || value.engine === _this.engine || value.fuel === _this.fuel || value.type === _this.carType || (_this.startPrice <= value.price >= _this.endPrice); });
        this.navCtrl.push('FilterAdsResultPage', {
            filterAds: this.filterAdsObj
        });
    };
    FilterAdsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-filter-ads',template:/*ion-inline-start:"/Users/hindhesham/Desktop/Kyadati/src/pages/filter-ads/filter-ads.html"*/`<!--\n  Generated template for the FilterAdsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border class="headerShadow">\n    \n    <ion-navbar hideBackButton="true">\n      <ion-title>  خيارات البحث </ion-title> \n        <ion-buttons start>\n          <button (click)="close()" style="background:transparent">\n            <custom-icon set="evil" name="close" color="white" style="font-size:2em"></custom-icon> \n          </button>\n        </ion-buttons> \n      </ion-navbar>\n  </ion-header>\n\n\n<ion-content >\n  <ion-list no-padding >\n    <ion-row id="listRow">\n      <ion-list>\n        <ion-item style="padding-top:24px">\n              <ion-label color="primary" stacked>نوع السيارة</ion-label>\n              <ion-select [(ngModel)]="carType" [placeholder]="\'BMW/Mercedes\'">\n                <ion-option value="أوبل"> أوبل </ion-option>\n                <ion-option value="أودي"> أودي </ion-option>\n                <ion-option value="الفا روميو"> الفا روميو </ion-option>\n                <ion-option value=" بروتون"> بروتون </ion-option>\n                <ion-option value="بريليانس"> بريليانس</ion-option>\n                <ion-option value="بورش"> بورش</ion-option>\n                <ion-option value="بي ام دبليو"> بي ام دبليو</ion-option>\n                <ion-option value="بيجو"> بيجو</ion-option>\n                <ion-option value="تويوتا"> تويوتا</ion-option>\n                <ion-option value="جاكوار"> جاكوار</ion-option>\n                <ion-option value="جيب"> جيب</ion-option>\n                <ion-option value="جيلي"> جيلي</ion-option>\n                <ion-option value="دايهاتسو"> دايهاتسو</ion-option>\n                <ion-option value="دايو"> دايو</ion-option>\n                <ion-option value="رينو"> رينو</ion-option>\n                <ion-option value="سبرنزا"> سبرنزا</ion-option>\n                <ion-option value="سكودا"> سكودا</ion-option>\n                <ion-option value="سوبارو"> سوبارو</ion-option>\n                <ion-option value="سوزوكي"> سوزوكي</ion-option>\n                <ion-option value="سيات"> سيات</ion-option>\n                <ion-option value="سيتروين"> سيتروين</ion-option>\n                <ion-option value="شيفروليه"> شيفروليه</ion-option>\n                <ion-option value="فورد"> فورد</ion-option>\n                <ion-option value="فولفو"> فولفو</ion-option>\n                <ion-option value="فولكسفاغن"> فولكسفاغن</ion-option>\n                <ion-option value="فيات"> فيات</ion-option>\n                <ion-option value="كرايسلر"> كرايسلر</ion-option>\n                <ion-option value="كيا"> كيا</ion-option>\n                <ion-option value="لادا"> لادا</ion-option>\n                <ion-option value="لاند روفر"> لاند روفر</ion-option>\n                <ion-option value="مازدا"> مازدا</ion-option>\n                <ion-option value="مرسيدس بنز"> مرسيدس بنز</ion-option>\n                <ion-option value="ميتسوبيشي"> ميتسوبيشي</ion-option>\n                <ion-option value="ميني كوبر"> ميني كوبر</ion-option>\n                <ion-option value="نيسان"> نيسان</ion-option>\n                <ion-option value="هامر"> هامر</ion-option>\n                <ion-option value="هوندا"> هوندا</ion-option>\n                <ion-option value="هيونداي"> هيونداي</ion-option>\n                <ion-option value="نوع اخر"> نوع اخر</ion-option>\n              </ion-select>\n        </ion-item>\n        <ion-item  style="padding-top:24px">\n              <ion-label color="primary" stacked> سنة الصنع</ion-label>\n              <ion-input type="number" placeholder="2008" [(ngModel)]="productionYear"></ion-input>\n        </ion-item>\n        <ion-item  style="padding-top:24px">\n              <ion-label color="primary" stacked> الأميال المقطوعة </ion-label>\n              <ion-input type="number" placeholder="12300 كيلو متر"  [(ngModel)]="kilometres"></ion-input>\n        </ion-item>\n        <ion-item  style="padding-top:24px">\n              <ion-label color="primary" stacked> سعة المحرك </ion-label>\n              <ion-input type="number" placeholder="3000 سي سي"  [(ngModel)]="engine"></ion-input>\n        </ion-item>\n        <ion-item style="padding-top:24px">\n              <ion-label color="primary" stacked>نوع الوقود </ion-label>\n              <ion-select [(ngModel)]="fuel" [placeholder]="\'ممتاز/جيد جدا\'">\n                  <ion-option value="ممتاز"> ممتاز </ion-option>\n                  <ion-option value="جيد جدا"> جيد جدا </ion-option>\n              </ion-select>\n        </ion-item>\n         \n        <div id="salleryMainDiv">\n                <ion-item>\n                    <ion-label color="primary" stacked>   السعر من </ion-label>\n                    <ion-input type="number" placeholder="  ريال سعودي 140.000 " no-margin [(ngModel)]="startPrice">  </ion-input>\n                </ion-item>\n                 <ion-item>\n                    <ion-label color="primary" stacked>  الي </ion-label>\n                    <ion-input type="number" placeholder="140,000 ريال سعودي" no-margin  [(ngModel)]="endPrice"></ion-input>\n                 </ion-item>\n        </div>        \n      </ion-list>\n    </ion-row>\n  </ion-list>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <!--  <button ion-button color="primary" *ngIf="productionYear == null || kilometres == null || engine == null || startPrice == null || endPrice == null || carType == null || fuel == null" disabled>تأكيد</button>-->\n      <button ion-button color="primary" (click)="filter()">تأكيد</button>\n  </ion-toolbar>\n</ion-footer>`/*ion-inline-end:"/Users/hindhesham/Desktop/Kyadati/src/pages/filter-ads/filter-ads.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ViewController */]])
    ], FilterAdsPage);
    return FilterAdsPage;
}());

//# sourceMappingURL=filter-ads.js.map

/***/ })

});
//# sourceMappingURL=13.js.map