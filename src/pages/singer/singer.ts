import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import X2JS from 'x2js';
import { RedditDataProvider } from '../../providers/reddit-data/reddit-data';
import { ProfilePage } from '../profile/profile';

/**
 * Generated class for the SingerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-singer',
  templateUrl: 'singer.html',
})
export class SingerPage {
  artists:any[];
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public redditService: RedditDataProvider) {
  }
  ionViewWillLoad(){
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
      /*var xmlText = new XMLSerializer().serializeToString(collection[0]);
      console.log(xmlText);
      var document = x2js.xml2js(xmlText);*/
      this.artists = arrOfSingers;
    });
    console.log('ionViewWillLoad SingerPage');
  }
  ionViewDidLoad() {
    //console.log(this.navParams.data);
  }
  loadSinger(singer){
    //console.log(x);
    this.navCtrl.push(ProfilePage,singer);
  }

}
