import { Component, NgZone, ViewChild, transition } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { SecondHandHouse, Project } from '../../providers/webapi/webapi';
import { HttpClient } from '@angular/common/http';


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
  showNavBar: boolean = false;
  private secondHandHouse: any = {};
  private sameCommunityHouses: Array<any> = new Array<any>();
  private surroundAdviseHouses: Array<any> = new Array<any>();
  private surroundAdviseCommunities: Array<any> = new Array<any>();
  private height: number = 0;

  constructor(public navCtrl: NavController,
    public zone: NgZone,
    public http: HttpClient,
    public navParams: NavParams) {
    this.secondHandHouse = this.navParams.get("secondHandHouse");
    this.pullSameCommunityHouses();
    this.pullSurroundAdviseHouses();
    this.pullSurroundAdviseCommunities();
  }

  pullSameCommunityHouses() {
    let that = this;
    new SecondHandHouse(this.http).get("?_page=1&_limit=10&projectName=" + this.secondHandHouse.projectName).then(
      (data) => {
        that.sameCommunityHouses = data;
      }
    );
  }

  pullSurroundAdviseHouses() {
    let that = this;
    new SecondHandHouse(this.http).get("?_page=1&_limit=10&district=" + this.secondHandHouse.district).then(
      (data) => {
        that.surroundAdviseHouses = data;
      }
    );
  }

  pullSurroundAdviseCommunities() {
    let that = this;
    new Project(this.http).get("?_page=1&_limit=10&district=" + this.secondHandHouse.district).then(
      (data) => {
        that.surroundAdviseCommunities = data;
      }
    );
  }


  ionViewDidEnter() {
    this.height = this.content.contentWidth / (4 / 3);
  }

  popToRoot() {
    this.navCtrl.popToRoot();
  }

  scrollHandler($event) {
    this.zone.run(() => {
      if ($event.scrollTop < this.height - 44) {
        this.showNavBar = false;
      }
      else {
        this.showNavBar = true;
      }
    })
  }
}
