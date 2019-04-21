var app = getApp();
var util = require('../../../../utils/util.js');
var api = require('../../../../config/api.js')

Page({
  info: {
    runningTimer: ""
  },
  data: {
    pid: "",
    pidAddTime: "",
    refid: "",
    header: {},
    queryDate: new Date().getTime(),
    fromCity: "",
    toCity: "",
    depCId: 0,
    desCId: 0,
    flagId: "",
    todayYMD: util.formatTime(new Date()),
    saleDayObj: {
      isSubscribe: !1,
      canSaleDay: 30,
      subscribeDay: 0,
      saleDay: 30,
      saleBeginDate: util.formatTime(new Date())
    },
    endDate: "",
    sixDayArrs: [],
    saleDayObj: { "isSubscribe": true, "canSaleDay": 75, "subscribe": 23, "saleDay": 52, "saleBeginDate": "2019-04-18" },
    loading: true,
    page: 0,
    totalPage: 1,
    busList: [],
    scrollTop: 0,
    scrollTopTemp: 0,
    isShowNoMore: !1,
    renderList: [],
    isShowFilter: !1,
    isHasStation: 1,
    urlFStation: "",
    urlTStation: "",
    fromStation: "",
    toStation: "",
    timeSpan: "",
    isUserChange: !1,
    activeCat: "",
    departureStation: [],
    arrivalStation: [],
    dptTimeSpan: [],
    filterTop: 0,
    recommendMsg: "",
    isShowDisInfo: !1,
    subPriceRiseRatio: 0,
    announceList: [],
    isShowNotice: !1,
    isShowNoResult: !1,
    noResultTxt: ["暂未查到当日可售汽车票", "您可以重新查询试试"],
    showRunning: !1,
    firstLoad: !0,
    isChangeSelected: false
  },
  onLoad: function(option) {
    var that = this;

  },

  ReInitCalendar: function(option) {
    var that = this;
    console.log("ReInitCalendar");

    if (!that.data.isChangeSelected) {
      var result = [];
      var now = new Date(that.data.queryDate);
      for (var i = 0; i < 6; i++) {

        var oneDay = {
          showDate: util.formatDateToSimple(now),
          date: util.formatTime(now),
          weekend: util.formatTime(now) == that.data.todayYMD ? "今天" : util.formatDateToWeek(now),
          isSelected: util.formatTime(now) == util.formatTime(new Date(that.data.queryDate)),
          canSelect: true
        }
        now.setDate(now.getDate() + 1);
        result.push(oneDay);
      }
      that.setData({
        sixDayArrs: result
      });
    } else {
      that.setData({
        sixDayArrs: option,
        isChangeSelected: false
      })

    }


  },

  // fnInitCalender: function(t) {
  //   var e = this;
  //   console.log("fnInitCalender");
  //   for (var a = [], i = this.data.endDate, n = this.fnCreateOneDay(util.addTime(t, "-1D"), this.data.queryDate), o = 0; 10 >= o; o++) {
  //     var r = util.addTime(t, (5 >= o ? -1 * o : o - 5) + "D"),
  //       s = this.fnCreateOneDay(r, t);
  //     5 >= o ? a.unshift(s) : a.push(s);
  //   }
  //   var d = a.findIndex(function(t) {
  //       return t.date == i;
  //     }),
  //     u = a.findIndex(function(t) {
  //       return t.date == e.data.saleDayObj.saleBeginDate;
  //     });
  //   6 <= this.data.saleDayObj.saleDay ? -1 < d && 4 > d - 5 ? (a.splice(d + 1), a.splice(0, a.length - 6)) : n.canSelect ? (a.splice(0, 4),
  //     a.pop()) : a.splice(0, 5) : (a.splice(0, u), a.splice(6)), this.setData({
  //     queryDate: util.addTime(t, "0D").getTime(),
  //     sixDayArrs: a
  //   });
  // },
  // fnCreateOneDay: function(t, e) {
  //   var a = this.data.saleDayObj.saleBeginDate,
  //     i = this.data.endDate,
  //     n = util.formatTime(new Date(t)),
  //     o = util.formatTime(new Date(t));
  //   return {
  //     showDate: util.formatDateToSimple(t),
  //     date: n,
  //     weekend: n == this.data.todayYMD ? "今天" : util.formatDateToWeek(t),
  //     isSelected: n == o,
  //     canSelect: t.getTime() >= util.parseDate(a).getTime() && t.getTime() <= util.parseDate(i).getTime()
  //   };
  // },
  fnResetPageTop: function() {
    this.setData({
      busList: [],
      page: 0,
      totalPage: 1,
      scrollTop: 0,
      scrollTopTemp: 0
    });
  },
  fnGetScheduleFail: function(t) {
    t.header;
    var e = t.body;
    if (!c.isEmpty(e) && c.isEmpty(e.schedule) && e.hasOwnProperty("dataSource") && void 0 !== e.dataSource) switch (e.dataSource) {
      case "Invalid Line":
      case "Invalid_Line":
        this.data.noResultTxt = ["暂未开通网上售票", "您可以试试其他出行方案"];
        break;

      case "No_Schedule":
      case "The_Day_No_Schedule":
        this.data.noResultTxt = ["暂未查到当日可售班次", "您可以试试其他出行方案"];
    }
    this.setData({
      busList: [],
      isShowFilter: !1,
      isShowNoResult: !0
    }), this.fnResetPageTop();
  },
  fnDealFilter: function(t) {
    var e = this,
      a = t.category,
      i = {
        departureStation: [],
        arrivalStation: [],
        dptTimeSpan: []
      };
    for (var n in a)(function(n) {
      0 == n || 4 == n || a[n].category.forEach(function(o, r) {
        "全部车站" == o && (o = "不限");
        var s, d;
        switch (a[n].categoryName) {
          case "出发站":
            s = "departureStation", d = "fromStation";
            break;

          case "到达站":
            s = "arrivalStation", d = "toStation";
            break;

          case "发车时段":
            s = "dptTimeSpan", d = "timeSpan";
        }
        /RecommendMsg:/gi.test(t.dataSource) ? i[s].push({
          id: r,
          name: function() {
            var t = "";
            switch (o) {
              case "凌晨":
                t = "凌晨(00:00-06:00)";
                break;

              case "上午":
                t = "上午(06:00-12:00)";
                break;

              case "下午":
                t = "下午(12:00-18:00)";
                break;

              case "晚上":
                t = "晚上(18:00-24:00)";
                break;

              default:
                t = o;
            }
            return t;
          }(),
          selected: "不限" == o
        }) : i[s].push({
          id: r,
          name: function() {
            var t = "";
            switch (o) {
              case "凌晨":
                t = "凌晨(00:00-06:00)";
                break;

              case "上午":
                t = "上午(06:00-12:00)";
                break;

              case "下午":
                t = "下午(12:00-18:00)";
                break;

              case "晚上":
                t = "晚上(18:00-24:00)";
                break;

              default:
                t = o;
            }
            return t;
          }(),
          selected: function(t) {
            return "凌晨" === o ? o = 1 : "上午" === o ? o = 2 : "下午" === o ? o = 3 : "晚上" === o && (o = 4),
              t.data[d].length ? !!(-1 < t.data[d].split(",").indexOf(o + "")) : "不限" == o;
          }(e)
        });
      });
    })(n);
    this.setData({
      departureStation: i.departureStation,
      arrivalStation: i.arrivalStation,
      dptTimeSpan: i.dptTimeSpan
    });
  },
  getDictionaryCity: function() {
    var t = this;
    wx.request({
      url: d.getDictionaryCity,
      data: {},
      method: "GET",
      header: t.data.headers,
      success: function(e) {
        var a = e.data;
        a.header.isSuccess && !c.isEmpty(a.body) && t.setData({
          proofingCity: a.body
        });
      },
      fail: function() {},
      complete: function() {}
    });
  },
  btnToBook: function(t) {
    var e = this,
      a = t.currentTarget.dataset.indexlist,
      i = e.data.busList[a],
      n = i.canBooking,
      s = "";
      wx.setStorageSync("bus_Info",i);
    wx.navigateTo({
      url: "/pages/bus/webapp/booking/booking"
    });

  },

  btnSelectDate: function(t) {
    var that = this;
    var e = t.currentTarget.dataset.index,
      day = this.data.sixDayArrs[e];
    console.log(day);
    var l = [];
    for (var i = 0; i < 6; i++) {
      that.data.sixDayArrs[i].isSelected = false;
      day.isSelected = true;
    }
    that.setData({
      isShowNoResult: !1,
      isChangeSelected: true,
      queryDate: util.formatTime(new Date(day.date))
    })

    var i = new Date(day.date);
    wx.setStorageSync("_selectedDate", {
      year: i.getFullYear(),
      month: i.getMonth() + 1,
      day: 9 < i.getDate() ? i.getDate() : "0" + i.getDate(),
      recentdate: "",
      week: util.formatDateToWeek(i)
    })
    this.ReInitCalendar(that.data.sixDayArrs);
    this.getBusList();
  },

  btnToCalendar: function(t) {
    var that = this;
    util.loading(), setTimeout(function() {
      wx.hideToast();
    }, 300);
    var t = wx.getStorageSync("busSaleDays")||{};
    console.log("saleDay",JSON.stringify(that.data.saleDayObj));
    this.data.queryDate && wx.navigateTo({
      url: "/pages/calendar/calendar?selectedDate=" + util.formatTime(new Date(that.data.queryDate)) + "&saleDay=" + JSON.stringify(that.data.saleDayObj) + "&page=list"
    });
  },

  btnActive: function(t) {
    var e = t.currentTarget.dataset.cat;
    // this.data.activeCat == e ? this.btnHideMask() : ("departureStation" === e ? o.default.setEvent(r.list, "DLLB05") : "arrivalStation" === e ? o.default.setEvent(r.list, "DLLB06") : "dptTimeSpan" === e && o.default.setEvent(r.list, "DLLB07"),
    this.setData({
      activeCat: e,
      isShowFilter: !0,
      isShowMask: !0,
      renderList: this.data[e],
      filterTop: 0
    });
  },
  btnHideMask: function() {
    this.setData({
      isShowFilter: !1,
      isShowMask: !1,
      activeCat: "",
      renderList: [],
      filterTop: 0
    });
  },
  btnSelecteOption: function(t) {
    var e, a = t.currentTarget.dataset.idx,
      i = this.data.renderList[a].name,
      n = !this.data.renderList[a].selected,
      o = this.data.renderList.filter(function(t) {
        return t.selected;
      }).length;
    if ("不限" == i && 0 == n && 1 == o) return !1;
    if (this.setData((e = {}, e["renderList[" + a + "].selected"] = n, e)), n)
      if ("不限" == i) {
        var r = this.data.renderList;
        r.forEach(function(t) {
          "不限" != t.name && (t.selected = !1);
        }), this.setData({
          renderList: r
        });
      } else {
        var s;
        this.setData((s = {}, s["renderList[0].selected"] = !1, s));
      }
  },
  btnSure: function() {
    var t;
    this.setData((t = {}, t["" + this.data.activeCat] = this.data.renderList, t.isShowNoResult = !1,
      t.isUserChange = !0, t));
    var e = this.data.departureStation.filter(function(t) {
        return "不限" != t.name && t.selected;
      }),
      a = this.data.arrivalStation.filter(function(t) {
        return "不限" != t.name && t.selected;
      }),
      i = this.data.dptTimeSpan.filter(function(t) {
        return "不限" != t.name && t.selected;
      }),
      n = e.map(function(t) {
        return t.name;
      }).join(","),
      o = a.map(function(t) {
        return t.name;
      }).join(","),
      r = i.map(function(t) {
        return t.id;
      }).join(",");
    (n != this.data.fromStation || o != this.data.toStation || r != this.data.timeSpan) && (this.setData({
      fromStation: n,
      toStation: o,
      timeSpan: r
    }), this.reqBusList({
      method: "filterParam"
    })), this.btnHideMask();
  },
  btnCancel: function() {
    this.btnHideMask();
  },
  btnCloseTips: function() {
    this.setData({
      isShowDisInfo: !1
    });
  },
  btnShowAnnounce: function(t) {
    var e = t.currentTarget.dataset.title,
      a = t.currentTarget.dataset.src || "http://img1.40017.cn/touch/bus/PC/notice_top.png";
    this.setData({
      isShowNotice: !0,
      curText: e,
      announceImg: a
    }), o.default.setEvent(r.list, "DLLB02");
  },
  btnCloseAnnouncePop: function() {
    this.setData({
      isShowNotice: !1
    });
  },
  btnToIndex: function() {
    wx.switchTab({
      url: "/pages/index/index"
    });
  },
  btnShowRunTime: function() {
    var t = this;
    this.data.showRunning = !this.data.showRunning, this.setData({
      showRunning: this.data.showRunning
    }), this.data.showRunning && (this.info.runningTimer && clearTimeout(this.info.runningTimer),
      this.info.runningTimer = setTimeout(function() {
        t.setData({
          showRunning: !1
        });
      }, 5e3));
  },
  btnCloseRunning: function() {
    this.setData({
      showRunning: !1
    });
  },
  evListScroll: function(t) {
    this.btnCloseRunning(), this.setData({
      scrollTopTemp: t.detail.scrollTop
    });
  },
  evBusLower: function() {
    this.reqBusList({
      method: "scrollLoad"
    });
  },
  formListBtn: function(t) {
    var e = t.detail.formId;
    console.log(e), util.saveFormid(e, "订汽车票", "", "班次列表页");
  },
  initCalendar: function() {

    // var t = this.data.firstLoad ? wx.getStorageSync("selectedDate") : util.isEmpty(wx.getStorageSync("_selectedDate")) ? wx.getStorageSync("selectedDate") : wx.getStorageSync("_selectedDate"),
    //   e = util.isEmpty(t) ? -1 : new Date([t.year, util.formatNumber(t.month), util.formatNumber(t.day)].join("-")).getTime();
    // try {
    //   if (util.formatTime(new Date(this.data.queryDate)) == [t.year, t.month, t.day].join("-")) return void this.setData({
    //     firstLoad: !1
    //   });
    // } catch (t) {}
    // if (this.data.isUserChange && this.setData({
    //     fromStation: "",
    //     toStation: "",
    //     timeSpan: ""
    //   }), t && 0 < e - new Date().getTime())
    //    this.setData({
    //   date: [t.year, util.formatNumber(t.month), util.formatNumber(t.day)].join("-"),
    //   week: "周" + t.week,
    //   recentdate: t.recentdate || "",
    //   datetime: [t.year, t.month, t.day].join("-"),
    //   queryDate: [t.year, t.month, t.day].join("-")
    // });
    // else {
    //   var a = new Date();
    //   this.setData({
    //     date: util.formatTime(a),
    //     week: util.formatDateToWeek(a),
    //     recentdate: "今天",
    //     datetime: a.getTime(),
    //     queryDate: a.getTime()
    //   }), wx.setStorageSync("_selectedDate", {
    //     day: a.getDate(),
    //     month: a.getMonth()+1,
    //     recentdate: "今天",
    //     week: util.formatDateToWeek(a),
    //     year: a.getFullYear()
    //   });
    // }
    // this.fnInitCalender(this.data.queryDate);
    var t = wx.getStorageSync("selectedDate");
    var date = [t.year, t.month, t.day].join('-');
    this.setData({
      queryDate: new Date(date).getTime()
    })

    this.ReInitCalendar(this.data.queryDate);
    // console.log("firstLoad", this.data.firstLoad), this.data.firstLoad || (this.fnInitCalender(this.data.queryDate),
    //   this.reqBusList({
    //     method: "queryDate"
    //   })), this.setData({
    //   firstLoad: !1
    // });
  },

  getBusList: function() {
    var that = this;
    util.loading(), setTimeout(function() {
      wx.hideToast();
    }, 300);

    var bList = [];

    wx.request({
      url: api.TicketsUrl,
      method: 'GET',
      data: {
        start_city: '上海',
        arrival_city: '北京',
        departure_date: util.formatTime(new Date(that.data.queryDate))
      },
      header: {
        "Content-Type": "json"
      },
      success(res) {
        
        for(var i=0;i<res.data.data.length;i++){
           var bus = {
          scheduleId: res.data.data[i].id,
          dptStation: res.data.data[i].start_station,
          arrStation: res.data.data[i].arrival_station,
          coachType: res.data.data[i].title,
          ticketPrice: res.data.data[i].ticket_price,
          coachNo: res.data.data[i].moto_num,
          dptTime: res.data.data[i].departure_time,
          runTime: res.data.data[i].arrival_time,
          dptDate: util.formatDateToSimple(new Date(that.data.queryDate)),
          canBooking: true,
          bookingType: 2
        };
          bList.push(bus);
        }
       
        console.log(bus);
        
        that.setData({
          busList: bList
        });
      }
    });


  },

  openMap: function(t) {
    var e = t.currentTarget.dataset.index,
      a = this.data.busList[e].dptStation,
      i = [],
      n = {},
      s = this;
    this.data.busList.forEach(function(t) {
      i.push({
        depStation: t.dptStation,
        scheduleNo: t.scheduleNo,
        ticketPrice: t.ticketPrice
      }), t.dptStationInfo && 0 != t.dptStationInfo.Latitude && (n[t.dptStation] = t.dptStationInfo,
        n[t.dptStation].station = t.dptStation, n[t.dptStation].departure = s.data.fromCity);
    }), wx.setStorageSync("allStation", JSON.stringify(n)), wx.setStorageSync("mapTmp", JSON.stringify({
      station: a
    })), o.default.setEvent(r.list, "DLLB03"), wx.navigateTo({
      url: "/pages/bus/webapp/notices/notices?pagename=map"
    });
  },
  showMsgTip: function() {
    util.alert(this.data.recommendMsg, "温馨提示", !1, "", "我知道了");
  },
  onReady: function() {},
  onShow: function() {
    this.initCalendar();
    this.getBusList();
    var t = wx.getStorageSync("bus-selectStation") || "";
    t && this.setData({
      fromStation: t,
      isUserChange: !0
    }), wx.removeStorageSync("bus-selectStation"), app.globalData.isAuth && (app.globalData.isAuth = !1,
      this.onLoad(app.globalData.onLoadPts));
  },
  onHide: function() {},
  onUnload: function() {},
  onPullDownRefresh: function() {},
  onReachBottom: function() {},
  onShareAppMessage: function() {
    return {
      title: "买车票就上同程汽车票！省心、更放心！",
      path: "/pages/index/index"
    };
  }
})