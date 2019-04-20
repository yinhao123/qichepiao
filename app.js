var util = require('./utils/util.js');
var common = require('./common.js');

App({
  onLaunch: function(n) {
    console.log("OnLaunch", n), this.getUserInfo(), n.scene && (this.globalData.scene = n.scene),
      wx.removeStorageSync("refid"), n.wxrefid ? wx.setStorageSync("refid", n.wxrefid) : wx.setStorageSync("refid", 319527329),
      wx.onNetworkStatusChange(function(n) {
        var e = -1 < ["2g", "3g"].indexOf(n.networkType);
        n.isConnected && e ? wx.showToast({
          title: "当前网络比较缓慢",
          icon: "none",
          duration: 2e3
        }) : !n.isConnected && wx.showToast({
          title: "当前网络已中断",
          icon: "none",
          duration: 2e3
        });
      });
  },
  getUserInfo: function() {
    var that=this;

    wx.getSetting({
      success(res){
        if(res.authSetting['scope.userInfo']){
          wx.getUserInfo({
            success(res){
              that.globalData.isAuth=!0,
              that.globalData.userInfo=res.userInfo
            }
          })
        }
      }
    })
    // var n = this;
    // (0, o.getOpenid)().then(function(e) {
    //   e.unionId || (n.globalData.isAuth = !0, wx.navigateTo({
    //     url: "/pages/getAuthInfo/getAuthInfo"
    //   }));
    // }).catch(function() {});
  },
  globalData: {
    userInfo: null,
    scene: null,
    isAuth: !1,
    onLoadPts: {},
    calendarCallback: function(n) {
      n.success && n.success(ds);
    }
  }
})