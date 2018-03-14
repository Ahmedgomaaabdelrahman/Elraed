var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { TeacherquesPage } from './../../pages/teacherques/teacherques';
import { Component, Input } from '@angular/core';
import { MenuController, Events, NavController } from 'ionic-angular';
import { User } from './../../model/UserModel';
import { StudentanswerPage } from '../../pages/studentanswer/studentanswer';
/**
 * Generated class for the HeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(user, events, navCtrl, menuCtrl) {
        this.user = user;
        this.events = events;
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        console.log('Hello HeaderComponent Component');
        var self = this;
        this.msgs = 0;
        this.events.subscribe('msg', function (res) {
            self.msgs = 1 + self.msgs;
            console.log(self.msgs);
        });
    }
    HeaderComponent.prototype.resetMsg = function () {
        this.msgs = 0;
        if (this.user.USER.type == '1') {
            this.navCtrl.push(StudentanswerPage);
            return;
        }
        else {
            this.navCtrl.push(TeacherquesPage);
            return;
        }
    };
    HeaderComponent.prototype.openMenu = function () {
        this.menuCtrl.toggle();
    };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], HeaderComponent.prototype, "name", void 0);
    HeaderComponent = __decorate([
        Component({
            selector: 'header',
            templateUrl: 'header.html'
        }),
        __metadata("design:paramtypes", [User, Events, NavController, MenuController])
    ], HeaderComponent);
    return HeaderComponent;
}());
export { HeaderComponent };
//# sourceMappingURL=header.js.map