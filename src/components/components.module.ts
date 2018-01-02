import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XsHouseItemComponent } from './xs-house-item/xs-house-item';
import { XsTagComponent } from './xs-tag/xs-tag';
@NgModule({
	declarations: [XsHouseItemComponent,
    XsTagComponent],
	imports: [
		CommonModule
	],
	exports: [XsHouseItemComponent,
    XsTagComponent]
})
export class ComponentsModule { }
