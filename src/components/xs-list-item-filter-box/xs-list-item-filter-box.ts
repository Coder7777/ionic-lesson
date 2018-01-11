import { Input, Component, ViewChildren } from '@angular/core';
import { XsListItemFilterItemComponent } from '../xs-list-item-filter-item/xs-list-item-filter-item';

/**
 * Generated class for the XsListItemFilterBoxComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'xs-list-item-filter-box',
  templateUrl: 'xs-list-item-filter-box.html'
})
export class XsListItemFilterBoxComponent {
  @Input("title") title: string;

  constructor() {
    console.log('Hello XsListItemFilterBoxComponent Component');
  }
}
