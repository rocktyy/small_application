Page({
  data: {
    title: '',
    items: [{"mprice":0,"maxpacks":100,"price":12800,"subcate":210,"remains":998,"type":1,"freight":0,"title":"理财","imgs":["https://img.g-banker.com/data/test/banner/W87F6WX5_20160902144227.png"],"id":302,"quantity":"1"}]
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
