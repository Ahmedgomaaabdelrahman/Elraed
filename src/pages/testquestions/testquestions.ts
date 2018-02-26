import { Test } from '../../model/TestModel';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-testquestions',
  templateUrl: 'testquestions.html',
})
export class TestquestionsPage {
  subject_id:any
  teacher_id:any
  quetsion:any
  week_id:any
  questions
answer_1
answer_2
answer_3
question
// 'questaion','answer_1','answer_2','answer_3','correct'

constructor(
  public testModel:Test,
   public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter() {
    // this.testModel.initialaizeQuestions()
    this.questions=[]
this. answer_1=[]
this.question=[]
this.answer_2=[]
this.answer_3=[]
this.questions.push({'answer_1':'','answer_2':'','answer_3':''})

    // this.questaion=this.testModel.getAllQuestions()
    console.log('ionViewDidLoad TestquestionsPage',this.navParams.get('weekIndex'));

  }
  pushQuestion(){

  for(  let i=0;i<this.questions.length;i++){
this.questions.push({'answer_1':this.answer_1[i],'answer_2':this.answer_2[i],'answer_3':this.answer_3[i]})
}

console.log(this.questions)

}
}
