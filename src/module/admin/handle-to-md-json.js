// 生成的实例模板结构 ++++++++++++++++++++++++++++++++++++++++
const requestFormate = `
|名称|必选|类型|默认值|说明|限制长度说明|
|:----    |:---|:----- |-----   |-----   |-----   |
| yfID |string  |是 | "" | 用户ID   |-   |
| czxt |int  | 是 | 不限 | 操作系统 |-  |
| yxId |int  |否 | "" | 游戏ID |- |
`;

const resonpeFormate = `
|名称|类型|说明|限制长度说明|
|:-------|:-------|:-------|:-------|
| lb |Array  | 数据列表 |- |
| yxsx | string| 游戏缩写 |- |
| gxsj | int| 更新时间 |- |
`;
// 生成的实例模板结构 ++++++++++++++++++++++++++++++++++++++++

const tabRequestTop = `
|名称|必选|类型|默认值|说明|限制长度说明|
|:----    |:---|:----- |-----   |-----   |-----   |
`;
const tabResponseTop = `
|名称|类型|说明|限制长度说明|
|:-------|:-------|:-------|:-------|
`;
const tabDataType = {
    number: { type: 'number', must: '是', default: 0, about: '', limit: '-' },
    string: {
        type: 'string',
        must: '是',
        default: '""',
        about: '',
        limit: '-'
    },
    boolean: { type: 'bool', must: '是', default: true, about: '', limit: '-' },
    object: {
        type: 'object',
        must: '是',
        default: '{}',
        about: '-',
        limit: '-'
    },
    array: { type: 'array', must: '是', default: '[]', about: '', limit: '-' }
};
// const singleNote = '/(?:^|\n|\r)\s*\/\/.*(?:\r|\n|$)/g';
// const rNote = /((^|[^"':\s])\/\/.*$)|((^|[^"':\s])\/\*(.|\s)*?\*\/)/g;
const dataNoteRe = {
    other: {
        re: '":(?:[^}]*?),(?:/{2})?(.*?)"',
        re1: '":(?:[^}]*?)(?:/{2})(.*?)}'
    },
    object: {
        re: '":(?:[^}]*?)},(?:/{2})?(.*?)"',
        re1: '":(?:[^}]*?)}(?:/{2})(.*?)}'
    },
    array: {
        re: '":(?:[^}]*?)],(?:/{2})?(.*?)"',
        re1: '":(?:[^}]*?)(?:/{2})(.*?)}'
    }
};

// MarKDown类
class MarKDown {
    constructor(json, n, jsonStr) {
        this.html = '';
        this.preLine = 0; // 横线
        this.arrPre = []; // 横线数组
        this.jsonType = n; // n=1:请求参数，n=2:返回参数
        this.jsonData = json; //console.log(jsonStr);
        this.valData = jsonStr.replace(/\s+/g, ""); // console.log(_json);
        return this;
    }

    getM(noteType, name, objStr) {
        // 特别说明，匹配中括号的时候，需要多加一个转义符号，如这样：\\[
        let reg = noteType === 'object' ? '\"' + name + '\"\:\{\/\/' : '\"' + name + '\"\:\\[\{\/\/';
        let mStr = new RegExp(reg, 'i');
        let d = mStr.exec(objStr);
        let m = objStr.split(d[0])[1].concat().split('\"')[0];
        return m;
    }

    //获得说明
    getNote(name, val) {
        let noteType = 'other';
        const _isObj = Object.prototype.toString.call(val);

        if (_isObj === '[object Object]') {
            noteType = 'object';
        } else if (_isObj === '[object Array]') {
            noteType = 'array';
        }

        var re = new RegExp('"' + name + dataNoteRe[noteType].re, 'i');
        var re1 = new RegExp('"' + name + dataNoteRe[noteType].re1, 'i');
        var m = re.exec(this.valData) || re1.exec(this.valData);

        if (noteType === 'object') {
            return this.getM(noteType, name, this.valData);
        }

        // console.log('************');
        let mark = '';
        if (noteType === 'array') {
            let _regExp = new RegExp('\"' + name + '\"\:', 'i');
            let d = _regExp.exec(this.valData);
            mark = this.valData.split(d[0])[1].substr(0, 2);
            // console.log('$$$m:' + mark);
        }

        if (mark === '[{') {
            return this.getM(noteType, name, this.valData);
        }

        // console.log('m------------:');
        // console.log(name);
        // console.log(val);
        // console.log(this.valData);
        // console.log('正则匹配：' + re.exec(this.valData));
        // console.log('\n\n');
        return m ? decodeURI(m[1]) : '';
    }

    getHtmlReq(_typeOfJson, i, _jsonData) {
        // console.log(this.getNote(i, _jsonData[i]) + '\n\n');
        return `| ${i} |${tabDataType[_typeOfJson].type} | ${tabDataType[_typeOfJson].must } | ${tabDataType[_typeOfJson].default} | ${this.getNote(i,_jsonData[i] )} | ${tabDataType[_typeOfJson].limit} | \n`;
    }

    getHtmlRes(_typeOfJson, i, _jsonData) {
        return `| ${i} |${tabDataType[_typeOfJson].type} | ${this.getNote(i,_jsonData[i])} | ${tabDataType[_typeOfJson].limit}  | \n`;
    }

    handleNotObject(isNotObject, _typeOfJson, i, _jsonData) {
        if (isNotObject && this.jsonType === 1) {
            this.html += this.getHtmlReq(_typeOfJson, i, _jsonData);
        } else if (isNotObject && this.jsonType === 2) {
            this.html += this.getHtmlRes(_typeOfJson, i, _jsonData);
        }
    }

    eachJsonData(o) {
        var _jsonData = o || this.jsonData;
        // console.log(_jsonData);

        for (const i in _jsonData) {
            // this.getNote(i, _jsonData[i]);
            let _typeOfJson = typeof _jsonData[i];
            const isNotObject = _typeOfJson === 'number' || _typeOfJson === 'boolean' || _typeOfJson === 'string';

            // 非object处理
            this.handleNotObject(isNotObject, _typeOfJson, i, _jsonData);
            // object处理
            if (_typeOfJson === 'object' && _jsonData[i] !== null) {
                const _isObj = Object.prototype.toString.call(_jsonData[i]);

                _isObj === '[object Object]' ? _typeOfJson = 'object' : _typeOfJson = 'array';

                this.preLine++;
                this.arrPre = [];

                // 如果数组是非对象数组的话，前边不需要加上'-'线
                let noteTypeIsObj = Object.prototype.toString.call(_jsonData[i]) == '[object Object]';
                let noteOneTypeIsObj = Object.prototype.toString.call(_jsonData[i][0]) == '[object Object]';
                if (!noteTypeIsObj && !noteOneTypeIsObj) {
                    this.preLine--;
                }

                for (let j = 0; j < this.preLine; j++) {
                    this.arrPre.push('—');
                }
                const _prel = this.arrPre.concat('').toString().replace(/\,/g, '');

                // console.log(_isObj);

                if (i != 0) {
                    // |- List|object|是|{}|Object|-|
                    this.html += `|${_prel} ${i} | ${tabDataType[_typeOfJson].type} | ${this.getNote(i,_jsonData[i])} | ${tabDataType[_typeOfJson].limit} | \n`;
                    // ${tabDataType[_typeOfJson].about}
                    // ${this.getNote(i,_jsonData[i])}
                }
                // 如果数组是对象的数组的话，才进行循环遍历，否则不遍历；或者是对象的话也进行循环遍历
                if (noteTypeIsObj || noteOneTypeIsObj) {
                    this.eachJsonData(_jsonData[i]);
                }
                this.preLine--;
            }
        }
    }

    handleJson() {
        var isNull = this.jsonData != null && Object.keys(this.jsonData).length > 0;

        if (!isNull) {
            this.html += '暂无\n';
        } else {
            this.jsonType === 1 ? this.html += tabRequestTop : this.html += tabResponseTop;
            this.eachJsonData();
        }
        return this.html;
    }
}

// 处理表格数据
function handleToMdJson(json, n, jsonStr) {
    return new MarKDown(json, n, jsonStr).handleJson();
}

// 处理示例demo
function handleDemo(json) {
    var isNull = json != null && Object.keys(json).length > 0;

    if (isNull) {
        return JSON.stringify(json, null, 2);
    }
    return '{}';
}

export { handleToMdJson, handleDemo }