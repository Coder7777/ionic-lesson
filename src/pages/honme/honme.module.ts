import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HonmePage } from './honme';

@NgModule({
  declarations: [
    HonmePage,
  ],
  imports: [
    IonicPageModule.forChild(HonmePage),
  ],
})
export class HonmePageModule {}
