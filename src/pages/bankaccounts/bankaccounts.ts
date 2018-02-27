import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {StaticsProvider} from "../../providers/statics/statics";

@Component({
  selector: 'page-bankaccounts',
  templateUrl: 'bankaccounts.html',
})
export class BankaccountsPage {
  account_no
  bank_name
  bankaccount_id
  imge
  owner_name
  swift_code
  constructor(public statics:StaticsProvider,public navCtrl: NavController, public navParams: NavParams) {
  }
  info
  ionViewDidLoad() {
    this.statics.bankaccount().subscribe(res=>{
      // console.log(res)
      this.info=res
      console.log(this.info)

      // this. bank_name=this.info[0].bank_name
      // this. imge=this.info[0].imge
      // this. owner_name=this.info[0].owner_name
      // this. swift_code=this.info[0].swift_code


    })
    console.log('ionViewDidLoad ContactusPage');
  }

}
