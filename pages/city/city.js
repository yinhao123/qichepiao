Page({
  data: {
    selectedCity: "",
    depCity: {}
  },
  fnBusDepCity: function(e) {
    var t = e.detail;
    console.log("fnBusDepCity", t), wx.setStorageSync("busDepCity", t), 
    // a.default.setEvent(i.index, "DLSY01", "^出发城市:" + t.name + "^"),
      wx.navigateBack();
  },
  fnBusDesCity: function(e) {
    var t = e.detail;
    console.log("fnBusDesCity", t), wx.setStorageSync("busDesCity", t), 
    // a.default.setEvent(i.index, "DLSY03", "^出发城市:" + t.name + "^"),
      wx.navigateBack();
  },
  onLoad: function(e) {
    this.setData({
      selectedCity: e.selectedCity || "",
      depCity: JSON.parse(e.depCity || "{}")
    });
  },
  onShareAppMessage: function() {
    return {
      title: "买车票就上同程汽车票！省心、更放心！",
      path: "/pages/index/index"
    };
  }
})