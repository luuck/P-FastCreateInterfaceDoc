import { tableConfigPc } from './table-data-pc.js';
import { tableConfigMobile } from './table-data-m.js';
import { tableConfigAdmin } from './table-data-admin.js';
import { handleToMdJson, handleDemo } from './handle-to-md-json.js';

function _getResponseData(o) {
    return o.responseParams != null && Object.keys(o.responseParams).length > 0 ? o.responseParams : null;
}

function _handleDescription(o, id) {
    const _md = `
### 接口${id}:${o.title} \n
**简要描述：** \n
- ${o.title} \n
**请求url：** \n
- \`/api/${o.name}/${o.urlName}\` \n
**请求方式：** \n
- \`${o.type}\`\n`;

    return _md;
}

function _handleParams(o) {
    const rData = {
        Code: 0,
        Data: _getResponseData(o),
        Message: ''
    };
    const _md = `
**请求参数：**
${handleToMdJson(o.requestParams, 1, o.requestJsonStr)}
**请求示例：**
\`\`\`
${handleDemo(o.requestParams)} \n
\`\`\`
**返回参数：**
${handleToMdJson(o.responseParams, 2, o.responseJsonStr)} \n
**返回示例：**
\`\`\`
${JSON.stringify(rData, null, 2)} \n
\`\`\``;

    return _md;
}

function _convert(o, id) {
    const md = _handleDescription(o, id) + _handleParams(o);
    return md;
}

// 单个生成
function handleToMd(row) {
    let arr = [];
    arr.push(row);
    // 封装成数组处理
    return handleToMdArr(arr);
}

// 多个生成
function handleToMdArr(arr) {
    let arrConfig = [tableConfigPc, tableConfigMobile, tableConfigAdmin];
    let md = '';
    arr.forEach(element => {
        let id = element.id;
        let type = element.type == 'pc' ? 1 : (element.type == 'mobile' ? 2 : 3); // pc, mobile, admin
        // console.log(arrConfig[type - 1][id - 1]);
        md += _convert(arrConfig[type - 1][id - 1], id);
    });
    return md;
}

export { handleToMd, handleToMdArr }