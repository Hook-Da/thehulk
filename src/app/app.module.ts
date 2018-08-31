import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';/**edited Storage series import {Storage} from '@ionic/storage'; removed*/

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SecondPage } from '../pages/second/second';
import { ThirdPage } from '../pages/third/third';
import { StorePage } from '../pages/store/store';
import { RedditDataProvider } from '../providers/reddit-data/reddit-data';
import { HttpClientModule } from '@angular/common/http';
import { ReorderPage } from '../pages/reorder/reorder';
import { PiwgPage } from '../pages/piwg/piwg';
import {FcompComponent} from '../components/fcomp/fcomp';
import { SingerPage} from '../pages/singer/singer';
import { ProfilePage} from '../pages/profile/profile';
import { ProgressBarComponent } from '../components/progress-bar/progress-bar';
import { RoundProgressComponent } from 'angular-svg-round-progressbar';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SecondPage,
    ThirdPage,
    StorePage,
    ReorderPage,
    PiwgPage,
    FcompComponent,
    SingerPage,
    ProfilePage,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,/**Working with observables */
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),/**edited Storage series */
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SecondPage,
    ThirdPage,
    StorePage,
    ReorderPage,
    PiwgPage,
    SingerPage,
    ProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RedditDataProvider
  ]
})
export class AppModule {}
