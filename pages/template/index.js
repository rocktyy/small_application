Page({
  data: {
    title: '详情页',
    userInfo: {avatarUrl:'../../image/logo.png',nickName:'黄金钱包'},
    text:'买黄金比传统金店价更低,纯正的原料价格，没有一分加价'
  },
  //事件处理函数
  onLoad: function (options) {
    this.title = options.type || '详情页'
  },
  onReady: function () {
    wx.setNavigationBarTitle({
      title: '详情页'
    })
  },
})
