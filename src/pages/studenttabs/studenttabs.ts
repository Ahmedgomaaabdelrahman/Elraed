import { StudentsubsPage } from './../studentsubs/studentsubs';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { StudentaskPage } from '../studentask/studentask';
import { StudentanswerPage } from '../studentanswer/studentanswer';

@Component({
  selector: 'page-studenttabs',
  templateUrl: 'studenttabs.html',
})
export class StudenttabsPage {
  tab1Root: any = StudentsubsPage;
  tab2Root: any = StudentaskPage;
  tab3Root: any = StudentanswerPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudenttabsPage');
  } 

}
