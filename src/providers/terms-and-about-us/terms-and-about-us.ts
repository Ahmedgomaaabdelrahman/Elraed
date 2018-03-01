import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import {User} from '../../model/UserModel'
import { User } from './../../model/UserModel';
import { Statics } from './../../model/StaticsModel';
/*
  Generated class for the TermsAndAboutUsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TermsAndAboutUsProvider {
  private url
  public readonly ABOUT_POLICY:string='aboutandpolicy'
  public readonly GET_YEARS_ASSIGNED_TO_GRADE :string= 'getyearsforteacher'
  public readonly GET_ANSWERS :string= 'getteacherquetison'

    constructor(
      public http: HttpClient,
      private usermodel:User ,
      private statics:Statics
    ) {
  
    this.url=this.statics.getURL();
    
  }
   
 policyAndTerms(){

    return this.http.get(this.url+this.ABOUT_POLICY);
  }  
    

}
