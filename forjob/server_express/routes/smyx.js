var express = require('express');
var router = express.Router();

const data = {
  "goodType": "数码影像",
  "goodList": [{
      "goodId": "SMYX01",
      "goodImg": 1,
      "goodTitle": "天猫精灵 方糖R智能音箱无线蓝牙音响小型智能AI闹钟家用语音助手",
      "goodPrice": 119,
      "goodStar": 4
    },
    {
      "goodId": "SMYX02",
      "goodImg": 2,
      "goodTitle": "自拍杆拍照神器补光灯通用型苹果7iPhone8x小米oppo华为vivo手机蓝牙遥控",
      "goodPrice": 77,
      "goodStar": 3
    },
    {
      "goodId": "SMYX03",
      "goodImg": 3,
      "goodTitle": "西伯利亚 V10吃鸡游戏耳机头戴式电脑电竞耳麦7.1声道USB台式笔记本手机直播通用",
      "goodPrice": 69,
      "goodStar": 5
    },
    {
      "goodId": "SMYX04",
      "goodImg": 4,
      "goodTitle": "乐视EB50头戴式主动降噪蓝牙耳机无线男生游戏女手机通用型音乐安卓高音质带麦",
      "goodPrice": 120,
      "goodStar": 3
    },
    {
      "goodId": "SMYX05",
      "goodImg": 5,
      "goodTitle": "ROMOSS/罗马仕 10000毫安小巧便携迷你充电宝罗马 仕轻薄移动电源",
      "goodPrice": 59,
      "goodStar": 4
    },
    {
      "goodId": "SMYX06",
      "goodImg": 6,
      "goodTitle": "公牛插座usb插座充电魔方插排插线板接线板多功能家用电源转换器",
      "goodPrice": 35,
      "goodStar": 5
    },
    {
      "goodId": "SMYX07",
      "goodImg": 7,
      "goodTitle": "2019新款Apple/苹果 AirPods 2代配充电盒iPhone手机无线蓝牙耳机",
      "goodPrice": 211,
      "goodStar": 4
    },
    {
      "goodId": "SMYX08",
      "goodImg": 8,
      "goodTitle": "小米AI音箱小爱同学智能音箱小爱mini蓝牙音响小艾同学智能机器人",
      "goodPrice": 277,
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