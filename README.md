# P-FastCreateInterfaceDoc

### 背景

当下流行的前后端分离的开发方式，我们常常会在开发前和后端约定好接口，然后同步进行独立开发。那第一件很重要但却很费时费力的事情就是出[接口文档](https://www.showdoc.cc/web/#/)(我们团队使用的是showdoc)。

大量的项目会出现可公共的接口，然而每次都得重复再写一次接口文档，或者找到之前的接口文档进行拷贝粘贴过来，这些都不是很友好:-1:！！我们总是会排斥一些重复的工作，我们希望化繁为简，快速生成，快速使用，高效才是我们所追寻的:+1:！！

### 介绍

:bowtie:这是一款通过配置表的方式`内置公共接口`，`快速生成Markdown语法`，`一键拷贝`到showdoc的工具！

我们看一下它的功能：大致分为4个板块的功能，便可快速实现我们想要的需求，想想都觉得😊。

<img src="https://luuck.github.io/P-FastCreateInterfaceDoc/doc/pic/intro.png" width="500px">

### 访问

公共接口快速生成文档：[Demo](https://luuck.github.io/P-FastCreateInterfaceDoc/dist/view/index.html#/)

![](https://luuck.github.io/P-FastCreateInterfaceDoc/doc/pic/use.gif)

### 安装

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:1506
npm run dev

# build for production with minification
npm run build
```

### 如何配置新的接口呢？

本项目是`内置公共接口`，如果需要额外`新增公共接口`的话，`fork`或者是安装项目到本地，然后在`./src/module/admin-config/`进行配置。

<img src="https://luuck.github.io/P-FastCreateInterfaceDoc/doc/pic/path.png" width="300px">

目前支持pc、mobile、admin三个平台的配置，以PC为例，按照以下的格式配置。

```JavaScript
// pc的公用的接口
export const configPc = [{
    title: '获取活动初始化信息', //接口名称
    name: 'xxx', //项目名称
    urlName: 'getActInfos', //接口
    type: 'get', //接口类型
    requestJsonStr: `{}`, //请求参数
    responseJsonStr: `{
        "ActList": [{ //活动信息
            "ActId": 0, //活动编号
            "ActName": "活动一", //活动名称
            "Status": 0, //状态
            "StartTime": 0, //活动开始时间
            "EndTime": 0 //活动结束时间
        }],
        "ServerTimeStamp": 0 //服务器时间,时间戳
    }` //返回参数
}]
```
