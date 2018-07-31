// pc的公用的接口
export const configPc = [{
        title: '获取活动初始化信息', //接口名称
        name: 'xxx', //项目名称
        urlName: 'getActInfos', //接口
        type: 'get', //接口类型
        requestJsonStr: `{}`, //请求参数
        responseJsonStr: `{
            "ActList": [{ //活动信息
                "ActId": 0, //活动编号
                "ActName": "活动一", //活动名称
                "Status": 0, //状态
                "StartTime": 0, //活动开始时间
                "EndTime": 0 //活动结束时间
            }],
            "ServerTimeStamp": 0 //服务器时间,时间戳
        }` //返回参数
    },
    {
        title: '获取奖励记录',
        name: 'xxx',
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
            }]
        }`
    },
    {
        title: '获取获奖名单',
        name: 'xxx',
        urlName: 'getLastestLotteryRecord',
        type: 'get',
        requestJsonStr: `{
        }`,
        responseJsonStr: `{
            "UserName": "c***ele", //用户名
            "PrizeName": "100妖豆豆" //奖励名称
        }`
    },
    {
        title: '获取奖励结果',
        name: 'xxx',
        urlName: 'getLottery',
        type: 'post',
        requestJsonStr: `{
        }`,
        responseJsonStr: `{
            "PrizeId": 1, //与后端约定的奖励ID值
            "PrizeName": "100妖豆豆" //奖励名称
        }`
    },
    {
        title: '获取当前用户等级',
        name: 'xxx',
        urlName: 'getVipGrade',
        type: 'get',
        requestJsonStr: `{
        }`,
        responseJsonStr: `{
            "VipGrade": 1 //vip等级
        }`
    },
    {
        title: '妖豆豆兑换妖券',
        name: 'xxx',
        urlName: 'yddExchange',
        type: 'get',
        requestJsonStr: `{
        }`,
        responseJsonStr: `{
        }`
    },
    {
        title: '获取妖豆豆数量',
        name: 'xxx',
        urlName: 'getYddCount',
        type: 'get',
        requestJsonStr: `{
        }`,
        responseJsonStr: `{
             "YddCount": 1 //妖豆豆数量
        }`
    },
    {
        title: '获取妖币数量',
        name: 'xxx',
        urlName: 'getYbCount',
        type: 'get',
        requestJsonStr: `{
        }`,
        responseJsonStr: `{
            "YbCount": 1 //妖币数量
        }`
    },
    {
        title: '获取抽奖次数',
        name: 'xxx',
        urlName: 'getLotteryCount',
        type: 'get',
        requestJsonStr: `{
        }`,
        responseJsonStr: `{
            "Count": 1 //抽奖次数
        }`
    },
    {
        title: '获取用户银两',
        name: 'xxx',
        urlName: 'getSilver',
        type: 'post',
        requestJsonStr: `{
        }`,
        responseJsonStr: `{
            "Silver": 312312 //用户银两数目
        }`
    }
];

/*{
    title: '',
    name: 'xxx',
    urlName: '',
    type: 'get',
    requestJsonStr: `{
    }`,
    responseJsonStr: `{
    }`
}*/