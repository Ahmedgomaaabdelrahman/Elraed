import { SubjcontentPage } from './../pages/subjcontent/subjcontent';
import { StudenttabsPage } from './../pages/studenttabs/studenttabs';
import { SignupPage } from './../pages/signup/signup';
import { LoginPage } from './../pages/login/login';
import { HeaderComponent } from './../components/header/header';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {HttpClient, HttpClientModule} from "@angular/common/http";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { StudentanswerPage } from '../pages/studentanswer/studentanswer';
import { StudentaskPage } from '../pages/studentask/studentask';
import { StudentsubsPage } from '../pages/studentsubs/studentsubs';
import { TeachertabsPage } from '../pages/teachertabs/teachertabs';
import { AuthProvider } from '../providers/auth/auth';
import { CommonServerStaticsProvider } from '../providers/common-server-statics/common-server-statics';
import { User } from '../model/UserModel';
import { Statics } from '../model/StaticsModel';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HeaderComponent,
    LoginPage,
    SignupPage,
    StudenttabsPage,
    StudentanswerPage,
    StudentaskPage,
    StudentsubsPage,
    TeachertabsPage,
    SubjcontentPage
  ],
  imports: [
  BrowserModule,HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HeaderComponent,
    LoginPage,
    SignupPage,
    StudenttabsPage,
    StudenttabsPage,
    StudentanswerPage,
    StudentaskPage,
    StudentsubsPage,
    TeachertabsPage,
    SubjcontentPage
  ],
  providers: [
    StatusBar,User,Statics,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    CommonServerStaticsProvider
  ]
})
export class AppModule {}
