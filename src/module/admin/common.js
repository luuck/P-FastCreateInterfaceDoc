import { tableDataPc, setTableDataPc, setTableConfigPc } from './table-data-pc.js';
import { tableDataMobile, setTableDataMobile, setTableConfigMobile } from './table-data-m.js';
import { tableDataAdmin, setTableDataAdmin, setTableConfigAdmin } from './table-data-admin.js';
import { configPc } from '../admin-config/item-config-pc.js';
import { configMobile } from '../admin-config/item-config-m.js';
import { configAdmin } from '../admin-config/item-config-admin.js';
import { minify } from './json-remove-comments.js'; // 删除json中多余的字符串
import { setCheckSampleDataStr } from './str.js'

// 弹窗中：查看指定的配置数据
function getSampleDataStr(index, row) {
    let typeId = row.type == 'pc' ? 0 : row.type == 'mobile' ? 1 : 2;
    let arrData = [configPc, configMobile, configAdmin];
    let obj = arrData[typeId][index];
    // delete obj.requestJsonStr;
    // delete obj.responseJsonStr;
    return setCheckSampleDataStr(obj);
}

// 得到表格数据
function getTableData(obj) {
    let isMobile = obj.type == 'mobile';
    let isAdmin = obj.type == 'admin';
    let isPc = obj.type == 'pc';
    let tableData = isPc ? tableDataPc :
        (isAdmin ? tableDataAdmin : isMobile ? tableDataMobile : []);
    return tableData;
}

function _handleTableData(arr, n) {
    let _arrTable = [];
    let arrTableConf = arr;
    const arrType = ['pc', 'mobile', 'admin'];

    arrTableConf.forEach((element, index) => {
        let _obj = Object.assign({}, {
            id: parseInt(index) + 1,
            name: element.title,
            type: arrType[n],
            description: ''
        });
        _arrTable.push(_obj);
    });
    return _arrTable;
}

// function _extendDefault(obj) {
//     return Object.assign({
//         title: '',
//         name: 'xxx',
//         urlName: '',
//         type: 'get',
//         requestJsonStr: `{}`,
//         responseJsonStr: `{}`
//     }, obj);
// }

function _handleParams(arr, n) {
    // _extendDefault(arr);
    let arrTableConf = arr;
    // let reg = /^[\`\"]+|[\`\"]+$/g;


    for (let i in arrTableConf) {
        arrTableConf[i].id = parseInt(i) + 1;
        let reqStr = minify(arrTableConf[i].requestJsonStr);
        let _s = reqStr == '' ? '{}' : reqStr;
        // console.log(_s);
        // arrTableConf[i].requestParams = arrTableConf[i].requestJsonStr.replace(reg, '');
        // arrTableConf[i].responseParams = arrTableConf[i].responseJsonStr.replace(reg, '');
        arrTableConf[i].requestParams = JSON.parse(_s);
        // arrTableConf[i].requestParams = JSON.parse(minify(arrTableConf[i].requestJsonStr).toString());
        arrTableConf[i].responseParams = JSON.parse(minify(arrTableConf[i].responseJsonStr));
        // console.log(arrTableConf[i].requestParams);
    }
    return arrTableConf;
}

// 处理配置项数据
function handleConfigData() {
    var arr1 = [setTableDataPc, setTableDataMobile, setTableDataAdmin];
    var arr2 = [setTableConfigPc, setTableConfigMobile, setTableConfigAdmin];
    var arrConfig = [configPc, configMobile, configAdmin];

    for (let i = 0; i < 3; i++) {
        arr1[i](_handleTableData(arrConfig[i], i)); // 处理表格的数据
        arr2[i](_handleParams(arrConfig[i]), i); // 处理配置项的数据
    }
}

export {
    // 处理配置数据为项目需要的格式（把字符串模板处理为json）
    handleConfigData,
    // 得到表格数据
    getTableData,
    // 查看每个选中项具体的配置内容
    getSampleDataStr
}