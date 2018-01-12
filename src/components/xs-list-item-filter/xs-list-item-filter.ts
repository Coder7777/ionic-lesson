import { Component, ViewChild, Input, ElementRef, transition } from '@angular/core';
import { NavParams, ViewController, PopoverController, ModalController, MenuController } from 'ionic-angular'
import { XsDataFilterItemModel, XsDataFilterModel } from '../components.module';

/**
 * Generated class for the XsListItemFilterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'xs-list-item-filter',
  templateUrl: 'xs-list-item-filter.html'
})
export class XsListItemFilterComponent {
  @ViewChild('mainPopover', { read: ElementRef }) popContent: ElementRef;
  @Input("categories") categories: Array<XsDataFilterModel> = new Array<XsDataFilterModel>();

  constructor(
    public modalCtrl: ModalController,
    public viewCtrl: ViewController,
    public menuCtrl: MenuController,
    public popoverCtrl: PopoverController,
  ) {
    console.log('Hello XsListItemFilterComponent Component');
  }

  categoryClick(ev, category: XsDataFilterModel) {
    switch (category.type) {
      case "list":
        this.list(ev, category);
        break;
      case "orderby":
        this.orderby(ev, category);
        break;
      case "button":
        this.show(ev, category);
        break;
      default:
        break;
    }
  }

  show(ev, category: XsDataFilterModel) {
    let popover = this.popoverCtrl.create(category.tag.page, { data: category }, { cssClass: "xs-popover-slide" });
    popover.present({ ev: ev });
    popover.onDidDismiss((data) => {
      if (data) {
        category.selected = category.text;
      }
      else {
        category.selected = "";
      }
      category.callback(data);
    });
  }

  orderby(ev, category: XsDataFilterModel) {
    if (category.tag.orderby == "desc") {
      category.tag = {
        orderby: "asc"
      }
    } else {
      category.tag = {
        orderby: "desc"
      }
    }
    category.selected = category.text;
    category.callback(category);
  }

  list(ev, category: XsDataFilterModel) {
    this.categories.forEach((value, index, array) => {
      value.active = false;
    });
    category.active = true;
    let that = this;
    let popover = this.popoverCtrl.create("XsListItemFilterPopoverPage", { contentEle: this.popContent.nativeElement, category: category, categoryItems: category.items }, { cssClass: "xs-popover-full" });
    popover.onDidDismiss((data) => {
      if (data) {
        if (data.item.categoryText != category.text)
          data.category.selected = data.item.categoryText;
        else
          data.category.selected = null;
      }
      that.categories.forEach((value, index, array) => {
        value.active = false;
      });
    });
    popover.present({ ev: ev });
  }

}
