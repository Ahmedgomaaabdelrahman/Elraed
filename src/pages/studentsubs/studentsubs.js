var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SelectingSubjectsProvider } from '../../providers/selecting-subjects/selecting-subjects';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { SubjcontentPage } from '../subjcontent/subjcontent';
import { User } from '../../model/UserModel';
import { CommonServerStaticsProvider } from '../../providers/common-server-statics/common-server-statics';
import { AuthProvider } from '../../providers/auth/auth';
import { Statics } from '../../model/StaticsModel';
import { CommonServicesProvider } from '../../providers/common-services/common-services';
import { DomSanitizer } from '@angular/platform-browser';
var StudentsubsPage = /** @class */ (function () {
    function StudentsubsPage(sanitizer, user, common, navCtrl, navParams, statics, supjectsProvider, commonServerStaticsProvider, auth) {
        this.sanitizer = sanitizer;
        this.user = user;
        this.common = common;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.statics = statics;
        this.supjectsProvider = supjectsProvider;
        this.commonServerStaticsProvider = commonServerStaticsProvider;
        this.auth = auth;
    }
    StudentsubsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.grade = this.user.getuser().grade;
        this.subs = [];
        console.log(this.user.getuser().grade_id);
        this.supjectsProvider.getSubject(this.user.USER.grade_id, this.user.USER.year_id).subscribe(function (subs) {
            console.log(subs);
            _this.subs = subs;
            // this.sanitizer.bypassSecurityTrustStyle(this.subs[0]['image']);
        });
    };
    StudentsubsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StudentsubsPage');
    };
    StudentsubsPage.prototype.gotosign = function () {
        this.navCtrl.push(SignupPage);
    };
    StudentsubsPage.prototype.details = function (subject) {
        console.log(subject);
        this.navCtrl.push(SubjcontentPage, { subject_id: subject.subject_id, image: subject.image,
            name: subject.name });
    };
    StudentsubsPage = __decorate([
        Component({
            selector: 'page-studentsubs',
            templateUrl: 'studentsubs.html',
        }),
        __metadata("design:paramtypes", [DomSanitizer,
            User,
            CommonServicesProvider,
            NavController,
            NavParams,
            Statics,
            SelectingSubjectsProvider,
            CommonServerStaticsProvider,
            AuthProvider])
    ], StudentsubsPage);
    return StudentsubsPage;
}());
export { StudentsubsPage };
//# sourceMappingURL=studentsubs.js.map