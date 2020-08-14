const computedBehavior = require('miniprogram-computed')

Component({
  behaviors: [computedBehavior],
  data: {
    userInfo: "",
    menu: [],
    select: [], // 勾选结果
    selectAll: false,
    selectResult: "selectResult",
    resetMenu:[],
    showGetUserInfoBtn: false,
    btnText: "收起",
    hideFooter: false,
  },
  attached: function () {
    const that = this;
    wx.getSetting({
      success(res) {
        console.log(res)
        if (!res.authSetting['scope.userInfo']) {
          console.log("未设置用户")
          that.setData({
            showGetUserInfoBtn: true
          })
        }else {
          wx.getUserInfo({
            success: function (res) {
              console.log(res.userInfo)
              that.setData({
                userInfo: res.userInfo
              })
              wx.showToast({
                title: `欢迎${that.data.userInfo.nickName}`,
                icon: 'success',
                duration: 2000
              })
            }
          })
          that.setData({
            showGetUserInfoBtn: false
          })
        }
      }
    })
    this.getMenu();
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
    toggleFooter: function() {
      let hideFooter = !this.data.hideFooter;
      let btnText = hideFooter ? "展开" : "收起";
      this.setData({
        hideFooter: hideFooter,
        btnText: btnText
      })
    },
    getMenu: function () {
      wx.showLoading({
        title: '加载中',
      })
      wx.cloud.callFunction({
        name: 'getMenu',
        data: {
          
        }
      }).then(res => {
        console.log("getMenu: ", res)
        this.setData({
          menu: JSON.parse(JSON.stringify(res.result.data)),
          resetMenu: JSON.parse(JSON.stringify(res.result.data))
        })
        wx.hideLoading()
      }).catch(err => {
        console.error(err)
        wx.hideLoading()
      })
    },
    onGotUserInfo(e) {
      console.log("onGotUserInfo",e)
      if (e.detail.errMsg === "getUserInfo:fail auth deny") {
        wx.showToast({
          title: "请设置用户名",
          icon: 'success',
          duration: 2000
        })
      }else {
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
        this.setData({
          showGetUserInfoBtn: false
        })
      }
      
    },
    checkboxAllChange(e) {
      console.log('checkboxAllChange', e)
      console.log("this.data: ", this.data)
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
          
          if (items[i]["_id"] == values[j]) {
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
      this.submit();
    },
    submit() {
      console.log("submit")
      const data = {
        user: this.data.userInfo,
        select: this.data.select
      }
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
            if (newSelect[i]["_id"] === item["_id"]) {
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
            if (newSelect[i]["_id"] === item["_id"]) {
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
