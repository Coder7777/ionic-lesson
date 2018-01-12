import { Component, ViewChildren } from '@angular/core';
import { IonicPage, ToastController, ViewController, NavController, NavParams } from 'ionic-angular';
import { XsListItemFilterItemComponent } from '../../components/xs-list-item-filter-item/xs-list-item-filter-item';

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
  @ViewChildren(XsListItemFilterItemComponent) items: Array<XsListItemFilterItemComponent>;

  private data: any = {};
  private filters: Array<any> = new Array<any>();
  private districts: any = {
    category: "区域",
    items: [
      [
        { id: 1, text: "鼓楼区", isActive: false },
        { id: 2, text: "台江区", isActive: false },
        { id: 3, text: "晋安区", isActive: false },
      ],
      [
        { id: 4, text: "马尾区", isActive: false },
        { id: 5, text: "仓山区", isActive: false }]
    ]
  }
  private sources: any = {
    category: "资源",
    items: [
      [
        {
          id: 1,
          text: "三甲医院",
          isActive: false
        },
        {
          id: 2,
          text: "优质教育",
          isActive: false
        },
        {
          id: 3,
          text: "商超便利",
          isActive: false
        }
      ],
      [
        {
          id: 4,
          text: "公共交通",
          isActive: false
        },
        {
          id: 5,
          text: "银行网点",
          isActive: false
        },
        {
          id: 6,
          text: "公园栈道",
          isActive: false
        }
      ],
      [
        {
          id: 7,
          text: "餐饮美食",
          isActive: false
        },
        {
          id: 8,
          text: "政府机构",
          isActive: false
        }
      ]
    ]
  }
  private prices: any = {
    category: "价格",
    items: [
      [
        {
          id: "1",
          text: "1万-100万",
          isActive: false
        },
        {
          id: "2",
          text: "1万-180万",
          isActive: false
        },
        {
          id: "3",
          text: "1万-300万",
          isActive: false
        }
      ]
    ]
  }
  private layouts: any = {
    category: "户型",
    items: [
      [
        {
          id: 1,
          text: "1房1厅",
        },
        {
          id: 2,
          text: "2房2厅",
        },
        {
          id: 3,
          text: "3房2厅",
        }
      ],
      [
        {
          id: 4,
          text: "3房2厅以上",
        }
      ]
    ]
  }
  constructor(public navCtrl: NavController,
    public viewCtrl: ViewController,
    public toastCtrl: ToastController,
    public navParams: NavParams) {

    this.data = this.navParams.get("data");
    if (this.data.tag.data) {
      this.districts = this.data.tag.data.districts;
      this.sources = this.data.tag.data.sources;
      this.prices = this.data.tag.data.prices;
      this.layouts = this.data.tag.data.layouts;
    }

    this.filters.push(this.districts);
    this.filters.push(this.sources);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad XsListItemFilterMorePopoverPage');
  }

  dismiss(data) {
    let result: Array<XsListItemFilterItemComponent> = new Array<XsListItemFilterItemComponent>();
    this.items.forEach((value: XsListItemFilterItemComponent, index) => {
      if (value.isActive) {
        result.push(value);
      }
    });
    let src = {
      districts: this.districts,
      sources: this.sources,
      prices: this.prices,
      layouts: this.layouts
    };
    let des = result;
    this.viewCtrl.dismiss({ src: src, des: des }).then(
      () => {
        this.toastCtrl.create({
          message: "'更多'的筛选功能与其他相似，这里不进行实际编码，可在Console里查看接收到的参数！",
          duration: 4500,
          position: "middle"
        }).present();
      }
    );
  }

  reset(data) {
    this.items.map((value: XsListItemFilterItemComponent, index) => {
      value.isActive = false;
    });
    this.viewCtrl.dismiss(null);
  }
} 
