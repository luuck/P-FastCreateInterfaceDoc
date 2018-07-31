<template>
    <div class="m-box" :style="heightStyle">
        <h3>
            <span role="link"
                  class="el-breadcrumb__inner">接口文档MarkDown格式</span>
        </h3>
        <!-- <el-input type="textarea"
                  maxlength="200"
                  v-model="desc"
                  @input="descInput"
                  placeholder="生成的内容"
                  :style="heightStyle"
                  style="resize:none;"></el-input> -->
        <textarea maxlength="200"
                  @input="descInput"
                  v-model="desc"
                  placeholder="生成的内容"
                  :style="heightStyle"
                  style="resize:none;" />
        <div class="btn-copy">
            <el-button class="ml10"
                       type="text"
                       size="medium"
                       v-clipboard:copy="desc"
                       v-clipboard:success="onCopy"
                       v-clipboard:error="onError"
                       @click="copyFn">点击复制</el-button>
        </div>
    </div>
</template>

<script>
 export default{
     data(){
         return{
              desc: '',
              heightStyle:{
                  height: ''
              }
         }
     },
     methods:{
         descInput(){

         },
         copyFn(){
             if(this.desc == ''){
                 this.$notify.error({
                    title: '提示',
                    message: '数据为空，复制失败',
                    duration: 2000
                });
             }
         },
         // 复制成功
        onCopy(e){
            this.$notify({
                title: '提示',
                message: '复制成功',
                type: 'success',
                duration: 2000
            });
        },
        // 复制失败
        onError(e){
            this.$notify.error({
                title: '提示',
                message: '复制失败',
                duration: 2000
            });
        },
     },
     mounted(){
        let _this = this;
        // table.vue进行触发
        this.$bus.on('generatorContentSingle',function(val){
            _this.desc = val;
        });

        this.$bus.on('generatorContentMulti', function(val){
            _this.desc = val;
        });

        this.$bus.on('selectSearchItem',function(data){
            // 当搜索区域点击查询的时候，清空右侧的生成内容区域
            _this.desc = '';
        });

        this.$bus.on('updateHeight', function(data){
            // console.log('监听data:'+data);
            _this.heightStyle.height = data;
        });
     }
 }
</script>

<style lang="scss" scoped>
$w: 600px;
// $h: 560px;
// $h: 97%;
$padding: 20px;
h3 {
    font-weight: 400;
    font-size: 14px;
}
textarea {
    width: $w - $padding * 2;
    // height: $h;
    border: 1px solid #ebeef5;
    padding: $padding;
    position: absolute;
    top: 34px;
    left: 0;
    color: #606266;
    font-size: 14px;
    // color: red;
    &:focus{
        border-color: #409EFF;
        outline: 0;
    }
}
.m-box {
    position: absolute;
    left: 720px; //690px;
    top: 0; //96px;34
    width: $w;
    // height: $h;
    .btn-copy {
        position: absolute;
        right: 20px;
        top: 45px;
    }
}
</style>

