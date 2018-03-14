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
  Generated class for the TestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var TestProvider = /** @class */ (function () {
    function TestProvider(http, usermodel, statics) {
        this.http = http;
        this.usermodel = usermodel;
        this.statics = statics;
        this.CREATE_TEST = 'createtest';
        this.GET_TEACHER_WEEKS = 'getteacherweek';
        this.url = this.statics.getURL();
    }
    TestProvider.prototype.getWeeks = function (subject_id, grade_id, year_id) {
        return this.http.get(this.url + this.GET_TEACHER_WEEKS + '/' + this.usermodel.USER.user_id + '/' + subject_id + '/' + grade_id +
            '/' + year_id);
        //  api/getteacherweek/{teacher_id}/{subject_id}/{grade_id}/{year_id}
    };
    TestProvider.prototype.createTest = function (subject_id, teacher_id, week_id, quetsion, grade_id, year_id) {
        if (quetsion === void 0) { quetsion = [{}]; }
        var maketest = {
            'subject_id': subject_id,
            'teacher_id': teacher_id,
            'grade_id': grade_id,
            'year_id': year_id,
            'week_id': week_id,
            'quetsion': quetsion
        };
        return this.http.post(this.url + this.CREATE_TEST, maketest);
    };
    TestProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient,
            User,
            Statics])
    ], TestProvider);
    return TestProvider;
}());
export { TestProvider };
//# sourceMappingURL=test.js.map