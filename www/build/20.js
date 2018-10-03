webpackJsonp([20],{

/***/ 968:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateAdsPageModule", function() { return CreateAdsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_ads__ = __webpack_require__(990);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CreateAdsPageModule = (function () {
    function CreateAdsPageModule() {
    }
    CreateAdsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__create_ads__["a" /* CreateAdsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__create_ads__["a" /* CreateAdsPage */]),
            ],
        })
    ], CreateAdsPageModule);
    return CreateAdsPageModule;
}());

//# sourceMappingURL=create-ads.module.js.map

/***/ }),

/***/ 990:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateAdsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_image_picker__ = __webpack_require__(589);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_ads_service__ = __webpack_require__(581);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CreateAdsPage = (function () {
    function CreateAdsPage(navCtrl, navParams, toastCtrl, imagePicker, nativeStorage, formBuilder, loadingCtrl, adsProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.imagePicker = imagePicker;
        this.nativeStorage = nativeStorage;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.adsProvider = adsProvider;
        this.images = [];
        this.base64Obj = [];
        this.submitAttempt = false;
        this.first_image = "";
        this.second_image = "";
        this.third_image = "";
        this.forth_image = "";
        this.fifth_image = "";
        this.createAdsForm = formBuilder.group({
            titleFormName: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])],
            production_yearFormName: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])],
            kilometrsFormName: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])],
            engineFormName: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])],
            priceFormName: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])],
        });
        this.titleFormName = this.createAdsForm.controls['titleFormName'];
        this.production_yearFormName = this.createAdsForm.controls['production_yearFormName'];
        this.kilometrsFormName = this.createAdsForm.controls['kilometrsFormName'];
        this.engineFormName = this.createAdsForm.controls['engineFormName'];
        this.priceFormName = this.createAdsForm.controls['priceFormName'];
    }
    CreateAdsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreateAdsPage');
    };
    CreateAdsPage.prototype.onKeyPress = function (event) {
        console.log(event);
        //this.eventKey = event.key;
    };
    CreateAdsPage.prototype.getPictures = function () {
        var _this = this;
        var options = {
            maximumImagesCount: 5,
            quality: 50,
            outputType: 1
        };
        this.imagePicker.getPictures(options).then(function (results) {
            for (var i = 0; i < results.length; i++) {
                _this.imagebase64 = 'data:image/jpeg;base64,' + results[i];
                //alert(this.imagebase64);
                _this.base64Obj.push(_this.imagebase64);
            }
        }, function (err) {
            console.log('err' + err);
        });
    };
    CreateAdsPage.prototype.addAds = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            spinner: 'crescent',
            content: ''
        });
        loader.present().then(function () {
            if (_this.base64Obj[0]) {
                _this.first_image = _this.base64Obj[0];
            }
            else {
                _this.first_image = "";
            }
            if (_this.base64Obj[1]) {
                _this.second_image = _this.base64Obj[1];
            }
            else {
                _this.second_image = "";
            }
            if (_this.base64Obj[2]) {
                _this.third_image = _this.base64Obj[2];
            }
            else {
                _this.third_image = "";
            }
            if (_this.base64Obj[3]) {
                _this.forth_image = _this.base64Obj[3];
            }
            else {
                _this.forth_image = "";
            }
            if (_this.base64Obj[4]) {
                _this.fifth_image = _this.base64Obj[4];
            }
            else {
                _this.fifth_image = "";
            }
            _this.nativeStorage.getItem('myitem')
                .then(function (data) {
                if (data.token_api) {
                    _this.adsProvider.add_ads(data.token_api, _this.first_image, _this.second_image, _this.third_image, _this.forth_image, _this.fifth_image, _this.title, _this.type, _this.production_year, _this.kilometres, _this.engine, _this.fuel, _this.price)
                        .then(function (result) {
                        //alert("subscribe result is: " +this.result);
                        _this.result = JSON.parse(result.data);
                        if (_this.result.status_code === 200) {
                            _this.images = [];
                            _this.base64Obj = [];
                            _this.imagebase64 = "";
                            loader.dismiss();
                            _this.navCtrl.pop();
                            var toast = _this.toastCtrl.create({
                                message: "في انتظار موافقة الأدمن لنشر الاعلان",
                                duration: 3000,
                                position: 'bottom'
                            });
                            toast.present();
                        }
                        else if (_this.result.status_code === 402 || _this.result.status_code === 406) {
                            loader.dismiss();
                            var toast = _this.toastCtrl.create({
                                message: "You're Offline",
                                duration: 3000,
                                position: 'bottom'
                            });
                            toast.present();
                        }
                        else {
                            loader.dismiss();
                            var toast = _this.toastCtrl.create({
                                message: "Please Insert Valid Data",
                                duration: 3000,
                                position: 'bottom'
                            });
                            toast.present();
                        }
                    }).catch(function (error) {
                        loader.dismiss();
                        var toast = _this.toastCtrl.create({
                            message: "Check your internet connection and try again",
                            duration: 3000,
                            position: 'bottom'
                        });
                        toast.present();
                    });
                }
                else {
                    loader.dismiss();
                    var toast = _this.toastCtrl.create({
                        message: "Check your internet connection and try again",
                        duration: 3000,
                        position: 'bottom'
                    });
                    toast.present();
                }
            }, function (error) {
                loader.dismiss();
                alert(error);
            });
        });
    };
    CreateAdsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-create-ads',template:/*ion-inline-start:"/Users/hindhesham/Desktop/Kyadati/src/pages/create-ads/create-ads.html"*/`<!--\n  Generated template for the CreateAdsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border class="headerShadow">\n  \n    <ion-navbar>\n      <ion-title > إضافة إعلان </ion-title>\n    </ion-navbar>\n  \n</ion-header>\n\n\n<ion-content>\n        <ion-list no-padding>\n            <ion-row id="adImgRow">\n                <div id="mainImgDiv">\n                    <div id="titleImgRow">\n                        صور الإعلان\n                        </div>\n                        <div id="hintImgRow">\n                            يمكنك إضافة خمس صور فقط.\n                        </div>\n                        <div id="imgSlidDiv">\n                            <!-- click div to select image-->\n                            <ion-slides spaceBetween="15"  slidesPerView=\'auto\' dir="rtl">\n                                <ion-slide >\n                                    <div id="select" (click)="getPictures()">\n                                        <img src="assets/icon/add.svg" />\n                                    </div>\n                                </ion-slide>\n                                \n                                    <ion-slide *ngFor="let image of base64Obj" >\n                                        <img [src]="image" />\n                                        \n                                    </ion-slide>\n                   \n                            </ion-slides>\n                        </div>\n                </div>\n            </ion-row>\n            <ion-row id="listRow">\n                <ion-list >\n                    <ion-list-header no-lines>\n                        تفاصيل الاعلان\n                    </ion-list-header>\n                    \n                    <ion-item >\n                        <ion-label color="primary" stacked>عنوان الإعلان</ion-label>\n                        <ion-input type="text" min="2" required [ngModelOptions]="{standalone: true}" [(ngModel)]="title" placeholder="سيارة بي ام دابليو موديل 2017" ></ion-input>\n                    </ion-item>\n                    \n                    <ion-item style="padding-top:24px">\n                        <ion-label color="primary" stacked>نوع السيارة</ion-label>\n                        <ion-select required [ngModelOptions]="{standalone: true}" [(ngModel)]="type" [placeholder]="\'BMW/Mercedes\'">\n                            <ion-option value="أوبل"> أوبل </ion-option>\n                            <ion-option value="أودي"> أودي </ion-option>\n                            <ion-option value="الفا روميو"> الفا روميو </ion-option>\n                            <ion-option value=" بروتون"> بروتون </ion-option>\n                            <ion-option value="بريليانس"> بريليانس</ion-option>\n                            <ion-option value="بورش"> بورش</ion-option>\n                            <ion-option value="بي ام دبليو"> بي ام دبليو</ion-option>\n                            <ion-option value="بيجو"> بيجو</ion-option>\n                            <ion-option value="تويوتا"> تويوتا</ion-option>\n                            <ion-option value="جاكوار"> جاكوار</ion-option>\n                            <ion-option value="جيب"> جيب</ion-option>\n                            <ion-option value="جيلي"> جيلي</ion-option>\n                            <ion-option value="دايهاتسو"> دايهاتسو</ion-option>\n                            <ion-option value="دايو"> دايو</ion-option>\n                            <ion-option value="رينو"> رينو</ion-option>\n                            <ion-option value="سبرنزا"> سبرنزا</ion-option>\n                            <ion-option value="سكودا"> سكودا</ion-option>\n                            <ion-option value="سوبارو"> سوبارو</ion-option>\n                            <ion-option value="سوزوكي"> سوزوكي</ion-option>\n                            <ion-option value="سيات"> سيات</ion-option>\n                            <ion-option value="سيتروين"> سيتروين</ion-option>\n                            <ion-option value="شيفروليه"> شيفروليه</ion-option>\n                            <ion-option value="فورد"> فورد</ion-option>\n                            <ion-option value="فولفو"> فولفو</ion-option>\n                            <ion-option value="فولكسفاغن"> فولكسفاغن</ion-option>\n                            <ion-option value="فيات"> فيات</ion-option>\n                            <ion-option value="كرايسلر"> كرايسلر</ion-option>\n                            <ion-option value="كيا"> كيا</ion-option>\n                            <ion-option value="لادا"> لادا</ion-option>\n                            <ion-option value="لاند روفر"> لاند روفر</ion-option>\n                            <ion-option value="مازدا"> مازدا</ion-option>\n                            <ion-option value="مرسيدس بنز"> مرسيدس بنز</ion-option>\n                            <ion-option value="ميتسوبيشي"> ميتسوبيشي</ion-option>\n                            <ion-option value="ميني كوبر"> ميني كوبر</ion-option>\n                            <ion-option value="نيسان"> نيسان</ion-option>\n                            <ion-option value="هامر"> هامر</ion-option>\n                            <ion-option value="هوندا"> هوندا</ion-option>\n                            <ion-option value="هيونداي"> هيونداي</ion-option>\n                            <ion-option value="نوع اخر"> نوع اخر</ion-option>\n\n                        </ion-select>\n                    </ion-item>\n                    <ion-item  style="padding-top:24px">\n                        <ion-label color="primary" min="3" stacked> سنة الصنع</ion-label>\n                        <ion-input required type="number" [ngModelOptions]="{standalone: true}" [(ngModel)]="production_year" placeholder="2008"></ion-input>\n                    </ion-item>\n                    <ion-item  style="padding-top:24px">\n                        <ion-label color="primary" stacked> الأميال المقطوعة </ion-label>\n                        <ion-input required type="number" min="1" [ngModelOptions]="{standalone: true}" [(ngModel)]="kilometres" placeholder="12300 كيلو متر"></ion-input>\n                    </ion-item>\n                    <ion-item  style="padding-top:24px">\n                        <ion-label color="primary" stacked> سعة المحرك </ion-label>\n                        <ion-input required type="number" min="2" [ngModelOptions]="{standalone: true}" [(ngModel)]="engine" placeholder="3000 سي سي" ></ion-input>\n                    </ion-item>\n                    <ion-item style="padding-top:24px">\n                        <ion-label color="primary" stacked>نوع الوقود </ion-label>\n                        <ion-select required [ngModelOptions]="{standalone: true}" [(ngModel)]="fuel" [placeholder]="\'ممتاز/جيد جدا\'">\n                            <ion-option value="ممتاز"> ممتاز </ion-option>\n                            <ion-option value="جيد جدا"> جيد جدا </ion-option>\n                        </ion-select>\n                    </ion-item>\n                    <ion-item  style="padding-top:24px">\n                        <ion-label color="primary" stacked>  السعر </ion-label>\n                        <ion-input required type="number" min="2" [ngModelOptions]="{standalone: true}" [(ngModel)]="price" placeholder="140,000 ريال سعودي" ></ion-input>\n                    </ion-item>\n                </ion-list>\n            </ion-row>\n            <ion-row>\n             \n                <button *ngIf=" title == null || production_year == null || kilometres == null || engine == null || price == null" ion-button color="primary"  disabled>إضافة الإعلان</button>            \n                <button *ngIf="title != null && production_year  != null && kilometres != null && engine != null && price != null" ion-button color="primary" submit (click)="addAds();">إضافة الإعلان</button>            \n                \n            </ion-row>\n        </ion-list>\n</ion-content>\n`/*ion-inline-end:"/Users/hindhesham/Desktop/Kyadati/src/pages/create-ads/create-ads.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_image_picker__["a" /* ImagePicker */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_ads_service__["a" /* adsProvider */]])
    ], CreateAdsPage);
    return CreateAdsPage;
}());

//# sourceMappingURL=create-ads.js.map

/***/ })

});
//# sourceMappingURL=20.js.map