import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import {User} from '../../model/UserModel'
import { User } from './../../model/UserModel';
import { Statics } from './../../model/StaticsModel';

/*
/*
  Generated class for the StudintTimeLineProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StudintTimeLineProvider {
  private url
private readonly GET_TIMELINE:string='gettimeline';
private readonly RATE_LESSON:string='ratethislesson';
private readonly WATCH:string='watch';
  constructor(
    public http: HttpClient,
    private usermodel:User ,
    private statics:Statics
  ) {

    this.url=this.statics.getURL();

  }

  gettimeline(subject_id,grade_id,year_id){


    return this.http.get(this.url+this.GET_TIMELINE+'/'+subject_id+'/'+grade_id+'/'+year_id
    +'/'+this.usermodel.USER.user_id
  );
  }
  rateLesson(lesson_id,rate,student_id){
    //http://muthaber-admin.muthaberapp.com/api/ratethislesson/{lesson_id}/{rate]/{student_id}
    return this.http.get(this.url+this.RATE_LESSON+'/'+lesson_id+'/'+rate+'/'+student_id)

}
assignVideoToWatched(lesson_id){
//http://muthaber-admin.muthaberapp.com/api/watch
  let watch={
    'lesson_id':lesson_id,
    'watch':1,
    'student_id':this.usermodel.USER.user_id,
    'rate': '',
    'test_id': '',
    'sol': ''
  }

  return this.http.post(this.url+this.WATCH,watch)

}

  assignTestToWatched(test_id){
//http://muthaber-admin.muthaberapp.com/api/watch
    let watch={
      'lesson_id':'',
      'watch':1,
      'student_id':this.usermodel.USER.user_id,
      'rate': '',
      'test_id': test_id,
      'sol': ''
    }

    return this.http.post(this.url+this.WATCH,watch)

  }
}
