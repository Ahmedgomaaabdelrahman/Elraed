import { AboutusPage } from './../pages/aboutus/aboutus';
import { TermsPage } from './../pages/terms/terms';
import { ContactusPage } from './../pages/contactus/contactus';
import { BankaccountsPage } from './../pages/bankaccounts/bankaccounts';
import { Component, ViewChild } from '@angular/core';
import {Platform, MenuController, Nav, NavController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { EditaccountPage } from '../pages/editaccount/editaccount';
import {User} from '../model/UserModel'
import {FcmPushProvider} from "../providers/fcm-push/fcm-push";
import {CommonServicesProvider} from "../providers/common-services/common-services";
import {Statics} from "../model/StaticsModel";
import {CommonServerStaticsProvider} from "../providers/common-server-statics/common-server-statics";
import {AuthProvider} from "../providers/auth/auth";
import {StudenttabsPage} from "../pages/studenttabs/studenttabs";
import {TeachertabsPage} from "../pages/teachertabs/teachertabs";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any ;

  @ViewChild(Nav) nav: Nav;
  constructor(
    public menuCtrl: MenuController,
    private user:User,
    private common:CommonServicesProvider,
    // public navCtrl: NavController,
    // public navParams: NavParams,
    public statics:Statics,
    public commonServerStaticsProvider:CommonServerStaticsProvider,
    private auth:AuthProvider,
    private fcm:FcmPushProvider,
    // private user:User,
    // public menuCtrl:MenuController,
    platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {

      this.common.getStoredValue(this.statics.CURRENT_USER).then(user=>{
        if(user==null){
          this. logIn()
this.rootPage=LoginPage;
        }else{
          this. logIn()

        }
      })

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();



      this.fcm.onTokenRecived(this.nav).then((res)=>{
        if(res){
          console.log(res)
          // this.nav.setRoot(MessagesPage)
          alert('background')
        }else{
          console.log(res)
          // alert('forground')

        }
      });
      this.fcm.onTokenIdRefresh();

    });
  }
terms(){
  this.menuCtrl.close();
  this.nav.push(TermsPage);
}
aboutApp(){
  this.menuCtrl.close();
  this.nav.push(AboutusPage);
}
  closeMenu(){
    this.menuCtrl.close();
  }
  openBank(){
    this.menuCtrl.close();
    this.nav.push(BankaccountsPage);
  }
  opencontanct(){
    this.menuCtrl.close();
    this.nav.push(ContactusPage);
  }
  edit(){
    this.menuCtrl.close();
    this.nav.push(EditaccountPage);
  }
  exit(){
    this.menuCtrl.close()
    this.nav.setRoot(LoginPage)

    this.common.removeStoredKey(this.statics.CURRENT_USER)
  }


  logIn(){
    let self=this
    //////////////////////
    // this.navCtrl.setRoot(StudenttabsPage)
    // this.navCtrl.setRoot(TeachertabsPage)
    // this.menuCtrl.enable(true)
    // this.common.loadDismess()

    /////////////////////////////
    // this.common.presentLoadingDefault()

    this.common.getStoredValue(this.statics.CURRENT_USER).then(user=>{
      self.user.setuser(user)

      // this.user.setuser()
      // this.auth.login(user.phone,user.password).then(res=>{
        console.log(user)
        // this.common.loadDismess()
        self.afterSignIn(user)
      // },(e)=>{

        // console.log(e)
        self.common.loadDismess()
      //
      // })
    })


  }
  afterSignIn(res){
    let self=this
    // console.log('error',res['error'])
    // if(res['error']!=undefined &&res['error']!=null){
    //   // this.password=this.password_confirm=null
    //   self.common.loadDismess();
    //
    //   self.common.presentToast(res['error'])
    //
    //   return;
    // }
    // self.user.setuser(res)


    // self.common.loadDismess();
    // self.common.storeValue(this.statics.CURRENT_USER,res).then(()=>{
      console.log(res.type)
      if(res.type=='1'){

        // self.nav.setRoot(StudenttabsPage)
        self.menuCtrl.enable(true)
        self.rootPage=StudenttabsPage

      }else if(res.type=='2'){
        self.menuCtrl.enable(true)
self.rootPage=TeachertabsPage
        // self.nav.setRoot(TeachertabsPage)
      }else{
        self.menuCtrl.enable(false)

        self.nav.setRoot(LoginPage)
      }

    // })
  }
  goHomePage(){
    if(this.user.USER.type=='1'){
      this.menuCtrl.close();

      this.nav.setRoot(StudenttabsPage)

    }else if(this.user.USER.type=='2'){
      this.menuCtrl.close();

      this.nav.setRoot(TeachertabsPage)
    }
  }
}

