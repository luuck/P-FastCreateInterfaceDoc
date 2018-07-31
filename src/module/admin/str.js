import { syntaxHighlight } from '@/module/admin/json-beautify.js'; // 美化json

/*function _getResponseData(o, n) {
    if (n == 1) {
        return o != null && Object.keys(o).length > 0 ? `请求参数：\`${syntaxHighlight(o)}\`` : '请求参数：暂无';
    }
    return o != null && Object.keys(o).length > 0 ? o : null;
}*/

export function setCheckSampleDataStr(obj) {
    /*let resStr = _getResponseData(obj.responseJsonStr, 2);
        const checkSampleDataStr = `接口名称：${obj.title}
    请求地址：<span class="key">\`/api/${obj.name}/${obj.urlName}\`</span>
    接口类型：<span class="key">\`${obj.type}\`</span>
    ${_getResponseData(obj.requestParams,1)}<b>
    返回参数：\n\`${syntaxHighlight(resStr)}\`
    `
        console.log(_getResponseData(obj.responseJsonStr, 2));
    请求参数：\`${_getResponseData(obj.requestParams)}\`
    let checkSampleDataStr = `{
        title: '${obj.title}', //接口名称
        name: '${obj.name}', //项目名称
        urlName: '${obj.urlName}', //接口
        type: '${obj.type}', //接口类型
        requestJsonStr: \`${obj.requestJsonStr == "{}" ? '暂无':obj.requestJsonStr }\`, //请求参数
        responseJsonStr: \`${syntaxHighlight(obj.responseJsonStr)}\` //返回参数
    }`;*/
    let topStr = `{
        title: '${obj.title}', //接口名称
        name: '${obj.name}', //项目名称
        urlName: '${obj.urlName}', //接口
        type: '${obj.type}', //接口类型`;
    let checkSampleDataStr = topStr + `
        requestJsonStr: \`${syntaxHighlight(obj.requestJsonStr)}\`, //请求参数
        responseJsonStr: \`${syntaxHighlight(obj.responseJsonStr)}\` //返回参数
    }`;
    return checkSampleDataStr;
}

// 配置示例模板字符串
export const sampleDataStr = `{
    title: '获取妖币数量', //接口名称
    name: '4zn', //项目名称
    urlName: 'getYbCount', //接口
    type: 'get', //接口类型
    requestJsonStr: \`{
        "type": 1 //类型
    }\`, //请求参数
    responseJsonStr: \`{
        "YbCount": 0, //妖币数量
        "Rate": { //Rate对象
            "Rate1": 1, // Rate1
            "Rate2": 2 // Rate1
        },
        "List": [] //列表
    }\` //返回参数
}`;
// url: "/api/4zn/getYbCount",
// requestParams
// responseParams