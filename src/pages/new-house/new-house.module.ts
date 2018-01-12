import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewHousePage } from './new-house';
import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    NewHousePage,
  ],
  imports: [
    PipesModule,
    ComponentsModule,
    IonicPageModule.forChild(NewHousePage),
  ],
})
export class NewHousePageModule { }
