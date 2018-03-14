var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { User } from './../../model/UserModel';
import { Events } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FCM } from '@ionic-native/fcm';
/*
  Generated class for the FcmPushProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var FcmPushProvider = /** @class */ (function () {
    function FcmPushProvider(events, user, fcm, http) {
        this.events = events;
        this.user = user;
        this.fcm = fcm;
        this.http = http;
        console.log('Hello FcmPushProvider Provider');
    }
    FcmPushProvider.prototype.getDviceToken = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.fcm.getToken().then(function (token) {
                //   resolve(token)
                // let req={
                //   'Id':uid,
                //   'Token':token
                // }
                // this.http.post(this.domain.url+'/storeTokenId',req).subscribe(res=>{
                //   console.log('fcm response',res)
                // });
                console.log('device token by fcm : ', token);
                resolve(token);
            }).catch(function (e) {
                console.log('fcm error', e);
            });
        });
        return promise;
    };
    FcmPushProvider.prototype.onTokenIdRefresh = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.fcm.onTokenRefresh().subscribe(function (token) {
                console.log('token refreshed', token);
                resolve(token);
            });
        });
        return promise;
    };
    FcmPushProvider.prototype.onTokenRecived = function (context) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            console.log('fcm subscribtion starts');
            FCMPlugin.onNotification(function (token) {
                // if(data.wasTapped){
                //   //Notification was received on device tray and tapped by the user.
                //   alert( JSON.stringify(data) );
                // }else{
                //   //Notification was received in foreground. Maybe the user needs to be notified.
                //   alert( JSON.stringify(data) );
                // }
                console.log('FCM Fired : Token :: ', JSON.stringify(token));
                // this.zone.runOutsideAngular(()=>{
                if (token.wasTapped) {
                    //Notification was received on device tray and tapped by the user.
                    // alert(token.wasTapped)ionic serve
                    // alert( token );
                    _this.events.publish('msg', 1);
                    if (_this.user.USER.type == '1') {
                        alert('تم الاجابة علي سؤال جديد لك');
                        return;
                    }
                    else if (_this.user.USER.type == '2') {
                        alert('لديك سؤال جديد');
                        return;
                    }
                    alert("من فضلك تابع صفحة الاسئلة");
                    resolve(true);
                }
                else {
                    // alert( token );
                    _this.events.publish('msg', 1);
                    if (_this.user.USER.type == '1') {
                        alert('تم الاجابة علي سؤال جديد لك');
                        return;
                    }
                    else if (_this.user.USER.type == '2') {
                        alert('لديك سؤال جديد');
                        return;
                    }
                    alert("من فضلك تابع صفحة الاسئلة");
                    // alert(token.wasTapped)
                    // alert( token );
                    // alert('');
                    // alert(token.wasTapped)
                    resolve(false);
                    //  FCMPlugin. backend.registerToken(token);
                    //Notification was received in foreground. Maybe the user needs to be notified.
                    // console.log(context.getActive().name)
                }
            });
        });
        FCMPlugin.onTokenRefresh(function (token) {
            FCMPlugin.onTokenRefresh(function (token) {
                alert('لديك رسالة جديدة');
                // alert( token );
            });
        });
        return promise;
    };
    FcmPushProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Events, User,
            FCM, HttpClient])
    ], FcmPushProvider);
    return FcmPushProvider;
}());
export { FcmPushProvider };
//# sourceMappingURL=fcm-push.js.map