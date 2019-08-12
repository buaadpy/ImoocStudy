var express = require('express');
var router = express.Router();

const data = {
    "goodType": "娱乐影音",
    "goodList": [{
            "goodId": "YLYY01",
            "goodImg": 9,
            "goodTitle": "这个电饭煲看起来不错啊买买买多买几个啊",
            "goodPrice": 1100,
            "goodStar": 5
        },
        {
            "goodId": "YLYY02",
            "goodImg": 10,
            "goodTitle": "高大上的曲面电视放在家里会特别有面子呀不要错过",
            "goodPrice": 3377,
            "goodStar": 5
        },
        {
            "goodId": "YLYY03",
            "goodImg": 11,
            "goodTitle": "粉粉的耳机可以买来送女朋友呀音质不错价格公道哟",
            "goodPrice": 169,
            "goodStar": 4
        },
        {
            "goodId": "YLYY04",
            "goodImg": 12,
            "goodTitle": "头戴式主动降噪蓝牙耳机吃鸡专用戴上就听不见外面的声音了",
            "goodPrice": 125,
            "goodStar": 3
        },
        {
            "goodId": "YLYY05",
            "goodImg": 13,
            "goodTitle": "这个橙色的看不出到底是个什么玩意儿鸭买就对辣",
            "goodPrice": 59,
            "goodStar": 3
        },
        {
            "goodId": "YLYY06",
            "goodImg": 14,
            "goodTitle": "这个粉色的也看不出到底是个什么玩意儿鸭买就对辣",
            "goodPrice": 58,
            "goodStar": 3
        },
        {
            "goodId": "YLYY07",
            "goodImg": 15,
            "goodTitle": "卖数据线卖数据线卖数据线卖数据线卖数据线卖数据线卖数据线卖数据线卖数据线卖数据线卖数据线卖数据线卖数据线",
            "goodPrice": 13,
            "goodStar": 4
        },
        {
            "goodId": "YLYY08",
            "goodImg": 16,
            "goodTitle": "乐视的耳机嘿嘿嘿乐视的耳机嘿嘿嘿乐视的耳机嘿嘿嘿乐视的耳机嘿嘿嘿乐视的耳机嘿嘿嘿乐视的耳机嘿嘿嘿",
            "goodPrice": 333,
            "goodStar": 5
        }
    ]
}

router.get('/', function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.json({
        status: '0',
        result: data
    })
});

module.exports = router;