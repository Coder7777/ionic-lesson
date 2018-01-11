import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { XsListItemFilterMorePopoverPage } from './xs-list-item-filter-more-popover';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    XsListItemFilterMorePopoverPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(XsListItemFilterMorePopoverPage),
  ],
})
export class XsListItemFilterMorePopoverPageModule { }
