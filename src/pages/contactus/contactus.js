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
import { StaticsProvider } from '../../providers/statics/statics';
import { NavController, NavParams } from 'ionic-angular';
var ContactusPage = /** @class */ (function () {
    function ContactusPage(statics, navCtrl, navParams) {
        this.statics = statics;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ContactusPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.statics.contactUsInfo().subscribe(function (res) {
            console.log(res);
            _this.info = res;
            console.log(_this.info);
            _this.address = _this.info[0].address;
            _this.created_at = _this.info[0].created_at;
            _this.email = _this.info[0].email;
            _this.phone_whatsapp = _this.info[0].phone_whatsapp;
            _this.updated_at = _this.info[0].updated_at;
            _this.website = _this.info[0].website;
        });
        console.log('ionViewDidLoad ContactusPage');
    };
    ContactusPage = __decorate([
        Component({
            selector: 'page-contactus',
            templateUrl: 'contactus.html',
        }),
        __metadata("design:paramtypes", [StaticsProvider, NavController, NavParams])
    ], ContactusPage);
    return ContactusPage;
}());
export { ContactusPage };
//# sourceMappingURL=contactus.js.map