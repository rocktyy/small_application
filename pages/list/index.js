Page({
  data: {
    title: '',
    items: [{"title":"理财","price":302,"unit":"元","imgs":["https://img.g-banker.com/data/test/banner/W87F6WX5_20160902144227.png"]}]
  },
  //事件处理函数
  onLoad: function (options) {
    this.title = options.type || '列表'
  },
  go: function(event) {
    console.log(event.currentTarget.dataset.type);
    wx.navigateTo({
      url: '../template/index?type=' + event.currentTarget.dataset.type
    })
  },
  onReady: function () {
    wx.setNavigationBarTitle({
      title: this.title
    })
  },
})
