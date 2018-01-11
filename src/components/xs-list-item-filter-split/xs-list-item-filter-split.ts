import { Input, Component } from '@angular/core';

/**
 * Generated class for the XsListItemFilterSplitComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'xs-list-item-filter-split',
  templateUrl: 'xs-list-item-filter-split.html'
})
export class XsListItemFilterSplitComponent {
  @Input("text") text: string;

  constructor() {
    console.log('Hello XsListItemFilterSplitComponent Component');
  }

}
