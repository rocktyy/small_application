// 必须是 https 请求~  ( 否则上线不过 )
// setData()  参数不超过 1024kb 
//页面的生命周期 相同 
//支付体系  会员体系  
//获取 理财数据列表
function getFinancial(callback)
{
    wx.request({
      url: 'https://api.huangjinqianbao.com/server/info/getHomeInfo',
      header: {
          'Content-Type': 'application/POST', 
          'version': '3.4.0',
          'channel': 'gbanker_web',
          'deviceId': '3B3ED2F8716379836800F17FF703DF49',
          'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1;SV1)',
          'userAgent':'Mozilla/5.0 (Linux; Android 6.0.1; MI 4LTE Build/MMB29M; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/51.0.2704.81 Mobile Safari/537.36',
          'scene': 'Android',
          'platform': 'Phone',
      },
      data:{
        "telephone":"15675100418",
        'sessionId': 'c0e207e6a69c4109a70508653bd8a89c'
      },
      success: function(res) {
        //数据处理
        callback(res)
      }
    })
}


module.exports = {  
  getFinancial:getFinancial
}