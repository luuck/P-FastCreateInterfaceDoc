import { minify } from './json-remove-comments.js'; // 删除json中多余的字符串

let plantformInfo = [];

// 处理内容参数
function _handleParams(arr) {
    let arrTableConf = arr;
    // console.log(arrTableConf);
    for (let i in arrTableConf) {
        arrTableConf[i].id = parseInt(i) + 1;
        let reqStr = minify(arrTableConf[i].requestJsonStr);
        let _s = reqStr == '' ? '{}' : reqStr;
        arrTableConf[i].requestParams = JSON.parse(_s);
        arrTableConf[i].responseParams = JSON.parse(minify(arrTableConf[i].responseJsonStr));
    }
    return arrTableConf;
}

function hanlePlatform() {
    let obj = {};
    let gApiConfig = apiConfig;
    Object.keys(gApiConfig).forEach(function(key, index, arr) {
        // 处理items数据
        let _arrItems = _handleParams(gApiConfig[key].items);
        obj = {
            curIndex: index,
            nameEn: arr[index],
            nameZn: gApiConfig[key].name,
            items: _arrItems
        }
        plantformInfo.push(obj);
    });
}

function getPlantformInfo() {
    return plantformInfo;
}

export {
    // 处理所属平台的信息
    hanlePlatform,
    // 得到所属平台的信息
    getPlantformInfo
}