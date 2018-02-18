import { AskProvider } from '../../providers/ask/ask';
import { SelectingSubjectsProvider } from '../../providers/selecting-subjects/selecting-subjects';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { SubjcontentPage } from '../subjcontent/subjcontent';
import { TeachertabsPage } from '../teachertabs/teachertabs';
import { HomePage } from './../home/home';
import { StudenttabsPage } from '../studenttabs/studenttabs';
import {User} from '../../model/UserModel'
import {CommonServerStaticsProvider} from '../../providers/common-server-statics/common-server-statics'
import { AuthProvider } from '../../providers/auth/auth';
import { Statics } from '../../model/StaticsModel';
import { CommonServicesProvider } from '../../providers/common-services/common-services';


@Component({
  selector: 'page-studentanswer',
  templateUrl: 'studentanswer.html',
})
export class StudentanswerPage {
  password
  user_id:any;
  image:string='';
  audioRecord:string=''
  audioSend:string=''
questionText:string=''
  phone
  questions:object;
  subject_id:any=''
grade_id:any=''
sendImage:string=''

  grade:any=''
/////////////////////////////////////
// 'student_id':, =>int
// 'grade_id':,   =>int

// 'subject_id':, =>int
// 'question':, =>text , string
// 'image_url':,=>string , base64
// 'audio_url': =>string , base64

////////////////////////////////////
  constructor(

    private user:User,
    private common:CommonServicesProvider,
    public navCtrl: NavController,
    public navParams: NavParams,
    public statics:Statics,
    
    public askProvider:AskProvider,
    public supjectsProvider:SelectingSubjectsProvider,
    public commonServerStaticsProvider:CommonServerStaticsProvider,
    private auth:AuthProvider) {
  }
  selectSubject(subj){
    console.log(subj)
    this.subject_id=subj.subject_id
    this.grade_id=subj.grade_id

  }
  ionViewWillEnter(){
    this.user_id=this.user.USER.user_id
    console.log()
   this.askProvider.getmyquestions().subscribe(questions=>{
     console.log('subss',questions)
     this.questions=questions
   })
  }

 
}
