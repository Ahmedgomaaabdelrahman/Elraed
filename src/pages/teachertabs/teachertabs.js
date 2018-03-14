var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { TeacherquesPage } from './../teacherques/teacherques';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TeacherweeksPage } from '../teacherweeks/teacherweeks';
var TeachertabsPage = /** @class */ (function () {
    function TeachertabsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab1Root = TeacherweeksPage;
        this.tab2Root = TeacherquesPage;
    }
    TeachertabsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TeachertabsPage');
    };
    TeachertabsPage = __decorate([
        Component({
            selector: 'page-teachertabs',
            templateUrl: 'teachertabs.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], TeachertabsPage);
    return TeachertabsPage;
}());
export { TeachertabsPage };
//# sourceMappingURL=teachertabs.js.map