import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { StudenttestPage } from '../studenttest/studenttest';
import {StudintTimeLineProvider} from "../../providers/studint-time-line/studint-time-line";
import {User} from "../../model/UserModel";
import {CommonServicesProvider} from "../../providers/common-services/common-services";
import {LessonshowPage} from "../lessonshow/lessonshow";


@Component({
  selector: 'page-subjcontent',
  templateUrl: 'subjcontent.html',
})
export class SubjcontentPage {

  constructor(public common:CommonServicesProvider,
  public user:User,public timeLineProvider:StudintTimeLineProvider,public navCtrl: NavController, public navParams: NavParams) {

  }
  subImage
  subName
  timelineArr
  subject_id
  weekrate
  ionViewWillEnter() {
    this.weekrate=[]
    this.timelineArr=[]
    // this.rateHelperArray=[]
    this.subImage=this.navParams.get('image')
    this.subName=this.navParams.get('name')
    this.subject_id=this.navParams.get('subject_id')
    this.user.USER.grade_id
    this.timeLineProvider.gettimeline(this.subject_id=this.navParams.get('subject_id'),
      this.user.USER.grade_id,
      this.user.USER.year_id
    ).subscribe(res=>{
      this.error(res)
        console.log(res)
      this.timelineArr=res
// this.rate(res)
    })
  }

  test(timeline){
    console.log(timeline.test[0].test_id)
    this.timeLineProvider.assignTestToWatched(timeline.test[0].test_id).subscribe(res=>{
    this.error(res)
      this.navCtrl.push(StudenttestPage,{'test':timeline});
      console.log('e',res)
     
    },e=>{
      console.log('e',e)
      })
  }

  openLesson(lesson){

    console.log(lesson.lesson_id)
    this.timeLineProvider.assignVideoToWatched(lesson.lesson_id).subscribe(res=>{
this.error(res)
      this.navCtrl.push(LessonshowPage,{'lesson':lesson})
      console.log(res)
    },e=>{
      console.log(e)
    })



  }
  error(res){
    if(res['error']){
      this.common.presentToast(res['error'])
    return
    }
  }
  doRate(lesson,rate){
    console.log(lesson.studentlessons.length,rate,this.user.USER.user_id)
  if(lesson.studentlessons.length>0)
  {
    this.rate(lesson,rate)
  }else{
    this.common.presentToast('لم تتم المشاهدة للقيام بالتقييم')

  }
  }
  rate(lesson,rate){
    this.timeLineProvider.rateLesson(lesson.lesson_id,rate,this.user.USER.user_id).subscribe(res=>{
      console.log(res)
this.common.presentToast('تم التقييم بنجاح')
    },e=>{
      console.log(e)

    })
  }
}
