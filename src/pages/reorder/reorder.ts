import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, reorderArray } from 'ionic-angular';

/**
 * Generated class for the ReorderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reorder',
  templateUrl: 'reorder.html',
})
export class ReorderPage {
  animals:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.animals = ['Elephant','Racoon','Tiger','Bear','Lion'];
  }
  reorderItem(indexes){
    this.animals = reorderArray(this.animals,indexes);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ReorderPage');
  }
  closeReorder(){
    this.viewCtrl.dismiss();
  }

}
