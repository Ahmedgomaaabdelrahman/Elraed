import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { StudenttestPage } from '../studenttest/studenttest';


@Component({
  selector: 'page-subjcontent',
  templateUrl: 'subjcontent.html',
})
export class SubjcontentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubjcontentPage');
  }
 
  test(){
    this.navCtrl.push(StudenttestPage);
  }
}
