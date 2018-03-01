import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TestresultPage } from '../testresult/testresult';

@Component({
  selector: 'page-studenttest',
  templateUrl: 'studenttest.html',
})
export class StudenttestPage {
  test_question
  answer_1
  answer_2
  answer_3
  resultCounter
  correct
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter() {
    this.test_question=[]
    this.answer_1=[]
    this.answer_2=[]
    this.answer_3=[]
    this.correct=[]
    console.log('ionViewDidLoad StudenttestPage',this.navParams.get('test'));
    console.log('ionViewDidLoad StudenttestPage',this.navParams.get('test')['test'][0]['test_question']);
  this.test_question=this.navParams.get('test')['test'][0]['test_question']
  }
  radio(value,l){
    let i=l
    console.log(value,i)
    console.log( this.test_question)
if(this.test_question[i]['correct']==value){
  console.log('true')
this.correct[i]=1
}else{
  this.correct[i]=0
  console.log('false')
}
    console.log(  this.correct)
  this.resultCounter=0
    for(let l=0;l<this.correct.length;l++){
  if(this.correct[l]==1){
    console.log( 'this.correct[i]',this.correct[l])
    this.resultCounter++
  }else{

  }
  // x=x+this.correct[i]
      console.log( this.resultCounter)

    }

  }
  finish(){
    this.navCtrl.push(TestresultPage,{'result':this.resultCounter
      ,'questionsCount':this.correct.length});
  }
}
