import { PagedData, Output } from './../../providers/common/common';
import { WebapiProvider, SecondHandHouse } from './../../providers/webapi/webapi';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  @ViewChild("main") content: Content;
  public height: number = 0;
  public secondHandHouses: Array<any> = new Array<any>();

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient) {
    this.pullSecondHandHouseList();
  }

  ionViewDidEnter() {
    this.height = this.content.contentWidth / 2.5;
  }

  pullSecondHandHouseList() {
    let that = this;
    new SecondHandHouse(this.http).get("?_page=1&_limit=5").then(
      (data: Output) => {
        that.secondHandHouses = data.Result.Data;
      }
    );
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad HomePage');
  }
}