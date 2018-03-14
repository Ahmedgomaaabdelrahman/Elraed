var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { MaxImagePage } from './../max-image/max-image';
import { User } from './../../model/UserModel';
import { CommonServicesProvider } from './../../providers/common-services/common-services';
import { CommonServerStaticsProvider } from './../../providers/common-server-statics/common-server-statics';
import { AnswersProvider } from './../../providers/answers/answers';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Statics } from '../../model/StaticsModel';
var TeacherquesPage = /** @class */ (function () {
    function TeacherquesPage(statics, user, commonStatics, common, answer, navCtrl, navParams) {
        this.statics = statics;
        this.user = user;
        this.commonStatics = commonStatics;
        this.common = common;
        this.answer = answer;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.year_id = '';
        this.grade_id = '';
        this.subject_id = '';
    }
    TeacherquesPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.reportBlockes = [];
        this.reportStudent = [];
        console.log('ionViewDidLoad TeacherquesPage');
        this.commonStatics.getGrades().subscribe(function (grades) {
            console.log(grades);
            _this.gradeArr = grades;
        });
    };
    TeacherquesPage.prototype.writeBlock = function (index) {
        console.log(this.reportBlockArray[index]);
        if (this.reportBlockArray[index]) {
            this.reportBlockArray[index] = false;
        }
        else {
            this.reportBlockArray[index] = true;
        }
        //  if(document.getElementById('blockitem').style.display == 'block'){
        //   document.getElementById('blockitem').style.display = 'none'
        //  }
        //  else {
        //   document.getElementById('blockitem').style.display = 'block'
        //  }
    };
    TeacherquesPage.prototype.reset = function () {
        this.year_id = '';
        this.grade_id = '';
        this.subject_id = '';
    };
    TeacherquesPage.prototype.getSelectedYear = function (year) {
        var _this = this;
        this.year_id = year['year_id'];
        console.log(year);
        this.answer.getSubjecsAssignedToYears(this.year_id).subscribe(function (res) {
            console.log(res);
            _this.subjectsArr = res;
        });
        this.getQuestions();
    };
    TeacherquesPage.prototype.getSelectedGrade = function (grade) {
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
        this.getQuestions();
    };
    TeacherquesPage.prototype.getSelectedSubject = function (subject) {
        this.subject_id = subject['subject_id'];
        this.getQuestions();
        console.log(this.subject_id);
    };
    TeacherquesPage.prototype.imageMax = function (image) {
        this.navCtrl.push(MaxImagePage, { 'img': image });
    };
    TeacherquesPage.prototype.getQuestions = function () {
        var _this = this;
        console.log(this.grade_id, this.subject_id, this.year_id);
        this.answer.questions(this.grade_id, this.subject_id, this.year_id).subscribe(function (questions) {
            console.log(questions);
            console.log(questions['length']);
            _this.questionText = [];
            _this.audioAnswer = [];
            _this.imageAnswer = [];
            _this.reportBlockArray = [];
            for (var i = 0; i < questions['length']; i++) {
                _this.questionText.push('');
                _this.audioAnswer.push('');
                _this.imageAnswer.push('');
                _this.reportBlockArray.push(false);
            }
            _this.questionsArr = questions;
        }, function (err) {
        });
    };
    TeacherquesPage.prototype.answerAQuestion = function (question, textAnswer, index) {
        var _this = this;
        this.common.presentLoadingDefault('');
        console.log(question.quetison_id, this.audioAnswer[index], this.imageAnswer[index]);
        this.answer.answerQuestion(question.quetison_id, this.audioAnswer[index], this.imageAnswer[index], textAnswer).subscribe(function (res) {
            console.log(res);
            _this.common.presentToast('تم الارسال', 'اغلاق');
            _this.common.loadDismess();
        }, function (e) {
            _this.common.loadDismess();
            console.log(e);
            _this.common.presentToast(' خطأ ! لم يتم الارسال', 'اغلاق');
        });
    };
    TeacherquesPage.prototype.record = function (index) {
        var _this = this;
        var self = this;
        this.common.media().then(function (audioFile) {
            console.log(audioFile[0].fullPath);
            // self.audioRecord=audioFile[0].fullPath
            _this.common.toBase64(audioFile[0].fullPath).then(function (base64) {
                var str = base64;
                var res = str.split("data:image/*;charset=utf-8;base64,");
                // var str = res;
                self.audioAnswer[index] = res[1];
            }).catch(function (e) {
                console.log(e);
                _this.common.presentToast('خطأ');
            });
        }).catch(function (e) {
            console.log(e);
        });
    };
    TeacherquesPage.prototype.addImage = function (index) {
        var self = this;
        this.common.presentActionSheet(this.statics.USE_CAMERA, this.statics.USE_GALARY).then(function (cameraType) {
            self.common.camPic(cameraType).then(function (encodedImage) {
                console.log(encodedImage);
                self.imageAnswer[index] = 'data:image/jpeg;base64,' + encodedImage;
            });
        });
    };
    TeacherquesPage.prototype.report = function (question, index) {
        var _this = this;
        // console.log(question['user_id'],this.reportStudent[index],this.user.USER.user_id)
        this.answer.createReport(question['user_id'], this.reportStudent[index], this.user.USER.user_id).subscribe(function (res) {
            // console.log(res)
            _this.common.presentToast('تم الارسال');
        }, function (e) {
            _this.common.presentToast('فشل الارسال');
            // console.log(e)
        });
    };
    TeacherquesPage = __decorate([
        Component({
            selector: 'page-teacherques',
            templateUrl: 'teacherques.html',
        }),
        __metadata("design:paramtypes", [Statics,
            User,
            CommonServerStaticsProvider,
            CommonServicesProvider,
            AnswersProvider, NavController, NavParams])
    ], TeacherquesPage);
    return TeacherquesPage;
}());
export { TeacherquesPage };
//# sourceMappingURL=teacherques.js.map