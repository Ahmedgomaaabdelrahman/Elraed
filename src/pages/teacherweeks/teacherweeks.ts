import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AddlessonsPage } from '../addlessons/addlessons';
import { AddtestsPage } from '../addtests/addtests';

@Component({
  selector: 'page-teacherweeks',
  templateUrl: 'teacherweeks.html',
})
export class TeacherweeksPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeacherweeksPage');
  }
 
  golessons(){
    this.navCtrl.push(AddlessonsPage);
  }
  gotoexams(){
    this.navCtrl.push(AddtestsPage);
  }
}
