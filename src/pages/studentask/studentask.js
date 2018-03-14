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
var StudentaskPage = /** @class */ (function () {
    /////////////////////////////////////
    // 'student_id':, =>int
    // 'grade_id':,   =>int
    // 'subject_id':, =>int
    // 'question':, =>text , string
    // 'image_url':,=>string , base64
    // 'audio_url': =>string , base64
    ////////////////////////////////////
    function StudentaskPage(user, common, navCtrl, navParams, statics, askProvider, supjectsProvider, commonServerStaticsProvider, auth) {
        this.user = user;
        this.common = common;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.statics = statics;
        this.askProvider = askProvider;
        this.supjectsProvider = supjectsProvider;
        this.commonServerStaticsProvider = commonServerStaticsProvider;
        this.auth = auth;
        this.image = '';
        this.audioRecord = '';
        this.video = '';
        this.questionText = '';
        this.grade_id = '';
        this.grade = '';
        this.sendImage = '';
    }
    StudentaskPage.prototype.selectSubject = function (subj) {
        console.log(subj);
        this.subject_id = subj.subject_id;
        this.grade_id = subj.grade_id;
    };
    StudentaskPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.spinnerFlag = false;
        this.grade = this.user.getuser().grade;
        this.subs = [];
        console.log(this.user.getuser().grade_id);
        this.supjectsProvider.getSubject(this.user.USER.grade_id, this.user.USER.year_id).subscribe(function (subs) {
            console.log('subss', subs);
            _this.subs = subs;
        });
    };
    StudentaskPage.prototype.record = function () {
        var _this = this;
        var self = this;
        this.common.media().then(function (audioFile) {
            console.log(audioFile[0].fullPath);
            self.audioRecord = audioFile[0].fullPath;
            _this.common.toBase64(audioFile[0].fullPath).then(function (base64) {
                var str = base64;
                var res = str.split("data:image/*;charset=utf-8;base64,");
                // var str = res;
                self.audioSend = res;
            }).catch(function (e) {
                console.log(e);
                _this.common.presentToast('خطأ');
            });
        }).catch(function (e) {
            console.log(e);
        });
    };
    StudentaskPage.prototype.addImage = function () {
        var self = this;
        this.common.presentActionSheet(this.statics.USE_CAMERA, this.statics.USE_GALARY).then(function (cameraType) {
            self.common.camPic(cameraType).then(function (encodedImage) {
                console.log(encodedImage);
                self.image = 'data:image/jpeg;base64,' + encodedImage;
            });
        });
    };
    StudentaskPage.prototype.ask = function () {
        var _this = this;
        var question = {
            'student_id': this.user.getuser().user_id,
            'grade_id': this.grade_id,
            'year_id': this.user.getuser().year_id,
            'subject_id': this.subject_id,
            'question': this.questionText,
            'image_url': this.image,
            'audio_url': this.video
        };
        //  console.log('before send :: ',question)
        //  if(this.audioSend=='' ||this.audioSend==null||this.audioSend==undefined){
        //    question.audio_url=''
        //  }else{
        //
        // question.audio_url=this.audioSend[1]
        //
        //
        //  }
        this.spinnerFlag = true;
        console.log(question);
        this.askProvider.ask(question).subscribe(function (res) {
            _this.common.presentToast('تم');
            _this.spinnerFlag = false;
            _this.questionText = '';
            _this.image = '';
            _this.audioRecord = '';
            _this.audioSend = '';
            console.log('response : ', res);
            _this.common.presentToast('تم الارسال');
        }, function (e) {
            _this.common.presentToast('فشل الارسال');
            _this.spinnerFlag = false;
            console.log(e);
        });
    };
    StudentaskPage.prototype.cleanImage = function () {
        this.image = '';
        // this.audioRecord=''
        // this.audioSend=''
    };
    StudentaskPage.prototype.cleanVoice = function () {
        //  this.image=''
        this.audioRecord = '';
        this.audioSend = '';
    };
    StudentaskPage.prototype.serviceVideo = function () {
        // this.show=false
        var _this = this;
        var self = this;
        this.common.media().then(function (res) {
            console.log('video res ', res);
            _this.videoPath = res[0]['fullPath'];
            // this.common.toDataURL(res[0]['fullPath'])
            _this.common.toBase64(res[0]['fullPath']).then(function (base64) {
                var str = base64;
                var res = str.split("data:image/*;charset=utf-8;base64,");
                var res = base64;
                self.video = base64;
                alert(res);
                console.log('res', base64);
            }).catch(function (e) {
                console.log(e);
                _this.common.presentToast('خطأ');
            });
        }).catch(function (e) {
            console.log(e);
            _this.common.presentToast('خطأ');
        });
    };
    StudentaskPage = __decorate([
        Component({
            selector: 'page-studentask',
            templateUrl: 'studentask.html',
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
    ], StudentaskPage);
    return StudentaskPage;
}());
export { StudentaskPage };
//# sourceMappingURL=studentask.js.map