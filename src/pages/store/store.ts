import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import {Storage} from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-store',
  templateUrl: 'store.html',
})
export class StorePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController,
  public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StorePage');
  }
  setData(){
    this.storage.set('myStore','Hulk smash');
  }
  getData(){
    this.storage.get('myStore').then((data)=>{console.log(data);});
  }
  closeStore(){
    this.viewCtrl.dismiss();
  }
}
