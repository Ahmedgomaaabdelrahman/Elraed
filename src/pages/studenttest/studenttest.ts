import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TestresultPage } from '../testresult/testresult';

@Component({
  selector: 'page-studenttest',
  templateUrl: 'studenttest.html',
})
export class StudenttestPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudenttestPage');
  }
 
  finish(){
    this.navCtrl.push(TestresultPage);
  }
}
