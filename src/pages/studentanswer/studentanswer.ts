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
  user_id:any; 
  questions:object;

/////////////////////////////////////
answer=''
answer_id=''
audio_url=''
created_at=''
image_url=''
question_id=''
rate=0
rateStars:string[]
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
  selectSubject(question){
this.rateStars=[]
    this.askProvider.getanserquestion(question.quetison_id).subscribe(res=>{

   this.assignQuestion(res)
    })

  }
  assignQuestion(res){
    console.log(res)
    if(res.length!=0){
      this.answer=res[0].answer
      this.answer_id=res[0].answer_id
      this.audio_url=res[0].audio_url
      this.created_at=res[0].created_at
      this.image_url=res[0].image_url
      this.question_id=res[0].question_id
      this.rate=res[0].rate
    this.assignStars(res[0].rate)
    }else{
      this.answer=''
      this.answer_id=''
      this.audio_url=''
      this.created_at=''
      this.image_url=''
      this.question_id=''
      this.rate=0
     this.assignStarsEmpty()
      }
  }
  assignStarsEmpty(){
    for(let i=0;i<5;i++){
      this.rateStars.push('star-outline')}
  }
  assignStars(rateValue){
    this.rateStars=[]

    for(let i=0;i<5;i++){
if(rateValue>=i){
  this.rateStars.push('star')
}else{
      this.rateStars.push('star-outline')}
    }
  }
  ionViewWillEnter(){
    this.rateStars=[]
    this.user_id=this.user.USER.user_id
    console.log()
   this.askProvider.getmyquestions().subscribe(questions=>{

     console.log('subss',questions)
     this.questions=questions
   })
  }

  addRate(index){
    
  this.assignStars(index)
  }
}
