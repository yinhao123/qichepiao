var app = getApp();


Page({
  data: {},
  getUserInfo: function(n) {
    // var t = n.detail;
    // t.userInfo && (wx.setStorageSync("wxuserinfo", t), (0, o.getUnionId)().then(function() {
    //   e.globalData.isAuth = !0, wx.navigateBack();
    // }).catch(function() {}));
  app.getUserInfo();

  wx.login({
    success(res){
      if(res.code){
        console.log(res.code);
        wx.request({
          url: 'http://ticket-api.toqidian.com/api/login',
          data:{
            code:res.code
          },
          method:'POST',
          success(res){
            console.log(res.data)
          }
        })
        
      }
    }
  })
  
  wx.navigateBack();

  },
  onLoad: function() {}
})