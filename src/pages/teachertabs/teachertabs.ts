import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-teachertabs',
  templateUrl: 'teachertabs.html',
})
export class TeachertabsPage {
  // tab1Root: any = HomePage;
  // tab2Root: any = CategoryPage;
  // tab3Root: any = FavoritePage;
  // tab4Root: any = HistoryPage;
  // tab5Root: any = SettingsPage
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeachertabsPage');
  }

}
