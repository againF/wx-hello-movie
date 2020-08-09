// pages/order/order.js
Component({

})

// Page({

//   /**
//    * 页面的初始数据
//    */
//   data: {
//     user: "",
//     customerList: [{
//             id: 0,
//             name: "小蕊",
//         },
//         {
//             id: 1,
//             name: "小英",
//         },
//         {
//             id: 2,
//             name: "Bella",
//         },
//         {
//             id: 3,
//             name: "iwen",
//         },
//         {
//             id: 4,
//             name: "温娴",
//         }, {
//             id: 5,
//             name: "金辉",
//         }, {
//             id: 6,
//             name: "姜姜",
//         }, {
//             id: 7,
//             name: "张琰",
//         },
//     ],
//     menu: [{
//             id: 0,
//             name: "玉米",
//             num: "1根",
//             cost: 3, // 成本价
//             count: 1, // 份数
//         },
//         {
//             id: 1,
//             name: "胡萝卜",
//             num: "半根",
//             cost: 0.7, // 成本价
//             count: 1, // 份数
//         },
//         {
//             id: 2,
//             name: "南瓜",
//             num: "3片",
//             cost: 0.6, // 成本价
//             count: 1, // 份数
//         },
//         {
//             id: 3,
//             name: "豆腐",
//             num: "3片",
//             cost: 1, // 成本价
//             count: 1, // 份数
//         },
//         {
//             id: 4,
//             name: "荷兰豆",
//             num: "5片",
//             cost: 1, // 成本价
//             count: 1, // 份数
//         },
//         {
//             id: 5,
//             name: "木耳",
//             num: "3片",
//             cost: 1, // 成本价
//             count: 1, // 份数
//         },
//         {
//             id: 6,
//             name: "酸奶",
//             num: "1杯",
//             cost: 1.725, // 成本价
//             count: 1, // 份数
//         },
//         {
//             id: 7,
//             name: "紫薯",
//             num: "1根",
//             cost: 3.5, // 成本价
//             count: 1, // 份数
//         },
//         {
//             id: 8,
//             name: "西芹",
//             num: "1根",
//             cost: 1, // 成本价
//             count: 1, // 份数
//         }, {
//             id: 9,
//             name: "西蓝花",
//             num: "3棵",
//             cost: 1, // 成本价
//             count: 1, // 份数
//         }, {
//             id: 10,
//             name: "鸡胸肉",
//             num: "125克",
//             cost: 3.5, // 成本价
//             count: 1, // 份数
//         },
//         {
//             id: 11,
//             name: "香菇",
//             num: "3片",
//             cost: 0.5, // 成本价
//             count: 1, // 份数
//         },
//         {
//             id: 12,
//             name: "小番茄",
//             num: "3个",
//             cost: 0.5, // 成本价
//             count: 1, // 份数
//         },
//         {
//             id: 13,
//             name: "洋葱",
//             num: "几片",
//             cost: 0.2, // 成本价
//             count: 1, // 份数
//         }, {
//             id: 14,
//             name: "生菜",
//             num: "3片",
//             cost: 0.5, // 成本价
//             count: 1, // 份数
//         }, {
//             id: 15,
//             name: "虾仁",
//             num: "5个",
//             cost: 3, // 成本价
//             count: 1, // 份数
//         }, {
//             id: 16,
//             name: "黄瓜",
//             num: "1/3根",
//             cost: 0.5, // 成本价
//             count: 1, // 份数
//         },
//         {
//             id: 17,
//             name: "口蘑",
//             num: "3个",
//             cost: 1, // 成本价
//             count: 1, // 份数
//         },
//         {
//             id: 18,
//             name: "芦笋",
//             num: "3根",
//             cost: 1, // 成本价
//             count: 1, // 份数
//         },
//         {
//             id: 19,
//             name: "菠菜",
//             num: "3根",
//             cost: 1, // 成本价
//             count: 1, // 份数
//         }, {
//             id: 20,
//             name: "秋葵",
//             num: "3根",
//             cost: 0.6, // 成本价
//             count: 1, // 份数
//         },
//         {
//             id: 21,
//             name: "鸡蛋",
//             num: "1个",
//             cost: 1, // 成本价
//             count: 1, // 份数
//         },
//     ],
//     select: [], // 勾选结果
//     selectAll: false,
//     resetMenu: [], // 初始菜单，重置用
//   },

//   /**
//    * 生命周期函数--监听页面加载
//    */
//   onLoad: function (options) {
//     this.setData({
//       resetMenu: JSON.parse(JSON.stringify(this.data.menu))
//     })
//   },

//   /**
//    * 生命周期函数--监听页面初次渲染完成
//    */
//   onReady: function () {
//   },

//   /**
//    * 生命周期函数--监听页面显示
//    */
//   onShow: function () {

//   },

//   /**
//    * 生命周期函数--监听页面隐藏
//    */
//   onHide: function () {

//   },

//   /**
//    * 生命周期函数--监听页面卸载
//    */
//   onUnload: function () {

//   },

//   /**
//    * 页面相关事件处理函数--监听用户下拉动作
//    */
//   onPullDownRefresh: function () {

//   },

//   /**
//    * 页面上拉触底事件的处理函数
//    */
//   onReachBottom: function () {

//   },

//   /**
//    * 用户点击右上角分享
//    */
//   onShareAppMessage: function () {

//   }
// })