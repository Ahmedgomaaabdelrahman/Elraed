import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './../../model/UserModel';
import { Statics } from './../../model/StaticsModel';
/*
  Generated class for the CommonServerStaticsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CommonServerStaticsProvider {
  private url
private GET_GRADE='getGrade'
private GET_YEAR='getYear'
  constructor(
    public http: HttpClient,
    private usermodel:User ,
    private statics:Statics
  ) {

    console.log('Hello AuthProvider Provider');
  this.url=this.statics.getURL();
  }
getGrades(){

  return this.http.get(this.url+this.GET_GRADE);

}
getYear(){

  return this.http.get(this.url+this.GET_YEAR);

}
}
