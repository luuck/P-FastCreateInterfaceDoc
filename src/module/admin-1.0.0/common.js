import { hanlePlatform, getPlantformInfo } from './table-data-plantform';
import { setCheckSampleDataStr } from './str.js'

let arrPlantform; // getPlantformInfo() 得到处理后的所有数据

// 弹窗中：查看指定的配置数据
function getSampleDataStr(index, row) {
    let obj = {};
    arrPlantform.forEach((element) => {
        if (element.nameZn === row.type) {
            obj = element.items[index];
        }
    });
    return setCheckSampleDataStr(obj);
}

// 得到表格数据
function getTableData(obj) {
    let arrItems = [];
    let arrTable = [];
    arrPlantform = getPlantformInfo();
    let curPlantform = '';

    if (obj === undefined || obj === '') {
        arrItems = arrPlantform[0].items;
        curPlantform = arrPlantform[0].nameZn;
    } else {
        arrPlantform.forEach((element, index) => {
            if (element.nameEn === obj.type) {
                arrItems = arrPlantform[index].items;
                curPlantform = arrPlantform[index].nameZn;
            }
        });
    }
    // console.log(curPlantform);
    arrItems.forEach((element, index) => {
        // console.log(element, index, arrPlantform[index]);
        let _obj = Object.assign({}, {
            id: parseInt(index) + 1,
            name: element.title,
            type: curPlantform // 'pc活动', 'pc官网', ....
        });
        arrTable.push(_obj);
    });
    return arrTable;
}

function getPlatform() {
    return Object.keys(apiConfig);
}

// 处理配置项数据
function handleConfigData() {
    // 处理平台的信息
    hanlePlatform();
}

export {
    // 处理配置项数据
    handleConfigData,
    // 得到所属平台信息
    getPlatform,
    // 得到表格数据
    getTableData,
    // 弹窗中：查看指定的配置数据
    getSampleDataStr
}