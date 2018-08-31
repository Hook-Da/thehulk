import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FcompComponent} from '../../components/fcomp/fcomp';

/**
 * Generated class for the PiwgPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-piwg',
  templateUrl: 'piwg.html',
})
export class PiwgPage {
  name:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.name = "Hook is a great SuperHero";
  }

  ionViewDidLoad() {/** Разобраться что за ionViewLoad() */
    console.log('ionViewDidLoad PiwgPage');
  }
  doSomething(ev){
    console.log(ev);
  }

}
