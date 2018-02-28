import { AboutusPage } from './../aboutus/aboutus';
import { TermsPage } from './../terms/terms';
import { SignupPage } from './../signup/signup';
import { Component } from '@angular/core';
import { NavController, NavParams,MenuController } from 'ionic-angular';
import { TeachertabsPage } from '../teachertabs/teachertabs';

import { HomePage } from './../home/home';
import { StudenttabsPage } from '../studenttabs/studenttabs';
import {User} from '../../model/UserModel'
import {CommonServerStaticsProvider} from '../../providers/common-server-statics/common-server-statics'
import { AuthProvider } from '../../providers/auth/auth';
import { Statics } from '../../model/StaticsModel';
import { CommonServicesProvider } from '../../providers/common-services/common-services';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  password
  phone
  constructor(public menuCtrl: MenuController,

    private user:User,
    private common:CommonServicesProvider,
    public navCtrl: NavController,
    public navParams: NavParams,
    public statics:Statics,
    public commonServerStaticsProvider:CommonServerStaticsProvider,
    private auth:AuthProvider) {
    this.menuCtrl.enable(false)

  }

  ionViewWillEnter(){

  }

logIn(){
  this.common.presentLoadingDefault()
this.auth.login(this.phone,this.password).then(res=>{
  console.log(res)
  // this.common.loadDismess()
this.afterSignIn(res)
},(e)=>{console.log(e)


  this.common.loadDismess()

})

}
afterSignIn(res){
  console.log('error',res['error'])
  if(res['error']!=undefined){
    // this.password=this.password_confirm=null
    this.common.loadDismess();

    this.common.presentToast(res['error'])

  return;
  }
  this.user.setuser(res)


  this.common.loadDismess();
  this.common.storeValue(this.statics.CURRENT_USER,res).then(()=>{
    console.log(res.type)
    if(res.type=='1'){
    this.navCtrl.setRoot(StudenttabsPage)
      this.menuCtrl.enable(true)

    }else{
      this.menuCtrl.enable(true)

      this.navCtrl.setRoot(TeachertabsPage)
    }

  })
}
  signup(type){

    this.navCtrl.push(SignupPage,{'type':type});
  }
  gohome(){
      this.navCtrl.push(StudenttabsPage);
 }

  teacher(){
    this.navCtrl.push(TeachertabsPage);
  }

  goterms(){
    this.navCtrl.push(TermsPage);
  }
  goabout(){
    this.navCtrl.push(AboutusPage);
  }
}
