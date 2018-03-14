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
var AskProvider = /** @class */ (function () {
    function AskProvider(http, usermodel, statics) {
        this.http = http;
        this.usermodel = usermodel;
        this.statics = statics;
        this.ASK = 'ask';
        this.GET_MY_QUESTIONS = 'getmyquestion';
        this.GET_ANSWER_QUESTION = 'getanserquestion';
        this.RATE_ANSWER = 'rateanswer';
        this.url = this.statics.getURL();
    }
    AskProvider.prototype.ask = function (question) {
        // let q={
        //   'student_id':question.student_id,
        //   'subject_id':question.subject_id,
        //   'grade_id':question.grade_id,
        //   'question':question.question,
        //   'image_url':question.image_url,//base 64
        //   'audio_url':question.audio_url,//base 64
        //   }
        return this.http.post(this.url + this.ASK, question);
    };
    AskProvider.prototype.getmyquestions = function () {
        return this.http.get(this.url + this.GET_MY_QUESTIONS + '/' +
            this.usermodel.USER.user_id);
    };
    AskProvider.prototype.getanserquestion = function (question_id) {
        return this.http.get(this.url + this.GET_ANSWER_QUESTION + '/' +
            question_id);
    };
    AskProvider.prototype.rateAnswer = function (rate, question_id) {
        //http://muthaber-admin.muthaberapp.com/api/rateanswer/question_id
        return this.http.put(this.url + this.RATE_ANSWER + '/' + question_id, { rate: rate });
    };
    AskProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient,
            User,
            Statics])
    ], AskProvider);
    return AskProvider;
}());
export { AskProvider };
//# sourceMappingURL=ask.js.map