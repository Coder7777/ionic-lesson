import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SecondHandHousePage } from './second-hand-house';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    SecondHandHousePage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(SecondHandHousePage),
  ],
})
export class SecondHandHousePageModule { }
