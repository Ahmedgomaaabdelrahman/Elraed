import { SelectingSubjectsProvider } from '../../providers/selecting-subjects/selecting-subjects';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { SubjcontentPage } from '../subjcontent/subjcontent';
import { TeachertabsPage } from '../teachertabs/teachertabs';
import { HomePage } from './../home/home';
import { StudenttabsPage } from '../studenttabs/studenttabs';
import {User} from '../../model/UserModel'
import {CommonServerStaticsProvider} from '../../providers/common-server-statics/common-server-statics'
import { AuthProvider } from '../../providers/auth/auth';
import { Statics } from '../../model/StaticsModel';
import { CommonServicesProvider } from '../../providers/common-services/common-services';



@Component({
  selector: 'page-studentsubs',
  templateUrl: 'studentsubs.html',
})
export class StudentsubsPage {
  password
  phone
  subs:object;
  grade
  constructor(
    
    private user:User,
    private common:CommonServicesProvider,
    public navCtrl: NavController,
    public navParams: NavParams,
    public statics:Statics,
    public supjectsProvider:SelectingSubjectsProvider,
    public commonServerStaticsProvider:CommonServerStaticsProvider,
    private auth:AuthProvider) {
  }

  ionViewWillEnter(){
    this.grade=this.user.getuser().grade
    this.subs=[]
    console.log(this.user.getuser().grade_id)
   this.supjectsProvider.getSubject(this.user.getuser().grade_id).subscribe(subs=>{
     console.log(subs)
     this.subs=subs
   })
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
