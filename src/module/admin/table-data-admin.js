let tableDataAdmin = [];
let tableConfigAdmin = [];

let setTableDataAdmin = function(val) {
    tableDataAdmin = val;
}

let setTableConfigAdmin = function(val) {
    tableConfigAdmin = val;
}

export {
    // 后台管理表格数据
    tableDataAdmin,
    setTableDataAdmin,
    // 后台管理配置项数据
    tableConfigAdmin,
    setTableConfigAdmin
}