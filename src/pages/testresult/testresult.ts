import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {StudenttabsPage} from "../studenttabs/studenttabs";

@Component({
  selector: 'page-testresult',
  templateUrl: 'testresult.html',
})
export class TestresultPage {
  result
  questionsCount
  presentage
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestresultPage');
 this.result=this.navParams.get('result')
 this.questionsCount=this.navParams.get('questionsCount')
    console.log(this.result)
    console.log(this.questionsCount)
  this.presentage=(this.result*100)/this.questionsCount
  }
  finish(){
    this.navCtrl.setRoot(StudenttabsPage)  }
}
