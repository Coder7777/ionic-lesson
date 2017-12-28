import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController,
    public navParams: NavParams) {
  }

  ionViewDidEnter() {
    this.height = this.content.contentWidth / 2.5;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
}