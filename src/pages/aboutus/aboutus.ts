import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TermsAndAboutUsProvider } from './../../providers/terms-and-about-us/terms-and-about-us';


@Component({
  selector: 'page-aboutus',
  templateUrl: 'aboutus.html',
})
export class AboutusPage {
  about
  
  
  constructor(public termsAndAboutProvider:TermsAndAboutUsProvider,public navCtrl: NavController, public navParams: NavParams) {
  }
info
  ionViewDidLoad() {
    this.termsAndAboutProvider.policyAndTerms().subscribe(res=>{
      console.log(res)
    this.info=res
      console.log(this.info)
     this. about=this.info[0].policy
    
    })
    console.log('ionViewDidLoad ContactusPage');
  }

}