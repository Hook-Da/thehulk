import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SingerPage } from './singer';

@NgModule({
  declarations: [
    SingerPage,
  ],
  imports: [
    IonicPageModule.forChild(SingerPage),
  ],
})
export class SingerPageModule {}
