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
// import {User} from '../../model/UserModel'
import { User } from './../../model/UserModel';
import { Statics } from './../../model/StaticsModel';
import { FcmPushProvider } from '../fcm-push/fcm-push';
/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthProvider = /** @class */ (function () {
    function AuthProvider(fcmProvider, http, usermodel, statics) {
        this.fcmProvider = fcmProvider;
        this.http = http;
        this.usermodel = usermodel;
        this.statics = statics;
        this.LOGIN = 'login';
        this.REGISTER = 'register';
        this.UPDATE_USER = 'updateuser';
        this.GETYEAR = 'getYear';
        console.log('Hello AuthProvider Provider');
        this.url = this.statics.getURL();
    }
    AuthProvider.prototype.getloginToken = function (phone, password) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var self = _this;
            var user;
            _this.fcmProvider.getDviceToken().then(function (token) {
                user = {
                    'phone': phone,
                    'password': password,
                    'token_id': token
                };
                resolve(user);
            });
        });
        return promise;
    };
    AuthProvider.prototype.login = function (phone, password) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.getloginToken(phone, password).then(function (user) {
                // return this.http.post(this.url+this.LOGIN,user)
                _this.http.post(_this.url + _this.LOGIN, user).subscribe(function (res) {
                    resolve(res);
                }, function (e) {
                    reject(e);
                });
                // resolve(this.http.post(this.url+this.LOGIN,user))
            });
        });
        return promise;
    };
    //   login(phone,password):Promise<any>{
    // let promise=new Promise((resolve,reject)=>{
    //   // this.getloginToken(phone,password).then(user=>{
    //     // return this.http.post(this.url+this.LOGIN,user)
    //  let     user={
    //       'phone':phone,
    //       'password':password,
    //       'token_id':'123'
    //     }
    //     this.http.post(this.url+this.LOGIN,user).subscribe(res=>{
    //       resolve(res)
    //     },e=>{
    //       reject(e)
    //     })
    // // resolve(this.http.post(this.url+this.LOGIN,user))
    //   // })
    // })
    // return promise;
    //   }
    AuthProvider.prototype.signUp = function () {
        console.log('sign up object : ', this.usermodel.USER);
        return this.http.post(this.url + this.REGISTER, this.usermodel.USER);
    };
    AuthProvider.prototype.editUp = function (user_id, user) {
        return this.http.put(this.url + this.UPDATE_USER + '/' + user_id, user);
    };
    AuthProvider.prototype.getYears = function (grade_id) {
        return this.http.get(this.url + this.GETYEAR + '/' + grade_id);
    };
    AuthProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [FcmPushProvider,
            HttpClient,
            User,
            Statics])
    ], AuthProvider);
    return AuthProvider;
}());
export { AuthProvider };
//# sourceMappingURL=auth.js.map