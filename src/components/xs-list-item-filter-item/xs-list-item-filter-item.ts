import { Input, EventEmitter, Output, Component } from '@angular/core';



/**
 * Generated class for the XsListItemFilterItemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'xs-list-item-filter-item',
  templateUrl: 'xs-list-item-filter-item.html'
})
export class XsListItemFilterItemComponent {
  @Input("text") text: string;
  @Input("value") id: number;
  @Input("category") category: string;
  @Input("isActive") isActive: boolean = false;
  @Output("isActiveChange") private isActiveChange: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
    console.log('Hello XsListItemFilterItemComponent Component'); 
  }

  active() {
    this.isActive = !this.isActive;
    this.isActiveChangeHandler();
  }

  isActiveChangeHandler() {
    this.isActiveChange.emit(this.isActive);
  }

}
