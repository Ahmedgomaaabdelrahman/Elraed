var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { AboutusPage } from './../aboutus/aboutus';
import { TermsPage } from './../terms/terms';
import { SignupPage } from './../signup/signup';
import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { TeachertabsPage } from '../teachertabs/teachertabs';
import { StudenttabsPage } from '../studenttabs/studenttabs';
import { User } from '../../model/UserModel';
import { CommonServerStaticsProvider } from '../../providers/common-server-statics/common-server-statics';
import { AuthProvider } from '../../providers/auth/auth';
import { Statics } from '../../model/StaticsModel';
import { CommonServicesProvider } from '../../providers/common-services/common-services';
var LoginPage = /** @class */ (function () {
    function LoginPage(menuCtrl, user, common, navCtrl, navParams, statics, commonServerStaticsProvider, auth) {
        this.menuCtrl = menuCtrl;
        this.user = user;
        this.common = common;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.statics = statics;
        this.commonServerStaticsProvider = commonServerStaticsProvider;
        this.auth = auth;
        this.menuCtrl.enable(false);
    }
    LoginPage.prototype.ionViewWillEnter = function () {
    };
    LoginPage.prototype.logIn = function () {
        //////////////////////
        // this.navCtrl.setRoot(StudenttabsPage)
        // this.navCtrl.setRoot(TeachertabsPage)
        // this.menuCtrl.enable(true)
        // this.common.loadDismess()
        var _this = this;
        /////////////////////////////
        this.common.presentLoadingDefault();
        this.auth.login(this.phone, this.password).then(function (res) {
            console.log(res);
            // this.common.loadDismess()
            _this.afterSignIn(res);
        }, function (e) {
            console.log(e);
            _this.common.loadDismess();
        });
    };
    LoginPage.prototype.afterSignIn = function (res) {
        var _this = this;
        console.log('error', res['error']);
        if (res['error'] != undefined) {
            // this.password=this.password_confirm=null
            this.common.loadDismess();
            this.common.presentToast(res['error']);
            return;
        }
        this.user.setuser(res);
        this.common.loadDismess();
        this.common.storeValue(this.statics.CURRENT_USER, res).then(function () {
            console.log(res.type);
            if (res.type == '1') {
                _this.navCtrl.setRoot(StudenttabsPage);
                _this.menuCtrl.enable(true);
            }
            else {
                _this.menuCtrl.enable(true);
                _this.navCtrl.setRoot(TeachertabsPage);
            }
        });
    };
    LoginPage.prototype.signup = function (type) {
        this.navCtrl.push(SignupPage, { 'type': type });
    };
    LoginPage.prototype.gohome = function () {
        this.navCtrl.push(StudenttabsPage);
    };
    LoginPage.prototype.teacher = function () {
        this.navCtrl.push(TeachertabsPage);
    };
    LoginPage.prototype.goterms = function () {
        this.navCtrl.push(TermsPage);
    };
    LoginPage.prototype.goabout = function () {
        this.navCtrl.push(AboutusPage);
    };
    LoginPage = __decorate([
        Component({
            selector: 'page-login',
            templateUrl: 'login.html',
        }),
        __metadata("design:paramtypes", [MenuController,
            User,
            CommonServicesProvider,
            NavController,
            NavParams,
            Statics,
            CommonServerStaticsProvider,
            AuthProvider])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.js.map