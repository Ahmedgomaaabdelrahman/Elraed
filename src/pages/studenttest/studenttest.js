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
import { TestresultPage } from '../testresult/testresult';
var StudenttestPage = /** @class */ (function () {
    function StudenttestPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    StudenttestPage.prototype.ionViewWillEnter = function () {
        this.test_question = [];
        this.answer_1 = [];
        this.answer_2 = [];
        this.answer_3 = [];
        this.correct = [];
        console.log('ionViewDidLoad StudenttestPage', this.navParams.get('test'));
        console.log('ionViewDidLoad StudenttestPage', this.navParams.get('test')['test'][0]['test_question']);
        this.test_question = this.navParams.get('test')['test'][0]['test_question'];
    };
    StudenttestPage.prototype.radio = function (value, l) {
        var i = l;
        console.log(value, i);
        console.log(this.test_question);
        if (this.test_question[i]['correct'] == value) {
            console.log('true');
            this.correct[i] = 1;
        }
        else {
            this.correct[i] = 0;
            console.log('false');
        }
        console.log(this.correct);
        this.resultCounter = 0;
        for (var l_1 = 0; l_1 < this.correct.length; l_1++) {
            if (this.correct[l_1] == 1) {
                console.log('this.correct[i]', this.correct[l_1]);
                this.resultCounter++;
            }
            else {
            }
            // x=x+this.correct[i]
            console.log(this.resultCounter);
        }
    };
    StudenttestPage.prototype.finish = function () {
        this.navCtrl.push(TestresultPage, { 'result': this.resultCounter,
            'questionsCount': this.correct.length });
    };
    StudenttestPage = __decorate([
        Component({
            selector: 'page-studenttest',
            templateUrl: 'studenttest.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], StudenttestPage);
    return StudenttestPage;
}());
export { StudenttestPage };
//# sourceMappingURL=studenttest.js.map