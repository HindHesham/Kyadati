webpackJsonp([2],{

/***/ 1008:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpVerifyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs_page__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_register__ = __webpack_require__(588);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_storage__ = __webpack_require__(191);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SignUpVerifyPage = (function () {
    function SignUpVerifyPage(navCtrl, navParams, formBuilder, loadingCtrl, toastCtrl, nativeStorage, registerProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.nativeStorage = nativeStorage;
        this.registerProvider = registerProvider;
        this.submitAttempt = false;
        this.verificationParam = navParams.get('verification');
        this.token_api = navParams.get('token_api');
        this.id = navParams.get('id');
        this.verifyForm = formBuilder.group({
            verifyInput: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])]
        });
        this.verifyInput = this.verifyForm.controls['verifyInput'];
    }
    SignUpVerifyPage.prototype.ionViewLoaded = function () { };
    SignUpVerifyPage.prototype.verifyCode = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            spinner: 'crescent',
            content: ''
        });
        loader.present().then(function () {
            if (_this.input1 == _this.verificationParam) {
                _this.nativeStorage.setItem('myitem', { token_api: _this.token_api, id: _this.id })
                    .then(function () {
                    //console.log('Stored item!');
                    loader.dismiss();
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs_page__["b" /* TabsPage */]);
                }, function (error) {
                    loader.dismiss();
                    var toast = _this.toastCtrl.create({
                        message: "Please check your internet connection and try again",
                        duration: 3000,
                        position: 'bottom'
                    });
                    toast.present();
                });
            }
            else {
                loader.dismiss();
                var toast = _this.toastCtrl.create({
                    message: "Please enter valid verification code",
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
            }
        });
    };
    SignUpVerifyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-sign-up-verify',template:/*ion-inline-start:"/Users/hindhesham/Desktop/Kyadati/src/pages/sign-up-verify/sign-up-verify.html"*/`<!--\n  Generated template for the SignUpVerifyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border class="headerShadow">\n    <ion-navbar>\n      <ion-title>قيادتي</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="outer-content" >\n  <form [formGroup]="verifyForm"> \n \n    <ion-list >\n        <ion-list-header no-lines>\n          لقد ارسلنا لك رمز تحقق عبر البريد الالكترونى\n          <h5> اذا لم تجد الرساله ف البريد الوارد تحقق من ال (spam) وأدخل الكود</h5>\n        </ion-list-header>\n        <ion-row id="inputsRow">\n            <ion-item>\n                <ion-input #verify autofocus placeholder=" رمز التحقق" formControlName="verifyInput" [(ngModel)]="input1" type="text"></ion-input>\n              </ion-item>\n        </ion-row>\n       \n        <ion-row style="margin-top:48px">\n            <button  *ngIf="input1 == null" ion-button block disabled >تأكيد</button>     \n            <button  *ngIf="input1 != null" ion-button block (click)="verifyCode()" >تأكيد</button>\n          </ion-row>\n    </ion-list>\n  </form>\n \n</ion-content>\n\n`/*ion-inline-end:"/Users/hindhesham/Desktop/Kyadati/src/pages/sign-up-verify/sign-up-verify.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_4__providers_register__["a" /* registerProvider */]])
    ], SignUpVerifyPage);
    return SignUpVerifyPage;
}());

//# sourceMappingURL=sign-up-verify.js.map

/***/ }),

/***/ 986:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpVerifyPageModule", function() { return SignUpVerifyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sign_up_verify__ = __webpack_require__(1008);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SignUpVerifyPageModule = (function () {
    function SignUpVerifyPageModule() {
    }
    SignUpVerifyPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sign_up_verify__["a" /* SignUpVerifyPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sign_up_verify__["a" /* SignUpVerifyPage */]),
            ],
        })
    ], SignUpVerifyPageModule);
    return SignUpVerifyPageModule;
}());

//# sourceMappingURL=sign-up-verify.module.js.map

/***/ })

});
//# sourceMappingURL=2.js.map