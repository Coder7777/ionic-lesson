# Lesson-1
本节课主要完成'二手房列表'和'二手房详情'

根据设计稿，实现"二手房列表"和'二手房详情'效果。具体详见`.\src\seoond-hand-house`及`.\src\seoond-hand-house-detail`文件夹。
<br>

<img width="300px" src="https://github.com/Coder7777/ionic-lesson/blob/lesson-2/UI/second-hand-house-list.png" style="max-width:100%">

<img width="300px" src="https://github.com/Coder7777/ionic-lesson/blob/lesson-2/UI/second-hand-house-detail.png" style="max-width:100%;">

<br>

## Step1

```bash
ionic g page SecondHandHouse
```
<br>

创建二手房列表页，待命令执行完毕，`.\src\page`目录下会生成对应`second-hand-house`目录，内含四个文件分别是：
<br>
```bash
second-hand-house.html //视图模板
second-hand-house.module.ts //用于Lazy Load
second-hand-house.scss //页面样式
second-hand-house.ts  //逻辑代码
```
<br>
`具体的页面逻辑代码及样式修改请自行查看项目源码。`
<br>

这里介绍一下`second-hand-house.module.ts`文件，在`ionic 3`框架里，推荐使用的是Lazy Load方式来加载页面，任意一个页面，只要有了`xxx.module.ts`文件，就能够被其他页面以[Lozy Load]方式加载。
<br>

关于Lazy Load,ionic官方博客有两篇文章做了详尽的介绍[Lazy Load Part1](https://blog.ionicframework.com/ionic-and-lazy-loading-pt-1/)、[Lazy Load Part2](https://blog.ionicframework.com/ionic-and-lazy-loading-pt-2/)。
<br>

简而言之有了Lazy Load，我们可以直接以字符串的形式来加载各个页面，并且实现了`按需加载`。而无需像`ionic 2`框架时代时，在多个地方进行import和声明，然后再以强类型的方式加载，这种方式在使用及后期重构时显得特别不方便，且`ionci 2`时代，会在应用首次启动时，加载全部的页面资源。

```bash
Lazy Load 优点

1、按需加载，每次只加载部分模块。
2、以字符串形式进行调用，代码更易维护、更加灵活。
3、可在xxx.module.ts内对component、pipe等组件的统一管理。
```

## Step2
删除`tabs`模板默认的强类型页面加载方式，改为通过页面名称的字符串常量来加载页面。
<br>这么做的好处在于降低各页面间的耦合，降低页面变动时要修改的代码量,使用时不需要再通过`import`，可直接使用类名。
<br>
要修改的页面有`tabs`、`app.component.ts`。对于`tabs`模板，可将`pages`文件夹内除`tabs`文件夹外的`所有文件夹`删除，并将`app.module.ts`、`app.component.ts`内对被删除的页面的import及各种声明均已予删除。

```bash
//before app.module.ts
import { HomePage } from '../home/home';

@NgModule({
  declarations: [
    ...
    HomePage
  ],
  imports: [
      ...
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ...
    HomePage
  ],
  ...
})
export class AppModule {}


//before xxxPage.ts code
import {HomePage} from '../../src/home/home'
...
this.navCtrl.push(home);

//-----------------------修改前后---------------------------

//after xxxPage.ts code
//import { HomePage } from '../home/home';

@NgModule({
  declarations: [
      ...
    //HomePage      
  ],
  imports: [
      ...
  ],
  bootstrap: [IonicApp],
  entryComponents: [
  ],
  providers: [
      ...
    //HomePage      
  ]
})
export class AppModule {}

//import {HomePage} from '../../src/home/home'

this.navCtrl.push('HomePage');
```

<br>通过`cli`工具`ionic g page YourPageName`来新建我们需要的页面，一个完整的页面包含4个文件`*.ts`、 `*.html`、 `*.scss`、 `*.module.ts`。ionic-cli 工具提供了创建pipe、provider、component、page的等快捷命令，常用的`ionic g`命令如下:

```bash
ionic g pipe YourPipeName
ionic g provider YourProviderName
ionic g component YourComponentName
ionic g page YourPageName
```

## Step4

[ionic](https://ionicframework.com/docs/ionicons/)官方自带的图标常常不能满足我们开发的需求，这里我们引入图标更全的[fonw-awesome](http://fontawesome.io/)字体图标库。执行以下命令：
```bash
npm install font-awesome --save
```
安装完成后，进入`node_module`文件夹，将相关的`css`文件及`字体`文件拷贝到`项目目录`下的`.\www\assets`文件夹内，并在`.\src\index.html`内添加`css`的引用:

```bash
<link rel="stylesheet" href="assets/css/font-awesome.min.css">
```
至此，我们就可以在我们的页面内使用[font-awesome](http://fontawesome.io/)字体图标了。

## Step5

我们还需要引入一个开发中很常用的模块[moment](https://momentjs.com/)，主要用于处理各种与日期、时间有关数据。
```bash
npm install moment --save
```
在页面内使用时需在头部将moment模块导入到具体页面中，使用方法与普通的类并无二样，关于`moment`API请参考[moment](https://momentjs.com/)官网

```bash
import * as moment from 'moment';
```

## Step6
```bash
ionic serve
```

执行该命令，将项目在浏览器内跑起来。`ionic serve`命令可跟多个参数常用的有`--port 9000`让项目跑在9000端口上, `--nobrowser`跑起来，但并不会自动打开浏览器。

## Step7
```bash
// 首页
ionic g page Home  
// 消息
ionic g page Message
// 看房
ionic g page Appointment
// 我的
ionic g page MyCenter
```
创建新的四个页面，并修改`tabs.ts`和`tabs.html`,如下：

```bash
// tabs.ts
export class TabsPage {
  tab1: any = "HomePage";
  tab2: any = "MessagePage";
  tab3: any = "AppointmentPage";
  tab4: any = "MyCenterPage";
  constructor() {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
```

```bash
// tabs.html
<ion-tabs>
  <ion-tab tabIcon="home" tabTitle="首页" [root]="tab1"></ion-tab>
  <ion-tab tabIcon="mail" tabTitle="消息" [root]="tab2"></ion-tab>
  <ion-tab tabIcon="bell" tabTitle="看房" [root]="tab3"></ion-tab>
  <ion-tab tabIcon="contact" tabTitle="我的" [root]="tab4"></ion-tab>
</ion-tabs>`
```

## Step8
再进一步开发之前，一般我们会定义一些`css工具样式`,来方便后续的开发，比如`margin`、`padding`的值。
在`.\src\app`目录下，有一个`app.scss`这个`sass`文件是用来定义`全局css样式`的，我们可以将一些通用的`css工具样式`定义同级目录下的独立的scss文件，并import到app.scss内。
<br>
```bash
// app.scss
...
@import 'margin.scss';
@import 'padding.scss';
...
```

```bash
// margin.scss
.margin-section {margin-bottom: 1.6rem;}
.no-margin {margin: 0;}
.margin {margin: 0.8rem;}
.margin-top {margin-top: 0.8rem;}
.margin-right {margin-right: 0.8rem;}
.margin-bottom {margin-bottom: 0.8rem;}
.margin-left {margin-left: 0.8rem;}
.margin-horizontal {margin-left: 0.8rem; margin-right: 0.8rem;}
.margin-vertical {margin-top: 0.8rem; margin-bottom: 0.8rem;}
```

```bash
// padding.scss
.padding-section {padding-bottom: 16px;}
.no-padding {padding: 0;}
.padding {padding: 0.8rem;}
.padding-top {padding-top: 0.8rem;}
.padding-right {padding-right: 0.8rem;}
.padding-bottom {padding-bottom: 0.8rem;}
.padding-left {padding-left: 0.8rem;}
.padding-horizontal {padding-left: 0.8rem;padding-right: 0.8rem;}
.padding-vertical {padding-top: 0.8rem;padding-bottom: 0.8rem;}
```

## Step9

```bash
ionic g provider webapi
```

创建一个名为WebapiProvider的服务，用于承载Ajax请求的封装。在`.\src\provider\webapi.ts`内引入Angular的Http及相关模块。

```bash
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
```
封装`GET`、`POST`、`PUT`、`DELETE`自定义函数

```bash

```

由于ionic创建的模板，并没有默认将Http模块包含到项目内，所以我们需要手动对`.\src\app\app.module.ts`添加Http模块引用,并修改`@NgModule`在`imports`数组属性内添加`HttpClientModule`。

```bash
import { HttpClientModule } from '@angular/common/http';
...
@NgModule({
  ...
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ...
  ],
  providers: [
    ...
  ]
})
```

至此，我们的ionic应用就已经具备了与服务器交互的能力了。
<br>
`备注：ionic g 命令会根据大小写将文件名用减号分隔如过取名为WebApi,最后将会生成一个web-api.ts文件`


## Step10

根据设计稿，实现"首页"效果。具体详见`.\src\home`文件夹。
<br>
<img width="400px" src="https://github.com/Coder7777/ionic-lesson/blob/lesson-1/UI/home_spec.png" style="max-width:100%;">