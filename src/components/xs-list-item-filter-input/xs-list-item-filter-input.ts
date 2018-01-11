import { Input, Component } from '@angular/core';

/**
 * Generated class for the XsListItemFilterInputComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'xs-list-item-filter-input',
  templateUrl: 'xs-list-item-filter-input.html'
})
export class XsListItemFilterInputComponent {
  @Input("placeholder") placeholder: string;

  constructor() {
    console.log('Hello XsListItemFilterInputComponent Component');
  }

}
 