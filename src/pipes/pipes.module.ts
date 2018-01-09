import { NgModule } from '@angular/core';
import { PriceFormatPipe } from './price-format/price-format';
import { DateFormatPipe } from './date-format/date-format';
@NgModule({
	declarations: [PriceFormatPipe,
    DateFormatPipe],
	imports: [],
	exports: [PriceFormatPipe,
    DateFormatPipe]
})
export class PipesModule {}
