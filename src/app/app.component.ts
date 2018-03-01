import { AboutusPage } from './../pages/aboutus/aboutus';
import { TermsPage } from './../pages/terms/terms';
import { ContactusPage } from './../pages/contactus/contactus';
import { BankaccountsPage } from './../pages/bankaccounts/bankaccounts';
import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { EditaccountPage } from '../pages/editaccount/editaccount';
import {User} from '../model/UserModel'
import {FcmPushProvider} from "../providers/fcm-push/fcm-push";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;

  @ViewChild(Nav) nav: Nav;
  constructor(
    private fcm:FcmPushProvider,
    private user:User,
    public menuCtrl:MenuController,platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
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
  }
}

