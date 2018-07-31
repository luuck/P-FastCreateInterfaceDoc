<template>
    <div class="m-tabel"
         :style="tableStyle">
        <el-table ref="multipleTable"
                  :data="tableData3"
                  border
                  tooltip-effect="dark"
                  style="width: 100%;"
                  height="100%"
                  @selection-change="handleSelectionChange">
            <el-table-column fixed
                             type="selection"
                             width="40px">
            </el-table-column>
            <el-table-column fixed
                             prop="id"
                             label="ID"
                             width="40px">
            </el-table-column>
            <el-table-column prop="name"
                             label="接口名称">
                <!-- <template slot-scope="scope">{{ scope.row.date }}</template> -->
            </el-table-column>
            <el-table-column prop="type"
                             label="所属平台"
                             width="100px">
            </el-table-column>
            <!-- <el-table-column prop="description"
                            label="描述"
                            show-overflow-tooltip>
            </el-table-column> -->
            <!-- <el-table-column prop=""
                            label="操作"
                            show-overflow-tooltip>
            </el-table-column> -->
            <el-table-column label="操作"
                             width="180px">
                <template slot-scope="scope">
                    <el-button size="mini"
                               type="success"
                               plain
                               @click="check(scope.$index, scope.row)">查看</el-button>
                    <el-button size="mini"
                               type="primary"
                               plain
                               @click="handelGeneratorSingle(scope.$index, scope.row)">生成</el-button>
                </template>
            </el-table-column>

        </el-table>
        <!-- <el-button @click="toggleSelection([tableData3[1], tableData3[2]])">切换第二、第三行的选中状态</el-button>
        <el-button @click="toggleSelection()">取消选择</el-button> -->

        <el-dialog :title="dialogTitle"
                   :visible.sync="dialogVisible"
                   width="540px">
            <span v-html="dialogHtml"></span>
            <span slot="footer"
                  class="dialog-footer">
                <el-button type="primary"
                           @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>

    </div>
</template>

<script>
import {handleToMd, handleToMdArr} from '@/module/admin/handle-to-md.js'; // 处理为markdown格式
import {getTableData, getSampleDataStr} from '@/module/admin/common.js'; // 得到表格数据，得到选中的查看字符串模板的内容
import { setTimeout } from 'timers';

export default{
    data(){
        return {
            tableStyle: {
                height: ''
            },
            dialogTitle: '', // 弹窗的标题
            dialogHtml: '', // 弹窗对应的内容
            dialogVisible: false, // 弹窗不显示
            tableData3: [],
            multipleSelection: []
        }
    },
    methods:{
        updateTableHeight(){
            let tableHeight = window.innerHeight;//window.innerHeight; //document.body.clientHeight ||
            this.tableStyle.height = tableHeight*0.7+'px';
            let _this = this;
            // result.vue进行监听
            setTimeout(function(){
                _this.$bus.emit('updateHeight', (parseInt(tableHeight*0.7)+83)+'px');
            }, 20);
            // console.log(this.tableStyle.height);
        },
        initData(){
            this.tableData3 = getTableData({type:'pc'});
        },
        _tipSuccess(){
            this.$message({
                message: '你很厉害喔，恭喜你，生成成功啦',
                type: 'success'
            });
        },
        _tipFail(){
            this.$message.error('还差那么一点，请先选中喔');
        },
        // 查看弹窗显示
        check(index, row){
            // 根据type和id找到对象，然后放置弹窗里边
            this.dialogHtml = '<pre class="string">'+(getSampleDataStr(index,row))+'</pre>';
            this.dialogTitle = '查看-【'+ row.name+'】接口配置项';
            this.dialogVisible = true;
        },
        // 单个生成markdown语法
        handelGeneratorSingle(index, row){
            let _this = this;
            this.tableData3.forEach(element => {
                if(element.id === row.id){
                    _this._tipSuccess();
                    // result.vue进行监听
                    _this.$bus.emit('generatorContentSingle', handleToMd(row));
                }
            });
        },
        // 多个生成markdown语法
        handelGeneratorMulti(){
            let _this = this;
            let _arr = [];
            this.multipleSelection.forEach(element => {
                _arr.push(element);
            });
            !_arr.length ? this._tipFail():this._tipSuccess();
            // result.vue进行监听
            this.$bus.emit('generatorContentMulti', handleToMdArr(_arr));
            // 清空选中的数组
            this.$refs.multipleTable.clearSelection();
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
        }
        // toggleSelection(rows) {
        //     if (rows) {
        //     rows.forEach(row => {
        //         this.$refs.multipleTable.toggleRowSelection(row);
        //     });
        //     } else {
        //     this.$refs.multipleTable.clearSelection();
        //     }
        // },
    },
    created: function(){
        this.initData();
    },
    mounted: function(){
        this.updateTableHeight();
        let _this = this;
        // search.vue进行触发
        this.$bus.on('selectSearchItem',function(data){
            _this.tableData3 = data;
        });
        this.$bus.on('handelGeneratorMulti', function(){
            _this.handelGeneratorMulti();
        });
        window.onresize = function temp() {
            _this.updateTableHeight();
        };
    }
}
</script>

<style lang="scss" scoped>
$w: 640px;
// $h: 440px;
.m-tabel {
    width: $w;
    // height: $h;
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

