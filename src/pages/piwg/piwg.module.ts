import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PiwgPage } from './piwg';

@NgModule({
  declarations: [
    PiwgPage,
  ],
  imports: [
    IonicPageModule.forChild(PiwgPage),
  ],
})
export class PiwgPageModule {}
