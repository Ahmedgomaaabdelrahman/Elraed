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
import { DomSanitizer } from '@angular/platform-browser';
var LessonshowPage = /** @class */ (function () {
    function LessonshowPage(sanitizer, navCtrl, navParams) {
        this.sanitizer = sanitizer;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LessonshowPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LessonshowPage', this.navParams.get('lesson').video_url);
        // this.video=this.navParams.get('lesson').video_url
        this.getSafeUrl(this.navParams.get('lesson').video_url);
    };
    LessonshowPage.prototype.getSafeUrl = function (url) {
        this.video = this.sanitizer.bypassSecurityTrustResourceUrl(url.replace("watch?v=", "embed/"));
        // this.video = url.replace("watch?v=", "v/");
    };
    LessonshowPage = __decorate([
        Component({
            selector: 'page-lessonshow',
            templateUrl: 'lessonshow.html',
        }),
        __metadata("design:paramtypes", [DomSanitizer, NavController, NavParams])
    ], LessonshowPage);
    return LessonshowPage;
}());
export { LessonshowPage };
//# sourceMappingURL=lessonshow.js.map