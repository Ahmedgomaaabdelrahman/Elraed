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
  Generated class for the AnswersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AnswersProvider = /** @class */ (function () {
    function AnswersProvider(http, usermodel, statics) {
        this.http = http;
        this.usermodel = usermodel;
        this.statics = statics;
        this.ASK = 'ask';
        this.GET_YEARS_ASSIGNED_TO_GRADE = 'getyearsforteacher';
        this.GET_ANSWERS = 'getteacherquetison';
        this.GET_SUBJECTS_ASSIGNED_TO_YEARS = 'getsubjectsforteacher';
        this.ANSWER = 'answer';
        this.CREATE_REPORT = 'createReport';
        this.GET_MY_QUESTIONS = 'getmyquestion';
        this.GET_ANSWER_QUESTION = 'getanserquestion';
        this.url = this.statics.getURL();
    }
    AnswersProvider.prototype.getYearsAssignedToGrade = function (grade_id) {
        return this.http.get(this.url + this.GET_YEARS_ASSIGNED_TO_GRADE + '/' + grade_id + '/' + this.usermodel.getuser().user_id);
    };
    AnswersProvider.prototype.getSubjecsAssignedToYears = function (year_id) {
        //getsubjectsforteacher/{year_id}/{teacher_id}
        return this.http.get(this.url + this.GET_SUBJECTS_ASSIGNED_TO_YEARS + '/' + year_id + '/' + this.usermodel.getuser().user_id);
    };
    AnswersProvider.prototype.questions = function (grade_id, subject_id, year_id) {
        //http://alraedapp.com/api/getteacherquetison/{grade_id}/{subject_id}/{year_id}
        return this.http.get(this.url + this.GET_ANSWERS + '/' + grade_id + '/' + subject_id + '/' + year_id);
    };
    AnswersProvider.prototype.answerQuestion = function (question_id, audio_url, image_url, textAnswer) {
        //http://alraedapp.com/api/answer
        var ans = {
            'question_id': question_id,
            'audio_url': audio_url,
            'image_url': image_url,
            'rate': "",
            'answer': textAnswer
        };
        return this.http.post(this.url + this.ANSWER, ans);
    };
    AnswersProvider.prototype.createReport = function (student_id, report, teacher_id) {
        //http://alraedapp.com/api/answer
        var reportobj = {
            'student_id': student_id,
            'report': report,
            'teacher_id': teacher_id,
        };
        return this.http.post(this.url + this.CREATE_REPORT, reportobj);
    };
    AnswersProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient,
            User,
            Statics])
    ], AnswersProvider);
    return AnswersProvider;
}());
export { AnswersProvider };
//# sourceMappingURL=answers.js.map