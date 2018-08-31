import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfilePage } from './profile';
//import { RoundProgressComponent } from 'angular-svg-round-progressbar'; 

@NgModule({
  declarations: [
    ProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(ProfilePage),
    //RoundProgressModule
  ],
})
export class ProfilePageModule {}
