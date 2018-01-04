import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams, ViewController } from 'ionic-angular';
import { XsDataFilterItemModel } from '../../components/components.module';

/**
 * Generated class for the XsListItemFilterPopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-xs-list-item-filter-popover',
  templateUrl: 'xs-list-item-filter-popover.html',
})
export class XsListItemFilterPopoverPage {
  private categoryItems: Array<any> = new Array<any>();
  private category: any = null;

  constructor(public navCtrl: NavController,
    public viewCtrl: ViewController,
    public navParams: NavParams) {

    this.categoryItems = this.navParams.get("categoryItems");
    this.category = this.navParams.get("category");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad XsListItemFilterPopoverPage');
  }

  itemChanged(item: XsDataFilterItemModel) {
    this.categoryItems.forEach((value, index, array) => {
      value.active = false;
    });
    if (!item.active) {
      item.active = true;
    }
    if (this.category.callback) {
      this.category.callback(item);
    }
    this.viewCtrl.dismiss({ item: item, category: this.category });
  }
}
