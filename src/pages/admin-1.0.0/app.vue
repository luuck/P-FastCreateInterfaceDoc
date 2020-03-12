<template>
    <div class="m-wrap" v-cloak>
        <div class="el-loading-spinner" v-show="fullscreenLoading">
            <svg viewBox="25 25 50 50" class="circular"><circle cx="50" cy="50" r="20" fill="none" class="path"></circle></svg>
        </div>
        <transition name="el-fade-in-linear">
            <div class="m-wrap-con" v-show="!fullscreenLoading">
                <header>
                    <el-breadcrumb class="title"
                                separator-class="el-icon-arrow-right">
                        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                        <el-breadcrumb-item>公用接口文档生成</el-breadcrumb-item>
                    </el-breadcrumb>
                    <el-button class="btn-add"
                            type="text"
                            @click="open">（如何新增公用接口？）</el-button>
                    <a class="btn-view" target="_blank" href="http://webtest.tcy365.org:1505/P-FastCreateInterfaceDocConfig/config-data.js">查看在线配置文件</a>
                </header>
                <Search/>
                <Table/>
                <Result/>
            </div>
         </transition>

         <el-dialog :title="dialogTitle"
                   :visible.sync="dialogVisible"
                   :close-on-click-modal = "closeOnClickModal"
                   width="820px" height="500px">
            <span v-html="dialogHtml"></span>
            <!-- <span slot="footer"
                  class="dialog-footer">
                <el-button type="primary"
                           @click="dialogVisible = false">确 定</el-button>
            </span> -->
        </el-dialog>
    </div>
</template>

<script>
import Search from './search.vue'; // 搜索区域
import Table from './table.vue'; // 表格区域
import Result from './result.vue'; // 结果区域
import {syntaxHighlight} from '@/module/admin-1.0.0/json-beautify.js'; // 美化json
import {sampleDataStr} from '@/module/admin-1.0.0/str.js'; // 得到默认的字符串模板配置项
import {handleConfigData} from '@/module/admin-1.0.0/common.js'; // 处理配置项的数据
import {dialogLeftHtml} from '@/module/admin-1.0.0/dialog-html.js'

export default {
    data(){
        return {
            closeOnClickModal: false,
            fullscreenLoading: true, // loading显示
            dialogVisible: false, // 弹窗不显示
            dialogTitle: '', // 弹窗的标题
            dialogHtml: '', // 弹窗对应的内容
        }
    },
    components:{
        Search,
        Table,
        Result
    },
    methods: {
        hideLoading(){
            setTimeout(() => {
                this.fullscreenLoading = false;
            }, 1000);
        },
        open(){
            // 根据type和id找到对象，然后放置弹窗里边
            this.dialogHtml = '<div class="dialog-wrap">'+dialogLeftHtml+'<div class="dialog-right">按照以下格式进行本地编写配置文件：<div class="dialog-box"><pre class="string">'+syntaxHighlight(sampleDataStr)+'</pre></div><div></div>';
            this.dialogTitle = '如何新增公用接口?';
            this.dialogVisible = true;

            /*const title = `按照以下格式进行配置：`;
            const html = title+'<pre class="string">'+syntaxHighlight(sampleDataStr)+'</pre>';
            this.$alert(html, '如何新增公用接口?', {
                confirmButtonText: '确定',
                dangerouslyUseHTMLString: true,
                callback: action => {
                }
            });*/
        }
    },
    created(){
        handleConfigData();
        this.hideLoading();
    }
  }
</script>

<style lang="scss">
.dialog-wrap {
    height: 460px;
}

.dialog-left {
    float: left;
    width: 360px;
}

.dialog-right {
    width: 380px;
    height: 300px;
    float: left;
    margin-left: 40px;
}

.dialog-box {
    border: 1px solid #dcdfe6;
    padding: 10px;
    margin: 5px 5px 5px 0;
    border-radius: 4px;
    .string{
        line-height: 16px;
    }
}
.el-dialog__body{
    padding: 5px 20px 10px !important;
}

.step-box{
    margin-bottom: 20px;
    p{
        font-size: 16px;
        margin: 5px 0;
        .small{
            font-size: 12px;
        }
    }
}

.step{
    font-weight: 700;
    font-size: 28px;
    color: coral;
    display: block;
}
</style>


<style lang="scss" scoped>
.el-loading-spinner{
    position: absolute;
    z-index: 100;
    top:50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .circular{
        width: 80px;
        height: 80px;
    }
}

$w: 1000px;

.m-wrap-con {
    position: relative;
    // width: $w;
    // background-color: red;
    margin-left: 20px;
    margin-right: 20px;
    .title {
        margin: 20px 0;
    }
    .btn-add {
        position: absolute;
        left: 200px;
        top: -12px;
    }
    .btn-view{
        position: absolute;
        left: 360px;
        top: -2px;
        font-size: 14px;
        // color:#409EFF;
        color: coral;

        transition: color .2s;
        &:hover{
            color:rgb(238, 148, 116);
        }
    }
}
</style>

