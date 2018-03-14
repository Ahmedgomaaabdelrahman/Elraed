var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { TestquestionsPage } from './../testquestions/testquestions';
import { TestProvider } from './../../providers/test/test';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AddlessonsPage } from '../addlessons/addlessons';
import { User } from './../../model/UserModel';
import { CommonServicesProvider } from './../../providers/common-services/common-services';
import { CommonServerStaticsProvider } from './../../providers/common-server-statics/common-server-statics';
import { AnswersProvider } from './../../providers/answers/answers';
import { Statics } from '../../model/StaticsModel';
var TeacherweeksPage = /** @class */ (function () {
    function TeacherweeksPage(statics, user, testProvider, commonStatics, common, answer, navCtrl, navParams) {
        this.statics = statics;
        this.user = user;
        this.testProvider = testProvider;
        this.commonStatics = commonStatics;
        this.common = common;
        this.answer = answer;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.year_id = '';
        this.grade_id = '';
        this.subject_id = '';
    }
    TeacherweeksPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.weeks = [];
        this.commonStatics.getGrades().subscribe(function (grades) {
            console.log(grades);
            _this.gradeArr = grades;
        });
    };
    TeacherweeksPage.prototype.getSelectedYear = function (year) {
        var _this = this;
        this.year_id = year['year_id'];
        console.log(year);
        this.answer.getSubjecsAssignedToYears(this.year_id).subscribe(function (res) {
            console.log(res);
            _this.subjectsArr = res;
        });
        this.getWeeks();
    };
    TeacherweeksPage.prototype.getSelectedGrade = function (grade) {
        var _this = this;
        this.year_id = '';
        this.grade_id = '';
        this.subject_id = '';
        console.log(grade);
        this.grade_id = grade['grade_id'];
        this.answer.getYearsAssignedToGrade(this.grade_id).subscribe(function (res) {
            console.log(res);
            _this.yearsArr = res;
        });
        console.log(this.grade_id);
        this.getWeeks();
    };
    TeacherweeksPage.prototype.getSelectedSubject = function (subject) {
        this.subject_id = subject['subject_id'];
        this.getWeeks();
        console.log(this.subject_id);
    };
    TeacherweeksPage.prototype.getWeeks = function () {
        var _this = this;
        this.weeks = [];
        this.testProvider.getWeeks(this.subject_id, this.grade_id, this.year_id).subscribe(function (res) {
            console.log(res);
            _this.weeks = res;
        });
    };
    TeacherweeksPage.prototype.golessons = function () {
        this.navCtrl.push(AddlessonsPage);
    };
    TeacherweeksPage.prototype.gotoexams = function (week) {
        if (this.weeks.length === 0 || week.week_id == null) {
            this.navCtrl.push(TestquestionsPage, {
                subject_id: this.subject_id, week_id: 1,
                year_id: this.year_id,
                grade_id: this.grade_id
            });
        }
        else {
            // if(week.week_id==null){
            //
            //   console.log('ssssssssss')
            // return
            // }
            this.navCtrl.push(TestquestionsPage, { subject_id: this.subject_id,
                week_id: week.week_id,
                year_id: this.year_id,
                grade_id: this.grade_id
            });
        }
        // console.log(this.weeks.length)
    };
    TeacherweeksPage = __decorate([
        Component({
            selector: 'page-teacherweeks',
            templateUrl: 'teacherweeks.html',
        }),
        __metadata("design:paramtypes", [Statics,
            User, TestProvider,
            CommonServerStaticsProvider,
            CommonServicesProvider,
            AnswersProvider, NavController, NavParams])
    ], TeacherweeksPage);
    return TeacherweeksPage;
}());
export { TeacherweeksPage };
//# sourceMappingURL=teacherweeks.js.map