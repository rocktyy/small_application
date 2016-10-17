//index.js
//获取应用实例
var app = getApp()
Page( {
  data: {
    // 轮播
    images: [ 
       {image:'https://img.g-banker.com/data/test/banner/W87F6WX5_20160902144227.png',url:'https://www.baidu.com'},
       {image:'https://img.g-banker.com/data/test/banner/O5XL5W67_20160909195324.png',url:'234'} 
    ], 
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 1200,
    // nav
    navs: [
      {
        image: 'https://img.g-banker.com/data/online/icon/JTOZFQWK_20160721193055.png',
        title: '每天挖金矿',
        text: '最高100mg'
      }, {
        image: 'http://static.huangjinqianbao.com/static/img/icon/icon_index_invite_20151210001.png',
        title: '邀请好友',
        text: '轻松月入上万'
      } 
    ],
    // item
    items: [
      {image: 'https://img.g-banker.com/data/online/banner/B5OP3IX5_20160722154737.png'}, 
    ],
    // 黄金&理财产品 
    golds_financial: [
      {
        rate:'273.64',
        srcType:'2',
      },
      { 
        image: 'https://img.g-banker.com/data/online/banner/B5OP3IX5_20160722154737.png',
        srcType:'3',
      },
      {
        rateText: '6.0%',
        srcType:'4',
      }
    ],
    ton:10,
    Kg:969,
    gram:845,
    pro_img:'',
  },

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo( {
      url: '../logs/logs'
    })
  },
  swiperchange: function(e) {
    //FIXME: 当前页码
    //console.log(e.detail.current)
  },

  onLoad: function() {
    console.log( 'onLoad' )
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo( function( userInfo ) {
      //更新数据
      that.setData( {
        userInfo: userInfo
      })
    })
  },
  go: function(event) {
    console.log(event);
    wx.navigateTo({
      url:  event.target.dataset.url
    })
  }, 
  gos: function(event) {
    wx.navigateTo({
      url: '../template/index?type=' + event.currentTarget.dataset.type
    })
  },
  buy:function(event) {
    //购买
  },
})