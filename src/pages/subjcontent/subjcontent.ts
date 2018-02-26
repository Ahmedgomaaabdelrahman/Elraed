import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { StudenttestPage } from '../studenttest/studenttest';
import {StudintTimeLineProvider} from "../../providers/studint-time-line/studint-time-line";
import {User} from "../../model/UserModel";


@Component({
  selector: 'page-subjcontent',
  templateUrl: 'subjcontent.html',
})
export class SubjcontentPage {

  constructor(public user:User,public timeLineProvider:StudintTimeLineProvider,public navCtrl: NavController, public navParams: NavParams) {

  }
  subImage
  subName
  timelineArr
  subject_id
  ionViewWillEnter() {
    this.subImage=this.navParams.get('image')
    this.subName=this.navParams.get('name')
    this.timelineArr=[]
    this.subject_id=this.navParams.get('subject_id')
    this.user.USER.grade_id
    this.timeLineProvider.gettimeline(this.subject_id=this.navParams.get('subject_id'),
      this.user.USER.grade_id,
      this.user.USER.year_id).subscribe(res=>{
        console.log(res)
      this.timelineArr=res
    })
    console.log('ionViewDidLoad SubjcontentPage');
  }

  test(timeline){
    this.navCtrl.push(StudenttestPage,{'test':timeline});
  }
}
