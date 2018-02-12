import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { SubjcontentPage } from '../subjcontent/subjcontent';


@Component({
  selector: 'page-studentsubs',
  templateUrl: 'studentsubs.html',
})
export class StudentsubsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentsubsPage');
  }
  
  gotosign(){
    this.navCtrl.push(SignupPage);
  }
  details(){
    this.navCtrl.push(SubjcontentPage);
  }
}
