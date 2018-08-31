import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RedditDataProvider } from '../../providers/reddit-data/reddit-data';
import X2JS from 'x2js';
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  singer:any;
  imgStyle:any;
  urlImage:string;
  songs:any[];
  str:string;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public redditService: RedditDataProvider) {
                /**
                 * navParams возвращает объект со свойствами data и get;
                 * В свойстве дата хранятся данные о певце которые мы отправили
                 * с singer.ts
                 */
    this.singer = this.navParams.data;

    this.str = this.singer.logo_src;

    this.imgStyle ={backgroundImage:'url('+this.str+')'};
    console.log(this.singer.logo_src);
    this.urlImage = 'url(' + this.singer.logo_src + ')';
    this.redditService.getSongs(this.singer.id).subscribe((data)=>{var x2js = new X2JS();
      var parser = new DOMParser();
      var arrOfSongs = [];
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
        arrOfSongs.push(x2js.xml2js(xmlText));
      }
      /*var xmlText = new XMLSerializer().serializeToString(collection[0]);
      console.log(xmlText);
      var document = x2js.xml2js(xmlText);*/
      this.songs = arrOfSongs;
      console.log(this.songs);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
