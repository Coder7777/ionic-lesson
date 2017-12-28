import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyCenterPage } from './my-center';

@NgModule({
  declarations: [
    MyCenterPage,
  ],
  imports: [
    IonicPageModule.forChild(MyCenterPage),
  ],
})
export class MyCenterPageModule {}
