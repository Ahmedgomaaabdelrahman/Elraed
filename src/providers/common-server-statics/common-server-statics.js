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
import { User } from './../../model/UserModel';
import { Statics } from './../../model/StaticsModel';
/*
  Generated class for the CommonServerStaticsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CommonServerStaticsProvider = /** @class */ (function () {
    function CommonServerStaticsProvider(http, usermodel, statics) {
        this.http = http;
        this.usermodel = usermodel;
        this.statics = statics;
        this.GET_GRADE = 'getGrade';
        this.GET_YEAR = 'getYear';
        console.log('Hello AuthProvider Provider');
        this.url = this.statics.getURL();
    }
    CommonServerStaticsProvider.prototype.getGrades = function () {
        return this.http.get(this.url + this.GET_GRADE);
    };
    CommonServerStaticsProvider.prototype.getYear = function () {
        return this.http.get(this.url + this.GET_YEAR);
    };
    CommonServerStaticsProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient,
            User,
            Statics])
    ], CommonServerStaticsProvider);
    return CommonServerStaticsProvider;
}());
export { CommonServerStaticsProvider };
//# sourceMappingURL=common-server-statics.js.map