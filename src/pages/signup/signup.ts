import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { StudenttabsPage } from '../studenttabs/studenttabs';
import {User} from '../../model/UserModel'
import {CommonServerStaticsProvider} from '../../providers/common-server-statics/common-server-statics'
import { AuthProvider } from '../../providers/auth/auth';
import { Statics } from '../../model/StaticsModel';
import { CommonServicesProvider } from '../../providers/common-services/common-services';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  grades:object=[];
  years:object=[];
  image:string='';
name
phone
password
type
password_confirm
email
grade
year
  constructor(
    private user:User,
    private common:CommonServicesProvider,
    public navCtrl: NavController,
    public navParams: NavParams,
    public statics:Statics,
    public commonServerStaticsProvider:CommonServerStaticsProvider,
    private auth:AuthProvider
    ) {
  
    }

  ionViewWillEnter(){
this.assignGradesAndYearslists();
  }
  home(){
let user={
  'name':this.name,
  'phone':this.phone,
  'password':this.password,
  'password_confirm':this.password_confirm,
  'mail':this.email,
  'type':this.statics.USER_TYPE,
  'grade':this.grade,
  'year':this.year,
  'image':this.image
  }
  

  console.log(user)
  this.user.setuser(user);
// return;

    this.auth.signUp().subscribe(res=>{

    },(e)=>{
      console.log(e)
    });
    // this.navCtrl.push(StudenttabsPage);
  }


assignGradesAndYearslists(){
  this.grades=[]
  this.years=[]
  this.commonServerStaticsProvider.getGrades().subscribe(grades=>{
        this.grades=grades

    console.log(grades)
  },(e)=>{
console.log(e)
  });
  this.commonServerStaticsProvider.getYear().subscribe(years=>{
    this.years=years;
   console.log(years)
 },(e)=>{
console.log(e)
 });
}
getSelectedYear(year){
  this.year=year['year_id']
console.log(year)

}
getSelectedGrade(grade){
  this.grade=grade['grade_id']
  console.log(this.grade)
  
  }
  profileImage(){
    let self=this;

    this.common.presentActionSheet(this.statics.USE_GALARY,this.statics.USE_GALARY).then(cameraType=>{
      self.common.camPic(cameraType).then(encodedImage=>{
        self.image=encodedImage

})
    })
  }
}
