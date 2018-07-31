// pc的公用的接口
export const configPc = [{
        title: '获取妖币数量',
        name: '4zn',
        urlName: 'getYbCount',
        type: 'get',
        requestJsonStr: `{
            "type": 1, //类型
            "type1": 2 //类型1
        }`,
        responseJsonStr: `{
            "YbCount": 0, //妖币数量
            "List": { //列表List
                "A": "aaaa", //A类型
                "B": 2, //B类型
                "C": { //列表C
                    "XXX": 3424 //XXX
                },
                "C2": { //列表C2
                    "XXX343": "xxx434" //XXX343
                },
                "D": 432423 //D类型
            }
        }`
    },
    {
        title: '获取奖励记录',
        name: '4zn',
        urlName: 'getRewardlist',
        type: 'get',
        requestJsonStr: `{
            "PageIndex": 1, //当前页码
            "PageSize": 5 //当前页长
        }`,
        responseJsonStr: `{
            "RecordCount": 0, //总的页数
            "List": [{ //List的数组对象
                "Id":1, //Id
                "PrizeName": "100-10元豆券", //奖项名称
                "PrizeDate": "12-01 12：00", //奖励时间
                "PrizeAbout": "" //备注
            }],
            "AAA": "As" // AAA类型
        }`
    },
    {
        title: '获取妖币数量', //接口名称
        name: '4zn', //项目名称
        urlName: 'getYbCount', //接口
        type: 'get', //接口类型
        requestJsonStr: `{
            "type": 1 //类型
        }`,
        responseJsonStr: `{
            "YbCount": 0, //妖币数量
            "List": [1,2,3], //列表数组
            "Ad": 1 //AD类型
        }`
    }
];