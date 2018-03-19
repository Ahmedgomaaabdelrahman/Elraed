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
  selector: 'page-studentask',
  templateUrl: 'studentask.html',
})
export class StudentaskPage {
  spinnerFlag:boolean
  password
  image:string='';
  audioRecord:string=''
  audioSend:any
  video:string=''
questionText:string=''
  phone
  subs:object;
  subject_id
grade_id:any=''
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
    this.spinnerFlag=false
    this.grade=this.user.getuser().grade
    this.subs=[]
    console.log(this.user.getuser().grade_id)
   this.supjectsProvider.getSubject(this.user.USER.grade_id,this.user.USER.year_id).subscribe(subs=>{
     console.log('subss',subs)
     this.subs=subs
   })
  }
  record(){
    let self=this
    this.common.media().then(audioFile=>{

console.log(audioFile)
self.audioRecord=audioFile[0].fullPath
// this.common.uploadFile(audioFile[0].localURI)
// this.common.uploadFile(audioFile[0].localURL,{
//   'student_id':this.user.getuser().user_id,
//   'grade_id':this.grade_id,
//   'year_id':this.user.getuser().year_id,
//   'subject_id':this.subject_id,
//   'question':this.questionText,
//   'image_url':this.image,
//
//   'audio_url': this.video
//
// })



this.common.uploadToFirebase(audioFile[0].localURL)
// this.common.uploadToFirebase(audioFile[0].fullPath)

//       this.common.toBase64(audioFile[0].fullPath).then(base64=>{
//
//   var str = base64;
//   var res = str.split("data:image/*;charset=utf-8;base64,");
//   // var str = res;
// self.audioSend=res;
// }).catch(e=>{
//   console.log(e)
//   this.common.presentToast('خطأ')
// })

}).catch(e=>{

      console.log(e)
    })
  }
  sendImage:string=''

  addImage(){
    let self=this;

    this.common.presentActionSheet(this.statics.USE_CAMERA,this.statics.USE_GALARY).then(cameraType=>{
      self.common.camPic(cameraType).then(encodedImage=>{

console.log(encodedImage)
self.image='data:image/jpeg;base64,'+encodedImage
})
    })
  }
 ask(){
  var question={
'student_id':this.user.getuser().user_id,
'grade_id':this.grade_id,
'year_id':this.user.getuser().year_id,
'subject_id':this.subject_id,
'question':this.questionText,
'image_url':this.image,

'audio_url': this.video

  }
  //  console.log('before send :: ',question)

  if(this.audioSend=='' ||this.audioSend==null||this.audioSend==undefined){
    question.audio_url=''
  }else{
 question.audio_url=this.audioSend[1]
  }

this.spinnerFlag=true

   console.log(question)
   this.askProvider.ask(question).subscribe(res=>{


    //  this.common.presentToast('تم')
    this.spinnerFlag=false
    this.questionText=''
    this.image=''
    this.audioRecord=''
    this.audioSend=''
    console.log('response : ',res)
 this.common.presentToast('تم الارسال')
      },e=>{
        this.common.presentToast('فشل الارسال')
    this.spinnerFlag=false

     console.log(e)
   })
 }
cleanImage(){
 this.image=''
    // this.audioRecord=''
    // this.audioSend=''
}
cleanVoice(){
  //  this.image=''
    this.audioRecord=''
    this.audioSend=''
}
// videoPath
//   serviceVideo(){
//     // this.show=false
//
//     let self=this
//     this.common.media().then(res=>{
//       console.log('video res ',res)
//       this.videoPath=res[0]['fullPath']
//       // this.common.toDataURL(res[0]['fullPath'])
//       this.common.toBase64(res[0]['fullPath']).then(base64=>{
//         var str = base64;
//         var res = str.split("data:image/*;charset=utf-8;base64,");
//         var res = base64
//         self.video=base64
// // alert(res)
//     console.log('res',base64)
//       }).catch(e=>{
//         console.log(e)
//         this.common.presentToast('خطأ')
//       })
//     }).catch(e=>{
//       console.log(e)
//       this.common.presentToast('خطأ')
//     })
//
//   }

//     gotFile(fileEntry) :Promise<any>{
//
//   let promise=new Promise((resolve,reject)=>{
//
//
//       fileEntry.file(function(file) {
//         var reader = new FileReader();
//         reader.onloadend = function(e) {
//
//           var content = this.result;
//
//           console.log( 'result',e)
//           console.log( 'result',this.result)
//           resolve( this.result)
//           // callback(content);
//         };
//         // The most important point, use the readAsDatURL Method from the file plugin
//         reader.readAsDataURL(file);
//         console.log('file',file)
//       });
//   })
// return promise;
// }
  ionViewWillLeave() {
this.navCtrl.setRoot(StudenttabsPage)
  }
}
