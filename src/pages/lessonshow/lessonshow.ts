import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'page-lessonshow',
  templateUrl: 'lessonshow.html',
})
export class LessonshowPage {
video
  constructor(public sanitizer: DomSanitizer,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LessonshowPage',this.navParams.get('lesson').video_url);
    // this.video=this.navParams.get('lesson').video_url
    this.getSafeUrl(this.navParams.get('lesson').video_url)
}
  getSafeUrl(url) {
    this.video = this.sanitizer.bypassSecurityTrustResourceUrl( url.replace("watch?v=", "embed/"));
    // this.video = url.replace("watch?v=", "v/");

  }
}
