import { Component, Input } from '@angular/core';

/**
 * Generated class for the XsTagComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'xs-tag',
  templateUrl: 'xs-tag.html'
})
export class XsTagComponent {
  @Input("item") item: any = {};

  constructor() {
    console.log('Hello XsTagComponent Component');
  }
}
