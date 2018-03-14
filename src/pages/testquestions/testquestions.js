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
import { User } from "../../model/UserModel";
import { TestProvider } from "../../providers/test/test";
import { CommonServicesProvider } from "../../providers/common-services/common-services";
var TestquestionsPage = /** @class */ (function () {
    function TestquestionsPage(user, common, test, navCtrl, navParams) {
        this.user = user;
        this.common = common;
        this.test = test;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.teacher_id = this.user.USER.user_id;
    }
    TestquestionsPage.prototype.ionViewWillEnter = function () {
        this.questions = [];
        this.answer_1 = [];
        this.question = [];
        this.answer_2 = [];
        this.answer_3 = [];
        this.answer_1[0] = '';
        this.question[0] = '';
        this.answer_2[0] = '';
        this.answer_3[0] = '';
        this.questions[0] = { 'questaion': this.question[0], 'answer_1': this.answer_1[0], 'answer_2': this.answer_2[0], 'answer_3': this.answer_3[0], 'correct': '' };
        console.log('ionViewDidLoad TestquestionsPage', this.navParams.get('week_id'));
        this.week_id = this.navParams.get('week_id');
        this.subject_id = this.navParams.get('subject_id');
    };
    TestquestionsPage.prototype.pushQuestion = function () {
        var l = this.questions.length;
        this.questions.push({ 'answer_1': this.answer_1[l], 'answer_2': this.answer_2[l], 'answer_3': this.answer_3[l],
            'questaion': this.question[l], 'correct': null });
    };
    TestquestionsPage.prototype.radio = function (value, l) {
        var i = l;
        console.log(i);
        this.questions[i]['correct'] = value;
        this.questions[i]['questaion'] = this.question[i];
        this.questions[i]['answer_1'] = this.answer_1[i];
        this.questions[i]['answer_2'] = this.answer_2[i];
        this.questions[i]['answer_3'] = this.answer_3[i];
        console.log(this.questions.length);
        console.log(this.questions);
    };
    TestquestionsPage.prototype.finish = function () {
        var _this = this;
        console.log(this.questions, this.teacher_id, this.week_id, this.subject_id);
        this.test.createTest(this.subject_id, this.teacher_id, this.week_id, this.questions, this.navParams.get('grade_id'), this.navParams.get('year_id')).subscribe(function (res) {
            console.log(res);
            _this.common.presentToast('تم عمل الاختبار بنجاح');
        }, function (e) {
            _this.common.presentToast('فشلت العملية');
            console.log(e);
        });
    };
    TestquestionsPage = __decorate([
        Component({
            selector: 'page-testquestions',
            templateUrl: 'testquestions.html',
        }),
        __metadata("design:paramtypes", [User,
            CommonServicesProvider,
            TestProvider,
            NavController, NavParams])
    ], TestquestionsPage);
    return TestquestionsPage;
}());
export { TestquestionsPage };
//# sourceMappingURL=testquestions.js.map