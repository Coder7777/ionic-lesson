import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the XsListItemFilterMorePopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-xs-list-item-filter-more-popover',
  templateUrl: 'xs-list-item-filter-more-popover.html',
})
export class XsListItemFilterMorePopoverPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad XsListItemFilterMorePopoverPage');
  }

}
