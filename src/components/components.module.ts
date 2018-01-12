import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';
import { XsHouseItemComponent } from './xs-house-item/xs-house-item';
import { PipesModule } from '../pipes/pipes.module';
import { XsTagComponent } from './xs-tag/xs-tag';
import { XsListItemFilterComponent } from './xs-list-item-filter/xs-list-item-filter';
import { XsListItemFilterItemComponent } from './xs-list-item-filter-item/xs-list-item-filter-item';
import { XsListItemFilterBoxComponent } from './xs-list-item-filter-box/xs-list-item-filter-box';
import { XsListItemFilterInputComponent } from './xs-list-item-filter-input/xs-list-item-filter-input';
import { XsListItemFilterSplitComponent } from './xs-list-item-filter-split/xs-list-item-filter-split';
import { XsListItemFilterContainerComponent } from './xs-list-item-filter-container/xs-list-item-filter-container';
@NgModule({
	declarations: [XsHouseItemComponent,
		XsTagComponent,
		XsListItemFilterComponent,
		XsListItemFilterItemComponent,
		XsListItemFilterBoxComponent,
		XsListItemFilterInputComponent,
		XsListItemFilterSplitComponent,
		XsListItemFilterContainerComponent],
	imports: [
		CommonModule,
		PipesModule,
		IonicModule
	],
	exports: [XsHouseItemComponent,
		XsTagComponent,
		XsListItemFilterComponent,
		XsListItemFilterItemComponent,
		XsListItemFilterBoxComponent,
		XsListItemFilterInputComponent,
		XsListItemFilterSplitComponent,
		XsListItemFilterContainerComponent]
})
export class ComponentsModule { }

export interface XsDataFilterModel {
	text: string;
	selected?: string;
	type: string; //list/orderby/button
	tag?: any;
	active: boolean;
	callback?: Function;
	items?: Array<XsDataFilterItemModel>;
}

export interface XsDataFilterItemModel {
	categoryText: string;
	listItemText: string;
	active?: boolean;
	value?: any;
}
