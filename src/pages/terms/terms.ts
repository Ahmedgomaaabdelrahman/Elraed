import { TermsAndAboutUsProvider } from './../../providers/terms-and-about-us/terms-and-about-us';
import {Component} from '@angular/core';

import { IonicPage, NavController, NavParams } from 'ionic-angular';
@Component({
  selector: 'page-terms',
  templateUrl: 'terms.html',
})
export class TermsPage {
  policy
  
  
  constructor(public termsAndAboutProvider:TermsAndAboutUsProvider,public navCtrl: NavController, public navParams: NavParams) {
  }
info
  ionViewDidLoad() {
    this.termsAndAboutProvider.policyAndTerms().subscribe(res=>{
      console.log(res)
    this.info=res
      console.log(this.info)
     this. policy=this.info[0].policy
    
    })
    console.log('ionViewDidLoad ContactusPage');
  }

}