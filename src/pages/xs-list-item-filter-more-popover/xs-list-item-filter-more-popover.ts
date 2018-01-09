import { Component } from '@angular/core';
import { IonicPage, ViewController, NavController, NavParams } from 'ionic-angular';

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
  private callback: Function = null;

  constructor(public navCtrl: NavController,
    public viewCtrl: ViewController,
    public navParams: NavParams) {
    this.callback = this.navParams.get("callback");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad XsListItemFilterMorePopoverPage');
  }

  submit() {
    this.viewCtrl.dismiss({ result: "hi" });
  }
}
