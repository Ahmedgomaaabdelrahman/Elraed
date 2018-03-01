import { TeacherquesPage } from './../teacherques/teacherques';
import { StudentaskPage } from './../studentask/studentask';
import { StudentsubsPage } from './../studentsubs/studentsubs';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TeacherweeksPage } from '../teacherweeks/teacherweeks';

@Component({
  selector: 'page-teachertabs',
  templateUrl: 'teachertabs.html',
})
export class TeachertabsPage {
  tab1Root: any = TeacherweeksPage; 
  tab2Root: any = TeacherquesPage;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeachertabsPage');
  }

}
