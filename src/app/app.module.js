var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { TermsPage } from './../pages/terms/terms';
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
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from "@angular/common/http";
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
import { Camera } from '@ionic-native/camera';
import { CommonServicesProvider } from '../providers/common-services/common-services';
import { Base64 } from '@ionic-native/base64';
import { ActionSheet } from '@ionic-native/action-sheet';
// import { SecureStorage, SecureStorageObject } from '@ionic-native/secure-storage';
// import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
// import { File } from '@ionic-native/file';
import { MediaCapture } from '@ionic-native/media-capture';
import { IonicStorageModule } from '@ionic/storage';
import { AskProvider } from '../providers/ask/ask';
import { SelectingSubjectsProvider } from '../providers/selecting-subjects/selecting-subjects';
import { AnswersProvider } from '../providers/answers/answers';
import { TestProvider } from '../providers/test/test';
import { Test } from '../model/TestModel';
import { StudintTimeLineProvider } from '../providers/studint-time-line/studint-time-line';
import { StaticsProvider } from '../providers/statics/statics';
import firebase from 'firebase/app';
import { FcmPushProvider } from '../providers/fcm-push/fcm-push';
import { FCM } from '@ionic-native/fcm';
import { AboutusPage } from '../pages/aboutus/aboutus';
import { TermsAndAboutUsProvider } from '../providers/terms-and-about-us/terms-and-about-us';
import { MaxImagePage } from './../pages/max-image/max-image';
import { File } from '@ionic-native/file';
var config = {
    apiKey: "AIzaSyC6tug21Wv-fbQ_jjtxV5PA-HU1VyUQEKc",
    authDomain: "muthber-ab8ab.firebaseapp.com",
    databaseURL: "https://muthber-ab8ab.firebaseio.com",
    projectId: "muthber-ab8ab",
    storageBucket: "muthber-ab8ab.appspot.com",
    messagingSenderId: "538382351960"
};
firebase.initializeApp(config);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                MyApp, MaxImagePage,
                HomePage,
                HeaderComponent,
                AboutusPage,
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
                TestquestionsPage,
                TermsPage
            ],
            imports: [
                BrowserModule, HttpClientModule,
                IonicModule.forRoot(MyApp),
                IonicStorageModule.forRoot()
            ],
            bootstrap: [IonicApp],
            entryComponents: [
                MyApp, MaxImagePage,
                HomePage,
                HeaderComponent,
                AboutusPage,
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
                TestquestionsPage,
                TermsPage
            ],
            providers: [
                StatusBar, User, Test, Statics,
                // FileTransfer,
                MediaCapture, File,
                SplashScreen, Camera, ActionSheet,
                { provide: ErrorHandler, useClass: IonicErrorHandler }, { provide: IonicStorageModule, useClass: IonicStorageModule },
                AuthProvider, Base64,
                CommonServerStaticsProvider,
                CommonServicesProvider,
                AskProvider,
                SelectingSubjectsProvider,
                AnswersProvider,
                TestProvider,
                StudintTimeLineProvider,
                StaticsProvider,
                FcmPushProvider, FCM,
                TermsAndAboutUsProvider
            ]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map