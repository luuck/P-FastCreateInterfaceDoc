let tableDataMobile = [];
let tableConfigMobile = [];

let setTableDataMobile = function(val) {
    tableDataMobile = val;
}

let setTableConfigMobile = function(val) {
    tableConfigMobile = val;
}

export {
    // 移动端端表格数据
    tableDataMobile,
    setTableDataMobile,
    // 移动端端配置项数据
    tableConfigMobile,
    setTableConfigMobile
}