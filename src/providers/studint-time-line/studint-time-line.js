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
  Generated class for the StudintTimeLineProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var StudintTimeLineProvider = /** @class */ (function () {
    function StudintTimeLineProvider(http, usermodel, statics) {
        this.http = http;
        this.usermodel = usermodel;
        this.statics = statics;
        this.GET_TIMELINE = 'gettimeline';
        this.RATE_LESSON = 'ratethislesson';
        this.WATCH = 'watch';
        this.url = this.statics.getURL();
    }
    StudintTimeLineProvider.prototype.gettimeline = function (subject_id, grade_id, year_id) {
        return this.http.get(this.url + this.GET_TIMELINE + '/' + subject_id + '/' + grade_id + '/' + year_id
            + '/' + this.usermodel.USER.user_id);
    };
    StudintTimeLineProvider.prototype.rateLesson = function (lesson_id, rate, student_id) {
        //http://muthaber-admin.muthaberapp.com/api/ratethislesson/{lesson_id}/{rate]/{student_id}
        return this.http.get(this.url + this.RATE_LESSON + '/' + lesson_id + '/' + rate + '/' + student_id);
    };
    StudintTimeLineProvider.prototype.assignVideoToWatched = function (lesson_id) {
        //http://muthaber-admin.muthaberapp.com/api/watch
        var watch = {
            'lesson_id': lesson_id,
            'watch': 1,
            'student_id': this.usermodel.USER.user_id,
            'rate': '',
            'test_id': '',
            'sol': ''
        };
        return this.http.post(this.url + this.WATCH, watch);
    };
    StudintTimeLineProvider.prototype.assignTestToWatched = function (test_id) {
        //http://muthaber-admin.muthaberapp.com/api/watch
        var watch = {
            'lesson_id': '',
            'watch': 1,
            'student_id': this.usermodel.USER.user_id,
            'rate': '',
            'test_id': test_id,
            'sol': ''
        };
        return this.http.post(this.url + this.WATCH, watch);
    };
    StudintTimeLineProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient,
            User,
            Statics])
    ], StudintTimeLineProvider);
    return StudintTimeLineProvider;
}());
export { StudintTimeLineProvider };
//# sourceMappingURL=studint-time-line.js.map