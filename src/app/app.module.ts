import { HttpClientModule } from '@angular/common/http';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WebapiProvider } from '../providers/webapi/webapi';
import { CommonProvider } from '../providers/common/common';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp,{
      backButtonText: ""
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    WebapiProvider,
    CommonProvider
  ]
})
export class AppModule { }
