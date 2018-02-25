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
    this.testModel.initialaizeQuestions()
    this.questions=[]
this. answer_1=[]
this.question=[]
this.answer_2=[]

this.answer_3=[]
// this.questions.push('')
// this. answer_1.push('')
// this.question.push('')
// this.answer_2.push('')

// this.answer_3.push('')
    // this.questaion=this.testModel.getAllQuestions()
    console.log('ionViewDidLoad TestquestionsPage',this.navParams.get('weekIndex'));

  }
  pushQuestion(){

    let i=this.questions.length-1

    console.log(this. answer_1)
console.log(this.testModel.getAllQuestions())
this.testModel.TEST.answer_1=''
this.testModel.TEST.answer_2=''
this.testModel.TEST.answer_3=''
this.testModel.TEST.questaion=''
this.testModel.TEST.answer_1= this.answer_1[i]
this.testModel.TEST.answer_2=this.answer_2[i]
this.testModel.TEST.answer_3=this.answer_3[i]
this.testModel.TEST.questaion=this.question[i]
this.testModel.addAQuestion()
this.questions.push(this.testModel.getAllQuestions())
console.log(this.questions)

}
}
