import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import xml2js from 'xml2js';

/*
  Generated class for the RedditDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RedditDataProvider {
  public xmlItems : any;
  constructor(public http: HttpClient) {
    console.log('Hello RedditDataProvider Provider');
  }
  /*getRemote(){
    this.http.get('https://www.reddit.com/r/gifs/top/.json?limit=105sort=hot')
    .map(res => JSON.parse(JSON.stringify(res))).subscribe(data => {
            console.log(data);
  });}*/
  getRemote(){
    this.http.get('https://xn--80aa0arl6a.xn--p1ai/frontend/web/api/v1/user/index?access-token=hUG8x1RrN2UhITlsdkOYW6WREdhOrn-LiIge-Xtx')
    .subscribe(data => {
            console.log(data);
  });}
  getLocal(){
    this.http.get('assets/data/reddit.php').subscribe(data => {
            console.log(data);
  });}
  getSongs(singer_id){
    let url = "https://райхан.рф/frontend/web/api/v1/musik/getmusik?access-token=hUG8x1RrN2UhITlsdkOYW6WREdhOrn-LiIge-Xtx&author_id=";
    url = url + singer_id; 
    return this.http.get('/assets/data/songs.xml',
    {
      headers: new HttpHeaders()
      .set('Content-Type', 'text/xml')
      .append('Access-Control-Allow-Methods', 'GET')
      .append('Access-Control-Allow-Origin', '*')
      .append('Access-Control-Allow-Headers', "Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method"),
      responseType:'text'
    });
  }
  getXml(){
    return this.http.get('/assets/data/singers.xml',
    {
      headers: new HttpHeaders()
      .set('Content-Type', 'text/xml')
      .append('Access-Control-Allow-Methods', 'GET')
      .append('Access-Control-Allow-Origin', '*')
      .append('Access-Control-Allow-Headers', "Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method"),
      responseType:'text'
    });/*.subscribe((data)=>
    {
      console.log(data);
    });*/
 }
 parseXML(data)
   {
      return new Promise(resolve =>
      {
         var k,
             arr    = [],
             parser = new xml2js.Parser(
             {
                trim: true,
                explicitArray: true
             });

         parser.parseString(data, function (err, result)
         {
            var obj = result.singers;
            for(k in obj.publication)
            {
               var item = obj.publication[k];
               arr.push({hero:"Hook"
               });
            }

            resolve(arr);
         });
      });
   }

}
/*this.http.get('/assets/data/comics.xml',
      {
        headers: new HttpHeaders()
        .set('Content-Type', 'text/xml')
        .append('Access-Control-Allow-Methods', 'GET')
        .append('Access-Control-Allow-Origin', '*')
        .append('Access-Control-Allow-Headers', "Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method"),
        responseType:'text'
      })*/