var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { StudentsubsPage } from './../studentsubs/studentsubs';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { StudentaskPage } from '../studentask/studentask';
import { StudentanswerPage } from '../studentanswer/studentanswer';
var StudenttabsPage = /** @class */ (function () {
    function StudenttabsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab1Root = StudentsubsPage;
        this.tab2Root = StudentaskPage;
        this.tab3Root = StudentanswerPage;
    }
    StudenttabsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StudenttabsPage');
    };
    StudenttabsPage = __decorate([
        Component({
            selector: 'page-studenttabs',
            templateUrl: 'studenttabs.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], StudenttabsPage);
    return StudenttabsPage;
}());
export { StudenttabsPage };
//# sourceMappingURL=studenttabs.js.map