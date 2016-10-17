// 必须是 https 请求~  ( 否则上线不过 )
// setData()  参数不超过 1024kb 
//页面的生命周期 相同 
//支付体系  会员体系  

//获取常用数据列表
function getFinancial(callback)
{
    wx.request({
      url: 'http://op.juhe.cn/onebox/exchange/query?key=775b6f435f5967f55170ea58f5c40806',
      header: {
          'Content-Type': 'application/json'
      },
      success: function(res) {
        //数据处理
        callback(res)
      }
    })
}
 
module.exports = { 
  getFinancial: getFinancial, 
}