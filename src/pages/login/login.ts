import { StudenttabsPage } from './../studenttabs/studenttabs';
import { SignupPage } from './../signup/signup';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TeachertabsPage } from '../teachertabs/teachertabs';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  gohome(){
      this.navCtrl.push(StudenttabsPage);
 }
  signup(){
    this.navCtrl.push(SignupPage);
  }
  teacher(){ 
    this.navCtrl.push(TeachertabsPage); 
  }
} 
