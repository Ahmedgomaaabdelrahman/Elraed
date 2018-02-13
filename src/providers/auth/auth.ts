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
public readonly LOGIN:string='login'
public readonly REGISTER:string='register'

  constructor(
    public http: HttpClient,
    private usermodel:User ,
    private statics:Statics
  ) {

    console.log('Hello AuthProvider Provider');
  this.url=this.statics.getURL();
  }
  login(phone,password){
    let user={
      'phone':phone,
      'password':password
    }
    return this.http.post(this.url+this.LOGIN,user)
  }
  signUp(){

   return this.http.post(this.url+this.REGISTER,this.usermodel.getuser())
  }

}
