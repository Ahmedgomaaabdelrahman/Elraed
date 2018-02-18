import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-teacherques',
  templateUrl: 'teacherques.html',
})
export class TeacherquesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeacherquesPage');
  }
 
  writeBlock(){
   if(document.getElementById('blockitem').style.display == 'block'){
    document.getElementById('blockitem').style.display = 'none'
   }
   else {
    document.getElementById('blockitem').style.display = 'block'
   }
  }
}
