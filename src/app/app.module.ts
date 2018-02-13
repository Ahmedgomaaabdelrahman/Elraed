import { TestresultPage } from './../pages/testresult/testresult';
import { StudenttestPage } from './../pages/studenttest/studenttest';
import { BankaccountsPage } from './../pages/bankaccounts/bankaccounts';
import { ContactusPage } from './../pages/contactus/contactus';
import { SubjcontentPage } from './../pages/subjcontent/subjcontent';
import { StudenttabsPage } from './../pages/studenttabs/studenttabs';
import { SignupPage } from './../pages/signup/signup';
import { LoginPage } from './../pages/login/login';
import { HeaderComponent } from './../components/header/header';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, Nav } from 'ionic-angular';
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
import { AddlessonsPage } from '../pages/addlessons/addlessons';
import { AddtestsPage } from '../pages/addtests/addtests';
import { EditaccountPage } from '../pages/editaccount/editaccount';
import { LessonshowPage } from '../pages/lessonshow/lessonshow';
import { TeacherquesPage } from '../pages/teacherques/teacherques';
import { TeacherweeksPage } from '../pages/teacherweeks/teacherweeks';
import { TestquestionsPage } from '../pages/testquestions/testquestions';

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
    SubjcontentPage,
    ContactusPage,
    BankaccountsPage,
    StudenttestPage,
    TestresultPage,
    AddlessonsPage,
    AddtestsPage,
    EditaccountPage,
    LessonshowPage,
    TeacherquesPage,
    TeacherweeksPage,
    TestquestionsPage
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
    SubjcontentPage,
    ContactusPage,
    BankaccountsPage,
    StudenttestPage,
    TestresultPage,
    AddlessonsPage,
    AddtestsPage,
    EditaccountPage,
    LessonshowPage,
    TeacherquesPage,
    TeacherweeksPage,
    TestquestionsPage
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
