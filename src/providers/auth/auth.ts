import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import {User} from '../../model/UserModel'
import { User } from './../../model/UserModel';
import { Statics } from './../../model/StaticsModel';
import {FcmPushProvider} from '../fcm-push/fcm-push'
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
public readonly UPDATE_USER:string='updateuser'
public readonly GETYEAR:string='getYear'
  constructor(
    private fcmProvider:FcmPushProvider,
    public http: HttpClient,
    private usermodel:User ,
    private statics:Statics
  ) {

    console.log('Hello AuthProvider Provider');
  this.url=this.statics.getURL();
  }
  getloginToken(phone,password):Promise<any>{
  let promise=new Promise((resolve,reject)=>{

  let self=this
    var user
  this.fcmProvider.getDviceToken().then(token=>
  {
     user={
      'phone':phone,
      'password':password,
      'token_id':token
    }
    resolve(user)
  })
  })
  return promise
  }
  login(phone,password):Promise<any>{
let promise=new Promise((resolve,reject)=>{
  this.getloginToken(phone,password).then(user=>{
    // return this.http.post(this.url+this.LOGIN,user)
    this.http.post(this.url+this.LOGIN,user).subscribe(res=>{
      resolve(res)
    },e=>{
      reject(e)
    })
// resolve(this.http.post(this.url+this.LOGIN,user))
  })
})
return promise;
  }

//   login(phone,password):Promise<any>{
// let promise=new Promise((resolve,reject)=>{
//   // this.getloginToken(phone,password).then(user=>{
//     // return this.http.post(this.url+this.LOGIN,user)
//  let     user={
//       'phone':phone,
//       'password':password,
//       'token_id':'123'
//     }
//     this.http.post(this.url+this.LOGIN,user).subscribe(res=>{
//       resolve(res)
//     },e=>{
//       reject(e)
//     })
// // resolve(this.http.post(this.url+this.LOGIN,user))
//   // })
// })
// return promise;
//   }

  signUp(){
console.log('sign up object : ',this.usermodel.USER)
   return this.http.post(this.url+this.REGISTER,this.usermodel.USER)
  }
  editUp(user_id,user){

    return this.http.put(this.url+this.UPDATE_USER+'/'+user_id,user)
   }
   getYears(grade_id){

    return this.http.get(this.url+this.GETYEAR+'/'+grade_id)
   }
//http://alraedapp.com/api/getYear/grade_id

}
