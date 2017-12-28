# Lesson-1
本课程主要完成项目基础构件的从零搭建的过程。

## Step1 

```bash
npm install -g cordova ionic
```
如果该步骤安装失败，则进入`C:\Users\你的名字\AppData\Roaming`删除`npm`及`npm-cache`两个目录，再次重新执行。请勿使用`cnpm`安装，在`lazy load`方面，`cnpm`安装的项目会有问题。

## Step2
```bash
ionic start ionic-lesson tabs
```
等待tabs模板下载完成

## Step3
```bash
cd .\ionic-lesson

npm install
```
进入项目目录，执行`npm install`,请开启vpn，静待安装完成。若中途安装失败，可删除`.\ionic-lesson`目录下的`node_module`文件夹，然后重新执行`npm install`,总有一次会成功的 `-_-|||`

`此处有坑,高能预警!`
<br>
由于macOS的权限控制原因，`npm install`安装过程可能会出现`没有权限`的异常，导致安装中断。使用`--unsafe-prem`参数，可以顺利的安装完成。

```bash
cd .\ionic-lesson

sudo npm install --unsafe-prem
```

## Step4
删除`tabs`模板默认的强类型页面加载方式，改为通过页面名称的字符串常量来加载页面。
<br>在使用上体现为。这么做的好处在于降低各页面间的耦合，降低页面变动时要修改的代码量,使用时不需要再通过`import`，可直接使用类名。
<br>
要修改的页面有`tabs`、`app.component.ts`。对于`tabs`模板，可将`pages`文件夹内的`所有文件`删除，并将`app.module.ts`、`app.component.ts`内对被删除的页面的import及各种声明均已予删除。

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

## Step5

[ionic](https://ionicframework.com/docs/ionicons/)官方自带的图标常常不能满足我们开发的需求，这里我们引入图标更全的[fonw-awesome](http://fontawesome.io/)字体图标库。执行以下命令：
```bash
npm install font-awesome --save
```
安装完成后，进入`node_module`文件夹，将相关的`css`文件及`字体`文件拷贝到`项目目录`下的`.\www\assets`文件夹内，并在`.\src\index.html`内添加`css`的引用:

```bash
<link rel="stylesheet" href="assets/css/font-awesome.min.css">
```
至此，我们就可以在我们的页面内使用[font-awesome](http://fontawesome.io/)字体图标了。

## Step6

我们还需要引入一个开发中很常用的模块[moment](https://momentjs.com/)，主要用于处理各种与日期、时间有关数据。
```bash
npm install moment --save
```
在页面内使用时需在头部将moment模块导入到具体页面中，使用方法与普通的类并无二样，关于`moment`API请参考[moment](https://momentjs.com/)官网

```bash
import * as moment from 'moment';
```

## Step7
```bash
ionic serve
```

执行该命令，将项目在浏览器内跑起来。`ionic serve`命令可跟多个参数常用的有`--port 9000`让项目跑在9000端口上, `--nobrowser`跑起来，但并不会自动打开浏览器。

## Step8
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

## Step9

根据设计稿，实现"首页"效果。具体详见`.\src\home`文件夹。

<img src="https://github.com/Coder7777/ionic-lesson/blob/lesson-1/UI/home_spec.png"/>