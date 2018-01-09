import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  segment: "userName/:userName/age/:age"
})
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {
  age: number = 0;
  userName: string = "";
  constructor(public navCtrl: NavController,
    public navParams: NavParams) {

    this.age = this.navParams.get("age");
    this.userName = this.navParams.get("userName");

    console.log(this.age);
    console.log(this.userName);

  }

  ionViewDidLoad() {
    debugger;
    console.log('ionViewDidLoad TestPage');
  }

}
