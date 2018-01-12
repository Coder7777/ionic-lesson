import { Component, ViewChildren, EventEmitter, ContentChildren, Input, Output } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { XsListItemFilterItemComponent } from '../xs-list-item-filter-item/xs-list-item-filter-item';
import { XsListItemFilterBoxComponent } from '../xs-list-item-filter-box/xs-list-item-filter-box';

/**
 * Generated class for the XsListItemFilterContainerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'xs-list-item-filter-container',
  templateUrl: 'xs-list-item-filter-container.html'
})
export class XsListItemFilterContainerComponent {
  @Input("result") result: any = {};
  @Output("dismiss") dissmiss: EventEmitter<any> = new EventEmitter<any>();
  @Output("reset") reset: EventEmitter<any> = new EventEmitter<any>();

  constructor(public viewCtrl: ViewController) {
    console.log('Hello XsListItemFilterContainerComponent Component');
  }

  dismissHandler() {
    this.dissmiss.emit();
  }

  resetHandler() {
    this.reset.emit();
  }
}
