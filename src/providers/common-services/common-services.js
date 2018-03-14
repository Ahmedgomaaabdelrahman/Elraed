/*
  Generated class for the CommonServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Events, LoadingController, ToastController, ActionSheetController } from 'ionic-angular';
// import {SecureStorage, SecureStorageObject} from "@ionic-native/secure-storage";
import { Camera } from "@ionic-native/camera";
import { ActionSheet } from '@ionic-native/action-sheet';
import { Storage } from '@ionic/storage';
import { MediaCapture } from '@ionic-native/media-capture';
import { Base64 } from '@ionic-native/base64';
// import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
/*
  Generated class for the CommonservicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CommonServicesProvider = /** @class */ (function () {
    function CommonServicesProvider(mediaCapture, event, file, actionSheetCtrl, actionSheet, camera, base64, loadingCtrl, store, http, toast) {
        this.mediaCapture = mediaCapture;
        this.event = event;
        this.file = file;
        this.actionSheetCtrl = actionSheetCtrl;
        this.actionSheet = actionSheet;
        this.camera = camera;
        this.base64 = base64;
        this.loadingCtrl = loadingCtrl;
        this.store = store;
        this.http = http;
        this.toast = toast;
        console.log('Hello CommonservicesProvider Provider');
    }
    CommonServicesProvider.prototype.media = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            // let options: CaptureVideoOptions = { duration: 60 };
            _this.mediaCapture.captureVideo({ duration: 15 })
                .then(function (data) { return resolve(data); }, function (err) { return console.error(reject(err)); });
        });
        return promise;
    };
    //   media():Promise<any>{
    // let promise =new Promise((resolve,reject)=>{
    //
    //
    //       // let options: CaptureVideoOptions = { duration: 60 };
    //       this.mediaCapture.captureVideo()
    //           .then(
    //               (data: MediaFile[]) => resolve(data),
    //               (err: CaptureError) => console.error(reject(err))
    //           );})
    //
    //         return promise;
    //   }
    CommonServicesProvider.prototype.storeValue = function (key, value) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            console.log('store', key, value);
            _this.store.set(key, value);
            resolve(true);
        });
        return promise;
    };
    CommonServicesProvider.prototype.getStoredValue = function (key) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.store.get(key).then(function (val) {
                console.log('am from local storage ', val);
                resolve(val);
            }).catch(function (e) {
                console.log('storage err :', e);
            });
        });
        return promise;
    };
    CommonServicesProvider.prototype.removeStoredKey = function (key) {
        this.store.remove(key);
    };
    CommonServicesProvider.prototype.presentActionSheet = function (msg1, msg2) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var actionSheet = _this.actionSheetCtrl.create({
                title: 'Modify your album',
                buttons: [
                    {
                        text: msg1,
                        role: 'destructive',
                        handler: function () {
                            resolve(1);
                            console.log('Destructive clicked');
                        }
                    },
                    {
                        text: msg2,
                        handler: function () {
                            resolve(0);
                            console.log('Archive clicked');
                        }
                    },
                    {
                        text: 'الغاء',
                        role: 'cancel',
                        handler: function () {
                            console.log('Cancel clicked');
                        }
                    }
                ]
            });
            actionSheet.present();
        });
        return promise;
    };
    //  createTranslateLoader(http: HttpClient) {
    //         return new TranslateHttpLoader(http, './assets/i18n/', '.json');
    //     }
    // storeValue(storageName,key,value):Promise<any>{
    //     let promise=new Promise((resolve,reject)=>{
    //
    //
    //         this.secureStorage.create(storageName)
    //             .then((storage: SecureStorageObject) => {
    //
    //                 // storage.get('key')
    //                 //     .then(
    //                 //         data => console.log(data),
    //                 //         error => console.log(error)
    //                 //     );
    //
    //                 storage.set(key, value)
    //                     .then(
    //                         data => {console.log(data)
    //                             resolve(data)
    //                         },
    //                         error => {console.log(error)
    //                             reject(error)}
    //                     );
    //             });
    //     });
    //     return promise;
    // }
    // getStoredValue(storageName,key):Promise<any>{
    //     let promise=new Promise((resolve,reject)=>{
    //
    //
    //         this.secureStorage.create(storageName)
    //             .then((storage: SecureStorageObject) => {
    //                 storage.get(key)
    //                     .then(
    //                         data => {console.log(data)
    //                             resolve(data)
    //                         },
    //                         error => {console.log(error)
    //                             reject(error)}
    //                     );
    //             });
    //     });
    //     return promise;
    // }
    // removeFromStorage(key){
    //     this.secureStorage.create('my_store_name')
    //         .then((storage: SecureStorageObject) => {
    //
    //
    //             storage.remove(key)
    //                 .then(
    //                     data => console.log(data),
    //                     error => console.log(error)
    //                 );
    //
    //         });
    // }
    CommonServicesProvider.prototype.presentToast = function (msg, closeText, callback) {
        var toast = this.toast.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true,
            showCloseButton: true,
            closeButtonText: closeText
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
            callback;
        });
        toast.present();
    };
    CommonServicesProvider.prototype.presentLoadingDefault = function (msg) {
        if (msg === void 0) { msg = 'رجاء الانتظار'; }
        this.loading = this.loadingCtrl.create({
            spinner: 'ios',
            content: msg
        });
        this.loading.present();
        return this.loading;
    };
    CommonServicesProvider.prototype.loadDismess = function () {
        this.loading.dismiss();
    };
    //profile pic handler
    CommonServicesProvider.prototype.camPic = function (source) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var options = {
                quality: 50,
                sourceType: source,
                destinationType: _this.camera.DestinationType.DATA_URL,
                encodingType: _this.camera.EncodingType.JPEG,
                mediaType: _this.camera.MediaType.PICTURE
                // quality: 100,
                // sourceType:source,
                // destinationType: this.camera.DestinationType.DATA_URL,
                // encodingType: this.camera.EncodingType.JPEG,
                // mediaType: this.camera.MediaType.PICTURE
            };
            _this.camera.getPicture(options).then(function (imageData) {
                // imageData is either a base64 encoded string or a file URI
                // If it's base64:
                var base64Image = imageData;
                resolve(base64Image);
            }, function (err) {
                reject(err);
                // Handle error
            });
        });
        return promise;
    };
    CommonServicesProvider.prototype.eventPublish = function (ev, content) {
        this.event.publish(ev, content);
    };
    CommonServicesProvider.prototype.eventSubs = function (ev, callback) {
        this.event.subscribe(ev, function (user) {
            return callback;
        });
    };
    CommonServicesProvider.prototype.toBase64 = function (filepath) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var filePath = filepath;
            _this.base64.encodeFile(filePath).then(function (base64File) {
                _this.file.readAsDataURL(filePath, 'file').then(function (res) {
                    console.log('file 64', res);
                    resolve(res);
                });
                // resolve(base64File)
                console.log(base64File);
            }, function (err) {
                console.log(err);
            });
        });
        return promise;
    };
    CommonServicesProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [MediaCapture,
            Events,
            File,
            ActionSheetController,
            ActionSheet,
            Camera,
            Base64,
            LoadingController,
            Storage,
            HttpClient,
            ToastController])
    ], CommonServicesProvider);
    return CommonServicesProvider;
}());
export { CommonServicesProvider };
//# sourceMappingURL=common-services.js.map