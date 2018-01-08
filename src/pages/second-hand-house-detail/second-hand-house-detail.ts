import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';

/**
 * Generated class for the SecondHandHouseDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-second-hand-house-detail',
  templateUrl: 'second-hand-house-detail.html',
})
export class SecondHandHouseDetailPage {
  @ViewChild("main") content: Content;

  private secondHandHouse: any = {};
  private height: number = 0;

  constructor(public navCtrl: NavController,
    public navParams: NavParams) {
    this.secondHandHouse = this.navParams.get("secondHandHouse");
  }

  ionViewDidEnter() {
    this.height = this.content.contentWidth / (4 / 3);
  }

}
