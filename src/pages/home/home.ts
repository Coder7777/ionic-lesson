import { PagedData, Output } from './../../providers/common/common';
import { WebapiProvider, SecondHandHouse, NewHouse } from './../../providers/webapi/webapi';
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
  public newHouses: Array<any> = new Array<any>();

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient) {
    this.pullSecondHandHouseList();
    this.pullNewHouseList();
    this.updateNewHouseList();
  }

  ionViewDidEnter() {
    this.height = this.content.contentWidth / 2.5;
  }

  pullSecondHandHouseList() {
    let that = this;
    new SecondHandHouse(this.http).get("?_page=1&_limit=5").then(
      (data) => {
        that.secondHandHouses = data;
      }
    );
  }

  updateNewHouseList() {
    let that = this;
    let json = {
      "imgUrl": "assets/ui/second-hand-house-img/4.png",
      "description": "电梯豪装小三房，首付121万",
      "projectName": "夏鑫博世园2期",
      "location": "349 思源 路 Suite 680",
      "projectID": 222,
      "face": "朝南",
      "totalPrice": "2500000",
      "unitPrice": 8434,
      "room": 4,
      "washRoom": 3,
      "hall": 1,
      "buildArea": 113,
      "feature": [
        {
          "text": "满五年",
          "type": "1"
        },
        {
          "text": "认证房源",
          "type": "2"
        },
        {
          "text": "随时看房",
          "type": "3"
        },
        {
          "text": "交通便利",
          "type": "4"
        }
      ]
    };
    new NewHouse(this.http).post(json).then(
      (data) => {
        console.log(data);
      }
    );
  }

  pullNewHouseList() {
    let that = this;
    new NewHouse(this.http).get("?_page=1&_limit=5").then(
      (data) => {
        that.newHouses = data;
      }
    );
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad HomePage');
  }
}