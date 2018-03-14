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
import { StaticsProvider } from "../../providers/statics/statics";
var BankaccountsPage = /** @class */ (function () {
    function BankaccountsPage(statics, navCtrl, navParams) {
        this.statics = statics;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    BankaccountsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.statics.bankaccount().subscribe(function (res) {
            // console.log(res)
            _this.info = res;
            console.log(_this.info);
            // this. bank_name=this.info[0].bank_name
            // this. imge=this.info[0].imge
            // this. owner_name=this.info[0].owner_name
            // this. swift_code=this.info[0].swift_code
        });
        console.log('ionViewDidLoad ContactusPage');
    };
    BankaccountsPage = __decorate([
        Component({
            selector: 'page-bankaccounts',
            templateUrl: 'bankaccounts.html',
        }),
        __metadata("design:paramtypes", [StaticsProvider, NavController, NavParams])
    ], BankaccountsPage);
    return BankaccountsPage;
}());
export { BankaccountsPage };
//# sourceMappingURL=bankaccounts.js.map