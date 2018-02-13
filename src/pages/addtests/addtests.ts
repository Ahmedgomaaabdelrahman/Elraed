import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TestquestionsPage } from '../testquestions/testquestions';

@Component({
  selector: 'page-addtests',
  templateUrl: 'addtests.html',
})
export class AddtestsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddtestsPage');
  }
 
  addtest(){
    this.navCtrl.push(TestquestionsPage);
  }
}
