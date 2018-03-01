import { Component, Input } from '@angular/core';
import { MenuController,Events , NavController } from 'ionic-angular';


/**
 * Generated class for the HeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'header',
  templateUrl: 'header.html'
})
export class HeaderComponent {
msgs
  @Input() name: string;
  constructor(public events:Events,public navCtrl: NavController,public menuCtrl: MenuController) {
    console.log('Hello HeaderComponent Component');
   let self=this
   this.msgs=0
    this.events.subscribe('msg',res=>{
      self.msgs=1+self.msgs
      console.log(self.msgs)

    })
  }
  resetMsg(){
this.msgs=0
  }
  openMenu() {
    this.menuCtrl.toggle();
  }

}
