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
                </header>
                <Search/>
                <Table/>
                <Result/>
            </div>
         </transition>
    </div>
</template>

<script>
import Search from './search.vue'; // 搜索区域
import Table from './table.vue'; // 表格区域
import Result from './result.vue'; // 结果区域
import {syntaxHighlight} from '@/module/admin/json-beautify.js'; // 美化json
import {sampleDataStr} from '@/module/admin/str.js'; // 得到默认的字符串模板配置项
import {handleConfigData} from '@/module/admin/common.js'; // 处理配置项的数据

export default {
    data(){
        return {
            fullscreenLoading: true // loading显示
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
            const title = `按照以下格式进行配置：`;
            const html = title+'<pre class="string">'+syntaxHighlight(sampleDataStr)+'</pre>';
            this.$alert(html, '如何新增公用接口?', {
                confirmButtonText: '确定',
                dangerouslyUseHTMLString: true,
                callback: action => {
                }
            });
        }
    },
    created(){
        handleConfigData();
        this.hideLoading();
    }
  }
</script>

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
}
</style>

