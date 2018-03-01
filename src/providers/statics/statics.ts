import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import {User} from '../../model/UserModel'
import { User } from './../../model/UserModel';
import { Statics } from './../../model/StaticsModel';

/*
  Generated class for the StaticsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StaticsProvider {

  private url
  private readonly CONTACTUS:string='contactus';
  private readonly BANK_ACCOUNTS:string='bankaccount';
  private readonly WATCH:string='watch';
  constructor(
    public http: HttpClient,
    private usermodel:User ,
    private statics:Statics
  ) {

    this.url=this.statics.getURL();

  }

  contactUsInfo(){


    return this.http.get(this.url+this.CONTACTUS);
  }

  bankaccount(){


    return this.http.get(this.url+this.BANK_ACCOUNTS);
  }


}
