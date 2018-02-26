import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {User} from "../../model/UserModel";

import {TestProvider} from "../../providers/test/test";
import {CommonServicesProvider} from "../../providers/common-services/common-services";

@Component({
  selector: 'page-testquestions',
  templateUrl: 'testquestions.html',
})
export class TestquestionsPage {
  subject_id:any
  teacher_id:string=this.user.USER.user_id;
  question:any
  week_id:any
  questions
answer_1
answer_2
answer_3


constructor(
  public user:User,
public common:CommonServicesProvider,
  public test:TestProvider,
   public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter() {
    this.questions=[]
this.answer_1=[]
this.question=[]
this.answer_2=[]
this.answer_3=[]
    this.answer_1[0]=''
    this.question[0]=''
    this.answer_2[0]=''
    this.answer_3[0]=''

    this.questions[0]={'questaion':this.question[0],'answer_1':this.answer_1[0],'answer_2':this.answer_2[0],'answer_3':this.answer_3[0],'correct':''}

    console.log('ionViewDidLoad TestquestionsPage',this.navParams.get('week_id'));
this.week_id=this.navParams.get('week_id')
this.subject_id=this.navParams.get('subject_id')
  }
  pushQuestion(){
    let l=this.questions.length


this.questions.push({'answer_1':this.answer_1[l],'answer_2':this.answer_2[l],'answer_3':this.answer_3[l]
  ,'questaion':this.question[l],'correct':null})



}
  radio(value,l){
   let i=l
    console.log(i)
    this.questions[i]['correct']=value
    this.questions[i]['questaion']=this.question[i]
    this.questions[i]['answer_1']=this.answer_1[i]
    this.questions[i]['answer_2']=this.answer_2[i]
    this.questions[i]['answer_3']=this.answer_3[i]
    console.log( this.questions.length)
    console.log( this.questions)

  }
  finish(){

    console.log(this.questions,this.teacher_id,this.week_id,this.subject_id)
this.test.createTest(
  this.subject_id
  ,this.teacher_id
  ,this.week_id
  ,this.questions
  ,this.navParams.get('grade_id')
  ,this.navParams.get('year_id')
).subscribe(res=>{
  console.log(res)
  this.common.presentToast('تم عمل الاختبار بنجاح')
},e=>{
  this.common.presentToast('فشلت العملية')

  console.log(e)

})
  }

}
