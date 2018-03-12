import { MaxImagePage } from './../max-image/max-image';
import { User } from './../../model/UserModel';
import { CommonServicesProvider } from './../../providers/common-services/common-services';
import { CommonServerStaticsProvider } from './../../providers/common-server-statics/common-server-statics';
import { AnswersProvider } from './../../providers/answers/answers';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Statics } from '../../model/StaticsModel';

@Component({
  selector: 'page-teacherques',
  templateUrl: 'teacherques.html',
})
export class TeacherquesPage {
  questionText:any
audioAnswer:any;
imageAnswer:any;
reportBlockes:any
reportStudent:any;
  year_id=''
  grade_id=''
  subject_id=''
  yearsArr
  gradeArr
  subjectsArr
  questionsArr
  constructor(
    public statics:Statics,
public user:User,
    public commonStatics:CommonServerStaticsProvider,
    public common:CommonServicesProvider,
    public answer:AnswersProvider,public navCtrl: NavController, public navParams: NavParams
  
  
  ) {
  }

  ionViewDidLoad() {
    this.reportBlockes=[]
this.reportStudent=[]
    console.log('ionViewDidLoad TeacherquesPage');
    this.commonStatics.getGrades().subscribe(grades=>{

      console.log(grades)
      this.gradeArr=grades
    })
  }
 reportBlockArray:any
  writeBlock(index){
  console.log(this.reportBlockArray[index])
  if(this.reportBlockArray[index]){
    this.reportBlockArray[index]=false
    
  }else{
    this.reportBlockArray[index]=true

  }
    //  if(document.getElementById('blockitem').style.display == 'block'){
  //   document.getElementById('blockitem').style.display = 'none'
  //  }
  //  else {
  //   document.getElementById('blockitem').style.display = 'block'
  //  }
  }
  reset(){
    this.year_id=''
    this.grade_id=''
    this.subject_id=''
  }
  getSelectedYear(year){
    this.year_id=year['year_id']
  console.log(year)
   this.answer.getSubjecsAssignedToYears( this.year_id).subscribe(res=>{
      console.log(res)
this.subjectsArr=res
    })
    this.getQuestions()

  }
  getSelectedGrade(grade){
    this.year_id=''
    this.grade_id=''
    this.subject_id=''
    console.log(grade)
    this.grade_id=grade['grade_id']
    this.answer.getYearsAssignedToGrade( this.grade_id).subscribe(res=>{
      console.log(res)
this.yearsArr=res
    })
    console.log(this.grade_id)
    this.getQuestions()

    }
    getSelectedSubject(subject){
      this.subject_id=subject['subject_id']
      this.getQuestions()
      console.log(this.subject_id)
      
    }
    imageMax(image){
this.navCtrl.push(MaxImagePage,{'img':image})
    }
    getQuestions(){
      console.log(this.grade_id,this.subject_id,this.year_id)
      this.answer.questions(this.grade_id,this.subject_id,this.year_id).subscribe(questions=>{
console.log(questions['length'])
this.questionText=[]
this.audioAnswer=[];
this.imageAnswer=[];
this.reportBlockArray=[];
for(let i=0;i<questions['length'];i++){
this.questionText.push('')
this.audioAnswer.push('')
this.imageAnswer.push('')
this.reportBlockArray.push(false)

}
this.questionsArr=questions
      },err=>{

      })
    }
    answerAQuestion(question,textAnswer,index){

console.log(question.quetison_id,this.audioAnswer[index],this.imageAnswer[index])
this.answer.answerQuestion(question.quetison_id,this.audioAnswer[index],this.imageAnswer[index],textAnswer).subscribe(res=>{
  console.log(res)
  this.common.presentToast('تم الارسال','اغلاق')
},e=>{
  console.log(e)
  this.common.presentToast(' خطأ ! لم يتم الارسال','اغلاق')

})
    }
    record(index){
      let self=this
      this.common.media().then(audioFile=>{
  console.log(audioFile[0].fullPath)
  // self.audioRecord=audioFile[0].fullPath
  
  this.common.toBase64(audioFile[0].fullPath).then(base64=>{
    var str = base64;
    var res = str.split("data:image/*;charset=utf-8;base64,");
    // var str = res;
  self.audioAnswer[index]=res[1];
  }).catch(e=>{
    console.log(e)
    this.common.presentToast('خطأ')
  })
  
  }).catch(e=>{
  
        console.log(e)
      })
    }
    addImage(index){
      let self=this;
  
      this.common.presentActionSheet(this.statics.USE_CAMERA,this.statics.USE_GALARY).then(cameraType=>{
        self.common.camPic(cameraType).then(encodedImage=>{
  
  console.log(encodedImage)
          self.imageAnswer[index]='data:image/jpeg;base64,'+encodedImage
  
  })
      })
    }
    report(question,index){

      // console.log(question['user_id'],this.reportStudent[index],this.user.USER.user_id)
      this.answer.createReport(question['user_id'],this.reportStudent[index],this.user.USER.user_id)  .subscribe(res=>{
        // console.log(res)
this.common.presentToast('تم الارسال')
      },e=>{
        this.common.presentToast('فشل الارسال')

  // console.log(e)
})  

}
}
