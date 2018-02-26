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
  constructor(
    public http: HttpClient,
    private usermodel:User ,
    private statics:Statics
  ) {

    this.url=this.statics.getURL();

  }

  gettimeline(subject_id,grade_id,year_id){


    return this.http.get(this.url+this.GET_TIMELINE+'/'+subject_id+'/'+grade_id+'/'+year_id);
  }

}
