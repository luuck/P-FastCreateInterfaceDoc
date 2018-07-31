let tableDataPc = [];
let tableConfigPc = [];

let setTableDataPc = function(val) {
    tableDataPc = val;
}

let setTableConfigPc = function(val) {
    tableConfigPc = val;
}

export {
    // PC端表格数据
    tableDataPc,
    setTableDataPc,
    // PC端配置项数据
    tableConfigPc,
    setTableConfigPc
}