var util= require("../../utils/util.js");
var api=require("../../config/api.js");

var app = getApp();
var calendar = app.globalData.calendarCallback;



Page({
  data: {
    userInfo: {},
    date: "",
    datetime: "",
    week: "",
    bannerImgs: [],
    saleDayObj: { "isSubscribe": true, "canSaleDay": 75, "subscribe": 23, "saleDay": 52, "saleBeginDate": "2019-04-18"},
    depCity: {
      name: "上海",
      id: "1325",
      showName: "上海",
      station: "",
      stationId: ""
    },
    desCity: {
      name: "苏州",
      id: "1229",
      showName: "苏州",
      station: "",
      stationId: ""
    },
    refid: wx.getStorageSync("refid") || "",
    busRecentData: [],
    announceList: [],
    showUserAgreement: !1
  },
  onLoad: function() {
    this.setData({
      showUserAgreement: !~~wx.getStorageSync("showUserAgreement")
    }), this.data.showUserAgreement && wx.hideTabBar({
      animation: !0
    }), this.fnIsShowAgreementPop(), setTimeout(function() {
      app.globalData.calendarCallback = !1;
    }, 450), this.initCityData(), this.getSaleDay(), this.getAnnounceList(), this.getBannerData();
  },
  onShow: function() {
    this.initCalendar(), this.initCityData(), this.initHistoryData();
  },
  
  goCalendar: function() {
    var t = this.data;
    wx.navigateTo({
      url: "../calendar/calendar?selectedDate=" + t.datetime + "&saleDay=" + JSON.stringify(t.saleDayObj)
    });
  },
  initCalendar: function() {
    var t = wx.getStorageSync("selectedDate"),
      month =  util.formatNumber(t.month), 
      day = util.formatNumber(t.day),
      i = util.isEmpty(t) ? -1 : [t.year, month , day].join("-");
      console.log("date:",i);
    if (i> util.formatTime(new Date())){
      console.log("date1:", i);
      this.setData({
        date: [month, day].join("月")+"日",
        week: "周" + t.week,
        recentdate: t.recentdate || "",
        datetime: [t.year, month, day].join("-")
      });
    }else {
      var n = new Date();
      this.setData({
        date: util.formatDateToSimple(n),
        week: util.formatDateToWeek(n),
        recentdate: "今天",
        datetime: util.formatTime(n)
      }), wx.setStorageSync("selectedDate", {
        day: n.getDate(),
        month: n.getMonth()+1,
        recentdate: "今天",
        week: n.getDay(),
        year: n.getFullYear()
      });
    }
  },
  initCityData: function() {
    var t = wx.getStorageSync("busDepCity"),
      e = wx.getStorageSync("busDesCity");
      this.setData({
        depCity:t,
        desCity:e
      });
      console.log(t,e);
    
    
    // calendar && util.setEvent("", "DLSY07", "^出发城市:" + t.name + "^到达城市:" + e.name + "^"),
    //   (0, util.isEmpty)(t) || this.setData({
    //     depCity: t
    //   }), (0, util.isEmpty)(e) || this.setData({
    //     desCity: e
    //   }), this.getSaleDay();
  },
  initHistoryData: function() {
    var t = wx.getStorageSync("busRecentData");
    this.setData({
      busRecentData: t
    });
  },
  changeCity: function() {
    this.setData({
        depCity: this.data.desCity,
        desCity: this.data.depCity
      }), this.getSaleDay(), wx.setStorageSync("busDepCity", this.data.depCity), wx.setStorageSync("busDesCity", this.data.desCity);
      // util.setEvent("", "DLSY02", "");
  },
  getSaleDay: function() {
    // var t = this,
    //   e = this.data;
    // (0, o.$http)(d.default.busGetSaleDay, {
    //   departure: e.depCity.name,
    //   destination: e.desCity.name
    // }).then(function(e) {
    //   console.log(e), wx.setStorageSync("busSaleDays", e), wx.setStorageSync("busNormalSaleDays", e.saleDay),
    //     t.setData({
    //       saleDayObj: e
    //     });
    // }).catch(function() {
    //   t.setData({
    //     saleDayObj: {}
    //   }), wx.setStorageSync("busSaleDays", {}), wx.setStorageSync("busNormalSaleDays", 0);
    // });
  },
  goDepCity: function() {
    var t = this.data;
    wx.navigateTo({
      url: "../city/city?selectedCity=" + t.depCity.showName
    });
  },
  goDesCity: function() {
    var t = this.data;
    wx.navigateTo({
      url: "../city/city?selectedCity=" + t.desCity.showName + "&depCity=" + JSON.stringify(t.depCity)
    });
  },
  setLocCityData: function(t) {
    var e = wx.getStorageSync("busRecentData") || [],
      a = e.findIndex(function(e) {
        return e.depCity.id == t.depCity.id && e.desCity.id == t.desCity.id;
      }); 
      -1 < a && e.splice(a, 1), e.unshift({
      depCity: t.depCity,
      desCity: t.desCity
    }), e = e.slice(0, 3), wx.setStorageSync("busRecentData", e);
  },
  getAnnounceList: function() {
    // var t = this,
    //   e = this.data;
    // (0, o.$http)(d.default.getAnnounceList, {
    //   departureCityName: e.depCity.name,
    //   departureStationName: e.depCity.station ? e.depCity.station.replace(/-/, "") : "",
    //   pageType: "firstPage",
    //   projectId: 0,
    //   supplierId: "",
    //   channelId: ""
    // }).then(function(e) {
    //   t.setData({
    //     announceList: (0, o.isEmpty)(e) ? [] : e
    //   });
    // }).catch(function() {
    //   t.setData({
    //     announceList: []
    //   });
    // });
  },
  showNotice: function(t) {
    var e = t.currentTarget.dataset;
    (0, o.alert)(e.title, "温馨提示", !1, "", "我知道了");
  },
  getBannerData: function() {
    // var t = this;
    // this.data;
    // (0, o.$http)(d.default.getAdvertListById, {
    //   projectId: 1,
    //   advertid: "001",
    //   channelId: ""
    // }).then(function(e) {
    //   t.setData({
    //     bannerImgs: e || []
    //   });
    // }).catch(function() {});
  },
  goPage: function(t) {
    var e = t.currentTarget.dataset,
      a = this.data.bannerImgs[e.index],
      i = (0, o.isEmpty)(a) ? "" : a.link;
    wx.navigateTo({
      url: "/pages/webview/webview?src=" + encodeURIComponent(i)
    });
  },




  // 搜索汽车票按钮按钮，跳转到汽车票列表上
  goList: function(t) {
    var data = this.data;
    t.detail;
    // if (!wx.getStorageSync("tongcheng.unionid")) {
      // var a = "/pages/bus/webapp/list/list?fromcity=" + data.depCity.name + "&tocity=" + data.desCity.name + "&date=" + data.datetime + "&saledays=" + data.saleDayObj.saleDay + "&wxrefid=" + data.refid;
      // a = "/pages/bus/webapp/list/list?fromcity=" + data.depCity.name + "&tocity=" + data.desCity.name + "&date=" + data.datetime + "&fromstation=" + (e.depCity.searchName || "") + "&tostation=" + (e.desCity.searchName || "") + "&pid=&bfCityId=" + e.depCity.id + "&btCityId=" + e.desCity.id,
      //   this.setLocCityData(e), 
      //   r.default.setEvent(y.index, "DLSY05", "^出发城市:" + e.depCity.name + "^到达城市:" + e.desCity.name + "^渠道Refid:[" + e.refid + "]^"),
        wx.navigateTo({
          url: "/pages/bus/webapp/list/list?fromcity=" + data.depCity.name + "&tocity=" + data.desCity.name + "&date=" + data.datetime
        });
    // } 
    // else
    //   wx.navigateTo({
    //     url: "/pages/getAuthInfo/getAuthInfo"
    //   });
  },
  setRecentCity: function(t) {
    // var e = t.currentTarget.dataset.index,
    //   a = this.data.busRecentData[e];
    //   this.setData({
    //     busRecentData:a
    //   })
    //   wx.setStorageSync("busDepCity", a.depCity);
    //   wx.setStorageSync("busDesCity", a.desCity);
  },
  fnIsShowAgreementPop: function() {
    wx.getStorageSync("isShowAgreementPop");
  },
  onShareAppMessage: function() {
    return {
      title: "买车票就上同程汽车票！省心、更放心！",
      path: "/pages/index/index"
    };
  },
  btnAgree: function() {
    this.setData({
      showUserAgreement: !1
    }), wx.showTabBar({
      animation: !0
    }), wx.setStorageSync("showUserAgreement", 1);
  },
  fnShowAgreement: function(t) {
    var e = t.currentTarget.dataset;
    wx.navigateTo({
      url: "/pages/userAgreement/userAgreement?id=" + e.id
    });
  },
  formBookingBtn: function(t) {
    var e = t.detail.formId;
    console.log(e), (0, util.saveFormid)(e, "首页", "", "首页");
  },
  btnShipUv: function() {
    r.default.setEvent(y.index, "DLSY06", "^推荐内容:船票^");
  }
})