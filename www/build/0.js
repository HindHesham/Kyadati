webpackJsonp([0],{

/***/ 1010:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserNamePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(24);
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
 * Generated class for the UserNamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserNamePage = (function () {
    function UserNamePage(navCtrl, navParams, menu, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.formBuilder = formBuilder;
        this.submitAttempt = false;
        this.menu.enable(false, 'menu');
        this.userNameRegisterForm = formBuilder.group({
            usernameFormName: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
        });
    }
    UserNamePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserNamePage');
    };
    UserNamePage.prototype.onSearchChange = function (searchValue) {
        console.log(searchValue);
        this.eventKey = searchValue;
    };
    /*
    onKeyPress(event) {
      this.eventKey = event.key;
      console.log("key ", event.target.value.length)
      
    }*/
    UserNamePage.prototype.continue = function (userName) {
        if (!this.userNameRegisterForm.valid) {
            this.submitAttempt = true;
        }
        else {
            this.submitAttempt = false;
            console.log("name is:  ", userName);
            this.navCtrl.push('SignUpPage', {
                userNameParam: userName
            });
        }
    };
    UserNamePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-user-name',template:/*ion-inline-start:"/Users/hindhesham/Desktop/Kyadati/src/pages/user-name/user-name.html"*/`<ion-header no-border class="headerShadow">\n    <ion-navbar>\n      <ion-title>قيادتي</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content padding class="outer-content" >\n    <form [formGroup]="userNameRegisterForm"> \n      <ion-list >\n          <ion-list-header no-lines>\n              مرحباً! ما اسمك؟\n              <h5>يعرض الإسم فقط عند وضع تعليق او تقييم.</h5>\n          </ion-list-header>\n          <ion-row>\n            <ion-col>\n              <ion-item no-lines>\n                    <ion-input type="text" autofocus placeholder=" الإسم" #userName formControlName="usernameFormName" (input)="onSearchChange($event.target.value)"></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <p class="errorMsg" *ngIf="submitAttempt" style="color: #ea6153; text-align:center">User Name is Required</p>        \n          <ion-row style="margin-top:48px">\n              <button *ngIf="eventKey == null"  ion-button block submit disabled >متابعة</button>\n              <button *ngIf="eventKey != null"  ion-button block submit (click)="continue(userName.value)">متابعة</button>            \n          </ion-row>\n      </ion-list>\n    </form>\n   \n  </ion-content>\n`/*ion-inline-end:"/Users/hindhesham/Desktop/Kyadati/src/pages/user-name/user-name.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], UserNamePage);
    return UserNamePage;
}());

//# sourceMappingURL=user-name.js.map

/***/ }),

/***/ 988:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserNamePageModule", function() { return UserNamePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_name__ = __webpack_require__(1010);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UserNamePageModule = (function () {
    function UserNamePageModule() {
    }
    UserNamePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__user_name__["a" /* UserNamePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__user_name__["a" /* UserNamePage */]),
            ],
        })
    ], UserNamePageModule);
    return UserNamePageModule;
}());

//# sourceMappingURL=user-name.module.js.map

/***/ })

});
//# sourceMappingURL=0.js.map