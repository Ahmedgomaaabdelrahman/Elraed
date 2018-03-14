var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { TeachertabsPage } from './../teachertabs/teachertabs';
import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { StudenttabsPage } from '../studenttabs/studenttabs';
import { User } from '../../model/UserModel';
import { CommonServerStaticsProvider } from '../../providers/common-server-statics/common-server-statics';
import { AuthProvider } from '../../providers/auth/auth';
import { Statics } from '../../model/StaticsModel';
import { CommonServicesProvider } from '../../providers/common-services/common-services';
var SignupPage = /** @class */ (function () {
    function SignupPage(menuCtrl, user, common, navCtrl, navParams, statics, commonServerStaticsProvider, auth) {
        this.menuCtrl = menuCtrl;
        this.user = user;
        this.common = common;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.statics = statics;
        this.commonServerStaticsProvider = commonServerStaticsProvider;
        this.auth = auth;
        this.grades = [];
        this.years = [];
        this.image = '';
        this.displayImage = '';
        console.log(this.navParams.get('type'));
        this.type = this.navParams.get('type');
        this.user.USER_TYPE = this.type;
    }
    SignupPage.prototype.ionViewWillEnter = function () {
        if (this.navParams.get('type') == 1) {
            this.teacherFlag = false;
        }
        else {
            this.teacherFlag = true;
        }
        document.getElementById("passwordCheck").style.display = "none";
        this.assignGradesAndYearslists();
    };
    SignupPage.prototype.checkPasswords = function () {
        return this.password == this.password_confirm;
    };
    SignupPage.prototype.home = function () {
        var _this = this;
        document.getElementById("passwordCheck").style.display = "none";
        console.log(this.checkPasswords());
        if (this.checkPasswords()) {
            var user = {
                'name': this.name,
                'phone': this.phone,
                'password': this.password,
                'password_confirm': this.password_confirm,
                'mail': this.email,
                'type': this.navParams.get('type'),
                'grade': this.grade,
                'year': this.year,
                'image': this.displayImage
            };
            console.log(user);
            this.user.setuser(user);
            this.user.USER_TYPE = this.navParams.get('type');
            // return;
            this.common.presentLoadingDefault();
            this.auth.signUp().subscribe(function (res) {
                _this.afterSignUp(res);
            }, function (e) {
                _this.common.loadDismess();
                console.log('error', e);
            });
            // this.navCtrl.push(StudenttabsPage);
        }
        else {
            document.getElementById("passwordCheck").style.display = "block";
        }
    };
    SignupPage.prototype.afterSignUp = function (res) {
        var _this = this;
        console.log('error', res['error']);
        if (res['error'] != undefined) {
            this.password = this.password_confirm = null;
            this.common.loadDismess();
            this.common.presentToast(res['error']);
            return;
        }
        this.user.setuser(res);
        this.common.loadDismess();
        this.auth.login(res.phone, res.password);
        this.common.storeValue(this.statics.CURRENT_USER, res).then(function () {
            if (res.type == 2) {
                _this.navCtrl.setRoot(TeachertabsPage);
                _this.menuCtrl.enable(true);
            }
            else {
                _this.navCtrl.setRoot(StudenttabsPage);
                _this.menuCtrl.enable(true);
            }
        });
    };
    SignupPage.prototype.assignGradesAndYearslists = function () {
        var _this = this;
        this.grades = [];
        this.years = [];
        this.commonServerStaticsProvider.getGrades().subscribe(function (grades) {
            _this.grades = grades;
            console.log(grades);
        }, function (e) {
            console.log(e);
        });
        this.commonServerStaticsProvider.getYear().subscribe(function (years) {
            _this.years = years;
            console.log(years);
        }, function (e) {
            console.log(e);
        });
    };
    SignupPage.prototype.getSelectedYear = function (year) {
        this.year = year['year_id'];
        console.log(year);
    };
    SignupPage.prototype.getSelectedGrade = function (grade) {
        var _this = this;
        this.grade = grade['grade_id'];
        console.log(this.grade);
        this.auth.getYears(grade['grade_id']).subscribe(function (res) {
            console.log(res);
            _this.yearsArr = res;
        }, function (e) {
            console.log(e);
        });
    };
    SignupPage.prototype.profileImage = function () {
        var self = this;
        this.common.presentActionSheet(this.statics.USE_CAMERA, this.statics.USE_GALARY).then(function (cameraType) {
            self.common.camPic(cameraType).then(function (encodedImage) {
                self.image = encodedImage;
                self.displayImage = 'data:image/jpeg;base64,' + self.image;
            });
        });
    };
    SignupPage = __decorate([
        Component({
            selector: 'page-signup',
            templateUrl: 'signup.html',
        }),
        __metadata("design:paramtypes", [MenuController,
            User,
            CommonServicesProvider,
            NavController,
            NavParams,
            Statics,
            CommonServerStaticsProvider,
            AuthProvider])
    ], SignupPage);
    return SignupPage;
}());
export { SignupPage };
//# sourceMappingURL=signup.js.map