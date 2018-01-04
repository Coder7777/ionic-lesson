import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';
import { XsHouseItemComponent } from './xs-house-item/xs-house-item';
import { PipesModule } from '../pipes/pipes.module';
import { XsTagComponent } from './xs-tag/xs-tag';
import { XsListItemFilterComponent } from './xs-list-item-filter/xs-list-item-filter';
@NgModule({
	declarations: [XsHouseItemComponent,
		XsTagComponent,
		XsListItemFilterComponent],
	imports: [
		CommonModule,
		PipesModule,
		IonicModule
	],
	exports: [XsHouseItemComponent,
		XsTagComponent,
		XsListItemFilterComponent]
})
export class ComponentsModule { }

export class XsDataFilterModel {
	public text: string = "";
	public selected: string = "";
	public type: string = "list"; //list/orderby/button
	public tag: any = {};
	public active: boolean = false;
	public callback?: Function = null;
	public items: Array<XsDataFilterItemModel> = new Array<XsDataFilterItemModel>();
}

export class XsDataFilterItemModel {
	public categoryText: string = "";
	public listItemText: string = "";
	public active: boolean = false;
	public value?: any = {};
}
