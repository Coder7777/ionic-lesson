import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SecondHandHouseDetailPage } from './second-hand-house-detail';

@NgModule({
  declarations: [
    SecondHandHouseDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(SecondHandHouseDetailPage),
  ],
})
export class SecondHandHouseDetailPageModule {}
