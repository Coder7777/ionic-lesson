# Lesson-1
本节课主要完成'二手房列表'和'二手房详情'

根据设计稿，实现"二手房列表"和'二手房详情'效果。具体详见`.\src\seoond-hand-house`及`.\src\seoond-hand-house-detail`文件夹。
<br>

## Step1
<img width="100%" src="https://github.com/Coder7777/ionic-lesson/blob/lesson-2/UI/second-hand-house-list.png" style="max-width:100%">

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
具体的页面逻辑代码及样式修改请自行查看`.\src\pages\second-hand-house`文件夹内的项目源码。
<br>
这里介绍一下`second-hand-house.module.ts`文件，在`ionic 3`框架里，推荐使用的是 `Lazy Load` 方式来加载页面，任意一个页面，只要有了`xxx.module.ts`文件，就能够被其他页面以Lozy Load方式加载。
<br>
关于Lazy Load,ionic官方博客有两篇文章做了详尽的介绍[Lazy Load Part1](https://blog.ionicframework.com/ionic-and-lazy-loading-pt-1/)、[Lazy Load Part2](https://blog.ionicframework.com/ionic-and-lazy-loading-pt-2/)。
<br>
简而言之有了Lazy Load，我们可以直接以字符串的形式来加载各个页面，并且实现了`按需加载`。而无需像`ionic 2`框架时代时，在多个地方进行import和声明，然后再以强类型的方式加载，这种方式在使用及后期重构时显得特别不方便，且`ionci 2`时代，会在应用首次启动时，加载全部的页面资源。

```bash
Lazy Load 优点

1、按需加载，每次只加载部分模块。
2、以字符串形式进行调用，代码更易维护、更加灵活。
3、可在xxx.module.ts内对component、pipe等组件的统一管理。
```

## Step2
列表页里涉及了两个公共的组件`xs-list-item-filter`和`xs-tag`如图所示：
<br>
具体的页面逻辑代码及样式修改请自行查看`.\src\components\xs-list-item-filter`及`.\src\components\xs-tag`文件夹内的项目源码。
<br>
在`.\src\components`文件夹下，存在名为`components.module.ts`的文件，它是所有component的集中声明文件，有了这个文件，我们才能方便的页面内使用各个自定义的component。一般来说，我们在自定义组件内或多或少都会使用到angular的原生指令，如`ngIf`、`ngFor`、`ngClass`等，及也会用到`ionic 3`框架的部分组件，如`ion-list`、`ion-button`等，这就需要我们手动的在`components.module.ts`的文件内倒入两个模块：`CommonModule`、`IonicModule`。否则在程序运行的时候，浏览器会提示无法识别指令或组件的异常。
<br>

```bash
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';
...

@NgModule({
	declarations: [...],
	imports: [
    ...
		CommonModule,
		IonicModule
	],
	exports: []
})
export class ComponentsModule { }
```
<br>
若某一个区块的UI及逻辑都较为常用，则应该考虑将其抽取成一个个`component`(组件)，适当的暴露部分属性及方法，用于外部传参。组件化也是现代主流MV*都具有功能。

```bash
component 的优点
1、使用方便，将样式和代码封装成组件，使用时只需传入相应的参数即可，具体过程对使用者透明。
2、易于维护，只需在一处维护代码，即可全局更新。
3、快速开发，各组件可嵌套、组合使用，如同乐高积木，千变万化，可通过不同组件的搭配使用应对不同的业务场景。
```
<br>
最后，在页面内使用组件时，需要在页面自身的`xxx.module.ts`文件内，导入`component.module.ts`的引用，否则在程序运行需要加载该组件的时候浏览器会抛出无法识别自定义组件的异常。

```bash
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../components/components.module';
...

@NgModule({
  declarations: [...],
  imports: [
    ComponentsModule,
    ...
  ],
})
export class XxxPageModule { }
```

## Step3
<img width="300px" src="https://github.com/Coder7777/ionic-lesson/blob/lesson-2/UI/second-hand-house-list_spec.png" style="max-width:100%">

```bash
ionic g page SecondHandHouseDetail
```

<br>
创建`二手房详情`页，待命令执行完毕，`.\src\page`目录下会生成对应`second-hand-house-deatil`目录，内含四个文件分别是：
<br>
```bash
second-hand-house-deatil.html //视图模板
second-hand-house-deatil.module.ts //用于Lazy Load
second-hand-house-deatil.scss //页面样式
second-hand-house-deatil.ts  //逻辑代码
```

在`二手房详情`页内，我们将导航栏设为了半透明，且当页面下拉后，半透明标题栏变为不透明的效果，并显示处页面标题。

打开`./src/theme/variables.scss`，新增一个透明色的color
```bash
$colors: (
  ...
  transparent: rgba(0, 0, 0, 0.15)
);
```

修改`./src/pages/second-hand-house-detail.scss`。主要是为了让内容区域上移，默认情况，内容区域是会有一个margin，让其始终位于导航栏之下。
```bash
...

.scroll-content {
  margin-top: 0 !important;
}

...
```

修改`./src/pages/second-hand-house-detail.html`，找到ion-header组件，为其添加`ionic 3`自带的`no-border`指令，去除导航栏的边框。
```bash
// second-hand-house-detail.html

<ion-header no-border>
  ...
</ion-header>
```

以上操作，即可实现标题栏透明效果。
<br>

`TIPS：`如何得知我们应添加一个名为.scroll-content的scss类呢？这里我们一般是依赖于chrome的开发者调试工具（以下简称工具），通过工具点选到对应的模块，在工具面板内调试或新增样式，直到符合UI设计稿的要求后，将修改的内容粘贴回对应的scss文件内，若果出现css权限不足的情况，在css属性的最后加上!important提权即可。

当内容区域滚动超过一定距离后，导航栏变为蓝色背景，这里主要是使用了`ionic 3`的content提供的[ionScrollEnd](https://ionicframework.com/docs/api/components/content/Content/)事件

```bash
// second-hand-house-detail.html

<ion-header no-border>
  ...
</ion-header>

<ion-content #main class="xs-bg-content" (ionScrollEnd)="scrollHandler($event)">
  ...
</ion-content>

<ion-footer color="light">
  ...
</ion-footer>
```

```bash
//second-hand-house-detail.ts

scrollHandler($event) {
  this.zone.run(() => {
    if ($event.scrollTop < this.height - 44) {
      this.showNavBar = false;
    }
    else {
      this.showNavBar = true;
    }
  }
)
```
