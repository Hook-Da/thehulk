import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import {enableProdMode} from '@angular/core';
import {SecondPage} from '../second/second';
import {ThirdPage} from '../third/third';
import {StorePage} from '../store/store';
import {PiwgPage} from '../piwg/piwg';
import { RedditDataProvider } from '../../providers/reddit-data/reddit-data';
import {ReorderPage} from '../reorder/reorder';
import xml2js from 'xml2js';
import X2JS from 'x2js';
import { SingerPage } from '../singer/singer';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public hulks = [];
  public username = '';
  constructor(public navCtrl: NavController, 
              public modalCtrl: ModalController,
              public redditService: RedditDataProvider) {
    this.hulks = [
      {name:"Hulk",lastName:"Banner",power:"1000",hide:true},
      {name:"Sentry",lastName:"Lee",power:"9000",hide:true},
      {name:"Hook",lastName:"Law",power:"10000",hide:false},
    ];
  }
  ionViewDidLoad(){
    this.redditService.getXml().subscribe((data)=>{
      var x2js = new X2JS();
      var parser = new DOMParser();
      var arrOfSingers = [];
      var xmlFromDataString = parser.parseFromString(data,"text/xml");
      /**
       * Воссоздаем xml из строки которую получили с сервера
       * */            
      let collection = xmlFromDataString.getElementsByTagName("item");
      /**
       * Собираем коллекцию из item тегов
       */
      var xmlText = '';
      for(let i = 0; i < collection.length; i++){
        xmlText = new XMLSerializer().serializeToString(collection[i]);
        arrOfSingers.push(x2js.xml2js(xmlText));
      }
      this.hulks = arrOfSingers;
      /*var xmlText = new XMLSerializer().serializeToString(collection[0]);
      console.log(xmlText);
      var document = x2js.xml2js(xmlText);*/
      //console.log(arrOfSingers[0].item.id);
    });
  }
  onClick(x){
    console.log(x);
  }
  secPage(){
    this.navCtrl.push(SecondPage);
  }
  third(){
    this.navCtrl.push(ThirdPage);
  }
  store(){
    let modal = this.modalCtrl.create(StorePage);
    modal.present();
  }
  reOrder(){
    let modal = this.modalCtrl.create(ReorderPage);
    modal.present();
  }
  piwg(){
    this.navCtrl.push(PiwgPage);
  }
  singer(){
    this.navCtrl.push(SingerPage);
  }

}
