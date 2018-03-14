var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { StudenttestPage } from '../studenttest/studenttest';
import { StudintTimeLineProvider } from "../../providers/studint-time-line/studint-time-line";
import { User } from "../../model/UserModel";
import { CommonServicesProvider } from "../../providers/common-services/common-services";
import { LessonshowPage } from "../lessonshow/lessonshow";
var SubjcontentPage = /** @class */ (function () {
    function SubjcontentPage(common, user, timeLineProvider, navCtrl, navParams) {
        this.common = common;
        this.user = user;
        this.timeLineProvider = timeLineProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SubjcontentPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.weekrate = [];
        this.timelineArr = [];
        // this.rateHelperArray=[]
        this.subImage = this.navParams.get('image');
        this.subName = this.navParams.get('name');
        this.subject_id = this.navParams.get('subject_id');
        this.user.USER.grade_id;
        this.timeLineProvider.gettimeline(this.subject_id = this.navParams.get('subject_id'), this.user.USER.grade_id, this.user.USER.year_id).subscribe(function (res) {
            console.log(res);
            _this.timelineArr = res;
            // this.rate(res)
        });
    };
    SubjcontentPage.prototype.test = function (timeline) {
        var _this = this;
        console.log(timeline.test[0].test_id);
        this.timeLineProvider.assignTestToWatched(timeline.test[0].test_id).subscribe(function (res) {
            _this.navCtrl.push(StudenttestPage, { 'test': timeline });
            console.log('e', res);
        }, function (e) {
            console.log('e', e);
        });
    };
    SubjcontentPage.prototype.openLesson = function (lesson) {
        var _this = this;
        console.log(lesson.lesson_id);
        this.timeLineProvider.assignVideoToWatched(lesson.lesson_id).subscribe(function (res) {
            _this.navCtrl.push(LessonshowPage, { 'lesson': lesson });
            console.log(res);
        }, function (e) {
            console.log(e);
        });
    };
    SubjcontentPage.prototype.doRate = function (lesson, rate) {
        console.log(lesson.studentlessons.length, rate, this.user.USER.user_id);
        if (lesson.studentlessons.length > 0) {
            this.rate(lesson, rate);
        }
        else {
            this.common.presentToast('لم تتم المشاهدة للقيام بالتقييم');
        }
    };
    SubjcontentPage.prototype.rate = function (lesson, rate) {
        var _this = this;
        this.timeLineProvider.rateLesson(lesson.lesson_id, rate, this.user.USER.user_id).subscribe(function (res) {
            console.log(res);
            _this.common.presentToast('تم التقييم بنجاح');
        }, function (e) {
            console.log(e);
        });
    };
    SubjcontentPage = __decorate([
        Component({
            selector: 'page-subjcontent',
            templateUrl: 'subjcontent.html',
        }),
        __metadata("design:paramtypes", [CommonServicesProvider,
            User, StudintTimeLineProvider, NavController, NavParams])
    ], SubjcontentPage);
    return SubjcontentPage;
}());
export { SubjcontentPage };
//# sourceMappingURL=subjcontent.js.map