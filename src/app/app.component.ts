import { ContactusPage } from './../pages/contactus/contactus';
import { BankaccountsPage } from './../pages/bankaccounts/bankaccounts';
import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;
  
  @ViewChild(Nav) nav: Nav;
  constructor(public menuCtrl:MenuController,platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
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
}

