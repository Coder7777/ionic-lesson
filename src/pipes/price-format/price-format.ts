import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the PriceFormatPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'priceFormat',
})
export class PriceFormatPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: number, factor: number) {
    return (value / factor).toFixed(2);
  }
}
