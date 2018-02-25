import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import {User} from '../../model/UserModel'
import { User } from './../../model/UserModel';
import { Statics } from './../../model/StaticsModel';

/*
  Generated class for the TestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TestProvider {
  private url
  public readonly CREATE_TEST:string='createtest'
  public readonly GET_TEACHER_WEEKS:string='getteacherweek'
  constructor(
    public http: HttpClient,
    private usermodel:User ,
    private statics:Statics
  ) {

  this.url=this.statics.getURL();
  
}

getWeeks(subject_id,grade_id,year_id){
  return this.http.get(this.url+this.GET_TEACHER_WEEKS+'/'+this.usermodel.USER.user_id+'/'+subject_id+'/'+grade_id+
  '/'+year_id)
//  api/getteacherweek/{teacher_id}/{subject_id}/{grade_id}/{year_id}

}


createTest(subject_id,teacher_id,week_id,quetsion=[{}]){
  let maketest={
    'subject_id':subject_id,
     'teacher_id':teacher_id,
    'week_id':week_id,
    'quetsion':quetsion
     }
    

  return this.http.post(this.url+this.CREATE_TEST,maketest);
}



}
