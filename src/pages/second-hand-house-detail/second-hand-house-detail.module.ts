import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SecondHandHouseDetailPage } from './second-hand-house-detail';
import { PipesModule } from '../../pipes/pipes.module';
import { ComponentsModule } from '../../components/components.module';
@NgModule({
  declarations: [
    SecondHandHouseDetailPage,
  ],
  imports: [
    PipesModule,
    ComponentsModule,
    IonicPageModule.forChild(SecondHandHouseDetailPage),
  ],
})
export class SecondHandHouseDetailPageModule { }
