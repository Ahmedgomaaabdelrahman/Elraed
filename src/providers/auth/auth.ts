import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import {User} from '../../model/UserModel'
import { User } from './../../model/UserModel';
import { Statics } from './../../model/StaticsModel';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {
private url
  constructor(
    public http: HttpClient,
    private usermodel:User ,
    private statics:Statics
  ) {

    console.log('Hello AuthProvider Provider');
  this.url=this.statics.getURL();
  }
  login(){
    // this.http.post()
  }
  signUp(){

   return this.http.post(this.url+'register',this.usermodel.getuser())
  }

}
