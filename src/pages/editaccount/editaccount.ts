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
  selector: 'page-editaccount',
  templateUrl: 'editaccount.html',
})
export class EditaccountPage {

  grades:object=[];
  years:object=[];
  image
  displayImage
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

  // console.log(this.navParams.get('type'))
// this.type=this.navParams.get('type');
  // this.user.USER_TYPE=this.type
  console.log(this.user.getuser())
  let 
  saveduser=this.user.USER
  this.name=saveduser.name
  this.phone=saveduser.phone
  this.password=null
  this.image=saveduser.image
  this.password_confirm=null
  this.email=saveduser.mail
  // this.statics.USER_TYPE,
  this.grade=saveduser.grade
  this.year=saveduser.year_id
  this.image=saveduser.image




}

  ionViewWillEnter(){
    console.log('params',this.user.getuser())

    document.getElementById("passwordCheck").style.display = "none"

this.assignGradesAndYearslists();
  }
  checkPasswords():boolean{

return this.password==this.password_confirm;
  }
  home(){
    document.getElementById("passwordCheck").style.display = "none"
console.log(this.checkPasswords())
    if(this.checkPasswords()){


      var user={
  'name':this.name,
  'phone':this.phone,
  'password':this.password,
  'password_confirm':this.password_confirm,
  'mail':this.email,
  'type':this.user.USER_TYPE,
  'grade':this.grade,
  'year':this.year,
  'image':this.image
  }
  if(
    // (user.image===""||user.image===null)
  // &&
  (this.image===""||this.image===null)){
    delete user.image
   
    }


// return;
this.common.presentLoadingDefault()




console.log('params',this.user.getuser().user_id,user)




    this.auth.editUp(this.user.getuser().user_id,user).subscribe(res=>{
this.afterSignUp(res)
    },(e)=>{
      this.common.loadDismess();

      console.log('error',e)
    });
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
  this.common.loadDismess();
  this.common.storeValue(this.statics.CURRENT_USER,res).then(()=>{
    this.navCtrl.setRoot(StudenttabsPage)
  
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
getSelectedGrade(grade){
  this.grade=grade['grade_id']
  console.log(this.grade)
  
  }
  profileImage(){
    let self=this;

    this.common.presentActionSheet(this.statics.USE_CAMERA,this.statics.USE_GALARY).then(cameraType=>{
      self.common.camPic(cameraType).then(encodedImage=>{
        self.image=encodedImage
        

})
    })
  }
}
