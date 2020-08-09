const computedBehavior = require('miniprogram-computed')

Component({
  behaviors: [computedBehavior],
  data: {
    userInfo: "",
    customerList: [{
            id: 0,
            name: "小蕊",
        },
        {
            id: 1,
            name: "小英",
        },
        {
            id: 2,
            name: "Bella",
        },
        {
            id: 3,
            name: "iwen",
        },
        {
            id: 4,
            name: "温娴",
        }, {
            id: 5,
            name: "金辉",
        }, {
            id: 6,
            name: "姜姜",
        }, {
            id: 7,
            name: "张琰",
        },
    ],
    menu: [{
            checked: false,
            id: 0,
            name: "玉米",
            num: "1根",
            cost: 3, // 成本价
            count: 1, // 份数
        },
        {
          checked: false,
            id: 1,
            name: "胡萝卜",
            num: "半根",
            cost: 0.7, // 成本价
            count: 1, // 份数
        },
        {
          checked: false,
            id: 2,
            name: "南瓜",
            num: "3片",
            cost: 0.6, // 成本价
            count: 1, // 份数
        },
        {
          checked: false,
            id: 3,
            name: "豆腐",
            num: "3片",
            cost: 1, // 成本价
            count: 1, // 份数
        },
        {
          checked: false,
            id: 4,
            name: "荷兰豆",
            num: "5片",
            cost: 1, // 成本价
            count: 1, // 份数
        },
        {
          checked: false,
            id: 5,
            name: "木耳",
            num: "3片",
            cost: 1, // 成本价
            count: 1, // 份数
        },
        {
          checked: false,
            id: 6,
            name: "酸奶",
            num: "1杯",
            cost: 1.725, // 成本价
            count: 1, // 份数
        },
        {
          checked: false,
            id: 7,
            name: "紫薯",
            num: "1根",
            cost: 3.5, // 成本价
            count: 1, // 份数
        },
        {
          checked: false,
            id: 8,
            name: "西芹",
            num: "1根",
            cost: 1, // 成本价
            count: 1, // 份数
        }, {
          checked: false,
            id: 9,
            name: "西蓝花",
            num: "3棵",
            cost: 1, // 成本价
            count: 1, // 份数
        }, {
          checked: false,
            id: 10,
            name: "鸡胸肉",
            num: "125克",
            cost: 3.5, // 成本价
            count: 1, // 份数
        },
        {
          checked: false,
            id: 11,
            name: "香菇",
            num: "3片",
            cost: 0.5, // 成本价
            count: 1, // 份数
        },
        {
          checked: false,
            id: 12,
            name: "小番茄",
            num: "3个",
            cost: 0.5, // 成本价
            count: 1, // 份数
        },
        {
          checked: false,
            id: 13,
            name: "洋葱",
            num: "几片",
            cost: 0.2, // 成本价
            count: 1, // 份数
        }, {
          checked: false,
            id: 14,
            name: "生菜",
            num: "3片",
            cost: 0.5, // 成本价
            count: 1, // 份数
        }, {
          checked: false,
            id: 15,
            name: "虾仁",
            num: "5个",
            cost: 3, // 成本价
            count: 1, // 份数
        }, {
          checked: false,
            id: 16,
            name: "黄瓜",
            num: "1/3根",
            cost: 0.5, // 成本价
            count: 1, // 份数
        },
        {
          checked: false,
            id: 17,
            name: "口蘑",
            num: "3个",
            cost: 1, // 成本价
            count: 1, // 份数
        },
        {
          checked: false,
            id: 18,
            name: "芦笋",
            num: "3根",
            cost: 1, // 成本价
            count: 1, // 份数
        },
        {
          checked: false,
            id: 19,
            name: "菠菜",
            num: "3根",
            cost: 1, // 成本价
            count: 1, // 份数
        }, {
          checked: false,
            id: 20,
            name: "秋葵",
            num: "3根",
            cost: 0.6, // 成本价
            count: 1, // 份数
        },
        {
          checked: false,
            id: 21,
            name: "鸡蛋",
            num: "1个",
            cost: 1, // 成本价
            count: 1, // 份数
        },
    ],
    select: [], // 勾选结果
    selectAll: false,
    selectResult: "selectResult",
    resetMenu: [{
      checked: false,
      id: 0,
      name: "玉米",
      num: "1根",
      cost: 3, // 成本价
      count: 1, // 份数
  },
  {
    checked: false,
      id: 1,
      name: "胡萝卜",
      num: "半根",
      cost: 0.7, // 成本价
      count: 1, // 份数
  },
  {
    checked: false,
      id: 2,
      name: "南瓜",
      num: "3片",
      cost: 0.6, // 成本价
      count: 1, // 份数
  },
  {
    checked: false,
      id: 3,
      name: "豆腐",
      num: "3片",
      cost: 1, // 成本价
      count: 1, // 份数
  },
  {
    checked: false,
      id: 4,
      name: "荷兰豆",
      num: "5片",
      cost: 1, // 成本价
      count: 1, // 份数
  },
  {
    checked: false,
      id: 5,
      name: "木耳",
      num: "3片",
      cost: 1, // 成本价
      count: 1, // 份数
  },
  {
    checked: false,
      id: 6,
      name: "酸奶",
      num: "1杯",
      cost: 1.725, // 成本价
      count: 1, // 份数
  },
  {
    checked: false,
      id: 7,
      name: "紫薯",
      num: "1根",
      cost: 3.5, // 成本价
      count: 1, // 份数
  },
  {
    checked: false,
      id: 8,
      name: "西芹",
      num: "1根",
      cost: 1, // 成本价
      count: 1, // 份数
  }, {
    checked: false,
      id: 9,
      name: "西蓝花",
      num: "3棵",
      cost: 1, // 成本价
      count: 1, // 份数
  }, {
    checked: false,
      id: 10,
      name: "鸡胸肉",
      num: "125克",
      cost: 3.5, // 成本价
      count: 1, // 份数
  },
  {
    checked: false,
      id: 11,
      name: "香菇",
      num: "3片",
      cost: 0.5, // 成本价
      count: 1, // 份数
  },
  {
    checked: false,
      id: 12,
      name: "小番茄",
      num: "3个",
      cost: 0.5, // 成本价
      count: 1, // 份数
  },
  {
    checked: false,
      id: 13,
      name: "洋葱",
      num: "几片",
      cost: 0.2, // 成本价
      count: 1, // 份数
  }, {
    checked: false,
      id: 14,
      name: "生菜",
      num: "3片",
      cost: 0.5, // 成本价
      count: 1, // 份数
  }, {
    checked: false,
      id: 15,
      name: "虾仁",
      num: "5个",
      cost: 3, // 成本价
      count: 1, // 份数
  }, {
    checked: false,
      id: 16,
      name: "黄瓜",
      num: "1/3根",
      cost: 0.5, // 成本价
      count: 1, // 份数
  },
  {
    checked: false,
      id: 17,
      name: "口蘑",
      num: "3个",
      cost: 1, // 成本价
      count: 1, // 份数
  },
  {
    checked: false,
      id: 18,
      name: "芦笋",
      num: "3根",
      cost: 1, // 成本价
      count: 1, // 份数
  },
  {
    checked: false,
      id: 19,
      name: "菠菜",
      num: "3根",
      cost: 1, // 成本价
      count: 1, // 份数
  }, {
    checked: false,
      id: 20,
      name: "秋葵",
      num: "3根",
      cost: 0.6, // 成本价
      count: 1, // 份数
  },
  {
    checked: false,
      id: 21,
      name: "鸡蛋",
      num: "1个",
      cost: 1, // 成本价
      count: 1, // 份数
  },], // 初始菜单，重置用
  },
  attached: function () {
    // wx.getSetting({
    //   success(res) {
    //     console.log(res)
    //     if (!res.authSetting['scope.userInfo']) {
    //       wx.openSetting({
    //         success (res) {
    //           console.log(res.authSetting)
    //           // res.authSetting = {
    //           //   "scope.userInfo": true,
    //           //   "scope.userLocation": true
    //           // }
    //           if(res.authSetting['scope.userInfo']) {
    //             wx.getUserInfo({
    //               success: function(res) {
    //                 console.log(res.userInfo)
    //               }
    //             })
    //           }
    //         }
    //       })
    //       wx.authorize({
    //         scope: 'scope.userInfo',
    //         success () {
    //           wx.getUserInfo({
    //             success: function(res) {
    //               console.log(res.userInfo)
    //             }
    //           })
    //         }
    //       })
    //     }
    //   }
    // })
   },
  computed: {
    cost: function (data) {
      let sum = 0;
      for (let i = 0; i <data.select.length; i++) {
          sum +=data.select[i].cost *data.select[i].count;
      }
      return sum;
    },
    selectResult: function(data) {
      if (data.select.length > 0) {

          let result = data.userInfo.nickName ? `${data.userInfo.nickName}: ` : "神秘人请点击最上方按钮设置用户名：";
          for (let i = 0; i < data.select.length; i++) {
              result += `${data.select[i].name}*${data.select[i].count};`
          }
          return `${result} 成本总价：${data.cost} 实收：${data.cost + 5}`;
      }else {

        return ""
      }
    }
  },
  methods: {
    onGotUserInfo(e) {
      console.log(e)
      /***
       * userInfo:
          avatarUrl: "https://wx.qlogo.cn/mmopen/vi_32/vLcy2OH8iaydKy7ruQ0tuxX2AmSfibuhmCHoHVPfqbticvWhxLXhTt6XfW2ksPw9CRo7BoaO3lGiaKjXjiaDhGZrYIQ/132"
          city: ""
          country: "Iceland"
          gender: 1
          language: "zh_CN"
          nickName: "Alan"
          province: ""
       * **/
      const userInfo = e.detail.userInfo;
      this.setData({
        userInfo: userInfo
      })
      wx.showToast({
        title: `欢迎${userInfo.nickName}`,
        icon: 'success',
        duration: 2000
      })
    },
    checkboxAllChange(e) {
      console.log(e)
      const values = e.detail.value
      if(values.length > 0) {
        // 全选
        for(let i = 0;i < this.data.menu.length;i++) {
          this.data.menu[i].checked = true;
        }
        this.setData({
          select: this.data.menu,
          menu: this.data.menu,
          selectAll: true
        })
      }else {
        // 取消全选
        for(let i = 0;i < this.data.menu.length;i++) {
          this.data.menu[i].checked = false;
        }
        this.setData({
          select: [],
          menu: this.data.menu,
          selectAll: false
        })
      }
    },
    checkboxChange(e) {
      console.log('checkbox发生change事件，携带value值为：', e)
      console.log("this.data: " ,this.data)
      const items = this.data.menu
      const values = e.detail.value
      let select = [];
      for (let i = 0, lenI = items.length; i < lenI; ++i) {
        items[i].checked = false
  
        for (let j = 0, lenJ = values.length; j < lenJ; ++j) {
          
          if (items[i].id == values[j]) {
            console.log("items[i]: ", items[i])
          console.log("values[j]: ", JSON.stringify(values[j]))
            items[i].checked = true
            select.push(items[i])
            break
          }
        }
      }
  
      this.setData({
        menu: items,
        select: select
      })
      // this.setData({
      //   select: select
      // })
    },
    copy() {
      wx.setClipboardData({
        data: this.data.selectResult,
        success (res) {
          wx.getClipboardData({
            success (res) {
              console.log(res.data) // data
            }
          })
        }
      })
    },
    mi(e) {
      console.log("min")
      console.log(e)
      let item = e.currentTarget.dataset.item;
      let index = e.currentTarget.dataset.index;
      let newCount = item.count - 0.5;
      // let newMenu = this.data.menu;
      let newSelect = this.data.select;
      if (newCount < 0) {
          return;
      } else {
          // let newItem = {
          //     checked: item.checked,
          //     id: item.id,
          //     name: item.name,
          //     num: item.num,
          //     cost: item.cost, // 成本价
          //     count: newCount, // 份数
          // }
          // newMenu[index] = newItem;
          this.setData({
          [`menu[${index}].count`]: newCount
          })
          // Vue.set(this.menu, index, newItem)
          for (let i = 0; i < newSelect.length; i++) {
              if (newSelect[i].id === item.id) {
                  // newSelect[i] = newItem
                  this.setData({
                    [`select[${i}].count`]: newCount
                  })
                  // Vue.set(this.select, i, newItem)
                  return;
              }
          }
      }
    },
    add(e) {
      console.log("add")
      console.log(e)
      let item = e.currentTarget.dataset.item;
      let index = e.currentTarget.dataset.index;
      let newCount = item.count + 0.5;
      // let newMenu = this.data.menu;
      let newSelect = this.data.select;
      if (newCount < 0) {
          return;
      } else {
          // let newItem = {
          //     checked: item.checked,
          //     id: item.id,
          //     name: item.name,
          //     num: item.num,
          //     cost: item.cost, // 成本价
          //     count: newCount, // 份数
          // }
          // newMenu[index] = newItem;
          this.setData({
            [`menu[${index}].count`]: newCount
          })
          // Vue.set(this.menu, index, newItem)
          for (let i = 0; i < newSelect.length; i++) {
              if (newSelect[i].id === item.id) {
                  // newSelect[i] = newItem
                  this.setData({
                    [`select[${i}].count`]: newCount
                  })
                  // Vue.set(this.select, i, newItem)
                  return;
              }
          }
      }
    },
    reset() {
      console.log("reset")
      console.log(this.data.resetMenu)
      const strResetMenu = JSON.stringify(this.data.resetMenu)
      const objResetMenu = JSON.parse(strResetMenu)
      this.setData({
        menu: objResetMenu,
        select: [],
        selectAll: false,
      })
  },
  }
})
