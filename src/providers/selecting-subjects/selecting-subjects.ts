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
export class SelectingSubjectsProvider {

  private url
  public readonly GET_SUPJECT:string='getsubject'
  public readonly REGISTER:string='register'
  public readonly UPDATE_USER:string='updateuser'
    constructor(
      public http: HttpClient,
      private usermodel:User ,
      private statics:Statics
    ) {
  
    this.url=this.statics.getURL();
    
  }
   
  getSubject(grade_id){
    return this.http.get(this.url+this.GET_SUPJECT+'/'+grade_id);
  }  
}
