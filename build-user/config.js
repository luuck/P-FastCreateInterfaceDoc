module.exports = {
    chunk: false, //是否开启动态chunk 默认false 开启后 页面上会出现 var configBaseUrl = '<configBaseUrl>';
    assetsPublicPath: './', // 只能为 ‘/’ 或 ‘./’
    baseUrl: '//static.tcy365[webport]', //项目资源根目录 [webport] 后缀标识符 默认不修改
    appUrl: '/', //项目路径  如   /mobile/test/
    px2rem: null,//{ rootValue: 100 }, //px2rem 转换内容 如 { rootValue: 100 } 非rem项目 使用null
    list: [
        { title: '1505-stable', webPort: '.org:1505' },
        { title: '1507-test', webPort: '.org:1507' },
        { title: '1506-develop', webPort: '.org:1506' },
        { title: '2505-pre', webPort: '.com:2505' },
        { title: '80-static', webPort: '.com' }
    ],
    proxy: {
        '/api': { //印射为/api
            target: 'http://yapi.tcy365.org:3000/mock/123/', // 接口域名
            // target: 'http://yapi.demo.qunar.com/mock/13937/',
            changeOrigin: true, //是否跨域
            pathRewrite: {
                '^/api': '/api' //需要rewrite的,
            }
        }
    },
    host: 'localhost', // 测试版host
    port: 1506 // 测试版端口号
};
