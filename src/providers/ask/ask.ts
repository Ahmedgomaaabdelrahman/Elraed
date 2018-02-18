import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import {User} from '../../model/UserModel'
import { User } from './../../model/UserModel';
import { Statics } from './../../model/StaticsModel';

/*
/*
  Generated class for the AskProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AskProvider {

  private url
  public readonly ASK:string='ask'
  public readonly GET_MY_QUESTIONS:string='getmyquestion'
  public readonly GET_ANSWER_QUESTION:string='getanserquestion'
    constructor(
      public http: HttpClient,
      private usermodel:User ,
      private statics:Statics
    ) {
  
    this.url=this.statics.getURL();
    
  }
   
 ask(question){
    // let q={
    //   'student_id':question.student_id,
    //   'subject_id':question.subject_id,
    //   'grade_id':question.grade_id,
    //   'question':question.question,
    //   'image_url':question.image_url,//base 64
    //   'audio_url':question.audio_url,//base 64
      
    //   }
      
    return this.http.post(this.url+this.ASK,question);
  }  
  getmyquestions(){
    return this.http.get(this.url+this.GET_MY_QUESTIONS+'/'+
    this.usermodel.USER.user_id);

  }
  getanserquestion(question_id){
    return this.http.get(this.url+this.GET_ANSWER_QUESTION+'/'+
    question_id);

  }

}
