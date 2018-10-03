webpackJsonp([3],{

/***/ 1006:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_comment_service__ = __webpack_require__(593);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__ = __webpack_require__(191);
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
 * Generated class for the PopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PopoverPage = (function () {
    function PopoverPage(navCtrl, navParams, viewCtrl, loadingCtrl, toastCtrl, nativeStorage, commentProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.nativeStorage = nativeStorage;
        this.commentProvider = commentProvider;
        this.nativeStorage.getItem('myitem')
            .then(function (data) {
            _this.token_api = data.token_api;
        });
        this.type = navParams.get('type');
        this.id = navParams.get('id');
    }
    PopoverPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PopoverPage');
    };
    PopoverPage.prototype.addComment = function () {
        var _this = this;
        if (this.comment === undefined) {
            var toast = this.toastCtrl.create({
                message: "قم بادخال تعليق",
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        }
        else {
            var loader_1 = this.loadingCtrl.create({
                spinner: 'crescent',
                content: ''
            });
            loader_1.present().then(function () {
                _this.commentProvider.add_comment(_this.token_api, _this.id, _this.type, _this.comment)
                    .then(function (result) {
                    _this.result = JSON.parse(result.data);
                    if (_this.result.status_code === 200) {
                        _this.comment_id = _this.result.comment_id;
                        _this.commentProvider.add_rate(_this.token_api, _this.id, _this.type, _this.rate, _this.comment_id)
                            .then(function (result) {
                            _this.rateResult = JSON.parse(result.data);
                            if (_this.rateResult.status_code === 200) {
                                loader_1.dismiss();
                                _this.viewCtrl.dismiss();
                                var toast = _this.toastCtrl.create({
                                    message: "تم اضافة تقييمك",
                                    duration: 3000,
                                    position: 'bottom'
                                });
                                toast.present();
                            }
                            else {
                                var toast = _this.toastCtrl.create({
                                    message: "Please Check you internet connection",
                                    duration: 3000,
                                    position: 'bottom'
                                });
                                toast.present();
                            }
                        });
                    }
                    else if (_this.result.status_code === 402) {
                        loader_1.dismiss();
                        var toast = _this.toastCtrl.create({
                            message: "Please insert valid comment",
                            duration: 3000,
                            position: 'bottom'
                        });
                        toast.present();
                    }
                    else {
                        loader_1.dismiss();
                        var toast = _this.toastCtrl.create({
                            message: "Please check your internet connection",
                            duration: 3000,
                            position: 'bottom'
                        });
                        toast.present();
                    }
                }).catch(function (error) {
                    loader_1.dismiss();
                    var toast = _this.toastCtrl.create({
                        message: "Please Check you internet connection",
                        duration: 3000,
                        position: 'bottom'
                    });
                    toast.present();
                });
            });
        }
    };
    PopoverPage.prototype.saveUserRating = function (e) {
        //alert("rate" + this.rate);
        /*
    
        this.commentProvider.add_rate(this.token_api, this.id, this.type, e)
        .subscribe( result =>{
          //alert(JSON.stringify(result));
          if(result.status_code === 200){
            let toast = this.toastCtrl.create({
              message: "تم اضافة تقييمك",
              duration: 3000,
              position: 'bottom'
            }); toast.present();
          }
          else{
            let toast = this.toastCtrl.create({
              message: "Please Check you internet connection",
              duration: 3000,
              position: 'bottom'
            }); toast.present();
          }
        }), err=>{
          //alert(JSON.stringify(err));
          let toast = this.toastCtrl.create({
            message: "Please Check you internet connection",
            duration: 3000,
            position: 'bottom'
          }); toast.present();
        }*/
    };
    PopoverPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    PopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-popover',template:/*ion-inline-start:"/Users/hindhesham/Desktop/Kyadati/src/pages/popover/popover.html"*/`<!--\n  Generated template for the PopoverPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-content padding no-margin id="content" scroll="false" overflow-scroll="false" >\n  <ion-list>\n    <ion-row>\n        <ion-item no-lines>\n            <p id="title" >اكتب تعليقك </p>\n          </ion-item>\n    </ion-row>\n    <ion-row>\n      <ion-item id="textArea"no-lines>\n        <ion-textarea placeholder="اضف تعليقك" [(ngModel)]="comment">\n        </ion-textarea>\n      </ion-item>\n    </ion-row>\n    <ion-row> \n      <ion-item no-lines>\n        <p id="titleRate" > تقييمك </p>\n        <rating class="ratingClass" no-padding no-mrgin [(ngModel)]="rate" readOnly="false" max="5" emptyStarIconName="star-outline" halfStarIconName="star-half" starIconName="star" nullable="false" (ngModelChange)="saveUserRating($event)"></rating>            \n      </ion-item>\n    </ion-row>\n    <ion-row>\n        <div style="margin-top:32px">\n            <button ion-button color="primary" (click)="addComment();">إضافة</button>          \n            <button ion-button outline color="black" id="cancelBtn" (click)="close();">إلغاء</button>\n          </div>\n    </ion-row>\n    \n  </ion-list>\n</ion-content>\n`/*ion-inline-end:"/Users/hindhesham/Desktop/Kyadati/src/pages/popover/popover.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_2__providers_comment_service__["a" /* commentProvider */]])
    ], PopoverPage);
    return PopoverPage;
}());

//# sourceMappingURL=popover.js.map

/***/ }),

/***/ 984:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverPageModule", function() { return PopoverPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__popover__ = __webpack_require__(1006);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic2_rating__ = __webpack_require__(580);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PopoverPageModule = (function () {
    function PopoverPageModule() {
    }
    PopoverPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__popover__["a" /* PopoverPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__popover__["a" /* PopoverPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ionic2_rating__["a" /* Ionic2RatingModule */]
            ],
        })
    ], PopoverPageModule);
    return PopoverPageModule;
}());

//# sourceMappingURL=popover.module.js.map

/***/ })

});
//# sourceMappingURL=3.js.map