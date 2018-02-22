import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import {User} from '../../model/UserModel'
import { User } from './../../model/UserModel';
import { Statics } from './../../model/StaticsModel';

/*
  Generated class for the AnswersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AnswersProvider {

  private url
  public readonly ASK:string='ask'
  public readonly GET_YEARS_ASSIGNED_TO_GRADE :string= 'getyearsforteacher'
  public readonly GET_ANSWERS :string= 'getteacherquetison'
  public readonly GET_SUBJECTS_ASSIGNED_TO_YEARS :string= 'getsubjectsforteacher'
  public readonly ANSWER :string= 'answer'

  public readonly CREATE_REPORT :string= 'createReport'
  
  public readonly GET_MY_QUESTIONS:string='getmyquestion'
  public readonly GET_ANSWER_QUESTION:string='getanserquestion'
    constructor(
      public http: HttpClient,
      private usermodel:User ,
      private statics:Statics
    ) {
  
    this.url=this.statics.getURL();
    
  }
   
 getYearsAssignedToGrade(grade_id){

    return this.http.get(this.url+this.GET_YEARS_ASSIGNED_TO_GRADE+'/'+grade_id+'/'+this.usermodel.getuser().user_id);
  }  
    
 getSubjecsAssignedToYears(year_id){
   //getsubjectsforteacher/{year_id}/{teacher_id}

  return this.http.get(this.url+this.GET_SUBJECTS_ASSIGNED_TO_YEARS+'/'+year_id+'/'+this.usermodel.getuser().user_id);
}  




  questions(grade_id,subject_id,year_id){
    //http://alraedapp.com/api/getteacherquetison/{grade_id}/{subject_id}/{year_id}
    return this.http.get(this.url+this.GET_ANSWERS+'/'+grade_id+'/'+subject_id+'/'+year_id);


  }
answerQuestion(question_id,audio_url,image_url,textAnswer){
  //http://alraedapp.com/api/answer
  let ans={
    
      'question_id':question_id,
      'audio_url':audio_url,
      'image_url':image_url,
      'rate' :"",
      'answer':textAnswer
      
      }
      
  return this.http.post(this.url+this.ANSWER,ans);

}
createReport(student_id,report,teacher_id){
  //http://alraedapp.com/api/answer
  let reportobj={
      'student_id':student_id,
      'report':report,
      'teacher_id':teacher_id,
    
      
      }
      
  return this.http.post(this.url+this.CREATE_REPORT,reportobj);

}
}
