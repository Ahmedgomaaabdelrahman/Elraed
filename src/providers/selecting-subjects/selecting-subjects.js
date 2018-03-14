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
/*
/*
  Generated class for the AskProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var SelectingSubjectsProvider = /** @class */ (function () {
    function SelectingSubjectsProvider(http, usermodel, statics) {
        this.http = http;
        this.usermodel = usermodel;
        this.statics = statics;
        this.GET_SUPJECT = 'getsubject';
        this.REGISTER = 'register';
        this.UPDATE_USER = 'updateuser';
        this.url = this.statics.getURL();
    }
    SelectingSubjectsProvider.prototype.getSubject = function (grade_id, year_id) {
        return this.http.get(this.url + this.GET_SUPJECT + '/' + grade_id + '/' + year_id);
    };
    SelectingSubjectsProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient,
            User,
            Statics])
    ], SelectingSubjectsProvider);
    return SelectingSubjectsProvider;
}());
export { SelectingSubjectsProvider };
//# sourceMappingURL=selecting-subjects.js.map