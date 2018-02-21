import { CommonServerStaticsProvider } from './../../providers/common-server-statics/common-server-statics';
import { AnswersProvider } from './../../providers/answers/answers';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-teacherques',
  templateUrl: 'teacherques.html',
})
export class TeacherquesPage {
  year_id=''
  grade_id=''
  subject_id=''
  yearsArr
  gradeArr
  subjectsArr
  questionsArr
  constructor(public commonStatics:CommonServerStaticsProvider,
    public answer:AnswersProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeacherquesPage');
    this.commonStatics.getGrades().subscribe(grades=>{

      console.log(grades)
      this.gradeArr=grades
    })
  }
 
  writeBlock(){
   if(document.getElementById('blockitem').style.display == 'block'){
    document.getElementById('blockitem').style.display = 'none'
   }
   else {
    document.getElementById('blockitem').style.display = 'block'
   }
  }
  reset(){
    this.year_id=''
    this.grade_id=''
    this.subject_id=''
  }
  getSelectedYear(year){
    this.year_id=year['year_id']
  console.log(year)
   this.answer.getSubjecsAssignedToYears( this.year_id).subscribe(res=>{
      console.log(res)
this.subjectsArr=res
    })
    this.getQuestions()

  }
  getSelectedGrade(grade){
    this.year_id=''
    this.grade_id=''
    this.subject_id=''
    console.log(grade)
    this.grade_id=grade['grade_id']
    this.answer.getYearsAssignedToGrade( this.grade_id).subscribe(res=>{
      console.log(res)
this.yearsArr=res
    })
    console.log(this.grade_id)
    this.getQuestions()

    }
    getSelectedSubject(subject){
      this.subject_id=subject['subject_id']
      this.getQuestions()
      console.log(this.subject_id)
      
      }
    getQuestions(){
      console.log(this.grade_id,this.subject_id,this.year_id)
      this.answer.questions(this.grade_id,this.subject_id,this.year_id).subscribe(questions=>{
console.log(questions)
this.questionsArr=questions
      },err=>{

      })
    }
}
