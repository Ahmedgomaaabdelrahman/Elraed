var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { AboutusPage } from './../pages/aboutus/aboutus';
import { TermsPage } from './../pages/terms/terms';
import { ContactusPage } from './../pages/contactus/contactus';
import { BankaccountsPage } from './../pages/bankaccounts/bankaccounts';
import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { EditaccountPage } from '../pages/editaccount/editaccount';
import { User } from '../model/UserModel';
import { FcmPushProvider } from "../providers/fcm-push/fcm-push";
var MyApp = /** @class */ (function () {
    function MyApp(fcm, user, menuCtrl, platform, statusBar, splashScreen) {
        var _this = this;
        this.fcm = fcm;
        this.user = user;
        this.menuCtrl = menuCtrl;
        this.rootPage = LoginPage;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            _this.fcm.onTokenRecived(_this.nav).then(function (res) {
                if (res) {
                    console.log(res);
                    // this.nav.setRoot(MessagesPage)
                    alert('background');
                }
                else {
                    console.log(res);
                    // alert('forground')
                }
            });
            _this.fcm.onTokenIdRefresh();
        });
    }
    MyApp.prototype.terms = function () {
        this.menuCtrl.close();
        this.nav.push(TermsPage);
    };
    MyApp.prototype.aboutApp = function () {
        this.menuCtrl.close();
        this.nav.push(AboutusPage);
    };
    MyApp.prototype.closeMenu = function () {
        this.menuCtrl.close();
    };
    MyApp.prototype.openBank = function () {
        this.menuCtrl.close();
        this.nav.push(BankaccountsPage);
    };
    MyApp.prototype.opencontanct = function () {
        this.menuCtrl.close();
        this.nav.push(ContactusPage);
    };
    MyApp.prototype.edit = function () {
        this.menuCtrl.close();
        this.nav.push(EditaccountPage);
    };
    MyApp.prototype.exit = function () {
        this.menuCtrl.close();
        this.nav.setRoot(LoginPage);
    };
    __decorate([
        ViewChild(Nav),
        __metadata("design:type", Nav)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Component({
            templateUrl: 'app.html'
        }),
        __metadata("design:paramtypes", [FcmPushProvider,
            User,
            MenuController, Platform, StatusBar, SplashScreen])
    ], MyApp);
    return MyApp;
}());
export { MyApp };
//# sourceMappingURL=app.component.js.map