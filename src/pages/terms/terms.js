var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { TermsAndAboutUsProvider } from './../../providers/terms-and-about-us/terms-and-about-us';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
var TermsPage = /** @class */ (function () {
    function TermsPage(termsAndAboutProvider, navCtrl, navParams) {
        this.termsAndAboutProvider = termsAndAboutProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TermsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.termsAndAboutProvider.policyAndTerms().subscribe(function (res) {
            console.log(res);
            _this.info = res;
            console.log(_this.info);
            _this.policy = _this.info[0].policy;
        });
        console.log('ionViewDidLoad ContactusPage');
    };
    TermsPage = __decorate([
        Component({
            selector: 'page-terms',
            templateUrl: 'terms.html',
        }),
        __metadata("design:paramtypes", [TermsAndAboutUsProvider, NavController, NavParams])
    ], TermsPage);
    return TermsPage;
}());
export { TermsPage };
//# sourceMappingURL=terms.js.map