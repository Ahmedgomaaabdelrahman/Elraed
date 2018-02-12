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
import { Camera, CameraOptions } from '@ionic-native/camera';
import { CommonServicesProvider } from '../providers/common-services/common-services';
// import { Base64 } from '@ionic-native/base64';
import { ActionSheet, ActionSheetOptions } from '@ionic-native/action-sheet';
// import { SecureStorage, SecureStorageObject } from '@ionic-native/secure-storage';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
// import { File } from '@ionic-native/file';
import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions } from '@ionic-native/media-capture';
import { IonicStorageModule } from '@ionic/storage';


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
    BankaccountsPage
  ],
  imports: [
  BrowserModule,HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()

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
    BankaccountsPage
  ],
  providers: [
    StatusBar,User,Statics,FileTransfer, MediaCapture, 
    SplashScreen,Camera,ActionSheet,
    {provide: ErrorHandler, useClass: IonicErrorHandler},{ provide: IonicStorageModule, useClass: IonicStorageModule},
    AuthProvider,
    CommonServerStaticsProvider,
    CommonServicesProvider
  ]
})
export class AppModule {}
