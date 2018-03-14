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
import { StudenttabsPage } from "../studenttabs/studenttabs";
var TestresultPage = /** @class */ (function () {
    function TestresultPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TestresultPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TestresultPage');
        this.result = this.navParams.get('result');
        this.questionsCount = this.navParams.get('questionsCount');
        console.log(this.result);
        console.log(this.questionsCount);
        this.presentage = Math.round((this.result * 100) / this.questionsCount);
    };
    TestresultPage.prototype.finish = function () {
        this.navCtrl.setRoot(StudenttabsPage);
    };
    TestresultPage = __decorate([
        Component({
            selector: 'page-testresult',
            templateUrl: 'testresult.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], TestresultPage);
    return TestresultPage;
}());
export { TestresultPage };
//# sourceMappingURL=testresult.js.map