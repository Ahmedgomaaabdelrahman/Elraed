import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MaxImagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-max-image',
  templateUrl: 'max-image.html',
})
export class MaxImagePage {
image
  constructor(public navCtrl: NavController, public navParams: NavParams) {
this.image=this.navParams.get('img')  
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad MaxImagePage');
  }

}
