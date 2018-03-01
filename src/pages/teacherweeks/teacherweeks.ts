import { TestquestionsPage } from './../testquestions/testquestions';
import { TestProvider } from './../../providers/test/test';
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

  weeks:any
  year_id=''
  grade_id=''
  subject_id=''
  yearsArr
  gradeArr
  subjectsArr
  questionsArr
  constructor(
    public statics:Statics,
public user:User,private testProvider:TestProvider,
    public commonStatics:CommonServerStaticsProvider,
    public common:CommonServicesProvider,
    public answer:AnswersProvider,public navCtrl: NavController, public navParams: NavParams


  ) {
  }
  ionViewWillEnter() {
    this.weeks=[]
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
        this.weeks=[]
this.testProvider.getWeeks(this.subject_id,this.grade_id,this.year_id).subscribe(res=>{
  console.log(res )
  this.weeks=res
})
      }
  golessons(){
    this.navCtrl.push(AddlessonsPage);
  }
  gotoexams(week){
    if(this.weeks.length===0 ||week.week_id==null){
      this.navCtrl.push(TestquestionsPage,
        {
          subject_id:this.subject_id,week_id:1
        ,year_id:this.year_id
        ,grade_id:this.grade_id
        });
    }else{
// if(week.week_id==null){
//
//   console.log('ssssssssss')
// return
// }
      this.navCtrl.push(TestquestionsPage,{subject_id:this.subject_id
        ,week_id:week.week_id
        ,year_id:this.year_id
        ,grade_id:this.grade_id
      });
    }
    // console.log(this.weeks.length)
  }
}
