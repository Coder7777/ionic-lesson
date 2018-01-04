import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { XsListItemFilterPopoverPage } from './xs-list-item-filter-popover';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    XsListItemFilterPopoverPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(XsListItemFilterPopoverPage),
  ],
})
export class XsListItemFilterPopoverPageModule { }
