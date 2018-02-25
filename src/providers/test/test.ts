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
  public readonly CREATE_TEST:string='api/createtest'

  constructor(
    public http: HttpClient,
    private usermodel:User ,
    private statics:Statics
  ) {

  this.url=this.statics.getURL();
  
}




createTest(subject_id,teacher_id,weak_id,quetsion=[{}]){

  return this.http.post(this.url+this.CREATE_TEST,);
}



}
