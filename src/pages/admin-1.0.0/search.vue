<template>
    <div>
        <el-form :inline="true"
                 :model="formInline"
                 class="demo-form-inline">
            <el-form-item label="接口名称">
                <el-input class="ipt1"
                          v-model="formInline.name"
                          placeholder="接口名称"></el-input>
            </el-form-item><br/>
            <el-form-item label="所属平台">
                <el-select class="ipt2"
                           v-model="formInline.type"
                           placeholder="所属平台">
                            <!-- :key="item.nameZn" -->
                     <el-option
                            v-for="item in options"
                            :key="item.nameZn"
                            :label="item.nameZn"
                            :value="item.nameEn">
                            </el-option>
                </el-select>
            </el-form-item>
            <el-form-item class="btn">
                <el-button type="primary"
                           @click="onSubmit">查询</el-button>
                <el-button type="primary"
                           plain
                           @click="handelGeneratorMulti">生成</el-button>

            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import {getTableData} from '@/module/admin-1.0.0/common.js';  // 得到表格数据
import {getPlantformInfo} from '@/module/admin-1.0.0/table-data-plantform.js'; // 得到表头信息

 export default{
      data() {
        return {
            formInline: {
                name: '',
                type: ''
            },
            tableData: [],
            options: []
        }
    },
    mounted(){
        this.options = getPlantformInfo();
        this.formInline.type = this.options[0].nameEn; // 英文比较
    },
    methods: {
        _updateTableData(){
            this.tableData = getTableData(this.formInline);
        },
        _handleSelect(){
            let arrSelect = [];
            let reg = new RegExp(this.formInline.name);
            let arrName = [];
            let arrNameIndex = [];

            this._updateTableData();
            for(let i=0;i< this.tableData.length;i++){
                arrName.push(this.tableData[i].name);
                arrNameIndex.push(this.tableData[i].id);
            }

            arrName.forEach((element, index) =>{
                if(element.match(reg)){
                    arrSelect.push(this.tableData[arrNameIndex[index]-1]);
                }
            });
            return arrSelect;
        },
        handelGeneratorMulti(){
            // table.vue进行监听
            this.$bus.emit('handelGeneratorMulti', '');
        },
        onSubmit() {
            // 处理选中的数据
            let arrSelectData = this._handleSelect();
            // table.vue进行监听
            this.$bus.emit('selectSearchItem', arrSelectData);
        }
    }
 }
</script>

<style lang="scss" scoped>
.ipt1 {
    width: 280px;
}
.ipt2 {
    width: 120px;
}
.btn {
    margin-left: 276px; // 76px
}
.el-button--primary.is-plain:focus {
    color: #409EFF;
    background: #ecf5ff;
    border-color: #b3d8ff;
}

.el-button--primary.is-plain:hover {
    color: #409EFF;
    /* background: #ecf5ff; */
    border-color: #b3d8ff;
    background: #ecf5ff + 2;
}

.el-button--success.is-plain:focus {
    color: #67c23a;
    background: #f0f9eb;
    border-color: #c2e7b0;
}

.el-button--success.is-plain:hover {
    color: #67c23a;
    background: #f0f9eb;
    border-color: #c2e7b0 + 2;
}
</style>

