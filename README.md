# P-FastCreateInterfaceDoc

### 背景

当下流行的前后端分离的开发方式，我们常常会在开发前和后端约定好接口，然后同步进行独立开发。那第一件很重要但却很费时费力的事情就是出[接口文档](https://www.showdoc.cc/web/#/)(我们团队使用的是showdoc)。

大量的项目会出现可公共的接口，然而每次都得重复再写一次接口文档，或者找到之前的接口文档进行拷贝粘贴过来，这些都不是很友好！！我们总是会排斥一些重复的工作，我们希望化繁为简，快速生成，快速使用，高效才是我们所追寻的！！

### 介绍
这是一款通过配置表的方式内置公共接口，快速生成Markdown语法的接口文档，一键拷贝到showdoc即可！

我们看一下它的功能：大致分为4个板块的功能，便可快速实现我们想要的需求，想想都觉得😊。
![](https://luuck.github.io/P-FastCreateInterfaceDoc/doc/pic/intro.png)

### 访问
公共接口快速生成文档：[Demo](https://luuck.github.io/P-FastCreateInterfaceDoc/dist/view/index.html#/)

![](https://luuck.github.io/P-FastCreateInterfaceDoc/doc/pic/use.gif)

### 安装

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
