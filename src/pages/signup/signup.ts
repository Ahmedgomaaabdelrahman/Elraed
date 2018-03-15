import { TeachertabsPage } from './../teachertabs/teachertabs';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { NavController, NavParams,MenuController} from 'ionic-angular';
import { StudenttabsPage } from '../studenttabs/studenttabs';
import {User} from '../../model/UserModel'
import {CommonServerStaticsProvider} from '../../providers/common-server-statics/common-server-statics'
import { AuthProvider } from '../../providers/auth/auth';
import { Statics } from '../../model/StaticsModel';
import { CommonServicesProvider } from '../../providers/common-services/common-services';
import {FcmPushProvider} from "../../providers/fcm-push/fcm-push";

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  teacherFlag:boolean
  grades:object=[];
  years:object=[];
  image:string='';
  displayImage:string=''
  // profileimage:string='';
name
phone
password
type
password_confirm
email
grade
year
  constructor(
    public menuCtrl: MenuController,
    private user:User,
    private common:CommonServicesProvider,
    public navCtrl: NavController,
    public navParams: NavParams,
    public statics:Statics,public fcmProvider:FcmPushProvider,
    public commonServerStaticsProvider:CommonServerStaticsProvider,
    private auth:AuthProvider
    ) {

  console.log(this.navParams.get('type'))
this.type=this.navParams.get('type');
  this.user.USER_TYPE=this.type
    }

  ionViewWillEnter(){
    if(this.navParams.get('type')==1){
      this.teacherFlag=false

    }else{
      this.teacherFlag=true

    }
    document.getElementById("passwordCheck").style.display = "none"

this.assignGradesAndYearslists();
  }
  checkPasswords():boolean{

return this.password==this.password_confirm;
  }
  home(){
    document.getElementById("passwordCheck").style.display = "none"
console.log(this.checkPasswords())
    if(this.checkPasswords()) {
      this.fcmProvider.getDviceToken().then(token=>{

      let user = {
        'name': this.name,
        'phone': this.phone,
        'token_id':token,
        'password': this.password,
        'password_confirm': this.password_confirm,
        'mail': this.email,
        'type': this.navParams.get('type'),
        'grade': this.grade,
        'year': this.year,
        'image': this.displayImage
      }


      console.log(user)
      this.user.setuser(user);
      this.user.USER_TYPE = this.navParams.get('type')
// return;
      this.common.presentLoadingDefault()
      this.auth.signUp().subscribe(res => {
        this.afterSignUp(res)
      }, (e) => {
        this.common.loadDismess();

        console.log('error', e)
      });


    })
    // this.navCtrl.push(StudenttabsPage);
  }else{
    document.getElementById("passwordCheck").style.display = "block"
  }
  }

afterSignUp(res){
  console.log('error',res['error'])
  if(res['error']!=undefined){
    this.password=this.password_confirm=null
    this.common.loadDismess();

    this.common.presentToast(res['error'])

  return;
  }
  this.user.setuser(res)
  this.common.loadDismess();
  this.auth.login(res.phone,res.password)
  res.password=this.password

  this.common.storeValue(this.statics.CURRENT_USER,res).then(()=>{

    if(res.type==2){
    this.navCtrl.setRoot(TeachertabsPage)
      this.menuCtrl.enable(true)
    }else{
      this.navCtrl.setRoot(StudenttabsPage)
      this.menuCtrl.enable(true)

    }

  })
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
yearsArr
getSelectedGrade(grade){
  this.grade=grade['grade_id']
  console.log(this.grade)
this.auth.getYears(grade['grade_id']).subscribe(res=>{
console.log(res)
this.yearsArr=res

},e=>{
  console.log(e)
})
  }
  profileImage(){
    let self=this;


    this.common.presentActionSheet(this.statics.USE_CAMERA,this.statics.USE_GALARY).then(cameraType=>{
      self.common.camPic(cameraType).then(encodedImage=>{
        self.image=encodedImage
self.displayImage='data:image/jpeg;base64,'+self.image
})
    })
  }
}
