import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AddlessonsPage } from '../addlessons/addlessons';
import { AddtestsPage } from '../addtests/addtests';
import { User } from './../../model/UserModel';
import { CommonServicesProvider } from './../../providers/common-services/common-services';
import { CommonServerStaticsProvider } from './../../providers/common-server-statics/common-server-statics';
import { AnswersProvider } from './../../providers/answers/answers';
import { Statics } from '../../model/StaticsModel';

@Component({
  selector: 'page-teacherweeks',
  templateUrl: 'teacherweeks.html',
})
export class TeacherweeksPage {

  questionText:any

  year_id=''
  grade_id=''
  subject_id=''
  yearsArr
  gradeArr
  subjectsArr
  questionsArr
  constructor(
    public statics:Statics,
public user:User,
    public commonStatics:CommonServerStaticsProvider,
    public common:CommonServicesProvider,
    public answer:AnswersProvider,public navCtrl: NavController, public navParams: NavParams
  
  
  ) {
  }
  ionViewDidLoad() {
    this.commonStatics.getGrades().subscribe(grades=>{

      console.log(grades)
      this.gradeArr=grades
    })
  }
  getSelectedYear(year){
    this.year_id=year['year_id']
  console.log(year)
   this.answer.getSubjecsAssignedToYears( this.year_id).subscribe(res=>{
      console.log(res)
this.subjectsArr=res
    })
    this.getWeeks()

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
    this.getWeeks()

    }
    getSelectedSubject(subject){
      this.subject_id=subject['subject_id']
      this.getWeeks()
      console.log(this.subject_id)
      
      }
      getWeeks(){

      }
  golessons(){
    this.navCtrl.push(AddlessonsPage);
  }
  gotoexams(){
    this.navCtrl.push(AddtestsPage);
  }
}
