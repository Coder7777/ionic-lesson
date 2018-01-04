import { Component, Input } from '@angular/core';

/**
 * Generated class for the XsHouseItemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'xs-house-item',
  templateUrl: 'xs-house-item.html'
})
export class XsHouseItemComponent {
  @Input("item") item: any = {}; 

  constructor() { 
    console.log('Hello XsHouseItemComponent Component');
  }

}
   