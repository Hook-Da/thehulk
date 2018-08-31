import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SecondPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-second',
  templateUrl: 'second.html',
})
export class SecondPage {
  hulks:any;
  humans:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.hulks = [
      {name:"Narin",lastName:"Davlet",power:1023,human:true},
      {name:"Xenos",lastName:"Davlet",power:2345,human:true},
      {name:"Hook",lastName:"Banner",power:3231,human:false},
      {name:"Marsh",lastName:"Law",power:2445,human:true},  
      {name:"Hulk",lastName:"Green",power:2245,human:false}
    ];
    this.humans = JSON.parse(JSON.stringify(this.hulks));
  }
  resetData(){
    this.humans = JSON.parse(JSON.stringify(this.hulks));
  }
  filterData(){
    this.humans = this.humans.filter((item)=>item.power>2300);
  }
  mapData(){
    this.humans.forEach((item)=>{item.name = item.name.toUpperCase();});
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SecondPage');
  }

}
