import {Component} from '@angular/core';
import {StaticsProvider} from '../../providers/statics/statics'

import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-contactus',
  templateUrl: 'contactus.html',
})
export class ContactusPage {
  address
  created_at
  email
  phone_whatsapp
  updated_at
  website
  constructor(public statics:StaticsProvider,public navCtrl: NavController, public navParams: NavParams) {
  }
info
  ionViewDidLoad() {
    this.statics.contactUsInfo().subscribe(res=>{
      console.log(res)
    this.info=res
      console.log(this.info)
     this. address=this.info[0].address
      this. created_at=this.info[0].created_at
      this. email=this.info[0].email
      this. phone_whatsapp=this.info[0].phone_whatsapp
      this.updated_at=this.info[0].updated_at
      this. website=this.info[0].website
    })
    console.log('ionViewDidLoad ContactusPage');
  }

}
