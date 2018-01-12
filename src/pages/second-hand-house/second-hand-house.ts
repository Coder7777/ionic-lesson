import { Component, ViewChild } from '@angular/core';
import { IonicPage, MenuController, NavController, NavParams, Content } from 'ionic-angular';
import * as moment from 'moment';
import { SecondHandHouse } from '../../providers/webapi/webapi';
import { HttpClient } from '@angular/common/http';
import { transition } from '@angular/core/src/animation/dsl';
import { XsDataFilterModel } from '../../components/components.module';

/**
 * Generated class for the SecondHandHousePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-second-hand-house',
  templateUrl: 'second-hand-house.html',
})
export class SecondHandHousePage {
  @ViewChild("main") main: Content;

  private secondHandHouses: Array<any> = new Array<any>();
  private categories: Array<XsDataFilterModel> = new Array<XsDataFilterModel>();
  private startTime: string = moment().add(-9, 'years').format("YYYY-MM-DD 00:00:00");
  private endTime: string = moment().format("YYYY-MM-DD 23:59:59");
  private status: string = null;
  private districtQueryString: string = "";
  private totalPriceQueryString: string = "";
  private roomHallQueryString: string = "";
  private paginationString: string = "";
  private searchTextQueryString: string = "";
  private searchText: string = "";
  private pageNum: number = 1;
  private pageCount: number = 10;
  private filterMoreResult: any = null;
  private filterMoreStatus: any = null;

  constructor(public navCtrl: NavController,
    public http: HttpClient,
    public menu: MenuController,
    public navParams: NavParams) {
    this.initXsListItemFilter();
    this.pullSecondHandHouseList("?_page=" + this.pageNum + "&_limit=" + this.pageCount);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SecondHandHousePage');
  }

  generateQueryString() {
    let that = this;
    that.paginationString = "_page=" + that.pageNum + "&_limit=" + that.pageCount;
    let queryString: string = "";
    if (that.searchTextQueryString) {
      queryString += ("&" + that.searchTextQueryString);
    }
    if (that.districtQueryString) {
      queryString += ("&" + that.districtQueryString);
    }
    if (that.totalPriceQueryString) {
      queryString += ("&" + that.totalPriceQueryString);
    }
    if (that.roomHallQueryString) {
      queryString += ("&" + that.roomHallQueryString);
    }
    if (that.paginationString) {
      queryString += ("&" + that.paginationString);
    }

    if (queryString.length > 1) {
      queryString = "?" + queryString.substr(1);
      return queryString;
    }
    else
      return "";
  }

  initXsListItemFilter() {
    let that = this;
    this.categories.push({
      text: "区域",
      type: "list",
      active: false,
      callback: function (data) {

        that.secondHandHouses.splice(0);
        that.pageNum = 1;
        that.main.scrollToTop();
        that.districtQueryString = data.categoryText != "区域" ? "district=" + data.value.district : "";
        let queryString: string = that.generateQueryString();
        that.pullSecondHandHouseList(queryString);
      },
      items: [
        {
          categoryText: "区域",
          listItemText: "福州市",
          value: {
            id: "0",
            district: ""
          }
        },
        {
          categoryText: "鼓楼",
          listItemText: "鼓楼区",
          value: {
            id: "1",
            district: "鼓楼区"
          }
        },
        {
          categoryText: "仓山",
          listItemText: "仓山区",
          value: {
            id: "2",
            district: "仓山区"
          }
        },
        {
          categoryText: "晋安",
          listItemText: "晋安区",
          value: {
            id: "3",
            district: "晋安区"
          }
        },
        {
          categoryText: "台江",
          listItemText: "台江区",
          value: {
            id: "4",
            district: "台江区"
          }
        },
        {
          categoryText: "马尾",
          listItemText: "马尾区",
          value: {
            id: "5",
            district: "马尾区"
          }
        }
      ]
    });
    this.categories.push({
      text: "价格",
      type: "orderby",
      tag: {
        orderby: ""
      },
      active: false,
      callback: function (data) {
        that.secondHandHouses.splice(0);
        that.pageNum = 1;
        that.main.scrollToTop();
        that.totalPriceQueryString = "_sort=totalPrice&_order=" + data.tag.orderby;
        let queryString: string = that.generateQueryString();
        that.pullSecondHandHouseList(queryString);
      }
    });
    this.categories.push({
      text: "户型",
      type: "list",
      active: false,
      callback: function (data) {
        that.secondHandHouses.splice(0);
        that.pageNum = 1;
        that.main.scrollToTop();
        if (data.categoryText == "户型") {
          that.roomHallQueryString = "";
        }
        else {
          if (data.value.compare == "equal") {
            that.roomHallQueryString = "room=" + data.value.room + "&hall=" + data.value.hall;
          }
          else {
            that.roomHallQueryString = "room_gte=" + data.value.room + "&hall_gte=" + data.value.hall;
          }
        }
        let queryString: string = that.generateQueryString();
        that.pullSecondHandHouseList(queryString);
      },
      items: [
        {
          listItemText: "无限制",
          categoryText: "户型",
          value: {
            compare: "",
            room: 0,
            hall: 0
          }
        },
        {
          listItemText: "1房1厅",
          categoryText: "1房1厅",
          value: {
            compare: "equal",
            room: 1,
            hall: 1
          }
        },
        {
          listItemText: "2房2厅",
          categoryText: "2房2厅",
          value: {
            compare: "equal",
            room: 2,
            hall: 2
          }
        },
        {
          listItemText: "3房2厅",
          categoryText: "3房2厅",
          value: {
            compare: "equal",
            room: 3,
            hall: 2
          }
        },
        {
          listItemText: "3房2厅及以上",
          categoryText: "3房2厅+",
          value: {
            compare: "more",
            room: 3,
            hall: 2
          }
        }
      ]
    });
    let more: XsDataFilterModel = {
      text: "更多",
      type: "button",
      tag: {
        page: "XsListItemFilterMorePopoverPage",
        data: that.filterMoreStatus
      },
      active: false,
      callback: function (data) {
        that.filterMoreResult = data.des;
        that.filterMoreStatus = data.src;
        more.tag.data = data.src;
        console.log(data);
      }
    };
    this.categories.push(more);
  }

  pullSecondHandHouseList(queryString: string = ''): Promise<any> {
    let that = this;
    return new Promise<any>((resolve) => {
      new SecondHandHouse(this.http).get(queryString).then(
        (data) => {
          that.secondHandHouses = that.secondHandHouses.concat(data);
          resolve(data);
        }
      );
    });
  }

  pushSecondHandHouseDetailPage(secondHandHouse: any) {
    this.navCtrl.push("SecondHandHouseDetailPage", { secondHandHouse: secondHandHouse });
  }

  search(event) {
    if (this.searchText) {
      this.secondHandHouses.splice(0);
      this.pageNum = 1;
      this.searchTextQueryString = "projectName_like=" + this.searchText
      let queryString = this.generateQueryString();
      this.pullSecondHandHouseList(queryString);
    }
    else {
      this.pullSecondHandHouseList();
    }
  }

  doInfinite(event): Promise<any> {
    this.pageNum++;
    let queryString: string = this.generateQueryString();
    let that = this;
    return new Promise<any>((resolve) => {
      that.pullSecondHandHouseList(queryString).then(
        () => {
          event.complete();
        });
    })
  }

}
