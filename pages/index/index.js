//index.js  页面逻辑

var ajax = require("../../ajax/ajax.js");

var app = getApp()
Page( {
  data: { 
    guard:'../../image/guard.png',
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
    financial_list:null, 
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
    var that = this

    //赋值 理财列表 
    ajax.getFinancial(function(arr){  
         console.log(arr.data.data);  
         var  totalGoldWeight = arr.data.data.totalGoldWeight; 
         console.log();   
         var brr    = (Math.floor(11068760598/1000) +"").split("");
         var length = brr.length;
         var  ton   = brr.slice(0,length-6);
         var  Kg    = brr.slice(length-6,length-3);
         var  gram  = brr.slice(length-3,length);  
         
         console.log(ton);    
         console.log(Kg);    
         console.log(gram);    
         that.setData({
            golds_financial: arr.data.data.depositPromotionList,
            images: arr.data.data.bannerList,
            marketPrice:arr.data.data.marketPrice,
            ton:ton,Kg:Kg,gram:gram,
         });
    });
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
