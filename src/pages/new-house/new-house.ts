import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { XsDataFilterModel } from '../../components/components.module';

/**
 * Generated class for the NewHousePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-house',
  templateUrl: 'new-house.html',
})
export class NewHousePage {
  private categories: Array<XsDataFilterModel> = new Array<XsDataFilterModel>();
  private test: boolean = false;

  constructor(public navCtrl: NavController,
    public navParams: NavParams) {
    this.initCategroy();
  }
  updateCucumber() {
    console.log(this.test);
  }

  click() {
    this.test = !this.test;
  }
  initCategroy() {
    this.categories.push({
      text: "区域",
      active: false,
      callback: function () {

      },
      type: "list",
      items: [
        {
          categoryText: "区域",
          listItemText: "全市",
          active: true,
          value: {
            id: "",
            district: ""
          }
        },
        {
          categoryText: "鼓楼",
          listItemText: "鼓楼区",
          active: false,
          value: {
            id: "1",
            district: "鼓楼区"
          }
        },
        {
          categoryText: "台江",
          listItemText: "台江区",
          active: false,
          value: {
            id: "2",
            district: "台江区"
          }
        },
        {
          categoryText: "仓山",
          listItemText: "仓山区",
          active: false,
          value: {
            id: "3",
            district: "仓山区"
          }
        },
        {
          categoryText: "晋安",
          listItemText: "晋安区",
          active: false,
          value: {
            id: "4",
            district: "晋安区"
          }
        },
        {
          categoryText: "马尾",
          listItemText: "马尾区",
          active: false,
          value: {
            id: "5",
            district: "马尾区"
          }
        }
      ]
    });
    this.categories.push({
      text: "价格",
      active: false,
      callback: function () {

      },
      type: "list",
      items: [
        {
          categoryText: "价格",
          listItemText: "无限制",
          active: true,
          value: {
            max: 0,
            min: 0
          }
        },
        {
          categoryText: "1-100万",
          listItemText: "1万 - 100万",
          active: false,
          value: {
            max: 1000000,
            min: 10000
          }
        },
        {
          categoryText: "100-180万",
          listItemText: "100万 - 180万",
          active: false,
          value: {
            max: 1800000,
            min: 1000000
          }
        },
        {
          categoryText: "180-300万",
          listItemText: "180万 - 300万",
          active: false,
          value: {
            max: 3000000,
            min: 1800000
          }
        },
        {
          categoryText: "300万+",
          listItemText: "300万以上",
          active: false,
          value: {
            max: 100000000,
            min: 3000000
          }
        }
      ]
    });
    this.categories.push({
      text: "面积",
      active: false,
      callback: function () {

      },
      type: "list",
      items: [
        {
          categoryText: "面积",
          listItemText: "无限制",
          active: true,
          value: {
            max: 0,
            min: 0
          }
        },
        {
          categoryText: "1-45平米",
          listItemText: "1平米 - 45平米",
          active: false,
          value: {
            max: 45,
            min: 1
          }
        },
        {
          categoryText: "45-89平米",
          listItemText: "45平米 - 89平米",
          active: false,
          value: {
            max: 89,
            min: 45
          }
        },
        {
          categoryText: "89-144平米",
          listItemText: "89平米 - 144平米",
          active: false,
          value: {
            max: 144,
            min: 89
          }
        },
        {
          categoryText: "144平米+",
          listItemText: "144平米以上",
          active: false,
          value: {
            max: 100000,
            min: 144
          }
        }
      ]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewHousePage');
  }

}
