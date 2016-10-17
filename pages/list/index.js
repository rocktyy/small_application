Page({
  data: {
    title: '',
    items: [{"mprice":0,"maxpacks":100,"price":12800,"subcate":210,"remains":998,"type":1,"freight":0,"title":"北京油鸡（小公鸡）","imgs":["https://hamlet.b0.upaiyun.com/1609/22170/362ba7ea685440e5891d6f6c661d0552.jpg"],"unit":"只","id":302,"quantity":"1"}]
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
