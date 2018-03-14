var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { AskProvider } from '../../providers/ask/ask';
import { SelectingSubjectsProvider } from '../../providers/selecting-subjects/selecting-subjects';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { User } from '../../model/UserModel';
import { CommonServerStaticsProvider } from '../../providers/common-server-statics/common-server-statics';
import { AuthProvider } from '../../providers/auth/auth';
import { Statics } from '../../model/StaticsModel';
import { CommonServicesProvider } from '../../providers/common-services/common-services';
var StudentanswerPage = /** @class */ (function () {
    ////////////////////////////////////
    function StudentanswerPage(user, common, navCtrl, navParams, statics, askProvider, supjectsProvider, commonServerStaticsProvider, auth) {
        this.user = user;
        this.common = common;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.statics = statics;
        this.askProvider = askProvider;
        this.supjectsProvider = supjectsProvider;
        this.commonServerStaticsProvider = commonServerStaticsProvider;
        this.auth = auth;
        /////////////////////////////////////
        this.answer = '';
        this.answer_id = '';
        this.audio_url = '';
        this.created_at = '';
        this.image_url = '';
        this.question_id = '';
        this.rate = 0;
    }
    StudentanswerPage.prototype.selectSubject = function (question) {
        var _this = this;
        this.rateStars = [];
        this.quetison_id = question.quetison_id;
        this.askProvider.getanserquestion(question.quetison_id).subscribe(function (res) {
            _this.assignQuestion(res);
        });
    };
    StudentanswerPage.prototype.assignQuestion = function (res) {
        console.log(res);
        if (res.length != 0) {
            this.answer = res[0].answer;
            this.answer_id = res[0].answer_id;
            this.audio_url = res[0].audio_url;
            this.created_at = res[0].created_at;
            this.image_url = res[0].image_url;
            this.question_id = res[0].question_id;
            this.rate = res[0].rate;
            this.assignStars(res[0].rate);
        }
        else {
            this.answer = '';
            this.answer_id = '';
            this.audio_url = '';
            this.created_at = '';
            this.image_url = '';
            this.question_id = '';
            this.rate = 0;
            this.assignStarsEmpty();
        }
    };
    StudentanswerPage.prototype.assignStarsEmpty = function () {
        for (var i = 0; i < 5; i++) {
            this.rateStars.push('star-outline');
        }
    };
    StudentanswerPage.prototype.assignStars = function (rateValue) {
        this.rateStars = [];
        for (var i = 0; i < 5; i++) {
            if (rateValue >= i) {
                this.rateStars.push('star');
            }
            else {
                this.rateStars.push('star-outline');
            }
        }
    };
    StudentanswerPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.rateStars = [];
        this.user_id = this.user.USER.user_id;
        console.log();
        this.askProvider.getmyquestions().subscribe(function (questions) {
            console.log('subss', questions);
            _this.questions = questions;
        });
    };
    StudentanswerPage.prototype.addRate = function (index) {
        var _this = this;
        this.assignStars(index);
        this.askProvider.rateAnswer(index, this.quetison_id).subscribe(function (res) {
            _this.common.presentToast('تم ارسال تقييم', 'اغلاق');
            console.log(res);
        });
    };
    StudentanswerPage = __decorate([
        Component({
            selector: 'page-studentanswer',
            templateUrl: 'studentanswer.html',
        }),
        __metadata("design:paramtypes", [User,
            CommonServicesProvider,
            NavController,
            NavParams,
            Statics,
            AskProvider,
            SelectingSubjectsProvider,
            CommonServerStaticsProvider,
            AuthProvider])
    ], StudentanswerPage);
    return StudentanswerPage;
}());
export { StudentanswerPage };
//# sourceMappingURL=studentanswer.js.map