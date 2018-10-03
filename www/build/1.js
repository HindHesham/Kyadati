webpackJsonp([1],{

/***/ 1009:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_register__ = __webpack_require__(588);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_fcm__ = __webpack_require__(594);
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






/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignUpPage = (function () {
    function SignUpPage(navCtrl, menu, navParams, toastCtrl, formBuilder, loadingCtrl, registerProvider, fcm, nativeStorage) {
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.registerProvider = registerProvider;
        this.fcm = fcm;
        this.nativeStorage = nativeStorage;
        this.submitAttempt = false;
        this.menu.enable(false, 'menu');
        //this.userNameParam = navParams.get('userNameParam'); 
        this.registerForm = formBuilder.group({
            usernameFormName: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(1), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            phone: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(7), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            code: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])]
        });
        this.usernameFormName = this.registerForm.controls['usernameFormName'];
        this.phone = this.registerForm.controls['phone'];
        this.code = this.registerForm.controls['code'];
        this.email = this.registerForm.controls['email'];
    }
    SignUpPage.prototype.ionViewDidLoad = function () { };
    SignUpPage.prototype.signup = function (code, phone, email) {
        var _this = this;
        if (!this.registerForm.valid) {
            this.submitAttempt = true;
        }
        else {
            var loader_1 = this.loadingCtrl.create({
                spinner: 'crescent',
                content: ''
            });
            loader_1.present().then(function () {
                _this.submitAttempt = false;
                var phoneNumberString = code + phone;
                _this.fcm.getToken().then(function (token) {
                    if (token) {
                        _this.registerProvider.register(_this.username, phoneNumberString, token, email)
                            .then(function (result) {
                            _this.result = JSON.parse(result.data);
                            if (_this.result.status_code === 200) {
                                _this.nativeStorage.setItem('myitem', { token_api: _this.result.token_api, id: _this.result.id })
                                    .then(function () {
                                    //console.log('Stored item!');
                                    loader_1.dismiss();
                                    _this.navCtrl.pop();
                                }, function (error) {
                                    //alert("not stored " + JSON.stringify( error));
                                    loader_1.dismiss();
                                    var toast = _this.toastCtrl.create({
                                        message: "Please check your internet connection and try again",
                                        duration: 3000,
                                        position: 'bottom'
                                    });
                                    toast.present();
                                });
                                /*
                                 this.navCtrl.push('SignUpVerifyPage',{
                                    verification: this.result.verification,
                                    token_api: this.result.token_api,
                                    id: this.result.id
                                  });*/
                            }
                            else {
                                loader_1.dismiss();
                                var toast = _this.toastCtrl.create({
                                    message: "Please enter valid data",
                                    duration: 3000,
                                    position: 'bottom'
                                });
                                toast.present();
                            }
                        }).catch(function (error) {
                            loader_1.dismiss();
                            var toast = _this.toastCtrl.create({
                                message: "Please check your internet connection and try again",
                                duration: 3000,
                                position: 'bottom'
                            });
                            toast.present();
                        });
                    }
                });
                (function (err) {
                    loader_1.dismiss();
                    var toast = _this.toastCtrl.create({
                        message: "Please check your internet connection and try again",
                        duration: 3000,
                        position: 'bottom'
                    });
                    toast.present();
                });
            });
        }
    };
    SignUpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-sign-up',template:/*ion-inline-start:"/Users/hindhesham/Desktop/Kyadati/src/pages/sign-up/sign-up.html"*/`<!--\n  Generated template for the SignUpPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border class="headerShadow">\n    <ion-navbar>\n      <ion-title>قيادتي</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="outer-content" >\n  <form [formGroup]="registerForm"> \n    <ion-list >\n       <ion-list-header no-lines>\n         أدخل البيانات الخاصه بك\n            <h5 >لا تقلق، لن يتم عرضهم علنا</h5>\n        </ion-list-header>\n        <ion-row>\n           \n                <ion-item no-lines>\n                    <ion-input type="text" autofocus placeholder=" الإسم" [(ngModel)]="username" #userName formControlName="usernameFormName" ></ion-input>\n                </ion-item>\n        \n        </ion-row>\n        <ion-row >\n          <ion-col>\n            <ion-item no-lines>\n                  <ion-input type="tel" placeholder="رقم الهاتف" [(ngModel)]="phoneNum" #phoneInput formControlName="phone"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col>\n            <ion-item no-lines>\n                <ion-input type="tel" autofocus placeholder="+699" [(ngModel)]="codeNum" #codeInput formControlName="code"></ion-input>            \n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n         \n            <ion-item no-lines style="margin-top:5%; text-align:left">\n                  <ion-input type="text" placeholder=" البريد الالكترونى" [(ngModel)]="emailText" #emailInput formControlName="email"></ion-input>\n            </ion-item>\n\n        </ion-row>\n\n\n        <p class="errorMsg" *ngIf="submitAttempt" style="color: #ea6153; text-align:center">Please insert valid data</p>      \n        <ion-row style="margin-top:48px">\n            <button *ngIf="phoneNum == null || codeNum == null || emailText == null || username == null " ion-button block submit  disabled >تحقق</button>\n            <button *ngIf="phoneNum != null && codeNum != null && emailText != null " ion-button block submit (click)="signup(code.value, phone.value, email.value)"  >تحقق</button>            \n        </ion-row>\n    </ion-list>\n  </form>\n <div id="recaptcha-container"></div>\n</ion-content>\n`/*ion-inline-end:"/Users/hindhesham/Desktop/Kyadati/src/pages/sign-up/sign-up.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_register__["a" /* registerProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_fcm__["a" /* FCM */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_storage__["a" /* NativeStorage */]])
    ], SignUpPage);
    return SignUpPage;
}());

//# sourceMappingURL=sign-up.js.map

/***/ }),

/***/ 987:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpPageModule", function() { return SignUpPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sign_up__ = __webpack_require__(1009);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SignUpPageModule = (function () {
    function SignUpPageModule() {
    }
    SignUpPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sign_up__["a" /* SignUpPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sign_up__["a" /* SignUpPage */]),
            ],
        })
    ], SignUpPageModule);
    return SignUpPageModule;
}());

//# sourceMappingURL=sign-up.module.js.map

/***/ })

});
//# sourceMappingURL=1.js.map