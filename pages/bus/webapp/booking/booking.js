var api=require('../../../../config/api.js');
! function() {
  require("./../../../../common.js"), wx.webpackJsonp.apply(null, arguments);
}([22], {
  108: function(e, t, a) {
    function s(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    var i, r, n, d = Math.pow,
      o = Math.abs,
      c = s(a(109)),
      u = s(a(5)),
      l = a(14),
      h = getApp(),
      f = a(1).default,
      p = a(0),
      C = "page/bus/webapp/booking/booking",
      y = {
        prevPriceItem: {},
        topspeed: null,
        oneYuan: null,
        refund: null
      },
      g = {},
      v = {},
      b = "";
    Page((r = {
      data: (i = {
          isFirstInto: !0,
          busDetail: "",
          plists: [],
          contactInfo: {},
          contactPhone: "",
          phoneSpace: "",
          localInfo: {},
          openid: "",
          unionid: "",
          memberid: "",
          memberId: "",
          busInfo: {},
          totalPrice: 0,
          isHasInsurance: !1,
          isShowDetail: !1,
          insContentObj: {},
          isShowBaoXianDetail: !1,
          isHasService: !1,
          isHiddenContact: !0,
          servicePrice: 0,
          preferInfo: {},
          havePerferInfo: !1,
          selectedPrefer: !1,
          isAdult: !0,
          adultPriceCount: 0,
          childPriceCount: 0,
          adultCount: 0,
          childCount: 0,
          freeChildCount: 0,
          maxNum: 3,
          headerInfo: {},
          isPeaceTravel: !1,
          isDownArr: !0,
          isOpendetail: !1,
          hasCarCoupon: !1,
          carCoupon: {},
          isOpenCardetail: !1,
          carCouNum: 0,
          hotelCoupon: {},
          hasHotelCoupon: !1,
          isOpenhoteldetail: !1,
          hotelCouNum: 0,
          isShowVip: !0,
          isHasOptSvc: !1,
          isHasExtSvc: !1,
          defaultOpt: {},
          defaultExt: {},
          selectInsOrVA: "未点击",
          forceServiceFee: 0,
          showFSFee: !1,
          isGetCard: !1,
          cardMsg: {},
          selectCode: {},
          isChangeNumber: !1,
          isHasPid: !1,
          stList: [],
          IssueStatus: !1,
          isOpenTicketInfo: !1,
          ticketInfo: {},
          speedPrice: 0,
          isHasSpeed: !1,
          isShowSpeed: !0,
          isShowrefund: !0,
          refundSuixin: !1,
          isShowSuixin: !0,
          ajaxIsShowSuixin: !1,
          refundStatus: !1,
          refundInfo: "",
          refundId: 0,
          refundPice: 0,
          refundPop: !1,
          isRefundChange: !1,
          isRefundOrder: !1,
          LocalgetStrategyData: [],
          mapCoefficient: 0,
          homeDeliveryStatus: !1,
          hasAddress: !1,
          addressInfo: {},
          isOpenSf: !1,
          isSendDoorInfo: !1,
          svcNotice: "",
          sfText: !0,
          isOpenVoucherInfo: !1,
          passengers: [],
          showPassengers: !1,
          fillPassList: [],
          phoneFocus: !1,
          isSupportChild: !1,
          childMaxNum: 2,
          childPrice: 0,
          childPassengers: [],
          showNoAdult: !1,
          supportFreeChild: !1,
          isHiddenCar: !0,
          animationData: {},
          loadingDuration: 1500,
          animateWidth: 0,
          aniDelayTime: 20,
          slectedVAList: [],
          showPop: !1,
          currentTab: 0,
          yxCheckedIndex: 0,
          zzCheckedIndex: 0,
          checkedServiceId: 0,
          offLine: !1,
          czOrYxAndZz: !1,
          defIns: {
            pubID: 0,
            insCusPayTc: 0
          },
          defInsDb: !0,
          defInsMulti: [],
          defInsMultiNoBuy: !1,
          selectValueAddSvc: {},
          insuranceList: [],
          trafficActive: -1,
          destActive: !1,
          busVoucher: {},
          busVoucherIsSel: !1,
          isShowAlter: !1,
          isCheckAlternate: !1,
          isSuggestChoseAlter: !0,
          alterTxt: "无票时更换为临近车次",
          alterTitle: "若该车次无票，可为您提供备选时间的车票",
          alterDay: [],
          alterHour: [],
          isShowCustom: !1,
          alterStartTime: "09:00",
          alterEndTime: "10:00",
          optionSchedulesTimes: [],
          isShowTicketTypeTips: !1,
          categoryRevenue: [],
          speedInfo: "",
          isHasTcPass: !1,
          isHas12306: !1,
          isCheck12306: !0,
          adjustPrice: 0,
          adjustPriceAbs: 0,
          adjustPriceTxt: "出行乐享购 限时立减",
          adjustPriceContent: "",
          prevPriceItem: {},
          pkg: {
            isSpeed: !1,
            isValue: !1,
            isHall: !1
          },
          weather: {},
          allDiscounts: 0,
          subscribeInfoObj: {
            title: "先出票后付款",
            subTitle: "高级预约专属服务",
            isSubscribe: !0
          },
          isSelectedSubscribe: !0,
          vipSubscribe: 0,
          vipSubscribePrice: 0,
          isShowAdFailPop: !1,
          noPaySerialId: "",
          ASisExceedLimit: !1,
          isChannel: !1,
          featureValue: 0,
          homeDelivery: {},
          sortList: {
            insurance: 0,
            vipService: 0,
            voucher: 0,
            function: 0
          },
          vipMsgPop: !1,
          vipMsgInfo: "",
          vipMsgTitle: "",
          refundTime1: "",
          isCanclePay: !1,
          isSimpleBeixuan: "B",
          isSelSimpleBeixuan: !1,
          Simhour: "",
          wdocument: "",
          obtwoDoc: [],
          showMonthCard: !1,
          showMonthOption: !1,
          preferentialCard: {},
          reduceCard_use: {},
          hasBuyCard: !1,
          isSelectedMonthCard: !1,
          discountRuleContent: [],
          isSecStyHeader: "B",
          showSericeCharge: !1,
          serviceMsg: "服务费全网售票平台均收，含技术接入费、短信费等；出票成功后退票服务费不予退还，出票失败将全额退还。",
          sshowType: "",
          setTC: !1,
          ChargeFee: 0,
          insLink: "",
          nowYMD: p.format1(new Date(), "yyyy/MM/dd"),
          isTodaySch: !1,
          showDetTipObj: {},
          saveSTDes: {},
          isShortcutCancel: !1,
          YyStatus: !1,
          YyData: {},
          highPriceCoupon: 0,
          redCardExplain: "",
          reduceCard_buy: {},
          isHasRedCardBuy: !1
        }, i.reduceCard_use = {}, i.isHasRedCardUse = !1, i.ticketPriceLimitUse = !1, i.isSelectedRedCard = !1,
        i.isShowRedCardPop = !1, i.isShowRCUsePop = !1, i.isShowRCDesc = !1, i),
      onLoad: function() {
          var that=this;
        var e, t, a, s = this,
          i = this,
          r = wx.getStorageSync("bus_TicketInfo");
          var bus_Info=wx.getStorageSync("bus_Info");
          var bus={
              dptTime:bus_Info.dptDate+'   '+bus_Info.dptTime,
              dptStation:bus_Info.dptStation,
              arrStation:bus_Info.arrStation
          };
          var pl=[];
          var pass={
              linkerName:'张三',
              IDSpace:13312345678
          }
          pl.push(pass);
          that.setData({
              busInfo:bus,
              plists :pl
          });
        if (console.log(r), r.revenueType) switch (parseInt(r.revenueType)) {
          case 2:
            i.setData((e = {}, e["pkg.isSpeed"] = !0, e));
            break;

          case 3:
            i.setData((t = {}, t["pkg.isValue"] = !0, t));
            break;

          case 4:
            i.setData((a = {}, a["pkg.isHall"] = !0, a));
        }
        wx.hideToast(), wx.removeStorageSync("bus_cardCode"), wx.setStorageSync("bus_offLine_youxuan", ""),
          wx.setStorageSync("bus_offLine_zhizun", ""), wx.getSystemInfo({
            success: function(e) {
              i.setData({
                animateWidth: 82 * e.windowWidth / 100 * 80 / 100 || 180
              });
            }
          }), u.default.setEvent(l.booking, "DLDD19", "^出发城市:" + r.departure + "^到达城市:" + r.destination + "^"),
          i.setData({
            localInfo: r,
            headerInfo: p.setHeader(),
            memberid: wx.getStorageSync("tongcheng.memberid") || "",
            memberId: wx.getStorageSync("tongcheng.memberid") || ""
          }), p.$http(f.autoLogin, {}).then(function() {
            return p.$http(f.getScheduleDetail, {
              scheduleNo: i.data.localInfo.scheduleNo,
              scheduleId: i.data.localInfo.scheduleId,
              supplierId: i.data.localInfo.supplierId,
              dptDate: i.data.localInfo.dptDate,
              departure: i.data.localInfo.departure,
              destination: i.data.localInfo.destination,
              dptStation: i.data.localInfo.dptStation,
              arrStation: i.data.localInfo.arrStation,
              coachNo: i.data.localInfo.coachNo,
              ticketPrice: i.data.localInfo.ticketPrice,
              dptTime: i.data.localInfo.dptTime
            });
          }).catch(function(e) {
            throw console.warn(e), e;
          }).then(function(e) {
            try {
              if (e.week = p.format1(new Date(e.dptDate), "ww"), e.formatDate = e.dptDate.substr(5, 2) + "月" + e.dptDate.substr(8, 2) + "日",
                2 == e.bookingType && i.setData({
                  isCheckAlternate: !1,
                  isSubscrible: !0
                }), e.scheduleTicketType) {
                switch (parseInt(e.scheduleTicketType)) {
                  case 1:
                    e.scheduleTicketType = "儿童票", e.STTDesc = "仅限1.5m以下儿童购买";
                    break;

                  case 2:
                    e.scheduleTicketType = "学生票", e.STTDesc = "需提供本人学生证取票";
                    break;

                  case 3:
                    e.scheduleTicketType = "军人票", e.STTDesc = "仅限军人及残疾人购买";
                    break;

                  case 4:
                    e.scheduleTicketType = "残疾票", e.STTDesc = "仅限军人及残疾人购买";
                    break;

                  case 5:
                    e.scheduleTicketType = "老年票", e.STTDesc = "仅限60周岁以上购买";
                    break;

                  case 6:
                    e.scheduleTicketType = "成人票|儿童票", e.STTDesc = "";
                    break;

                  default:
                    e.scheduleTicketType = "", e.STTDesc = "";
                }!e.STTDesc || i.setData({
                  isShowTicketTypeTips: !0,
                  showSericeCharge: "A" == i.data.isSecStyHeader,
                  serviceMsg: e.STTDesc,
                  sshowType: "Ttype"
                }), n = setTimeout(function() {
                  i.setData({
                    isShowTicketTypeTips: !1,
                    showSericeCharge: !1
                  });
                }, 5e3);
              }
              e.regularDateTime = (e.regularTime || "").replace(/\d+年/, "");
              var t, a = p.format1(new Date(e.dptDateTime), "yyyy/MM/dd") == p.format1(new Date(e.currDateTime.replace(/-/g, "/")), "yyyy/MM/dd"),
                s = "";
              a ? (t = e.dptDateTime - (60 * e.refundAheadHour * 60 * 1e3 + 60 * e.refundAheadMinus * 1e3),
                  s = p.format1(new Date(t), "hh:mm")) : s = (0 < e.refundAheadHour ? e.refundAheadHour + "小时" : "") + (0 < e.refundAheadMinus ? e.refundAheadMinus + "分钟" : ""),
                i.setData({
                  busInfo: e,
                  refundTime1: s,
                  isTodaySch: a
                }), i.composeAlterData(), e.isSupportHalfChild && i.setData({
                  isSupportChild: e.isSupportHalfChild,
                  childPrice: e.childPrice
                }), e.supportFreeChild && i.setData({
                  supportFreeChild: !0
                }), i.reqGetWeatherFactor(), i.getUserProfile(), i.checkProofingCode();
            } catch (e) {
              console.error(e);
            }
            return Promise.all([i.reqGetConcatList(), i.reqGetLastPassengers()]);
          }).catch(function(e) {
            throw console.warn(e), e;
          }).then(function(e) {
            var t = e[0],
              a = e[1],
              s = [],
              r = [],
              n = i.data;
            if (t.length) {
              if (a.length) {
                for (var d = a, o = Array.isArray(d), c = 0, d = o ? d : d[Symbol.iterator]();;) {
                  var u;
                  if (o) {
                    if (c >= d.length) break;
                    u = d[c++];
                  } else {
                    if ((c = d.next()).done) break;
                    u = c.value;
                  }
                  var l = u;
                  l.showDeleteBtn = !1, s.push(l);
                }
                i.setData({
                  plists: s
                }), i.funGetInsDoc(s);
                for (var h = 0, C = i.data.plists, y = Array.isArray(C), g = 0, C = y ? C : C[Symbol.iterator]();;) {
                  var v;
                  if (y) {
                    if (g >= C.length) break;
                    v = C[g++];
                  } else {
                    if ((g = C.next()).done) break;
                    v = g.value;
                  }
                  var b = v;
                  b.carryChildren && i.setData({
                    freeChildCount: ++h
                  });
                  for (var D = i.data.passengers, S = Array.isArray(D), I = 0, D = S ? D : D[Symbol.iterator]();;) {
                    var m;
                    if (S) {
                      if (I >= D.length) break;
                      m = D[I++];
                    } else {
                      if ((I = D.next()).done) break;
                      m = I.value;
                    }
                    var P = m;
                    b.carryChildren && b.IDCard == P.IDCard && b.linkerName == P.linkerName && (P.carryChildren = b.carryChildren);
                  }
                }
              }
            } else a.length && (a.forEach(function(e, t) {
              void 0 == e.type && (e.type = 0);
              var a = {
                showDeleteBtn: e.showDeleteBtn,
                linkerName: e.linkerName,
                IDCard: e.IDCard,
                IDSpace: e.IDSpace,
                idFocus: !1,
                addTime: new Date().getTime() + t,
                showValue: e.linkerName,
                type: e.type
              };
              e.carryChildren && !p.isEmpty(e.carryChildren) && (a.carryChildren = e.carryChildren),
                r.push(a);
            }), i.setData({
              fillPassList: r
            }), i.data.fillPassList.forEach(function(e) {
              i.checkNameId(e);
            }));
            return i.refreshPriceCard(), p.$http(f.getRevenueServiceList, {
              departureId: n.busInfo.dptCId,
              departureName: n.busInfo.departure,
              supplierId: n.busInfo.supplierId,
              ticketPrice: n.busInfo.ticketPrice,
              dptDate: n.busInfo.dptDate,
              dptTime: n.busInfo.dptTime,
              destinationName: n.busInfo.destination,
              depStation: n.busInfo.dptStation,
              subscribe: i.data.isSubscrible,
              flagId: n.localInfo.flagId || "",
              weatherCode: n.weather && n.weather.weatherCode ? n.weather.weatherCode : ""
            });
          }).catch(function(e) {
            throw console.warn(e), e;
          }).then(function(e) {
            var t = e,
              a = !1,
              r = {
                pubID: 0,
                insCusPayTc: 0
              },
              n = [],
              d = void 0,
              o = !1,
              c = {
                sellPrice: 0
              },
              h = void 0,
              C = !1,
              v = {
                sellPrice: 0
              },
              D = {},
              S = [];
            if (3 == i.data.localInfo.revenueType && i.data.localInfo.superValue && !p.isEmpty(i.data.localInfo.superValue.voucherTypeList) && (S = i.data.localInfo.superValue.voucherTypeList),
              (t.serviceResponse || []).forEach(function(t) {
                switch (i.data.sortList[t.code] = {
                  cssStyle: t.cssStyle,
                  sort: t.sort
                }, t.code) {
                  case "insurance":
                    e.insurances = t.value || [];
                    break;

                  case "vipService":
                    (t.value || []).forEach(function(t) {
                      "extremeVipSvc" === t.code ? e.extremeVipSvc = t.value : e.optimizationVipSvc = t.value;
                    });
                    break;

                  case "function":
                    var a = (t.value || []).length,
                      r = a ? t.value[a - 1] : {};
                    e.simpleTypeList = t.value, r.code && "busVoucher" === r.code && (e.busVoucher = r.value);
                    break;

                  case "voucher":
                    (t.value || []).forEach(function(t) {
                      "hotelVoucher" === t.code ? e.hotelVoucher = t.value : "carVoucher" === t.code && (e.carVoucher = t.value);
                    });
                    break;

                  case "preferentialCard":
                    p.isEmpty(t.value) || !t.value.length || p.isEmpty(t.value[0]) || (e.reduceCard_buy = t.value[0],
                      s.fnReducecardDetail(e.reduceCard_buy.id));
                    break;

                  case "other":
                    (t.value || []).forEach(function(t) {
                      "vipSubscribe" === t.code ? (e.vipSubscribePrice = t.price, e.vipSubscribe = 0 < t.price ? 1 : 0) : "refIdFree" === t.code ? e.offLine = 1 : "firstDisplay" === t.code && (e.frontDisplayCode = t.value);
                    });
                }
              }), i.setData({
                sortList: i.data.sortList
              }), t.inteligentRevenueDetail = e.inteligentRevenueDetail, e.offLine ? (i.setData({
                offLine: !0
              }), wx.setStorageSync("bus_isPeaceTravel", !0)) : wx.setStorageSync("bus_isPeaceTravel", !1),
              b = e.inteligentRevenueDetail && e.inteligentRevenueDetail.revenueRecommendCode || "", -1 == S.indexOf(0) && e.hotelVoucher && !p.isEmpty(e.hotelVoucher) && (0 <= (I = e.hotelVoucher[0].vouInstruction).indexOf("<br>") && (e.hotelVoucher[0].vouInstruction = I.split("<br>")),
                0 <= I.indexOf("<br/>") && (e.hotelVoucher[0].vouInstruction = I.split("<br/>")),
                i.setData({
                  hasHotelCoupon: !0,
                  hotelCoupon: e.hotelVoucher[0]
                })), -1 == S.indexOf(2) && e.carVoucher && !p.isEmpty(e.carVoucher) && (0 <= (I = e.carVoucher[0].vouInstruction).indexOf("<br>") && (e.carVoucher[0].vouInstruction = I.split("<br>")),
                0 <= I.indexOf("<br/>") && (e.carVoucher[0].vouInstruction = I.split("<br/>")),
                i.setData({
                  carCoupon: e.carVoucher[0],
                  hasCarCoupon: !0
                })), 3 == i.data.sortList.insurance.cssStyle && i.setData({
                isPeaceTravel: !0
              }), -1 == S.indexOf(3) && e.busVoucher && !p.isEmpty(e.busVoucher)) {
              var I = e.busVoucher[0].vouInstruction;
              0 <= I.indexOf("<br>") && (e.busVoucher[0].vouInstruction = I.split("<br>")), 0 <= I.indexOf("<br/>") && (e.busVoucher[0].vouInstruction = I.split("<br/>")),
                i.setData({
                  busVoucher: e.busVoucher[0]
                });
            }
            if (e.simpleTypeList && e.simpleTypeList.length) {
              "VIPHall" == (g = e.simpleTypeList)[0].code && (g = g.slice(1));
              for (var m = g, P = Array.isArray(m), w = 0, m = P ? m : m[Symbol.iterator]();;) {
                var T;
                if (P) {
                  if (w >= m.length) break;
                  T = m[w++];
                } else {
                  if ((w = m.next()).done) break;
                  T = w.value;
                }
                var x = T;
                if (x.tag = !!x.tag && x.tag.replace(/\s/g, ""), D[x.code] = x.description, "FastTicketOut" == x.code && (p.isEmpty(x) || 2 == i.data.busInfo.bookingType || (x.statusKey = "IssueStatus",
                    x.img = "https://img1.40017.cn/touch/bus/wx_bus/topspeed.png", i.data.stList.push(x),
                    y.topspeed = x, i.setData({
                      stList: i.data.stList,
                      speedPrice: x.price,
                      speedInfo: x.instruction.split("<br/>"),
                      categoryRevenue: i.data.categoryRevenue,
                      isHasSpeed: !0
                    }), x.default && i.setData({
                      IssueStatus: !0
                    })), i.data.pkg.isSpeed)) {
                  var k = i.data.stList,
                    A = k.findIndex(function(e) {
                      return "FastTicketOut" == e.code;
                    }); -
                  1 != A && k.splice(A, 1), i.setData({
                    stList: k,
                    speedPrice: y.topspeed.price,
                    IssueStatus: !0
                  });
                }
                "BusYiyuanFree" == x.code && i.setData({
                  YyData: x,
                  YyStatus: x.default
                });
                var L = {};
                "refundCarefree" == x.code && (L = x.value, !p.isEmpty(x) && L && !p.isEmpty(L) && !i.data.busInfo.ExtraSchFlag && (x.img = "https://img1.40017.cn/touch/bus/wx_bus/carefree.png",
                  L.isOrderChange && 1 == L.isOrderChange && 1 == L.type ? (x.name = "退改无忧", i.setData({
                    isRefundChange: !0,
                    LocalgetStrategyData: L.strategyConfigList || [],
                    mapCoefficient: L.mapCoefficient || 0
                  })) : 1 == L.type ? (x.name = "退票无忧", i.setData({
                    isRefundOrder: !0,
                    LocalgetStrategyData: L.strategyConfigList || [],
                    mapCoefficient: L.mapCoefficient || 0
                  })) : 2 == L.type && (x.img = "https://file.40017.cn/img140017cnproduct/touch/bus/wx_bus/tuirud.png",
                    i.setData({
                      refundSuixin: !0,
                      isShowSuixin: !!x.isShow,
                      ajaxIsShowSuixin: !!x.isShow,
                      LocalgetStrategyData: L.strategyConfigList || [],
                      mapCoefficient: L.mapCoefficient || 0
                    })), x.id = L.id || "", x.statusKey = "refundStatus", i.data.stList.push(x), y.refund = x,
                  i.setData({
                    stList: i.data.stList,
                    refundId: L.id,
                    refundPice: x.price,
                    refundInfo: x.instruction.split("<br/>"),
                    categoryRevenue: i.data.categoryRevenue
                  }), x.default && i.setData({
                    refundStatus: !0
                  })));
              }
            }
            if (3 != i.data.localInfo.revenueType && e.optimizationVipSvc && e.optimizationVipSvc.length ? (d = e.optimizationVipSvc,
                o = !0, d.forEach(function(t, a) {
                  "insurance" == e.frontDisplayCode ? 0 == t.sellPrice && (c = t, i.setData({
                      currentTab: a,
                      yxCheckedIndex: a,
                      checkedServiceId: t.serviceId
                    })) : 1 == t.isDefaultShow && (c = t, i.setData({
                      currentTab: a,
                      yxCheckedIndex: a,
                      checkedServiceId: t.serviceId
                    })), t.serviceDetail = t.serviceDetail.replace(/(?!<br.+?>)<.+?>/gi, ""), t.serviceDetail = t.serviceDetail.replace(/<br\/>|<br><br>/gi, "<br>"),
                    t.serviceDetail = t.serviceDetail.split("<br>"), t.serviceDescription = t.serviceDescription.replace(/<\/span>|<\/p>|(<p|<span) class="[\w-]*">/gi, ""),
                    t.serviceDescription = t.serviceDescription.split("<br/>"), i.data.isAdult && i.setData({
                      slectedVAList: d
                    });
                }), wx.setStorageSync("bus_optimizationLists", d), wx.setStorageSync("bus_optimizationDefault", c)) : (wx.removeStorageSync("bus_optimizationLists"),
                wx.removeStorageSync("bus_optimizationDefault")), 3 != i.data.localInfo.revenueType && e.extremeVipSvc && e.extremeVipSvc.length ? (h = e.extremeVipSvc,
                C = !0, h.forEach(function(e, t) {
                  1 == e.isDefaultShow && (v = e, i.setData({
                      currentTab: t,
                      zzCheckedIndex: t,
                      checkedServiceId: e.serviceId
                    })), e.serviceDetail = e.serviceDetail.replace(/(?!<br.+?>)<.+?>/gi, ""), e.serviceDetail = e.serviceDetail.replace(/<br\/>|<br><br>/gi, "<br>"),
                    e.serviceDetail = e.serviceDetail.split("<br>"), e.serviceDescription = e.serviceDescription.replace(/<\/span>|<\/p>|(<p|<span) class="[\w-]*">|<p>/gi, ""),
                    e.serviceDescription = e.serviceDescription.split("<br/>"), i.data.isAdult || i.setData({
                      slectedVAList: h
                    });
                }), wx.setStorageSync("bus_extremeLists", h), wx.setStorageSync("bus_extremeDefault", v)) : (wx.removeStorageSync("bus_extremeLists"),
                wx.removeStorageSync("bus_extremeDefault")), i.data.isAdult && o && C && i.setData({
                currentTab: i.data.yxCheckedIndex
              }), e.insurances && e.insurances.length) {
              if (a = !0, 3 == i.data.localInfo.revenueType) {
                for (var N = i.data.localInfo.superValue.insCodeList, E = Array.isArray(N), M = 0, N = E ? N : N[Symbol.iterator]();;) {
                  var O;
                  if ("break" === function() {
                      if (E) {
                        if (M >= N.length) return "break";
                        O = N[M++];
                      } else {
                        if ((M = N.next()).done) return "break";
                        O = M.value;
                      }
                      var t = O,
                        a = e.insurances.findIndex(function(e) {
                          return t == e.code;
                        }); -
                      1 != a && e.insurances.splice(a, 1);
                    }()) break;
                }
                if (0 >= e.insurances.length) return;
              }
              var _ = e.insurances;
              e.insurances.forEach(function(t, a, s) {
                  t.value.forEach(function(d, u, l) {
                    i.data.isPeaceTravel ? (4 == t.code && "交通意外险" == t.name && 1 == d.isDefault && (r = d),
                        4 == t.code && "交通意外险" == t.name ? 1 == d.isDefault && n.push(d) : 0 == d.pubID && n.push(d)) : i.data.isAdult ? "vipService" == e.frontDisplayCode || o && c.sellPrice ? (0 == d.pubID && n.push(d),
                        i.setData({
                          defInsMultiNoBuy: !0
                        })) : 1 == d.isDefault && (n.push(d), a == s.length - 1 && u == l.length - 1 && function() {
                        for (var e, t = 0; t < n.length && !(e = n[t]).pubID; t++) 0 == e.pubID && t == n.length - 1 && i.setData({
                          defInsMultiNoBuy: !0
                        });
                      }()) : C ? (0 == d.pubID && n.push(d), i.setData({
                        defInsMultiNoBuy: !0
                      })) : 1 == d.isDefault && n.push(d), d.insContent = d.insContent.replace(/<.p?>/gi, "<br>"),
                      d.insContent = d.insContent.replace(/(?!<br.+?>)<.+?>/gi, ""), d.insContent = d.insContent.replace(/<br\/>|<br><br>/gi, "<br>"),
                      d.insContent = d.insContent.split("<br>");
                  });
                }), wx.setStorageSync("bus_insuranceLists", _), wx.setStorageSync("bus_insuranceDefault", r),
                wx.setStorageSync("bus_insuranceDefMulti", n);
            }
            i.setData({
              isHasInsurance: a,
              defInsMulti: n,
              defIns: r,
              defInsDb: !(!parseInt(r.pubID) || !e.frontDisplayCode || "insurance" != e.frontDisplayCode),
              isHasOptSvc: o,
              defaultOpt: c,
              isHasExtSvc: C,
              defaultExt: v,
              reduceCard_buy: e.reduceCard_buy || {},
              isHasRedCardBuy: !p.isEmpty(e.reduceCard_buy),
              saveSTDes: D
            }), i.funIsHasService(), i.funGetWechatCard(), i.reqGetMaxPassenger();
            try {
              var R = [],
                V = function(e) {
                  var t = "";
                  return t += (e.name || e.insName || e.serviceName || "") + "：", e.value && !p.isEmpty(e.value) && "[object Array]" == Object.prototype.toString.call(e.value) && e.value.forEach(function(e) {
                    t += (e.name || e.insName || e.serviceName) + ";";
                  }), t;
                };
              t.serviceResponse.forEach(function(e) {
                R.push(V(e));
              }), console.log("serviceNameArr=====>", R), u.default.setEvent(l.booking, "DLDD20", "^增值服务名称:[" + R.join("||") + "]^");
            } catch (t) {
              console.log(t);
            }
            var H = 0,
              U = 0;
            return (wx.getStorageSync("bus_lastPassengers") || []).forEach(function(e) {
              1 == e.type ? U += 1 : H += 1;
            }), Promise.all([p.$http(f.getPreferentialActivity, {
              departureName: i.data.busInfo.departure,
              departureStation: i.data.busInfo.dptStation,
              destinationName: i.data.busInfo.destination,
              ticketPrice: H || !H && !U ? i.data.busInfo.ticketPrice : i.data.childPrice,
              totalTicketPrice: i.data.busInfo.ticketPrice * H + U * i.data.childPrice || i.data.busInfo.ticketPrice,
              supplierId: i.data.busInfo.supplierId || ""
            }), p.$http(f.getPreferentialCard, {})]);
          }).catch(function(e) {
            throw console.warn(e), e;
          }).then(function(e) {
            var t = e[0],
              a = e[1];
            if (t.length && (i.setData({
                preferInfo: t[0],
                havePerferInfo: !0,
                selectedPrefer: !0
              }), i.cancelSelectedWechatCard()), !p.isEmpty(a)) {
              var r = a,
                n = !p.isEmpty(r.timeCard);
              i.setData({
                isHasRedCardUse: n,
                reduceCard_use: n ? r.timeCard : {}
              }), s.fnReducecardDetail(s.data.reduceCard_use.cardId);
            }
            return i.funCountPrice(), i.reqGetOrderTotalAmount();
          }).catch(function(e) {
            throw e;
          }).then(function(e) {
            p.isEmpty(e) || i.setData({
              adjustPrice: e.body.adjustPrice,
              adjustPriceAbs: o(e.body.adjustPrice),
              adjustPriceContent: e.body.content || "",
              ChargeFee: (i.data.busInfo.serviceChargePrice ? i.data.busInfo.serviceChargePrice : 0) + (0 < e.body.adjustPrice ? e.body.adjustPrice : 0)
            }), i.funCountPrice();
          }).catch(function(e) {
            throw e;
          });
      },
      onUnload: function() {},
      onShow: function() {
        e = this;

        

        if (this.data.isFirstInto) this.data.isFirstInto = !1, wx.setStorageSync("bus_selectCode", this.data.selectCode),
          wx.setStorageSync("bus_addressInfo", {});
        else {
          var e = this,
            t = wx.getStorageSync("bus_newAddPassenger") || "",
            a = wx.getStorageSync("bus_updatePassenger") || "",
            s = wx.getStorageSync("bus_addressInfo") || "",
            i = e.data.passengers.length;
          if (t && !p.isEmpty(t)) return e.reqGetConcatList().then(function(a) {
            for (var s = a, r = Array.isArray(s), n = 0, s = r ? s : s[Symbol.iterator]();;) {
              var d;
              if (r) {
                if (n >= s.length) break;
                d = s[n++];
              } else {
                if ((n = s.next()).done) break;
                d = n.value;
              }
              var o = d;
              if (o.linkerName == t.linkerName && o.IDCard == t.IDCard) {
                0 === i ? (o.selected = !0, e.setData({
                  plists: a,
                  contactInfo: o,
                  passengers: a
                }), e.refreshPriceCard(), e.funCountPrice(), e.getPreferentialActivity()) : e.setData({
                  passengers: a
                });
                break;
              }
            }
            wx.removeStorageSync("bus_newAddPassenger");
          }).catch(function(e) {
            console.log(e);
          }), !1;
          a && (e.data.passengers.length ? e.reqGetConcatList().then(function(t) {
              for (var s = t, i = Array.isArray(s), r = 0, s = i ? s : s[Symbol.iterator]();;) {
                var n;
                if (i) {
                  if (r >= s.length) break;
                  n = s[r++];
                } else {
                  if ((r = s.next()).done) break;
                  n = r.value;
                }
                var d = n;
                if (d.IDCard == a.IDCard) {
                  d.selected = !0, e.setData({
                    passengers: t
                  });
                  break;
                }
              }
              e.refreshPlists(), wx.removeStorageSync("bus_updatePassenger");
            }).catch(function(e) {
              console.log(e);
            }) : (console.log("更新fillpassList中对应的儿童乘客"), e.data.plists.push(a), e.setData({
              plists: e.data.plists
            }), wx.removeStorageSync("bus_updatePassenger"))), p.isEmpty(s) || e.setData({
              hasAddress: !0,
              addressInfo: s
            }), this.funRenderIns(), (!e.data.offLine || e.data.offLine || e.data.isPeaceTravel && e.data.offLine) && this.funRenderValueadd(),
            this.funRedderCards();
          var r = wx.getStorageSync("refundStatus"),
            n = this.data.ajaxIsShowSuixin;
          (this.data.isRefundChange || this.data.isRefundOrder || this.data.refundSuixin) && "boolean" == typeof r && (this.setData({
            refundStatus: r,
            isShowSuixin: !!n || !!r
          }), wx.removeStorageSync("refundStatus"), this.funCountPrice());
          var d = wx.getStorageSync("addFreeChildInfo");
          if (d && !p.isEmpty(d)) {
            if (e.data.passengers.length) {
              for (var o = 0, c = d, u = Array.isArray(c), l = 0, c = u ? c : c[Symbol.iterator]();;) {
                var h;
                if (u) {
                  if (l >= c.length) break;
                  h = c[l++];
                } else {
                  if ((l = c.next()).done) break;
                  h = l.value;
                }
                var f = h;
                f.carryChildren && e.setData({
                  freeChildCount: ++o
                });
                for (var C = e.data.passengers, y = Array.isArray(C), g = 0, C = y ? C : C[Symbol.iterator]();;) {
                  var v;
                  if (y) {
                    if (g >= C.length) break;
                    v = C[g++];
                  } else {
                    if ((g = C.next()).done) break;
                    v = g.value;
                  }
                  var b = v;
                  f.carryChildren && f.linkerName == b.linkerName && f.IDCard == b.IDCard && (b.carryChildren = f.carryChildren);
                }
              }
              e.setData({
                plists: d,
                passengers: e.data.passengers
              });
            } else {
              for (var D = 0, S = d, I = Array.isArray(S), m = 0, S = I ? S : S[Symbol.iterator]();;) {
                var P;
                if (I) {
                  if (m >= S.length) break;
                  P = S[m++];
                } else {
                  if ((m = S.next()).done) break;
                  P = m.value;
                }
                var w = P;
                w.carryChildren && e.setData({
                  freeChildCount: ++D
                });
                for (var T = e.data.fillPassList, x = Array.isArray(T), k = 0, T = x ? T : T[Symbol.iterator]();;) {
                  var A;
                  if (x) {
                    if (k >= T.length) break;
                    A = T[k++];
                  } else {
                    if ((k = T.next()).done) break;
                    A = k.value;
                  }
                  var L = A;
                  w.carryChildren && w.linkerName == L.linkerName && w.IDCard == L.IDCard && (L.carryChildren = w.carryChildren);
                }
              }
              e.setData({
                plists: d,
                fillPassList: e.data.fillPassList
              });
            }
            e.funGetInsDoc(d), wx.setStorageSync("bus_lastPassengers", e.data.plists), wx.removeStorageSync("addFreeChildInfo");
          }
          var N, E = wx.getStorageSync("editFreeChildInfo");
          if (E && !p.isEmpty(E)) {
            if (N = e.data.plists[E.passIndex], N.carryChildren[E.freeChildIndex].name = E.editChild.name,
              N.carryChildren[E.freeChildIndex].cardNo = E.editChild.cardNo, N.carryChildren[E.freeChildIndex].idSpace = E.editChild.idSpace,
              e.data.passengers.length) {
              for (var M = e.data.passengers, O = Array.isArray(M), _ = 0, M = O ? M : M[Symbol.iterator]();;) {
                var R;
                if (O) {
                  if (_ >= M.length) break;
                  R = M[_++];
                } else {
                  if ((_ = M.next()).done) break;
                  R = _.value;
                }
                var V = R;
                N.linkerName == V.linkerName && N.IDCard == V.IDCard && (V.carryChildren = N.carryChildren);
              }
              e.setData({
                plists: e.data.plists,
                passengers: e.data.passengers
              });
            } else {
              for (var H = e.data.fillPassList, U = Array.isArray(H), F = 0, H = U ? H : H[Symbol.iterator]();;) {
                var j;
                if (U) {
                  if (F >= H.length) break;
                  j = H[F++];
                } else {
                  if ((F = H.next()).done) break;
                  j = F.value;
                }
                var B = j;
                N.linkerName == B.linkerName && N.IDCard == B.IDCard && (B.carryChildren = N.carryChildren);
              }
              e.setData({
                plists: e.data.plists,
                fillPassList: e.data.fillPassList
              });
            }
            e.funGetInsDoc(e.data.plists), wx.setStorageSync("bus_lastPassengers", e.data.plists),
              wx.removeStorageSync("editFreeChildInfo");
          }
        }
        var q = wx.createAnimation({
          duration: e.data.loadingDuration,
          timingFunction: "ease-in",
          delay: 0
        });
        this.animation = q, setTimeout(function() {
          var t = {};
          t.simpleTypeList = [], e.data.stList.forEach(function(e) {
              t.simpleTypeList.push({
                id: e.id,
                name: e.name,
                price: e.price,
                default: e.default
              });
            }), t.busVoucher = Object.assign({}, e.data.busVoucher), t.busVoucher.default = e.data.busVoucherIsSel,
            delete t.busVoucher.vouInstruction;
        }, 1500);
      },
      btnAddFreeChild: function() {
        for (var e = this.data.localInfo.freeChildCntLeft || 0, t = JSON.parse(JSON.stringify(this.data.plists)), a = this.data.adultCount, s = this.data.freeChildCount, i = this.data.contactInfo, r = t, n = Array.isArray(r), d = 0, r = n ? r : r[Symbol.iterator]();;) {
          var o;
          if (n) {
            if (d >= r.length) break;
            o = r[d++];
          } else {
            if ((d = r.next()).done) break;
            o = d.value;
          }
          var c = o;
          c.linkerName == i.linkerName && c.IDCard == i.IDCard && (c.isConcat = !0);
        }
        wx.navigateTo({
          url: "../concatlist/concatlist?action=addFreeChild&adultNum=" + a + "&freeChildCount=" + s + "&FCTicketLeft=" + e + "&plists=" + JSON.stringify(t)
        });
      },
      reqGetWeatherFactor: function() {
        var e = this,
          t = e.data.localInfo;
        wx.request({
          url: f.getWeather,
          method: "POST",
          header: e.data.headerInfo,
          data: JSON.stringify({
            departure: t.departure,
            destination: t.destination,
            dptDate: t.dptDate
          }),
          success: function(t) {
            if ((t = t.data).header.isSuccess && !p.isEmpty(t.body)) {
              var a = t.body.dptDate.split("-");
              t.body.dptDate = parseInt(a[1]) + "月" + parseInt(a[2]) + "日", e.setData({
                weather: t.body
              });
            }
          }
        });
      },
      fnCalculateCount: function() {
        var e = this,
          t = this.data.plists,
          a = {
            adultPriceCount: 0,
            childPriceCount: 0,
            fullPriceChild: 0,
            adultCount: 0,
            childCount: 0
          };
        return t.length && (t.forEach(function(t) {
            e.eighteenYears(t.IDCard) && ++a.adultCount, e.data.isSupportChild && 1 == t.type && ++a.childPriceCount;
          }), a.childCount = t.length - a.adultCount, a.adultPriceCount = t.length - a.childPriceCount,
          a.fullPriceChild = a.childCount - a.childPriceCount), e.setData({
          adultCount: a.adultCount,
          childCount: a.childCount,
          adultPriceCount: a.adultPriceCount,
          childPriceCount: a.childPriceCount
        }), a;
      },
      reqGetOrderTotalAmount: function() {
        var e = this,
          t = this.data,
          a = t.busInfo,
          s = this.funComposePriceItem();
        return this.setData({
          prevPriceItem: s
        }), e.data.plists.length ? new Promise(function(i, r) {
          wx.request({
            url: f.getOrderTotalAmount,
            method: "POST",
            header: t.headerInfo,
            data: JSON.stringify({
              departure: a.departure || "",
              departureStation: a.dptStation || "",
              destination: a.destination || "",
              destinationStation: a.arrStation || "",
              supplierId: a.supplierId || "",
              priceItem: s,
              passengerCount: e.data.plists.length
            }),
            success: function(e) {
              e = e.data, i(e);
            },
            fail: function(e) {
              r(e);
            }
          });
        }) : Promise.resolve({
          header: {
            isSuccess: !1
          }
        });
      },
      funComposePriceItem: function() {
        var e = this.data,
          t = this.data.busInfo,
          a = this.fnCalculateCount(),
          s = a.adultPriceCount,
          i = a.childPriceCount,
          r = e.plists.length,
          n = (y.insItem, {
            destinationInsurancePrice: 0,
            trafficInsurancePrice: 0,
            phoneLostInsurancePrice: 0
          }),
          d = 0,
          c = 0;
        if (e.isPeaceTravel) n.trafficInsurancePrice = e.isAdult && e.defInsDb && e.defIns.insCusPayTc && 4 == e.defIns.insCode ? e.defIns.insCusPayTc : 0,
          n.destinationInsurancePrice = 0, n.phoneLostInsurancePrice = 0;
        else {
          for (var u in n) n[u] = 0;
          e.defInsMulti.forEach(function(t) {
            if (0 < t.insCusPayTc && e.isAdult) switch (parseInt(t.insCode)) {
              case 2:
                n.destinationInsurancePrice = t.insCusPayTc;
                break;

              case 4:
                n.trafficInsurancePrice = t.insCusPayTc;
                break;

              case 6:
                n.phoneLostInsurancePrice = t.insCusPayTc;
            }
          });
        }
        d = ((e.plists.length && e.havePerferInfo && e.selectedPrefer ? (e.preferInfo.preferentialDimension ? r : 1) * e.preferInfo.preferentialType * 1e3 : 0) + (p.isEmpty(e.selectCode) ? 0 : 1e3 * e.selectCode.showPrice) + (e.isSelectedRedCard ? 1e3 * (e.isHasRedCardUse ? e.reduceCard_use.discountMoney : e.reduceCard_buy.discountMoney) : 0)) / 1e3,
          c = 0 > e.adjustPrice ? this.accAdd(this.accMulti(o(e.adjustPrice), r), e.totalPrice) : 0 < e.adjustPrice ? this.accSub(e.totalPrice, this.accMulti(e.adjustPrice, r)) : e.totalPrice;
        var l = 3 == e.localInfo.revenueType ? e.localInfo.revenuePrice : e.isAdult ? e.defaultOpt.sellPrice * r : e.defaultExt.sellPrice * r,
          h = p.isEmpty(e.addressInfo) || !e.addressInfo.expressFee || e.homeDelivery.show ? 0 : e.addressInfo.expressFee,
          f = !p.isEmpty(e.addressInfo) && e.addressInfo.agentFee ? e.addressInfo.agentFee * (s + i) : 0;
        return {
          adultTicketPrice: t.ticketPrice,
          ticketPrice: (t.ticketPrice * s * 1e3 + 1e3 * e.childPrice * i) / 1e3,
          trafficInsurancePrice: n.trafficInsurancePrice * r,
          destinationInsurancePrice: n.destinationInsurancePrice * r,
          phoneLostInsurancePrice: n.phoneLostInsurancePrice * r,
          vipServicePrice: l || 0,
          fastServicePrice: e.IssueStatus ? e.speedPrice * r : 0,
          yiyuanFreePrice: e.YyStatus ? this.data.YyData.price * r : 0,
          refundCarefreePrice: e.refundStatus ? y.refund.price : 0,
          busVoucherPrice: e.busVoucherIsSel ? e.busVoucher.vouSellPrice : 0,
          carVoucherPrice: e.hasCarCoupon ? e.carCouNum * e.carCoupon.vouSellPrice : 0,
          hotelVoucherPrice: e.hasHotelCoupon ? e.hotelCouNum * e.hotelCoupon.vouSellPrice : 0,
          serviceFeePrice: e.isHasService ? t.serviceChargePrice * r : 0,
          preferentialPrice: d,
          homeDeliveryPrice: e.homeDeliveryStatus ? (1e3 * h + 1e3 * f) / 1e3 : 0,
          vipSubscribePrice: this.data.vipSubscribe && !this.data.ASisExceedLimit && this.data.subscribeInfoObj.isSubscribe ? this.data.vipSubscribePrice * r : 0,
          payPrice: c
        };
      },
      accMulti: function(e, t) {
        (isNaN(parseFloat(e)) || isNaN(parseFloat(t))) && console.error && console.error("accMulti method has at least two Number parameters: arg1: " + e + "; arg2: " + t);
        for (var a = 0, s = 0; s < t; s++) a = this.accAdd(a, e);
        return a;
      },
      accAdd: function(e, t) {
        return (isNaN(parseFloat(e)) || isNaN(parseFloat(t))) && console.error && console.error("accAdd method has at least two Number parameters: arg1: " + e + "; arg2: " + t),
          this.accAddSub(e, t, !0);
      },
      accSub: function(e, t) {
        return (isNaN(parseFloat(e)) || isNaN(parseFloat(t))) && console.error && console.error("accSub method has at least two Number parameters: arg1: " + e + "; arg2: " + t),
          this.accAddSub(e, t, !1);
      },
      accAddSub: function(e, t, a) {
        var s = !1,
          i = !1;
        if (0 > e && 0 > t) {
          if (!a) return this.accAddSub(o(t), e);
          s = !0, e = o(e), t = o(t);
        }
        if (0 <= e && 0 > t) {
          var r = e;
          e = t, t = r;
        }
        if (0 > e && 0 <= t) return a ? this.accAddSub(t, o(e)) : this.accAddSub(e, parseFloat("-" + t), !0);
        e = e ? isNaN(parseFloat(e)) ? 0 : e : 0, t = t ? isNaN(parseFloat(t)) ? 0 : t : 0;
        var n, c, u;
        if (n = (e.toString().split(".")[1] || "").length, c = (t.toString().split(".")[1] || "").length,
          0 == n && 0 == c) return a ? s ? "-" + (e + t) : e + t : e - t;
        u = Math.max(n, c), e = +e.toString().replace(".", ""), t = +t.toString().replace(".", ""),
          n > c ? t *= d(10, n - c) : c > n && (e *= d(10, c - n));
        var l;
        if (a) l = Array.from((e + t).toString());
        else {
          if (e < t) {
            i = !0;
            var h = e;
            e = t, t = h;
          }
          l = Array.from((e - t).toString());
        }
        if (l.length < u)
          for (var f = 0; f < u - l.length; f++) l.unshift("0");
        l.splice(-1 * u, 0, ".");
        var p = parseFloat(l.join(""));
        return s || i ? "-" + p : p;
      },
      btnToggleTicketTypePop: function(e) {
        n && clearTimeout(n), this.setData({
          isShowTicketTypeTips: parseInt(e.currentTarget.dataset.toggle)
        });
      },
      btnToggleAlter: function() {
        this.setData({
          isShowAlter: !this.data.isShowAlter
        }), u.default.setEvent(l.booking, "DLDD02");
      },
      btnToggleSimAlter: function() {
        var e = !this.data.isSelSimpleBeixuan;
        this.setData({
            isSelSimpleBeixuan: e,
            isCheckAlternate: e
          }), !!e && p.isEmpty(this.data.optionSchedulesTimes) && this.composeAlterData(),
          setTimeout(function() {}.bind(this), 300), this.judgeWechatCardIsCanUse(this.data.cardMsg);
      },
      composeAlterData: function() {
        var e, t, a = this,
          s = a.data.busInfo.dptDate,
          i = a.data.busInfo.dptDateTime,
          r = new Date(i),
          n = new Date(),
          d = p.format1(n, "yyyy-MM-dd");
        if ("A" == a.data.isSimpleBeixuan) {
          var o = [];
          return o.push({
            startTime: p.format1(r, "yyyy-MM-dd") + " " + p.format1(new Date(i - 72e5), "hh:mm") + ":00",
            endTime: p.format1(r, "yyyy-MM-dd") + " " + p.format1(new Date(i + 72e5), "hh:mm") + ":00"
          }), a.setData({
            Simhour: p.format1(new Date(i - 72e5), "hh:mm") + "-" + p.format1(new Date(i + 72e5), "hh:mm"),
            optionSchedulesTimes: o
          }), !1;
        }
        e = d == s ? [{
          day: p.format1(r, "MM月dd日"),
          YMD: p.format1(r, "yyyy-MM-dd"),
          desc: "本车次日期",
          selected: a.data.isCheckAlternate
        }, {
          day: p.addDay(1, r, "MM月dd日").day,
          YMD: p.addDay(1, r, "yyyy-MM-dd").day,
          selected: !1
        }, {
          day: p.addDay(2, r, "MM月dd日").day,
          YMD: p.addDay(2, r, "yyyy-MM-dd").day,
          selected: !1
        }] : [{
          day: p.addDay(-1, r, "MM月dd日").day,
          YMD: p.addDay(-1, r, "yyyy-MM-dd").day,
          selected: !1
        }, {
          day: p.format1(r, "MM月dd日"),
          YMD: p.format1(r, "yyyy-MM-dd"),
          desc: "本车次日期",
          selected: a.data.isCheckAlternate
        }, {
          day: p.addDay(1, r, "MM月dd日").day,
          YMD: p.addDay(1, r, "yyyy-MM-dd").day,
          selected: !1
        }], t = [{
          hour: p.format1(new Date(i - 36e5), "hh:mm") + "-" + p.format1(new Date(i + 36e5), "hh:mm"),
          desc: "前后1小时",
          selected: !!a.data.isCheckAlternate && 2 != a.data.busInfo.bookingType
        }, {
          hour: p.format1(new Date(i - 72e5), "hh:mm") + "-" + p.format1(new Date(i + 72e5), "hh:mm"),
          desc: "前后2小时",
          selected: !!a.data.isCheckAlternate && 2 == a.data.busInfo.bookingType
        }, {
          hour: p.format1(new Date(i - 36e5), "hh:mm") + "-" + p.format1(new Date(i + 36e5), "hh:mm"),
          desc: "自定义",
          selected: !1
        }], a.setData({
          alterDay: e,
          alterHour: t,
          alterStartTime: p.format1(new Date(i - 36e5), "hh:mm"),
          alterEndTime: p.format1(new Date(i + 36e5), "hh:mm")
        }), this.updateAlterTxt(!0), this.updateOptionsSchedulesTimes();
      },
      btnChoseDate: function(e) {
        var t, a = e.currentTarget.dataset.idx;
        this.setData((t = {}, t["alterDay[" + a + "].selected"] = !this.data.alterDay[a].selected,
          t));
      },
      btnChoseSpan: function(e) {
        var t = e.currentTarget.dataset.idx,
          a = this.data.alterHour;
        return !a[t].selected && (a.forEach(function(e, a) {
          e.selected = !(t != a);
        }), this.setData({
          alterHour: a
        }), void(2 == t ? this.setData({
          isShowCustom: !0
        }) : this.setData({
          isShowCustom: !1
        })));
      },
      btnNotChoseAlter: function(e) {
        var t = this.data.alterDay,
          a = this.data.alterHour;
        t.forEach(function(e) {
          e.selected = !1;
        }), a.forEach(function(e) {
          e.selected = !1;
        }), "boolean" != typeof e && this.btnToggleAlter(), this.setData({
          alterDay: t,
          alterHour: a,
          isShowCustom: !1,
          isCheckAlternate: !1,
          alterTxt: "未选择",
          optionSchedulesTimes: [],
          isSelSimpleBeixuan: !1
        }), this.judgeWechatCardIsCanUse(this.data.cardMsg);
      },
      btnChoseAlter: function() {
        var e, t = this,
          a = this.data.alterDay,
          s = this.data.alterHour,
          i = !1,
          r = !1;
        return a.forEach(function(e) {
          e.selected && (i = !0);
        }), s.forEach(function(t) {
          t.selected && (r = !0, e = t.hour.split("-"));
        }), i ? r ? parseInt(e[0].substr(0, 2)) > parseInt(e[1].substr(0, 2)) ? (p.alert("请选择正确的备选时段"),
          u.default.setEvent(C, "DLDD18", "^名称:[请选择正确的备选时段]^"), !1) : (this.setData({
            isCheckAlternate: !0
          }), this.btnToggleAlter(), this.updateAlterTxt(), this.updateOptionsSchedulesTimes(),
          void t.judgeWechatCardIsCanUse(t.data.cardMsg)) : (p.alert("请选择备选时段"), u.default.setEvent(C, "DLDD18", "^名称:[请选择备选时段]^"), !1) : (p.alert("请选择备选日期"), u.default.setEvent(C, "DLDD18", "^名称:[请选择备选日期]^"), !1);
      },
      updateOptionsSchedulesTimes: function() {
        var e = this,
          t = [];
        e.data.alterDay.forEach(function(a) {
          a.selected && e.data.alterHour.forEach(function(e) {
            if (e.selected) {
              var s = e.hour.split("-");
              t.push({
                startTime: a.YMD + " " + s[0] + ":00",
                endTime: a.YMD + " " + s[1] + ":00"
              });
            }
          });
        }), e.setData({
          optionSchedulesTimes: t
        });
      },
      updateAlterTxt: function(e) {
        if (e) return this.setData({
          alterTxt: "无票时更换为临近车次"
        }), !1;
        var t, a = this.data.alterDay,
          s = this.data.alterHour,
          i = 0,
          r = !1,
          n = [];
        a.forEach(function(e) {
          e.selected && (++i, e.desc && (r = !0));
        }), 0 < i ? (1 == i && r ? s.forEach(function(e) {
            e.selected && (t = e.hour);
          }) : (a.forEach(function(e) {
            e.selected && n.push(e.day);
          }), n.length && (3 == i ? (n.length = 2, t = n.join("、") + "...") : t = n.join("、"))),
          this.setData({
            alterTxt: "无票时更换为" + t + "车次"
          })) : this.setData({
          alterTxt: "未选择"
        });
      },
      startTimeChange: function(e) {
        var t, a = this.data.alterHour[2].hour.split("-");
        this.setData((t = {
          alterStartTime: e.detail.value
        }, t["alterHour[2].hour"] = e.detail.value + "-" + a[1], t));
      },
      endTimeChange: function(e) {
        var t, a = this.data.alterHour[2].hour.split("-");
        this.setData((t = {
          alterEndTime: e.detail.value
        }, t["alterHour[2].hour"] = a[0] + "-" + e.detail.value, t));
      },
      btnOpneAnxin: function() {
        var e = this.data.isDownArr;
        this.setData({
          isDownArr: !e
        });
      },
      selectDefaultInsure: function() {
        var e = this.data.defInsDb;
        e = !e, this.setData({
          defInsDb: e
        }), this.funIsHasService(), this.funCountPrice();
      },
      closeInsurance: function() {
        this.setData({
          isOpendetail: !1,
          isShowBaoXianDetail: !1,
          insContent: []
        });
      },
      openInsurance: function() {
        this.setData({
          isOpendetail: !0
        });
      },
      showCarDetail: function() {
        this.setData({
          isOpenCardetail: !0
        });
      },
      carCouponClose: function() {
        this.setData({
          isOpenCardetail: !1
        });
      },
      carLessBtn: function() {
        this.btnCarCount(0);
      },
      carPlusBtn: function() {
        this.btnCarCount(1);
      },
      btnCarCount: function(e) {
        var t = parseInt(this.data.carCouNum);
        if (e && (9 == t || 9 < t)) return p.alert("对不起，最高限制购买9份！"), u.default.setEvent(C, "DLDD18", "^名称:[购买汽车票券]^"), !1;
        if (e) t++;
        else {
          if (!(0 < t)) return;
          t--;
        }
        this.setData({
          carCouNum: t
        }), this.funCountPrice();
      },
      showhotelDetail: function() {
        this.setData({
          isOpenhoteldetail: !0
        });
      },
      hotelCouponClose: function() {
        this.setData({
          isOpenhoteldetail: !1
        });
      },
      hotelLessBtn: function() {
        this.btnhotelCount(0);
      },
      hotelPlusBtn: function() {
        this.btnhotelCount(1);
      },
      btnhotelCount: function(e) {
        var t = parseInt(this.data.hotelCouNum);
        if (e) t++;
        else {
          if (!(0 < t)) return;
          t--;
        }
        this.setData({
          hotelCouNum: t
        }), this.funCountPrice();
      },
      isMobile: function(e) {
        return /^(1[3-9][0-9])\d{8}$/.test(e);
      },
      reqGetLastPassengers: function() {
        var e = this,
          t = wx.getStorageSync("bus_lastPassengers") || [];
        return new Promise(function(a) {
          t.length ? (e.contactPhone(), a(t)) : wx.request({
            url: f.getLastMemberInfo,
            method: "POST",
            header: e.data.headerInfo,
            data: "",
            success: function(t) {
              var s = [];
              (t = t.data).header.isSuccess && t.body.passengersInfos.forEach(function(t) {
                t.linkerName = t.name, t.IDCard = t.idCard, t.IDSpace = t.IDCard.substr(0, 6) + " " + t.IDCard.substr(6, 8) + " " + t.IDCard.substr(14, 4),
                  t.showDeleteBtn = !1, 1 == t.contact ? t.mobile && (wx.setStorageSync("bus_newContactPhone", t.mobile),
                    e.contactPhone()) : 1 == t.idType && s.push(t);
              }), wx.setStorageSync("bus_lastPassengers", s), a(s);
            },
            fail: function() {
              a([]);
            }
          });
        });
      },
      reqGetMaxPassenger: function() {
        var e = this;
        wx.request({
          url: f.getMaxNum,
          method: "POST",
          header: e.data.headerInfo,
          data: JSON.stringify({
            departure: e.data.busInfo.departure,
            destination: e.data.busInfo.destination,
            supplierId: e.data.busInfo.supplierId,
            scheduleNo: e.data.busInfo.scheduleNo
          }),
          success: function(t) {
            if ((t = t.data).header.isSuccess) {
              e.setData({
                maxNum: t.body
              });
              var a = e.data.plists,
                s = 0;
              if (a.forEach(function(e) {
                  e.type && ++s;
                }), e.data.isSupportChild && s == a.length) {
                if (e.data.adultPriceCount > e.data.maxNum) {
                  var i = 0;
                  a.forEach(function(t, s) {
                    0 == t.type && ++i > e.data.maxNum && a.splice(s, 1);
                  });
                }
                if (e.data.childPriceCount > e.data.childMaxNum) {
                  var r = 0;
                  a.forEach(function(t, s) {
                    1 == t.type && ++r > e.data.childMaxNum && a.splice(s, 1);
                  });
                }
              } else !e.data.passengers.length && e.data.fillPassList.length > e.data.maxNum && (e.data.fillPassList.length = e.data.maxNum,
                e.setData({
                  fillPassList: e.data.fillPassList
                }), e.data.fillPassList.forEach(function(t) {
                  e.checkNameId(t);
                })), a.length > e.data.maxNum && (a.length = e.data.maxNum);
              e.setData({
                plists: a
              }), e.funGetInsDoc(a), e.refreshPriceCard();
            }
          }
        });
      },
      reqGetAppreciation: function() {
        var e = this;
        return new Promise(function(t, a) {
          wx.request({
            url: f.getRevenueServiceList,
            method: "POST",
            header: e.data.headerInfo,
            data: JSON.stringify({
              departureId: e.data.busInfo.dptCId,
              departureName: e.data.busInfo.departure,
              supplierId: e.data.busInfo.supplierId,
              ticketPrice: e.data.busInfo.ticketPrice,
              dptDate: e.data.busInfo.dptDate,
              dptTime: e.data.busInfo.dptTime,
              destinationName: e.data.busInfo.destination,
              depStation: e.data.busInfo.dptStation
            }),
            success: function(e) {
              var s = e.data;
              s.header.isSuccess ? t(s) : a(s);
            },
            fail: function(e) {
              a(e);
            }
          });
        });
      },
      reqAddPassengers: function(e) {
        var t = this;
        wx.request({
          url: f.addLinkerNew,
          method: "POST",
          header: t.data.headerInfo,
          data: JSON.stringify(e),
          success: function() {}
        });
      },
      reqGetConcatList: function() {
        var e = this;
        return p.loading(), new Promise(function(t, a) {
          wx.request({
            url: f.queryLinkerNew,
            method: "POST",
            header: e.data.headerInfo,
            data: JSON.stringify({
              certType: 1,
              pageIndex: 1,
              pageSize: 999
            }),
            success: function(s) {
              if (wx.hideToast(), (s = s.data).header.isSuccess) {
                var i = e.funFilterIDcards(s.body),
                  r = e.funSetSelected(i);
                if (e.data.plists.length)
                  for (var n = e.data.plists, d = Array.isArray(n), o = 0, n = d ? n : n[Symbol.iterator]();;) {
                    var c;
                    if (d) {
                      if (o >= n.length) break;
                      c = n[o++];
                    } else {
                      if ((o = n.next()).done) break;
                      c = o.value;
                    }
                    for (var u = c, l = r, h = Array.isArray(l), f = 0, l = h ? l : l[Symbol.iterator]();;) {
                      var p;
                      if (h) {
                        if (f >= l.length) break;
                        p = l[f++];
                      } else {
                        if ((f = l.next()).done) break;
                        p = f.value;
                      }
                      var C = p;
                      u.carryChildren && u.linkerName == C.linkerName && u.IDCard == C.IDCard && (C.carryChildren = u.carryChildren);
                    }
                  }
                e.setData({
                  passengers: r,
                  isHas12306: !!r.find(function(e) {
                    return 1 == e.source;
                  }),
                  isHasTcPass: !!r.find(function(e) {
                    return 0 == e.source;
                  })
                }), t(r);
              } else "EC_ALL_10000" == s.header.errCode ? t([]) : a(s);
            },
            fail: function(e) {
              a(e);
            }
          });
        });
      },
      funFilterIDcards: function(e) {
        for (var t = [], a = e, s = Array.isArray(a), i = 0, a = s ? a : a[Symbol.iterator]();;) {
          var r;
          if (s) {
            if (i >= a.length) break;
            r = a[i++];
          } else {
            if ((i = a.next()).done) break;
            r = i.value;
          }
          var n = r;
          n.listNos && n.listNos.length && (n.IDCard = n.listNos[0].certNo, n.IDSpace = n.IDCard.substr(0, 6) + " " + n.IDCard.substr(6, 8) + " " + n.IDCard.substr(14, 4),
            n.showDeleteBtn = !1, this.isIdCard(n.IDCard) && t.push(n));
        }
        return t;
      },
      funSetSelected: function(e) {
        var t, a = this.data.plists;
        return t = function(e) {
          var t, s = !1;
          for (t = 0; t < a.length; t++)
            if (a[t].linkerName == e.linkerName && a[t].IDCard == e.IDCard) {
              s = !0;
              break;
            }
          return s;
        }, e.forEach(function(e) {
          t(e) && (e.selected = !0);
        }), e;
      },
      funIsHasAdult: function() {
        var e = this,
          t = !1,
          a = this.data.plists;
        this.data.isSupportChild;
        if (a.length)
          for (var s = a, i = Array.isArray(s), r = 0, s = i ? s : s[Symbol.iterator]();;) {
            var n;
            if (i) {
              if (r >= s.length) break;
              n = s[r++];
            } else {
              if ((r = s.next()).done) break;
              n = r.value;
            }
            var d = n;
            if (e.eighteenYears(d.IDCard)) {
              t = !0;
              break;
            }
          } else t = !0;
        if (this.setData({
            isAdult: t
          }), this.fnCalculateCount(), a.length && t) {
          var o = wx.getStorageSync("bus_optimizationLists"),
            c = wx.getStorageSync("bus_offLine_youxuan");
          if (e.setData({
              slectedVAList: o,
              currentTab: e.data.yxCheckedIndex
            }), e.data.offLine && o.length && c) o.forEach(function(t, a) {
            if (t.serviceId == c) return e.setData({
              currentTab: a,
              defaultOpt: t
            }), !1;
          });
          else if (!c) {
            var u = wx.getStorageSync("bus_optimizationDefault");
            e.setData({
              defaultOpt: u
            });
          }
        } else {
          var l = wx.getStorageSync("bus_extremeLists"),
            h = wx.getStorageSync("bus_offLine_zhizun");
          if (e.setData({
              slectedVAList: l,
              currentTab: e.data.zzCheckedIndex
            }), e.data.offLine && l.length && h) l.forEach(function(t, a) {
            if (t.serviceId == h) return e.setData({
              currentTab: a,
              defaultExt: {
                sellPrice: t.sellPrice
              }
            }), !1;
          });
          else if (!h) {
            var f = wx.getStorageSync("bus_extremeDefault");
            e.setData({
              defaultOpt: f
            });
          }
        }
        wx.setStorageSync("bus_isAdult", t), this.funIsHasService();
      },
      eighteenYears: function(e) {
        var t = this.data.busInfo.currDateTime || p.format(new Date()),
          a = parseInt(t.substr(0, 4)) - e.substr(6, 4),
          s = parseInt(t.substr(5, 2) + t.substr(8, 2)),
          i = parseInt(e.substr(10, 2) + e.substr(12, 2));
        return !(18 > a || 18 == a && !(i <= s));
      },
      funIsHasService: function() {
        var e = this,
          t = this.data.busInfo,
          a = t.ticketPrice,
          s = function() {
            var t = 0;
            return e.data.isPeaceTravel ? t = e.data.defInsDb ? e.data.defIns.insCusPayTc : 0 : e.data.defInsMulti.forEach(function(e) {
              4 == e.insCode && (t = e.insCusPayTc);
            }), t;
          }(),
          i = !1;
        if (this.data.isAdult) {
          if (parseInt(this.data.defaultOpt.sellPrice)) return i = !!(1 < t.serviceChargeType && parseInt(t.serviceChargePrice)),
            this.setData({
              isHasService: i
            }), void this.funCountPrice();
        } else if (parseInt(this.data.defaultExt.sellPrice)) return i = !!(1 < t.serviceChargeType && parseInt(t.serviceChargePrice)),
          this.setData({
            isHasService: i
          }), this.funCountPrice(), !1;
        this.data.isAdult ? 1 == t.serviceChargeType && t.serviceChargePrice ? 10 > a ? i = !1 : 10 <= a && 30 > a ? (t.serviceChargePrice = 1,
            i = !s) : i = 30 <= a && 90 > a ? !s : !!(5 >= s) : i = !!(1 < t.serviceChargeType && t.serviceChargePrice) : 1 == t.serviceChargeType && parseInt(t.serviceChargePrice) ? 10 > a ? i = !1 : 10 <= a && 30 > a ? (t.serviceChargePrice = 1,
            i = !0) : i = !0 : i = !!(1 < t.serviceChargeType && parseInt(t.serviceChargePrice)),
          this.setData({
            busInfo: t,
            isHasService: i
          }), this.funCountPrice();
      },
      funCountPrice: function(e) {
        var t = this,
          a = t.fnCalculateCount(),
          s = a.adultPriceCount,
          i = a.childPriceCount,
          r = this.data.isAdult ? this.data.defaultOpt : this.data.defaultExt,
          n = 3 == this.data.localInfo.revenueType,
          d = function() {
            var e = 0;
            return !t.data.isPeaceTravel && t.data.isAdult && t.data.defInsMulti.forEach(function(t) {
              t.insCusPayTc && (e += t.insCusPayTc);
            }), e;
          }(),
          u = 1e3 * (this.data.busInfo.ticketPrice ? this.data.busInfo.ticketPrice : 0) * s + 1e3 * (this.data.isSupportChild ? this.data.childPrice : 0) * i;
        this.fnRedCardIsCanUse(u / 1e3);
        var l = p.isEmpty(this.data.addressInfo) || !this.data.addressInfo.expressFee || this.data.homeDelivery.show ? 0 : this.data.addressInfo.expressFee,
          h = !p.isEmpty(this.data.addressInfo) && this.data.addressInfo.agentFee ? 1e3 * this.data.addressInfo.agentFee * (s + i) / 1e3 : 0,
          f = (1e3 * (p.isEmpty(this.data.carCoupon) || 0 == this.data.carCouNum ? 0 : this.data.carCoupon.vouSellPrice * this.data.carCouNum) + 1e3 * (p.isEmpty(this.data.hotelCoupon) || 0 == this.data.hotelCouNum ? 0 : this.data.hotelCoupon.vouSellPrice * this.data.hotelCouNum) + u + (1e3 * (this.data.isPeaceTravel && this.data.defIns.insCusPayTc && this.data.isAdult && this.data.defInsDb ? this.data.defIns.insCusPayTc : 0) + 1e3 * (!this.data.isPeaceTravel && d && this.data.isAdult ? d : 0) + 1e3 * (this.data.isHasService ? this.data.busInfo.serviceChargePrice : 0) + 1e3 * (n && this.data.localInfo.revenuePrice ? this.data.localInfo.revenuePrice : 0) + 1e3 * (!n && this.data.isPeaceTravel && this.data.isAdult && !this.data.defInsDb && !p.isEmpty(r) && r.sellPrice ? r.sellPrice : 0) + 1e3 * (n || !this.data.isPeaceTravel || this.data.isAdult || p.isEmpty(r) || !r.sellPrice ? 0 : r.sellPrice) + 1e3 * (n || this.data.isPeaceTravel || p.isEmpty(r) || !r.sellPrice ? 0 : r.sellPrice) + 1e3 * (this.data.YyStatus ? this.data.YyData.price : 0) + 1e3 * (this.data.IssueStatus ? this.data.speedPrice : 0) + 1e3 * (this.data.refundStatus ? y.refund.price : 0) + 1e3 * (4 == this.data.localInfo.revenueType && this.data.localInfo.revenuePrice ? this.data.localInfo.revenuePrice : 0) + 1e3 * (this.data.subscribeInfoObj.isSubscribe && !this.data.ASisExceedLimit && this.data.vipSubscribe ? this.data.vipSubscribePrice : 0) + 1e3 * (0 == this.data.adjustPrice ? 0 : this.data.adjustPrice)) * (s + i) - 1e3 * (this.data.selectedPrefer && !p.isEmpty(this.data.preferInfo) ? this.data.preferInfo.preferentialType : 0) * (this.data.preferInfo.preferentialDimension ? s + i : 1) - (p.isEmpty(this.data.selectCode) || 0 == s + i ? 0 : 1e3 * this.data.selectCode.showPrice) + 1e3 * (this.data.busVoucherIsSel && !p.isEmpty(this.data.busVoucher) && this.data.busVoucher.vouSellPrice ? this.data.busVoucher.vouSellPrice : 0) + 1e3 * (this.data.isHasRedCardBuy && this.data.isSelectedRedCard ? this.data.reduceCard_buy.sellPrice : 0) + 1e3 * (this.data.homeDeliveryStatus ? (1e3 * l + 1e3 * h) / 1e3 : 0)) / 1e3;
        this.data.isSelectedRedCard && (f = (parseInt(1e3 * f) - parseInt(1e3 * (this.data.isHasRedCardUse ? this.data.reduceCard_use.discountMoney : this.data.reduceCard_buy.discountMoney))) / 1e3);
        var C = 0,
          g = p.isEmpty(this.data.selectCode) || 0 == s + i ? 0 : this.data.selectCode.showPrice,
          v = this.data.isSelectedRedCard ? this.data.isHasRedCardUse ? this.data.reduceCard_use.discountMoney : this.data.reduceCard_buy.discountMoney : 0;
        this.data.selectedPrefer && !p.isEmpty(this.data.preferInfo) && (C = this.data.preferInfo.preferentialDimension ? this.accMulti(this.data.preferInfo.preferentialType, s + i) : this.accMulti(this.data.preferInfo.preferentialType, 1));
        var b = this.accAdd(this.accMulti(this.data.busInfo.discount, s), this.accMulti(this.data.busInfo.childDiscount, i));
        if (this.setData({
            totalPrice: 0 > f ? 0 : f,
            allDiscounts: this.accAdd(this.accAdd(this.accAdd(C, g), v), b)
          }), !p.isEmpty(this.data.prevPriceItem)) {
          var D = t.funComposePriceItem(),
            S = !1;
          for (var I in D)
            if ((0, c.default)(D[I]) != (0, c.default)(this.data.prevPriceItem[I]) || D[I] != this.data.prevPriceItem[I]) {
              S = !0;
              break;
            }
            (S || e) && (console.log("priceItem 发生变化！！！！！！！！！！！！！！！！！！"), this.reqGetOrderTotalAmount().then(function(a) {
              a.header.isSuccess && !p.isEmpty(a.body) && (t.setData({
                adjustPrice: a.body.adjustPrice,
                adjustPriceAbs: o(a.body.adjustPrice),
                adjustPriceContent: a.body.content || ""
              }), e && "function" == typeof e && e.call(t)), t.funCountPrice();
            }).catch(function(e) {
              console.error && console.error(e);
            }));
        }
      },
      fnRedCardIsCanUse: function(e) {
        this.data.isHasRedCardUse && (e >= this.data.reduceCard_use.ticketPriceLimit ? this.setData({
          ticketPriceLimitUse: !0
        }) : this.setData({
          ticketPriceLimitUse: !1,
          isSelectedRedCard: !1
        }));
      },
      fnReducecardDetail: function(e) {
        var t = this;
        p.$http(f.getRateCard, {
          cardId: e || "-1"
        }).then(function(e) {
          if (!p.isEmpty(e)) {
            var a = e.discountRuleContent.replace(/(?!<br.+?>)<.+?>/gi, "");
            a = (a = (a = a.replace(/<br\/>|<br><br>/gi, "<br>")).replace(/<\/span>|<\/p>|(<p|<span) class="[\w-]*">/gi, "")).split("<br>"),
              t.setData({
                redCardExplain: a
              });
          }
        }).catch(function(e) {
          console.error("request config.getRateCard error:", e);
        });
      },
      funRenderIns: function() {
        var e = this;
        try {
          wx.getStorageSync("bus_insuranceDefault");
          var t = wx.getStorageSync("bus_insuranceDefMulti") || "";
        } catch (e) {}
        if (t) {
          if (this.setData({
              defInsMulti: t
            }), "insurance" == e.data.selectInsOrVA) {
            for (var a = 0; a < t.length; a++) {
              if (t[a].pubID) {
                e.setData({
                  defInsMultiNoBuy: !1
                });
                break;
              }
              a == t.length - 1 && e.setData({
                defInsMultiNoBuy: !0
              });
            }
            t.forEach(function(t) {
              0 < t.pubID && (e.data.isAdult && e.data.isHasOptSvc && 0 <= e.data.defaultOpt.insuranceTypeList.indexOf(t.insCode + "") && e.funGetSetOptExtNoBuyItem("bus_optimizationLists"), !e.data.isAdult && e.data.isHasExtSvc && e.funGetSetOptExtNoBuyItem("bus_extremeLists"));
            });
          }
          e.judgeWechatCardIsCanUse(e.data.cardMsg), this.funIsHasService();
        }
      },
      findNotBuyItem: function(e) {
        var t = {};
        return wx.getStorageSync("bus_insuranceLists").forEach(function(a) {
          a.value.forEach(function(a) {
            e == a.insCode && 0 == a.pubID && (t = a);
          });
        }), t;
      },
      funRenderValueadd: function(e) {
        var t, a = this,
          s = a.data.defInsMulti;
        if (e && 2 == e) t = this.data.isAdult ? this.data.defaultOpt : this.data.defaultExt,
          this.funIsHasService();
        else {
          try {
            t = this.data.isAdult ? wx.getStorageSync("bus_optimizationDefault") || "" : wx.getStorageSync("bus_extremeDefault") || "";
          } catch (t) {}
          this.data.isAdult ? t && (this.setData({
            defaultOpt: t
          }), this.funIsHasService()) : t && (this.setData({
            defaultExt: t
          }), this.funIsHasService());
        }
        if (!a.data.isPeaceTravel && "valueadd" == a.data.selectInsOrVA && t && 0 < t.sellPrice) {
          s.forEach(function(e, i) {
            0 <= t.insuranceTypeList.indexOf(e.insCode + "") && (s.splice(i, 1, a.findNotBuyItem(e.insCode)),
              a.setData({
                defInsMulti: s
              }), wx.setStorageSync("bus_insuranceDefMulti", s));
          });
          for (var i = 0; i < s.length; i++) {
            if (s[i].pubID) {
              a.setData({
                defInsMultiNoBuy: !1
              });
              break;
            }
            i == s.length - 1 && a.setData({
              defInsMultiNoBuy: !0
            });
          }
        }
        a.judgeWechatCardIsCanUse(a.data.cardMsg);
      },
      funGetSetOptExtNoBuyItem: function(e) {
        var t = this,
          a = "bus_optimizationLists" == e ? "bus_optimizationDefault" : "bus_extremeDefault",
          s = "bus_optimizationLists" == e ? "defaultOpt" : "defaultExt";
        wx.getStorageSync(e).forEach(function(e, i) {
          if (0 == e.sellPrice) {
            var r;
            t.setData((r = {}, r[s] = e, r.currentTab = i, r)), wx.setStorageSync(a, e);
          }
        });
      },
      btnShowDetail: function() {
        return (this.data.plists.length || !(0 >= this.data.totalPrice)) && (this.setData({
          isShowDetail: !this.data.isShowDetail,
          showDetTipObj: {}
        }), void(this.data.isShowDetail && u.default.setEvent(l.booking, "DLDD12", "^总额:[" + this.data.totalPrice + "]^")));
      },
      btnEditPass: function(e) {
        for (var t, a, s = e.currentTarget.dataset, i = 1 == s.type ? "editChild" : "editAdult", r = this.data.passengers, n = 0; n < r.length; n++)
          if (a = r[n],
            s.pname == a.linkerName && s.pid == a.IDCard) {
            t = a;
            break;
          }
        u.default.setEvent(l.booking, "DLDD05"), t ? wx.navigateTo({
          url: "../concatlist/concatlist?action=" + i + "&passenger=" + JSON.stringify(t) + "&all=" + JSON.stringify(r) + "&from=" + s.from + "&isHasPassengers=" + (r.length ? 1 : 0)
        }) : (p.alert("暂未获取该乘车人数据，请稍后重试"), u.default.setEvent(C, "DLDD18", "^名称:[编辑常旅，乘客不在常旅中]^"));
      },
      btnAddChild: function() {
        this.data.passengers.length ? wx.navigateTo({
          url: "../concatlist/concatlist?action=addChild&isHasPassengers=1"
        }) : this.data.childPriceCount < this.data.childMaxNum && wx.navigateTo({
          url: "../concatlist/concatlist?action=addChild&isHasPassengers=0"
        });
      },
      btnShowAddPage: function() {
        u.default.setEvent(C, "DLDD03"), wx.navigateTo({
          url: "../busIDCard/busIDCard?isSupportChild=" + +this.data.isSupportChild + "&isHasPassengers=" + this.data.passengers.length
        });
      },
      btnEditChild: function(e) {
        var t = e.currentTarget.dataset,
          a = t.cname,
          s = t.cid,
          i = this.data.fillPassList.find(function(e) {
            return e.linkerName == a && e.IDCard == s;
          });
        wx.navigateTo({
          url: "../concatlist/concatlist?action=editChild&isHasPassengers=0&passenger=" + JSON.stringify(i) + "&from=" + t.from
        });
      },
      btnOpenPass: function() {
        u.default.setEvent(C, "DLDD03");
        var e = this;
        e.data.passengers.length ? this.reqGetConcatList().then(function(t) {
          t.length ? e.btnShowPassengers() : e.btnShowAddPage();
        }) : e.btnShowAddPage();
      },
      btnShowPassengers: function() {
        this.setData({
          showPassengers: !this.data.showPassengers
        });
      },
      btnCancel: function() {
        this.btnShowPassengers();
      },
      refreshPlists: function(e) {
        for (var t = [], a = this.data.isSupportChild, s = 0, i = 0, r = this.data.passengers, n = Array.isArray(r), d = 0, r = n ? r : r[Symbol.iterator]();;) {
          var o;
          if (n) {
            if (d >= r.length) break;
            o = r[d++];
          } else {
            if ((d = r.next()).done) break;
            o = d.value;
          }
          var c = o;
          this.data.isHas12306 ? this.data.isCheck12306 ? c.selected && (a && 0 == c.type && ++s,
            a && 1 == c.type && ++i, !a && ++s, t.push(c)) : 0 == c.source && c.selected && (a && 0 == c.type && ++s,
            a && 1 == c.type && ++i, !a && ++s, t.push(c)) : c.selected && (a && 0 == c.type && ++s,
            a && 1 == c.type && ++i, !a && ++s, t.push(c));
        }
        return s > this.data.maxNum ? (p.alert("最多只能添加" + this.data.maxNum + "名乘车人!"), u.default.setEvent(C, "DLDD18", "^名称:[添加乘客超出最大人数]^"), !1) : (a && i > this.data.childMaxNum && (p.alert("最多只能添加" + this.data.childMaxNum + "名儿童!"),
            u.default.setEvent(C, "DLDD18", "^名称:[添加儿童乘客超出儿童最大人数]^")), this.setData({
            plists: t
          }), wx.setStorageSync("bus_lastPassengers", this.data.plists), this.refreshPriceCard(),
          e && e.currentTarget ? this[e.currentTarget.dataset.callback]() : e && "function" == typeof e && e(),
          void this.funGetInsDoc(t));
      },
      refreshPriceCard: function() {
        var e = {};
        if (this.data.isSupportChild)
          for (var t = this.data.plists, a = Array.isArray(t), s = 0, t = a ? t : t[Symbol.iterator]();;) {
            var i;
            if (a) {
              if (s >= t.length) break;
              i = t[s++];
            } else {
              if ((s = t.next()).done) break;
              i = s.value;
            }
            var r = i;
            if (1 != r.type) {
              e = r;
              break;
            }
          } else e = this.data.plists[0] ? this.data.plists[0] : {};
        this.setData({
          contactInfo: e
        }), this.funIsHasAdult(), this.funGetWechatCard(!0);
      },
      btnSelectPass: function(e) {
        var t = this,
          a = e.currentTarget.dataset,
          s = this.data.passengers,
          i = 0,
          r = 0;
        if (!parseInt(a.state)) {
          for (var n = s, d = Array.isArray(n), o = 0, n = d ? n : n[Symbol.iterator]();;) {
            var c;
            if (d) {
              if (o >= n.length) break;
              c = n[o++];
            } else {
              if ((o = n.next()).done) break;
              c = o.value;
            }
            var l = c;
            t.data.isSupportChild ? (0 == l.type && l.selected && ++i, 1 == l.type && l.selected && ++r) : l.selected && i++;
          }
          if (t.data.isSupportChild) {
            if (0 == a.type && i >= this.data.maxNum) return p.alert("最多只能购买" + this.data.maxNum + "张成人票!"),
              u.default.setEvent(C, "DLDD18", "^名称:[添加乘客超出最大人数]^"), !1;
            if (1 == a.type && r >= this.data.childMaxNum) return p.alert("最多只能添加" + this.data.childMaxNum + "名儿童!"),
              u.default.setEvent(C, "DLDD18", "^名称:[添加儿童乘客超出儿童最大人数]^"), !1;
          } else if (i >= this.data.maxNum) return p.alert("最多只能添加" + this.data.maxNum + "名乘车人!"),
            u.default.setEvent(C, "DLDD18", "^名称:[添加乘客超出最大人数]^"), !1;
        }
        for (var h = s, f = Array.isArray(h), y = 0, h = f ? h : h[Symbol.iterator]();;) {
          var g;
          if (f) {
            if (y >= h.length) break;
            g = h[y++];
          } else {
            if ((y = h.next()).done) break;
            g = y.value;
          }
          var v = g;
          if (v.linkerName == a.pname && v.IDCard == a.pid) {
            v.selected = !v.selected;
            break;
          }
        }
        this.setData({
          passengers: s
        });
      },
      getItemIndex: function(e, t) {
        for (var a, s = this, i = 13 == (e = e.toString()).length ? "addTime" : "IDCard", r = 13 == e.length ? s.data.fillPassList : s.data.plists, n = 0; n < r.length; n++)
          if ((a = r[n])[i] == e) return t ? a : n;
      },
      fillName: function(e) {
        var t, a = e.currentTarget.dataset.serial,
          s = this.data.fillPassList[a],
          i = e.detail.value;
        this.setData((t = {}, t["fillPassList[" + a + "].linkerName"] = i, t["fillPassList[" + a + "].idFocus"] = !1,
          t)), this.checkNameId(s);
      },
      fillId: function(e) {
        var t, a, s = e.currentTarget.dataset.serial,
          i = this.data.fillPassList[s],
          r = e.detail.value.replace(/\s/g, ""),
          n = r.length,
          d = !0,
          o = e.currentTarget.dataset.pname,
          c = /^[a-zA-Z\u4e00-\u9fa5]+$/gi;
        6 >= n ? a = r : 6 < n && 14 >= n ? a = r.substr(0, 6) + " " + r.substr(6) : (18 < n && (r = r.substr(0, 18)),
            a = r.substr(0, 6) + " " + r.substr(6, 8) + " " + r.substr(14, 4), 18 == n && this.isIdCard(r) && (d = !1)),
          this.setData((t = {}, t["fillPassList[" + s + "].IDCard"] = r, t["fillPassList[" + s + "].IDSpace"] = a,
            t["fillPassList[" + s + "].idFocus"] = d, t)), 18 != r.length || this.isIdCard(r) ? 18 == r.length && this.isIdCard(r) && (!o || c.test(o) ? 2 > o.length && (p.alert("乘客姓名过短，请仔细核对"),
            u.default.setEvent(C, "DLDD18", "^名称:[乘客姓名过短，请仔细核对]^")) : (p.alert("请仔细核对您的姓名，仅支持中文或英文"),
            u.default.setEvent(C, "DLDD18", "^名称:[请仔细核对您的姓名，仅支持中文或英文]^"))) : (p.alert("您输入的身份证有误，请核实后重新输入"),
            u.default.setEvent(C, "DLDD18", "^名称:[您输入的身份证有误，请核实后重新输入]^")), this.checkNameId(i);
      },
      fillIdBlur: function(e) {
        var t, a = e.currentTarget.dataset.serial,
          s = (this.data.fillPassList[a], e.detail.value.replace(/\s/g, ""));
        this.setData((t = {}, t["fillPassList[" + a + "].idFocus"] = !1, t)), s ? !this.isIdCard(s) && (p.alert("您输入的身份证有误，请核实后重新输入"),
          u.default.setEvent(C, "DLDD18", "^名称:[您输入的身份证有误，请核实后重新输入]^")) : (p.alert("请输入身份证号码"),
          u.default.setEvent(C, "DLDD18", "^名称:[请输入身份证号码]^"));
      },
      blurred: function() {
        this.setData({
          phoneFocus: !1
        });
      },
      isIdCard: function(e) {
        var t = e.toLowerCase().match(/\w/g);
        if (e.match(/^\d{17}[\dx]$/i)) {
          for (var a = 0, s = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2], i = 0; 17 > i; i++) a += parseInt(t[i], 10) * s[i];
          return !("10x98765432".charAt(a % 11) != t[17] || !e.replace(/^\d{6}(\d{4})(\d{2})(\d{2}).+$/, "$1-$2-$3"));
        }
        return !1;
      },
      checkNameId: function(e) {
        var t, a = this.data.plists,
          s = this.data.fillPassList,
          i = /^[a-zA-Z\u4e00-\u9fa5]{2,}$/,
          r = !0;
        (function() {
          for (var s, i = 0; i < a.length; i++)
            if ((s = a[i]).addTime && s.addTime == e.addTime) {
              r = !1, t = i;
              break;
            }
        })(), r ? a.length < s.length && i.test(e.linkerName) && this.isIdCard(e.IDCard) && (a.push(e),
            this.setData({
              plists: a
            }), wx.setStorageSync("bus_lastPassengers", this.data.plists), this.refreshPriceCard()) : (i.test(e.linkerName) && this.isIdCard(e.IDCard) ? a[t] = e : a.splice(t, 1),
            this.setData({
              plists: a
            }), wx.setStorageSync("bus_lastPassengers", this.data.plists), this.refreshPriceCard()),
          this.funGetInsDoc(a);
      },
      inputPhoneNum: function(e) {
        var t, a = e.detail.value.replace(/\s/gi, ""),
          s = a.length;
        3 >= s ? t = a : 3 < s && 7 >= s ? t = a.substr(0, 3) + " " + a.substr(3) : (11 < s && (a = a.substr(0, 11)),
          t = a.substr(0, 3) + " " + a.substr(3, 4) + " " + a.substr(7, 4), 11 == s && this.isMobile(a) && (this.blurred(),
            wx.setStorageSync("bus_newContactPhone", a))), this.setData({
          contactPhone: a,
          phoneSpace: t
        });
      },
      blurPhone: function(e) {
        this.setData({
          phoneFocus: !1
        });
        var t = e.detail.value.replace(/\s/gi, "");
        this.isMobile(t) || (p.alert("请输入正确的手机号"), u.default.setEvent(C, "DLDD18", "^名称:[请输入正确的手机号]^")),
          u.default.setEvent(l.booking, "DLDD07", "^取票人手机号:[" + t + "]^");
      },
      fnShowDeleteBtn: function(e) {
        var t, a, s, i = e.currentTarget.dataset.deltype;
        if (t = "fill" == i ? this.data.fillPassList : this.data.plists, a = e.currentTarget.dataset.serial,
          s = t[a].showDeleteBtn, "fill" == i) {
          var r;
          this.setData((r = {}, r["fillPassList[" + a + "].showDeleteBtn"] = !s, r));
        } else {
          var n;
          this.setData((n = {}, n["plists[" + a + "].showDeleteBtn"] = !s, n));
        }
      },
      btnDeletePass: function(e) {
        var t = e.currentTarget.dataset.serial,
          a = [];
        a.length && (a[t].carryChildren && a[t].carryChildren.length && this.setData({
          freeChildCount: this.data.freeChildCount - a[t].carryChildren.length
        }), a.splice(t, 1), a.forEach(function(e) {
          e.showValue && (e.showValue = e.linkerName);
        }), this.setData({
          fillPassList: a,
          adjustPrice: 0 < a.length ? this.data.adjustPrice : 0
        }));
        for (var s = e.currentTarget.dataset.pid, i = e.currentTarget.dataset.pname, r = this.data.plists, n = this.data.passengers, d = (this.fnCalculateCount(),
            0); d < r.length; d++)
          if (r[d].linkerName == i && r[d].IDCard == s) {
            r[d].carryChildren && r[d].carryChildren.length && this.setData({
              freeChildCount: this.data.freeChildCount - r[d].carryChildren.length
            }), r.splice(d, 1);
            break;
          }
        this.fnCalculateCount(), wx.setStorageSync("bus_lastPassengers", r), (this.data.isSupportChild && this.data.childPriceCount && n.length && 0 == this.data.adultCount || this.data.isSupportChild && this.data.childPriceCount && !n.length && 0 == a.length) && (this.setData({
          showNoAdult: !0
        }), setTimeout(function() {
          this.setData({
            showNoAdult: !1
          });
        }.bind(this), 2e3)), u.default.setEvent(C, "DLDD04"), this.setData({
          plists: r
        }), this.funGetInsDoc(r);
        for (d = 0; d < n.length; d++)
          if (n[d].linkerName == i && n[d].IDCard == s) {
            n[d].selected = !1;
            break;
          }
        this.setData({
          passengers: n
        }), this.refreshPriceCard();
      },
      fnShowFCDeleteBtn: function(e) {
        var t = e.currentTarget.dataset.idx,
          a = this.data.passengers.length ? this.fnFindMapchildParent(e) : this.fnFindMapchildParent(e, this.data.fillPassList);
        if (a.adult.carryChildren[t].showDeleteBtn = !a.adult.carryChildren[t].showDeleteBtn,
          this.data.passengers.length) {
          var s;
          this.setData((s = {}, s["plists[" + a.index + "]"] = a.adult, s));
        } else {
          var i;
          this.setData((i = {}, i["fillPassList[" + a.index + "]"] = a.adult, i));
        }
      },
      btnDeleteFreeChild: function(e) {
        var t, a = e.currentTarget.dataset.idx,
          s = this.fnFindMapchildParent(e);
        s.adult.carryChildren.splice(a, 1), 0 >= s.adult.carryChildren.length && delete s.adult.carryChildren,
          this.setData((t = {}, t["plists[" + s.index + "]"] = s.adult, t.freeChildCount = this.data.freeChildCount - 1,
            t)), wx.setStorageSync("bus_lastPassengers", this.data.plists);
        var i, r;
        if ((this.data.passengers.length ? this.data.passengers : this.data.fillPassList).forEach(function(e, t) {
            e.IDCard == s.adult.IDCard && e.linkerName == s.adult.linkerName && (i = t, r = e);
          }), r.carryChildren.splice(a, 1), 0 >= r.carryChildren.length && delete r.carryChildren,
          this.data.passengers.length) {
          var n;
          this.setData((n = {}, n["passengers[" + i + "]"] = r, n));
        } else {
          var d;
          this.setData((d = {}, d["fillPassList[" + i + "]"] = r, d));
        }
        this.funGetInsDoc(this.data.plists);
      },
      btnEditFreeChild: function(e) {
        var t = JSON.parse(JSON.stringify(this.data.plists)),
          a = e.currentTarget.dataset.idx,
          s = this.fnFindMapchildParent(e);
        t[s.index].isEdit = !0, t[s.index].carryChildren[a].isEdit = !0, wx.navigateTo({
          url: "../concatlist/concatlist?action=editFreeChild&plists=" + JSON.stringify(t)
        });
      },
      fnFindMapchildParent: function(e, t) {
        var a, s, i = e.currentTarget.dataset.pid,
          r = e.currentTarget.dataset.pname;
        return (t = t || this.data.plists).forEach(function(e, t) {
          e.IDCard == i && e.linkerName == r && (a = t, s = e);
        }), {
          adult: s,
          index: a
        };
      },
      contactPhone: function() {
        var e, t = wx.getStorageSync("bus_newContactPhone") || "",
          a = t.length;
        e = 3 >= a ? t : 3 < a && 7 >= a ? t.substr(0, 3) + " " + t.substr(3) : t.substr(0, 3) + " " + t.substr(3, 4) + " " + t.substr(7, 4),
          this.setData({
            contactPhone: t,
            phoneSpace: e
          });
      },
      funValidateNameNotice: function(e) {
        var t = e.linkerName,
          a = e.IDCard,
          s = /^[a-zA-Z\u4e00-\u9fa5]+$/;
        return t ? 2 > t.length ? "乘客姓名过短，请仔细核对" : s.test(t) ? a ? !this.isIdCard(a) && "请输入正确的身份证号码" : "请输入身份证号码" : "请仔细核对您的姓名，仅支持中文或英文" : "姓名不能为空，请重新输入";
      },
      btnBeforePay: function() {
        // u.default.setEvent(l.booking, "DLDD13", "^渠道Refid:[" + wx.getStorageSync("refid") + "]^"),
        //   this.data.isHasRedCardBuy ? (this.setData({
        //     isShowRedCardPop: !0
        //   }),
        //    u.default.setEvent(l.booking, "DLDD14", "^立减卡:[" + this.data.reduceCard_buy.sellPrice + "]^出发城市:" + this.data.busInfo.departure + "^到达城市:" + this.data.busInfo.destination + "^")) : this.btnToPay();
        this.btnToPay();
      },

      reBtnToPay: function(){
          console.log('reBtnToPay');
          var pass={
              full_name:'张三',
              telephone:'13289900101'
          }
          wx.request({
              url:api.OrderUrl,
              method:'POST',
              data:{
                  user_id:1223,
                  merchant_id:1233,
                  moto_num:3009,
                  product_id:'D300f',
                  price:5800,
                  order_amount:5800,
                  attach:JSON.stringify(pass),
                  departure_time:'2019-04-19 12:29:02',
                  order_type:'book'
              },
              header:{
                  "Content-Type": "json"
              },
              success(res){
                  console.log(res.data)
              }
          })
        
      },

      btnToPay: function() {
        var e;
        if (this.setData({
            isShowDetail: !1
          }), 1 == this.data.isCanclePay) return !1;
        this.data.isCanclePay = !0;
        var t, a, s, i, r = this,
          n = this.data.contactPhone,
          d = [],
          o = 0,
          c = r.fnCalculateCount(),
          l = c.adultCount,
          D = c.childCount,
          S = c.adultPriceCount,
          I = c.childPriceCount,
          m = "",
          P = null,
          w = "",
          T = r.data.fillPassList,
          x = !0,
          k = {};
        if (r.data.isSuggestChoseAlter && 2 == r.data.busInfo.bookingType && !r.data.isCheckAlternate && "A" != r.data.isSimpleBeixuan && 0 == I) return r.setData({
          isSuggestChoseAlter: !1
        }), r.data.alterDay.forEach(function(e, t) {
          if ("本车次日期" == e.desc) {
            var a;
            r.setData((a = {}, a["alterDay[" + t + "].selected"] = !0, a));
          }
        }), r.data.alterHour.forEach(function(e, t) {
          if ("前后2小时" == e.desc) {
            var a;
            r.setData((a = {}, a["alterHour[" + t + "].selected"] = !0, a));
          }
        }), r.setData({
          alterTitle: "预约票源紧张，建议选择备选车次，提升抢票成功率，保障顺利出行",
          isShowAlter: !0
        }), this.updateAlterTxt(), this.updateOptionsSchedulesTimes(), this.data.isCanclePay = !1, !1;
        if ("3" == r.data.localInfo.revenueType && !r.data.isAdult && !p.isEmpty(r.data.localInfo.superValue) && r.data.localInfo.superValue.insCodeList && r.data.localInfo.superValue.insCodeList.length) return p.alert("超值套票需要包含成年人才能购买哦"),
          u.default.setEvent(C, "DLDD18", "^名称:[超值套票需要包含成年人才能购买哦]^"), this.data.isCanclePay = !1, !1;
        if (r.data.isSupportChild && I && !S) return p.alert("为确保出行安全，儿童乘客须有乘客陪同!"), u.default.setEvent(C, "DLDD18", "^名称:[为确保出行安全，儿童乘客须有乘客陪同!]^"),
          this.data.isCanclePay = !1, !1;
        if (!r.data.passengers.length) {
          for (var A, L = 0; L < T.length; L++) {
            if (A = T[L], s = r.funValidateNameNotice(A)) return x = !1, 0 <= s.indexOf("身份证") ? (p.alert(s, "", "", "", "", function() {
                setTimeout(function() {
                  var e;
                  r.setData((e = {}, e["fillPassList[" + L + "].idFocus"] = !0, e));
                }, 0);
              }), u.default.setEvent(C, "DLDD18", "^名称:[" + s + "]^")) : (p.alert(s), u.default.setEvent(C, "DLDD18", "^名称:[" + s + "]^")),
              this.data.isCanclePay = !1, !1;
            if (k[A.IDCard.toLowerCase()]) return x = !1, p.alert("乘客【" + k[A.IDCard.toLowerCase()] + "】、【" + A.linkerName + "】身份证号重复，请核实后重新输入"),
              u.default.setEvent(C, "DLDD18", "^名称:[身份证号重复]^"), this.data.isCanclePay = !1, !1;
            k[A.IDCard.toLowerCase()] = A.linkerName;
          }
          if (!x) return this.data.isCanclePay = !1, !1;
        }
        if (!r.data.plists.length) return p.alert("请添加乘客!"), u.default.setEvent(C, "DLDD18", "^名称:[请添加乘客]^"),
          this.data.isCanclePay = !1, !1;
        if (p.isEmpty(r.data.contactInfo)) return p.alert("请添加取票人!"), u.default.setEvent(C, "DLDD18", "^名称:[请添加取票人]^"),
          this.data.isCanclePay = !1, !1;
        if (!r.isMobile(n)) return p.alert("请输入正确的手机号码!", "", "", "", "", function() {
          setTimeout(function() {
            r.setData({
              phoneFocus: !0
            });
          }, 0);
        }), u.default.setEvent(C, "DLDD18", "^名称:[请输入正确的手机号码]^"), this.data.isCanclePay = !1, !1;
        if (r.data.homeDeliveryStatus && p.isEmpty(r.data.addressInfo)) return p.alert("请添加邮寄地址!"),
          this.data.isCanclePay = !1, !1;
        var N, E, M = wx.getStorageSync("bus_pid");
        if (M && (r.setData({
            isHasPid: !0
          }), N = M.addtime + M.indate, E = new Date().getTime(), N > E ? w = M.value : wx.removeStorageSync("bus_pid")),
          wx.setStorageSync("bus_newContactPhone", n), r.data.plists.forEach(function(e) {
            var t = {
              name: e.linkerName,
              idCard: e.IDCard,
              mobileNo: "",
              idType: 1,
              passengerType: r.data.isSupportChild ? e.type || 0 : 0
            };
            if (r.data.supportFreeChild && r.data.adultCount && 0 < r.data.localInfo.freeChildCntLeft && e.carryChildren) {
              t.carryChildren = JSON.parse(JSON.stringify(e.carryChildren));
              for (var a = t.carryChildren, s = Array.isArray(a), i = 0, a = s ? a : a[Symbol.iterator]();;) {
                var n;
                if (s) {
                  if (i >= a.length) break;
                  n = a[i++];
                } else {
                  if ((i = a.next()).done) break;
                  n = i.value;
                }
                var o = n;
                for (var c in o) "name" != c && "cardNo" != c && delete o[c];
              }
            }
            d.push(t);
          }), o = d.length, r.data.isSupportChild) {
          if (l > r.data.maxNum) return p.alert("最多只能预订" + r.data.maxNum + "张成人票!"), u.default.setEvent(C, "DLDD18", "^名称:[最多只能预订" + r.data.maxNum + "张成人票!]^"),
            this.data.isCanclePay = !1, !1;
        } else if (o > r.data.maxNum) return p.alert("最多只能预订" + r.data.maxNum + "张票!"),
          u.default.setEvent(C, "DLDD18", "^名称:[最多只能预订" + r.data.maxNum + "张票!]^"), this.data.isCanclePay = !1, !1;
        if (r.data.isSupportChild && I > r.data.childMaxNum) return p.alert("最多只能预定" + r.data.childMaxNum + "张儿童票!"),
          u.default.setEvent(C, "DLDD18", "^名称:[最多只能预定" + r.data.childMaxNum + "张儿童票!]^"),
          this.data.isCanclePay = !1, !1;
        r.setData({
          isHiddenCar: !1
        }), setTimeout(function() {
          r.animation.translateX(r.data.animateWidth).step(), r.setData({
            animationData: r.animation.export()
          });
        }.bind(r), 20), i = new Date().getTime() + 20, t = {
          name: r.data.contactInfo.linkerName,
          idCard: r.data.contactInfo.IDCard,
          mobileNo: n,
          idType: 1,
          passengerType: 0
        }, m = r.data.localInfo.exData ? r.data.localInfo.exData : r.data.busInfo.exData1 ? r.data.busInfo.exData1 : "", !p.isEmpty(r.data.preferInfo) && r.data.selectedPrefer && (P = [{
          id: r.data.preferInfo.id,
          amount: this.accMulti(r.data.preferInfo.preferentialType, r.data.preferInfo.preferentialDimension ? o : 1)
        }]);
        var O = [];
        r.data.isPeaceTravel && r.data.isAdult && r.data.defInsDb ? O = [{
          insuranceId: r.data.defIns.pubID,
          insuranceAmount: r.data.defIns.insCusPayTc * o
        }] : r.data.isAdult && !r.data.isPeaceTravel ? r.data.defInsMulti.forEach(function(e) {
          O.push({
            insuranceId: e.pubID,
            insuranceAmount: e.insCusPayTc * o
          });
        }) : O = [{
          insuranceId: 0,
          insuranceAmount: 0
        }];
        var _ = 0,
          R = 0,
          V = 0,
          H = function() {
            return 3 == r.data.localInfo.revenueType ? (_ = r.data.localInfo.revenueId, R = r.data.localInfo.revenuePrice,
              r.data.isCanclePay = !1, !1) : (r.data.isAdult && r.data.isHasOptSvc && (_ = r.data.defaultOpt.serviceId,
              R = r.data.defaultOpt.sellPrice, V = 0), void(!r.data.isAdult && r.data.isHasExtSvc && (_ = r.data.defaultExt.serviceId,
              R = r.data.defaultExt.sellPrice, V = 1)));
          };
        r.data.isPeaceTravel && r.data.isAdult ? !r.data.defInsDb && H() : H();
        var U = [],
          F = function(e) {
            p.isEmpty(e) || U.push({
              revenueId: e.id || "",
              businessCode: e.code || "",
              serviceAmount: e.price || ""
            });
          };
        r.data.YyStatus && F(r.data.YyData), r.data.IssueStatus && F(r.data.stList.find(function(e) {
          return "FastTicketOut" == e.code;
        }));
        var j = Object.assign({}, r.data.addressInfo);
        if (p.isEmpty(r.data.addressInfo) || (j = {
            address: r.data.addressInfo.addressDetail || "",
            city: r.data.addressInfo.modefyRegion[1].replace(/市/, "") || "",
            district: r.data.addressInfo.modefyRegion[2].replace(/市/, "") || "",
            expressFee: r.data.addressInfo.expressFee || "",
            hdSupplierId: r.data.addressInfo.hdSupplierId || "",
            homeDeliveryId: r.data.addressInfo.homeDeliveryId || "",
            phone: r.data.addressInfo.contactPhone || "",
            province: r.data.addressInfo.modefyRegion[0].replace(/省/, "") || "",
            receiver: r.data.addressInfo.addName || ""
          }, j.agentFee = 1e3 * r.data.addressInfo.agentFee * (l + D) / 1e3, 3 <= r.data.featureValue && !!r.data.homeDelivery.show && (j.expressFee = 0)),
          2 == r.data.localInfo.revenueType) {
          var B = g.find(function(e) {
            return "FastTicketOut" == e.code;
          });
          p.isEmpty(B) || U.push({
            revenueId: B.id || "",
            businessCode: B.code || "",
            serviceAmount: B.price || ""
          });
        }
        if (4 == r.data.localInfo.revenueType) {
          var q = g.find(function(e) {
            return "VIPHall" == e.code;
          });
          p.isEmpty(q) || U.push({
            revenueId: q.id || "",
            businessCode: q.code || "",
            serviceAmount: q.price || ""
          });
        }
        var Y = r.data.busInfo,
          W = r.data.localInfo,
          G = r.data;
        (e = {
          isSubscrible: 2 == Y.bookingType,
          totalAmount: G.totalPrice,
          serviceChargeId: Y.serviceChargeID,
          serviceChargeType: Y.serviceChargeType,
          serviceChargePrice: G.isHasService ? Y.serviceChargePrice * o : 0,
          insurances: O,
          vipChargeId: _,
          vipChargeAmount: R,
          vipChargeType: V,
          voucherId: 0,
          voucherSellPrice: 0,
          voucherCount: 0,
          scheduleInfo: {
            scheduleNo: W.scheduleNo || "",
            scheduleId: W.scheduleId || "",
            dptDate: W.dptDate || "",
            supplierId: W.supplierId || "",
            ticketPrice: Y.ticketPrice,
            departure: Y.departure,
            destination: Y.destination,
            dptStation: Y.dptStation,
            arrStation: Y.arrStation,
            coachNo: Y.coachNo,
            dptTime: Y.dptTime,
            exData: m,
            depId: W.depCId || 0,
            desId: W.desCId || 0
          },
          contactInfo: t,
          passengersInfo: G.isSupportChild ? d.concat([]) : d,
          homeDeliveryInfo: G.homeDeliveryStatus && !p.isEmpty(j) ? j : null,
          canOptionSchedules: !(0 < I) && G.isCheckAlternate,
          optionSchedulesTimes: 0 < I || !G.isCheckAlternate ? [] : G.optionSchedulesTimes,
          refundRuleId: G.refundStatus ? y.refund.id : 0,
          refundRuleServicePrice: G.refundStatus ? y.refund.price : 0,
          fastTicketOut: G.IssueStatus,
          runningSchFlag: parseInt(Y.runningSchFlag) || 0,
          preferentialList: P,
          carVoucherInfo: {
            voucherId: 0 < G.carCouNum ? G.carCoupon.vouId : 0,
            voucherSellPrice: 0 < G.carCouNum ? G.carCoupon.vouSellPrice : 0,
            voucherCount: 0 < G.carCouNum ? G.carCouNum : 0
          }
        }).voucherCount = G.hasHotelCoupon ? G.hotelCouNum : 0, e.voucherId = G.hasHotelCoupon ? G.hotelCoupon.vouId : 0,
          e.voucherSellPrice = G.hasHotelCoupon ? G.hotelCoupon.vouSellPrice : 0, e.adjustPrice = r.accMulti(G.adjustPrice, o),
          e.pid = w, e.busVoucherInfo = G.busVoucherIsSel ? {
            voucherId: G.busVoucher.vouId,
            voucherSellPrice: G.busVoucher.vouSellPrice,
            voucherCount: 1
          } : {}, e.propertiesEntity = {
            packageType: G.localInfo.revenueType || ""
          }, e.categoryRevenueId = U, e.vipSubscribe = this.data.vipSubscribe && !this.data.ASisExceedLimit && this.data.subscribeInfoObj.isSubscribe ? 1 : 0,
          a = e, b && (a.revenueRecommendCode = b), !p.isEmpty(r.data.selectCode) && 0 < r.data.selectCode.showPrice && (a.wechatCardCode = r.data.selectCode.code),
          r.data.YyStatus && (a.activityType = "Bus_YiyuanFree", a.activityId = "46"), p.isEmpty(a.reduceCard_buy) && (a.preferentialCard = {}),
          this.data.isHasRedCardBuy && this.data.isSelectedRedCard && (a.preferentialCard.buy = {
            preferentialCardId: this.data.reduceCard_buy.id,
            preferentialCardAmount: this.data.reduceCard_buy.discountMoney,
            preferentialCardPrice: this.data.reduceCard_buy.sellPrice
          }), this.data.isHasRedCardUse && this.data.isSelectedRedCard && (a.preferentialCard.timeCard = {
            preferentialCardId: this.data.reduceCard_use.id,
            preferentialCardAmount: this.data.reduceCard_use.discountMoney
          }), wx.request({
            url: f.createOrder,
            method: "POST",
            header: p.setHeader({
              wxappscene: h.globalData.scene || ""
            }),
            data: JSON.stringify(a),
            success: function(e) {
              function t() {
                return wx.setStorageSync("bus_orderSerialId", e.data.header.isSuccess ? e.data.body.serialId : ""),
                  e.data.header.isSuccess && r.data.vipSubscribe && r.data.isSelectedSubscribe && !r.data.ASisExceedLimit ? (r.queryReadyWithHold(function() {
                    r.data.isChannel ? wx.redirectTo({
                      url: "../orderdetail/orderdetail?isReadTime=true&orderSerialId=" + e.data.body.serialId
                    }) : r.ChannelWithHold(e.data.body.serialId);
                  }), r.data.isCanclePay = !1, !1) : "EI_PA_000001" == (e = e.data).header.errCode || "EI_PA_000002" == e.header.errCode ? (wx.showModal({
                    content: e.header.errMsg,
                    title: "温馨提示",
                    showCancel: !1,
                    confirmText: "确定",
                    confirmColor: "#3CC51F",
                    success: function(e) {
                      e.confirm && (r.setData({
                        preferInfo: {}
                      }), r.funCountPrice(), r.btnToPay());
                    }
                  }), r.data.isCanclePay = !1, !1) : void(e.header.isSuccess ? (v = e.body.forceServiceFee,
                    e.body.forceServiceFee && 0 < e.body.forceServiceFee.activityLimit ? (r.setData({
                      forceServiceFee: e.body.forceServiceFee.activityLimit
                    }), r.setData({
                      showFSFee: !0
                    }), setTimeout(function() {
                      r.setData({
                        showFSFee: !1
                      }), r.WXMobileGatewayRequest(e);
                    }, 2e3)) : r.WXMobileGatewayRequest(e), r.data.isHasPid && wx.removeStorageSync("bus_pid")) : (r.data.isCanclePay = !1,
                    p.alert(e.header.errMsg), u.default.setEvent(C, "DLDD18", "^名称:[" + e.header.errMsg + "]^")));
              }
              var a = new Date().getTime() - i;
              a < r.data.loadingDuration ? setTimeout(function() {
                r.animation.translateX(0).step(), r.setData({
                  isHiddenCar: !0,
                  animationData: r.animation.export()
                }), t();
              }, r.data.loadingDuration - a) : (r.animation.translateX(0).step(), r.setData({
                isHiddenCar: !0,
                animationData: r.animation.export()
              }), t());
            }
          }), wx.setStorageSync("bus_lastPassengers", r.data.plists), r.funGetInsDoc(r.data.plists);
        var z = [];
        
        if (r.data.passengers.length)
          {
              this.reBtnToPay();
              for (var J = r.data.plists, $ = Array.isArray(J), X = 0, J = $ ? J : J[Symbol.iterator]();;) {
            var Z;
            if ("break" === function() {
                if ($) {
                  if (X >= J.length) return "break";
                  Z = J[X++];
                } else {
                  if ((X = J.next()).done) return "break";
                  Z = X.value;
                }
                var e = Z,
                  t = !!r.data.passengers.find(function(t) {
                    return e.IDCard == t.IDCard && e.linkerName == t.linkerName;
                  });
                1 != e.source && t || z.push({
                  certNo: e.IDCard,
                  certType: 1,
                  linkerName: e.linkerName,
                  mobile: "",
                  child: e.type ? e.type : 0
                });
              }()) break;
          }} else
            {for (var K = r.data.plists, Q = Array.isArray(K), ee = 0, K = Q ? K : K[Symbol.iterator]();;) {
              var te;
              if (Q) {
                if (ee >= K.length) break;
                te = K[ee++];
              } else {
                if ((ee = K.next()).done) break;
                te = ee.value;
              }
              var ae = te;
              z.push({
                certNo: ae.IDCard,
                certType: 1,
                linkerName: ae.linkerName,
                mobile: "",
                child: ae.type ? ae.type : 0
              });
            }}
        z.length && r.reqAddPassengers(z);
      },
      WXMobileGatewayRequest: function(e) {
        if (0 >= this.data.totalPrice && 0 == v.activityLimit && 0 == v.blackMember && 0 == v.plat) return wx.redirectTo({
          url: "../success/success?isReadTime=true&orderSerialId=" + e.body.serialId
        }), this.data.isCanclePay = !1, !1;
        var t = this,
          a = e.body.encryptOrderId,
          s = e.body.serialId,
          i = t.data.totalPrice.toString(),
          r = wx.getSystemInfoSync().model.match("iPhone") ? 2 : 1;
        try {
          wx.removeStorageSync("bus_cardCode");
        } catch (t) {}
        wx.request({
          url: f.mobileGateway,
          data: JSON.stringify({
            orderSerialId: s,
            orderId: a,
            totalAmount: i,
            memberId: t.data.memberid,
            platForm: r,
            openID: wx.getStorageSync("tongcheng.openid"),
            IsSendHotelCoupon: 0,
            platType: "1",
            callBackName: "paymentCallBack"
          }),
          header: t.data.headerInfo,
          method: "post",
          success: function(e) {
            var a = e.data;
            if (a.body && a.body.TenAppPay) {
              var i = a.body.TenAppPay;
              wx.requestPayment({
                timeStamp: i.TimeStamp,
                nonceStr: i.NonceStr,
                package: i.Package,
                signType: "MD5",
                paySign: i.Sign,
                complete: function(e) {
                  /ok/gi.test(e.errMsg) && wx.redirectTo({
                    url: "../success/success?orderSerialId=" + s
                  }), /fail|cancel/gi.test(e.errMsg) && wx.redirectTo({
                    url: "../orderdetail/orderdetail?isReadTime=true&orderSerialId=" + s
                  });
                }
              });
            } else t.animation.translateX(0).step(), t.setData({
              isHiddenCar: !0,
              animationData: t.animation.export()
            }), t.data.isCanclePay = !1, p.alert("调取支付失败，请重试！"), u.default.setEvent(C, "DLDD18", "^名称:[调取支付失败，请重试！]^");
          },
          complete: function() {}
        });
        
      },
      funGetWechatCard: function(e) {
        var t = this,
          a = t.fnCalculateCount(),
          s = a.adultPriceCount,
          i = a.childPriceCount;
        1 == e ? t.setData({
          isChangeNumber: !0
        }) : t.setData({
          isChangeNumber: !1
        });
        var r = {
          supplierId: t.data.busInfo.supplierId || "",
          departureName: t.data.busInfo.departure || "",
          departureStation: t.data.busInfo.dptStation || "",
          ticketPrice: t.data.busInfo.ticketPrice || "",
          passengerCount: s,
          totalPrice: s * t.data.busInfo.ticketPrice + i * t.data.childPrice
        };
        wx.request({
          url: f.queryWechatCard,
          method: "POST",
          header: t.data.headerInfo,
          data: JSON.stringify(r),
          success: function(a) {
            var s = a.data.body,
              i = a.data.header;
            i.isSuccess && t.judgeWechatCardIsCanUse(s), "request:ok" == a.errMsg && i.isSuccess && 0 < s.canUseNumber ? (t.setData({
              isGetCard: !0,
              cardMsg: s
            }), e && t.data.selectCode.code ? t.funChooseMaxCoupon() : (t.data.havePerferInfo ? (t.setData({
              selectedPrefer: !0
            }), t.cancelSelectedWechatCard()) : t.funChooseMaxCoupon(), t.funCountPrice())) : (!i.isSuccess || 0 == s.canUseNumber) && (t.setData({
              cardMsg: s
            }), t.cancelSelectedWechatCard(), t.data.havePerferInfo && t.setData({
              selectedPrefer: !0
            }), t.funCountPrice()), wx.setStorageSync("bus_cardMsg", t.data.cardMsg);
          }
        });
      },
      judgeWechatCardIsCanUse: function(e) {
        var t;
        if (!p.isEmpty(e)) {
          var a = this,
            s = a.data.isAdult ? a.data.defaultOpt : a.data.defaultExt,
            i = p.isEmpty(e.canUseList) ? [] : e.canUseList,
            r = (e.cannotUseList,
              0),
            n = 0,
            d = !1,
            o = !1;
          a.data.IssueStatus ? i.forEach(function(e) {
              e.type && a.wechatCardIsInclude(e.service, 9) && (e.isCanUse = !0, e.isConfirmUse = !0);
            }) : i.forEach(function(e) {
              e.type && a.wechatCardIsInclude(e.service, 9) && (e.isCanUse = !1);
            }), a.data.isPeaceTravel ? (a.data.isAdult ? (a.data.defInsDb && a.data.defIns.pubID && (d = !0), !a.data.defInsDb && !p.isEmpty(s) && s.sellPrice && (o = !0)) : !p.isEmpty(s) && s.sellPrice && (o = !0),
              3 == a.data.localInfo.revenueType && (o = !0)) : (!p.isEmpty(s) && s.sellPrice && (o = !0),
              3 == a.data.localInfo.revenueType && (o = !0), !a.data.defInsMultiNoBuy && a.data.isAdult && (d = !0)),
            d ? i.forEach(function(e) {
              if (!e.isConfirmUse) {
                var t = a.wechatCardIsInclude(e.service, 2);
                e.type && t && (e.isCanUse = !0, e.isConfirmUse = !0);
              }
            }) : i.forEach(function(e) {
              if (!e.isConfirmUse) {
                var t = a.wechatCardIsInclude(e.service, 2);
                e.type && t && (e.isCanUse = !1);
              }
            }), o ? i.forEach(function(e) {
              if (!e.isConfirmUse) {
                var t = a.wechatCardIsInclude(e.service, 3);
                e.type && t && (e.isCanUse = !0, e.isConfirmUse = !0);
              }
            }) : i.forEach(function(e) {
              if (!e.isConfirmUse) {
                var t = a.wechatCardIsInclude(e.service, 3);
                e.type && t && (e.isCanUse = !1);
              }
            }), a.data.refundStatus && a.data.isRefundChange ? i.forEach(function(e) {
              if (!e.isConfirmUse) {
                var t = a.wechatCardIsInclude(e.service, 6);
                1 == e.type && t && (e.isCanUse = !0, e.isConfirmUse = !0);
              }
            }) : i.forEach(function(e) {
              if (!e.isConfirmUse) {
                var t = a.wechatCardIsInclude(e.service, 6);
                1 == e.type && t && (e.isCanUse = !1);
              }
            }), a.data.isCheckAlternate ? i.forEach(function(e) {
              if (!e.isConfirmUse) {
                var t = a.wechatCardIsInclude(e.service, 23);
                1 == e.type && t && (e.isCanUse = !0, e.isConfirmUse = !0);
              }
            }) : i.forEach(function(e) {
              if (!e.isConfirmUse) {
                var t = a.wechatCardIsInclude(e.service, 23);
                1 == e.type && t && (e.isCanUse = !1);
              }
            }), a.data.YyStatus ? i.forEach(function(e) {
              if (!e.isConfirmUse) {
                var t = a.wechatCardIsInclude(e.service, 21);
                1 == e.type && t && (e.isCanUse = !0, e.isConfirmUse = !0);
              }
            }) : i.forEach(function(e) {
              if (!e.isConfirmUse) {
                var t = a.wechatCardIsInclude(e.service, 21);
                1 == e.type && t && (e.isCanUse = !1);
              }
            }), a.data.vipSubscribe && !a.data.ASisExceedLimit && a.data.subscribeInfoObj.isSubscribe ? i.forEach(function(e) {
              if (!e.isConfirmUse) {
                var t = a.wechatCardIsInclude(e.service, 22);
                1 == e.type && t && (e.isCanUse = !0, e.isConfirmUse = !0);
              }
            }) : i.forEach(function(e) {
              if (!e.isConfirmUse) {
                var t = a.wechatCardIsInclude(e.service, 22);
                1 == e.type && t && (e.isCanUse = !1);
              }
            }), i.forEach(function(e) {
              e.isCanUse = !(1 != e.isCanUse || !(1 == e.ticketType && 1 == a.data.busInfo.bookingType || 2 == e.ticketType && 2 == a.data.busInfo.bookingType || 3 == e.ticketType && a.data.homeDeliveryStatus || 0 == e.ticketType)),
                1 == e.type && e.isConfirmUse && (e.isConfirmUse = !1), 1 == e.isCanUse ? r++ : n++;
            }), e.canUseNumber = r, e.cannotUseNumber = e.cannotUseList.length + n, a.setData((t = {},
              t["cardMsg.canUseNumber"] = r, t["cardMsg.cannotUseNumber"] = e.cannotUseList.length + n,
              t["cardMsg.canUseList"] = i, t.isGetCard = !!(0 < r), t)), r ? function() {
              var e = wx.getStorageSync("bus_cardCode") || "",
                t = !1;
              if (e) {
                for (var s = 0, i = a.data.cardMsg.canUseList.length; s < i; s++) a.data.cardMsg.canUseList[s].isCanUse && a.data.cardMsg.canUseList[s].code == e && (t = !0);
                t || a.funChooseMaxCoupon();
              }
            }() : a.cancelSelectedWechatCard(), wx.setStorageSync("bus_cardMsg", a.data.cardMsg);
        }
      },
      funChooseMaxCoupon: function() {
        for (var e = this, t = 0, a = !1, s = e.data.selectCode, i = 0, r = e.data.cardMsg.canUseList.length; i < r; i++) e.data.cardMsg.canUseList[i].isCanUse && e.data.cardMsg.canUseList[i].showPrice > t && (t = e.data.cardMsg.canUseList[i].showPrice,
          e.data.cardMsg.canUseList[i]), e.data.plists.length && s && s.code && e.data.cardMsg.canUseList[i].code == s.code && e.data.cardMsg.canUseList[i].isCanUse && (a = !0);
        a ? e.setData({
            selectCode: s
          }) : e.cancelSelectedWechatCard(), this.setData({
            highPriceCoupon: t
          }), wx.setStorageSync("bus_selectCode", e.data.selectCode), wx.setStorageSync("bus_cardCode", e.data.selectCode.code ? e.data.selectCode.code : ""),
          e.funCountPrice();
      },
      wechatCardIsInclude: function(e, t) {
        if (e && e.length)
          for (var a, s = 0; s < e.length; s++)
            if (a = e[s], !p.isEmpty(a) && a.servId == t) return !0;
        return !1;
      },
      cancelSelectedWechatCard: function() {
        var e = this;
        e.setData({
            selectCode: {}
          }), wx.setStorageSync("bus_selectCode", {}), wx.setStorageSync("bus_cardCode", ""),
          e.funCountPrice();
      },
      btnOpenCars: function() {
        var e = this;
        wx.navigateTo({
          url: "../cards/cards?havePerferInfo=" + (e.data.havePerferInfo ? 1 : 0)
        });
      },
      funRedderCards: function() {
        var e = this;
        try {
          var t = wx.getStorageSync("bus_cardCode") || "";
          wx.getStorageSync("bus_selectCode");
        } catch (t) {}
        if (t) {
          for (var a = 0; a < e.data.cardMsg.canUseList.length; a++)
            if (e.data.cardMsg.canUseList[a].code == t) {
              e.data.selectCode = e.data.cardMsg.canUseList[a];
              break;
            }
          e.setData({
            selectCode: e.data.selectCode,
            selectedPrefer: !1
          }), e.funCountPrice();
        } else e.data.selectCode = {}, e.setData({
          selectCode: e.data.selectCode
        }), e.data.havePerferInfo && e.setData({
          selectedPrefer: !0
        }), e.funCountPrice();
      },
      btnSelectContact: function(e) {
        var t, a, s = e.currentTarget.dataset.cid,
          i = e.currentTarget.dataset.cname,
          r = this.data.plists;
        for (a = 0; a < r.length; a++)
          if (r[a].linkerName == i && r[a].IDCard == s) {
            t = r[a];
            break;
          }
        this.setData({
          contactInfo: t
        });
      },
      btnShowContact: function() {
        this.setData({
          isHiddenContact: !this.data.isHiddenContact
        }), this.data.isHiddenContact || u.default.setEvent(l.booking, "DLDD06");
      },
      btnOpenIns: function() {
        this.setData({
          selectInsOrVA: "insurance"
        }), wx.removeStorageSync("bus_insurance_style_2"), wx.navigateTo({
          url: "../insurance/insurance"
        });
      },
      btnOpenOpt: function() {
        this.setData({
          selectInsOrVA: "valueadd"
        }), wx.navigateTo({
          url: "../valueadd/valueadd"
        });
      },
      btnOpenNotice: function(e) {
        var t = p.extend({}, this.data.busInfo),
          a = this.data,
          s = e.currentTarget.dataset.type || "qu";
        u.default.setEvent(l.booking, "DLDD01"), t.type = s, t.refundId = a.refundId, t.isRefundChange = a.isRefundChange,
          t.isRefundOrder = a.isRefundOrder, t.isClickRfd = a.refundStatus, t.LocalgetStrategyData = a.LocalgetStrategyData || [],
          t.mapCoefficient = a.mapCoefficient, t.refundInfo = a.refundInfo, t.isShowSpeed = a.isShowSpeed,
          t.isShowrefund = a.isShowrefund, t.refundSuixin = a.refundSuixin, t.refundPice = a.refundPice,
          wx.navigateTo({
            url: "../booktips/booktips?param=" + JSON.stringify(t)
          });
      },
      busVoucherSel: function() {
        var e = this,
          t = !e.data.busVoucherIsSel;
        e.setData({
          busVoucherIsSel: t
        }), e.funCountPrice();
      },
      linkToYy: function() {
        var e = "",
          t = this;
        return e = !p.isEmpty(t.data.YyData) && t.data.YyData.instruction && /^http/.test(t.data.YyData.instruction) ? t.data.YyData.instruction : "https://wx.17u.cn/groundtrafficAct/bus2018/YyfreeActivity/index",
          wx.navigateTo({
            url: "/pages/webview/webview?src=" + encodeURIComponent(e)
          }), !1;
      },
      selectPrefer: function() {
        var e = this;
        !!e.data.isGetCard && 0 < e.data.cardMsg.canUseNumber && (e.setData({
            selectedPrefer: !e.data.selectedPrefer
          }), e.data.selectedPrefer && (e.cancelSelectedWechatCard(), e.funCountPrice())),
          e.funCountPrice();
      },
      selectService: function(e) {
        var t, a = e.currentTarget.dataset.key,
          s = (e.currentTarget.dataset.rmb, !this.data[a]),
          i = this.data.isShowSpeed,
          r = this.data.isShowrefund;
        if ("refundStatus" == a) this.data.refundSuixin ? "随心退" : "退改无忧", this.data.refundSuixin ? "DD056" : "DD018";
        else if ("YyStatus" == a);
        else if ("IssueStatus" == a);
        else if ("homeDeliveryStatus" == a) {
          var i = !1,
            r = !1;
          s ? (this.btnNotChoseAlter(!0), this.data.isHasSpeed && (i = !1), (this.data.isRefundChange || this.data.isRefundOrder) && (r = !1),
            this.SelectedDefaultSubscribe(), this.setData({
              refundStatus: !1,
              IssueStatus: !1
            })) : (this.data.isHasSpeed && !this.data.pkg.isSpeed && (i = !0), (this.data.isRefundChange || this.data.isRefundOrder) && (r = !0));
        }
        this.setData((t = {}, t[a] = s, t.isShowSpeed = i, t.isShowrefund = r, t)), this.judgeWechatCardIsCanUse(this.data.cardMsg),
          this.funCountPrice();
      },
      btnSwitchXYuan: function() {
        this.setData({
          YyStatus: !this.data.YyStatus
        }), this.judgeWechatCardIsCanUse(this.data.cardMsg), this.funCountPrice();
      },
      btnToXYPage: function(e) {
        var t = e.currentTarget.dataset.xylink;
        /^http/gi.test(t) && wx.navigateTo({
          url: "/pages/webview/webview?src=" + encodeURIComponent(t)
        });
      },
      btnRefundPop: function() {
        this.setData({
          refundPop: !this.data.refundPop
        });
      },
      btnOpenPop: function() {
        this.setData({
          isOpenTicketInfo: !0
        });
      },
      sfDetail: function() {
        this.setData({
          isOpenSf: !0
        });
      },
      sendNoticeShow: function() {
        this.setData({
          isSendDoorInfo: !0
        });
      },
      busVoucherPop: function() {
        this.setData({
          isOpenVoucherInfo: !0
        });
      },
      closeTicketInfo: function() {
        var e = this;
        e.data.isOpenTicketInfo = !e.data.isOpenTicketInfo, e.setData({
          isOpenTicketInfo: e.data.isOpenTicketInfo
        });
      },
      closeVoucherInfo: function() {
        var e = this;
        e.data.isOpenVoucherInfo = !e.data.isOpenVoucherInfo, e.setData({
          isOpenVoucherInfo: e.data.isOpenVoucherInfo
        });
      },
      btnSelectService: function(e) {
        var t = parseInt(e.currentTarget.dataset.sid),
          a = parseInt(e.currentTarget.dataset.index),
          s = parseInt(e.currentTarget.dataset.price),
          i = this.data.slectedVAList,
          r = {},
          n = this,
          d = n.data.defInsMulti;
        n.setData({
          checkedServiceId: t
        });
        for (var o = 0; o < i.length; o++) i[o].isDefaultShow = i[o].serviceId == t ? 1 : 0,
          i[o].sellPrice == s && (r = i[o]), o != a || p.isEmpty(r) || (n.setData({
            currentTab: a
          }), n.data.isAdult ? n.setData({
            defaultOpt: r
          }) : n.setData({
            defaultExt: r
          }));
        n.data.isAdult ? wx.setStorageSync("bus_offLine_youxuan", t) : wx.setStorageSync("bus_offLine_zhizun", t),
          d.forEach(function(e, t) {
            0 <= r.insuranceTypeList.indexOf(e.insCode + "") && (d.splice(t, 1, n.findNotBuyItem(e.insCode)),
              n.setData({
                defInsMulti: d
              }), wx.setStorageSync("bus_insuranceDefMulti", d));
          }), n.judgeWechatCardIsCanUse(n.data.cardMsg), n.funCountPrice();
      },
      btnValueaddDetail: function(e) {
        for (var t = this.data.slectedVAList, a = parseInt(e.currentTarget.dataset.pid), s = 0; s < t.length; s++)
          if (t[s].serviceId == a) {
            this.setData({
              title: t[s].serviceName,
              detail: t[s].serviceDetail,
              showPop: !0
            });
            break;
          }
      },
      btnClosePop: function() {
        this.setData({
          showPop: !1
        });
      },
      btnToggle12306: function() {
        this.setData({
          isCheck12306: !this.data.isCheck12306
        });
      },
      sendDoorAdd: function() {
        wx.navigateTo({
          url: "../senddoor/senddoor"
        });
      }
    }, r.sfDetail = function(e) {
      return console.log(e), "sfbj" == e.target.dataset.ids && void this.setData({
        isOpenSf: !0
      });
    }, r.closeSfInfo = function() {
      this.setData({
        isOpenSf: !1
      });
    }, r.sfText = function(e) {
      "sfbj" != e.target.dataset.ids && this.setData({
        sfText: !this.data.sfText
      });
    }, r.sendNoticeShow = function() {
      var e = this;
      p.isEmpty(e.data.svcNotice) ? p.$http(f.getSvcNotice, {
        noticeType: "HOME_DELIVERY"
      }).then(function(t) {
        if (!p.isEmpty(t) && t.notice) {
          var a = t.notice,
            s = (a = a.replace(/<\/span>|<\/p>|(<p|<span) class="[\w-]*">|<p>/gi, "")).split("<br>");
          s = [s[0].replace(/(送票上门服务须知|预订须知：)/gi, "")].concat(a.split("<br>").slice(1)),
            e.setData({
              isSendDoorInfo: !0,
              svcNotice: s
            });
        }
      }).catch(function(e) {
        console.warn(e);
      }) : e.setData({
        isSendDoorInfo: !0
      });
    }, r.closeTicketInfo = function() {
      this.setData({
        isOpenTicketInfo: !1
      });
    }, r.closeTicketInfos = function() {
      this.setData({
        isSendDoorInfo: !1
      });
    }, r.btnToggleSubscribe = function() {
      this.setData({
        isShowSubscribe: !this.data.isShowSubscribe
      });
    }, r.showSubscribeInfo = function() {
      this.setData({
        isShowSubscribeInfo: !this.data.isShowSubscribeInfo
      });
    }, r.SelectedSubscribe = function() {
      this.setData({
        isSelectedSubscribe: !0,
        isShowSubscribe: !1,
        subscribeInfoObj: {
          title: "先出票后付款",
          subTitle: "高级预约专属服务",
          isSubscribe: !0
        },
        homeDeliveryStatus: !1
      }), this.funCountPrice(), this.judgeWechatCardIsCanUse(this.data.cardMsg);
    }, r.SelectedDefaultSubscribe = function() {
      this.setData({
        isSelectedSubscribe: !1,
        isShowSubscribe: !1,
        subscribeInfoObj: {
          title: "先付款后出票",
          subTitle: "基础预约服务",
          isSubscribe: !1
        }
      }), this.funCountPrice(), this.judgeWechatCardIsCanUse(this.data.cardMsg);
    }, r.queryTicketOutNoPay = function() {
      var e = this;
      p.$http(f.getWithholdNoPayOrderExist, {}).then(function(t) {
        e.setData({
          ASisExceedLimit: t.beOverTop
        }), t.nopayOrderExist && e.setData({
          isShowAdFailPop: !0,
          noPaySerialId: t.orderSerialId
        });
      }).catch(function(e) {
        console.warn(e);
      });
    }, r.queryReadyWithHold = function(e) {
      var t = this;
      p.$http(f.queryReadyWithHold, {
        orderSerialId: wx.getStorageSync("bus_orderSerialId")
      }).then(function(a) {
        t.setData({
          isChannel: a.isChannel
        }), "function" == typeof e && e();
      }).catch(function(e) {
        console.warn(e);
      });
    }, r.toOrderDetailPay = function() {
      this.setData({
        isShowAdFailPop: !1
      }), wx.redirectTo({
        url: "/pages/bus/webapp/orderdetail/orderdetail?orderSerialId=" + this.data.noPaySerialId
      });
    }, r.ChannelWithHold = function(e) {
      var t = this;
      p.$http(f.channelForApplet, {
        name: t.data.contactInfo.linkerName,
        serialId: e
      }).then(function(e) {
        p.isEmpty(e) || wx.navigateToMiniProgram({
          appId: "wxbd687630cd02ce1d",
          path: "pages/index/index",
          extraData: JSON.parse(e.Content),
          success: function() {},
          fail: function() {}
        });
      }).catch(function(e) {
        console.warn(e);
      });
    }, r.getUserProfile = function() {
      var e = this;
      p.$http(f.getUserRights, {}).then(function(t) {
        p.isEmpty(t) || e.setData({
          featureValue: t.vipLevel,
          homeDelivery: t.homeDelivery || {}
        });
      }).catch(function(e) {
        console.warn(e);
      });
    }, r.btnSelectIns = function(e) {
      var t = e.currentTarget.dataset,
        a = wx.getStorageSync("bus_insuranceLists");
      if (this.setData({
          selectInsOrVA: "insurance"
        }), 2 == a[t.index].value.length) {
        var s = this.data.defInsMulti[t.index];
        return this.data.defInsMulti[t.index] = s.insCusPayTc ? a[t.index].value[1] : a[t.index].value[0],
          this.setData({
            defInsMulti: this.data.defInsMulti
          }), this.funCountPrice(), wx.setStorageSync("bus_insuranceDefMulti", this.data.defInsMulti),
          wx.setStorageSync("bus_insurance_style_2", {
            code: t.code,
            index: -1
          }), u.default.setEvent(l.booking, "DLDD10", "^增值服务名称[" + this.data.defInsMulti[t.index].insName + "]^单价[" + this.data.defInsMulti[t.index].insCusPayTc + "]^按钮状态:[" + (0 < this.data.defInsMulti[t.index].insCusPayTc ? "开" : "关") + "]^"), !1;
      }
      wx.setStorageSync("bus_insurance_style_2", {
        code: t.code,
        index: t.index
      }), wx.navigateTo({
        url: "../insurance/insurance"
      });
    }, r.btnShowInsDetail = function(e) {
      var t = e.currentTarget.dataset,
        a = wx.getStorageSync("bus_insuranceLists")[t.index].value,
        s = this.data.defInsMulti[t.index];
      if (!s.insCusPayTc && 2 <= a.length) {
        var i = a[0];
        return this.setData({
          insContentObj: i,
          insLink: i.link || "",
          isShowBaoXianDetail: !0
        }), !1;
      }
      this.setData({
        insContentObj: s,
        insLink: s.link || "",
        isShowBaoXianDetail: !0
      }), u.default.setEvent(l.booking, "DLDD09", "^增值服务名称:[" + s.insName + "]^");
    }, r.showVipFn = function() {
      this.setData({
        isShowVip: !this.data.isShowVip
      });
    }, r.selectVips = function(e) {
      var t, a = parseInt(e.currentTarget.dataset.pid),
        s = this.data.slectedVAList,
        i = !1;
      this.setData({
        selectInsOrVA: "valueadd"
      }), i = this.data.isAdult ? !(this.data.defaultOpt.serviceId != a) : !(this.data.defaultExt.serviceId != a);
      for (var r = 0; r < s.length; r++)
        if (i && 0 == s[r].sellPrice) t = s[r];
        else if (!i && s[r].serviceId == a) {
        t = s[r];
        break;
      }
      this.data.isAdult ? this.setData({
        defaultOpt: t
      }) : this.setData({
        defaultExt: t
      }), this.funRenderValueadd(2);
    }, r.vipCss2Btn = function(e) {
      e.currentTarget.dataset;
      for (var t = this.data.slectedVAList, a = parseInt(e.currentTarget.dataset.pid), s = 0; s < t.length; s++)
        if (t[s].serviceId == a) {
          this.setData({
            vipMsgTitle: t[s].serviceName,
            vipMsgInfo: t[s].serviceDetail,
            vipMsgPop: !0
          });
          break;
        }
    }, r.btnvipMsgPop = function() {
      this.setData({
        vipMsgPop: !1
      });
    }, r.replaceHourTime = function(e) {
      var t = 0,
        a = 0;
      if (-1 < (e = (60 * +e + 0) / 60 + "").indexOf(".")) {
        var s = (e + "").split("."),
          i = s[1].length;
        t = s[0], a = Math.round(+s[1] / d(10, i) * 60);
      } else t = +e;
      return 0 < +t ? t + "小时" + (0 < a ? a + "分钟" : "") : a + "分钟";
    }, r.fnMonthcardDetail = function(e) {
      var t = e.currentTarget.dataset;
      this.getRateCard(t.cardid);
    }, r.getRateCard = function(e) {
      var t = this;
      p.$http(f.getRateCard, {
        cardId: e || "-1"
      }).then(function(e) {
        if (!p.isEmpty(e)) {
          var a = e.discountRuleContent.split(/<br>|<br\/>/);
          t.setData({
            discountRuleContent: a,
            showMonthCard: !0
          });
        }
      }).catch(function(e) {
        console.log(e), t.setData({
          discountRuleContent: [],
          showMonthCard: !0
        });
      });
    }, r.closeMonthCard = function() {
      this.setData({
        showMonthCard: !1
      });
    }, r.selectedMonthCard = function() {
      this.setData({
        isSelectedRedCard: !this.data.isSelectedRedCard
      }), this.funCountPrice();
    }, r.isEqualArr = function(e, t) {
      return e.sort().toString() == t.sort().toString();
    }, r.funGetInsDoc = function(e) {
      var t = this,
        a = [],
        s = [];
      return e.forEach(function(e) {
        a.push({
          type: 1,
          number: e.IDCard
        }), s.push(e.IDCard);
      }), !t.isEqualArr(s, t.data.obtwoDoc) && (t.data.obtwoDoc = s.slice(), wx.request({
        url: f.getInsuranceDocument,
        header: p.setHeader(),
        method: "POST",
        data: {
          weather: !p.isEmpty(t.data.weather) && t.data.weather.level || "",
          ticketPrice: t.data.busInfo.ticketPrice || "",
          city: t.data.busInfo.departure || "",
          passengerInfoList: a
        },
        success: function(e) {
          (e = e.data).header.isSuccess && !p.isEmpty(e.body) && e.body.document && t.setData({
            wdocument: e.body.document
          });
        }
      }), void this.getPreferentialActivity());
    }, r.goDetailLink = function(e) {
      var t = e.currentTarget.dataset.link;
      wx.navigateTo({
        url: "/pages/webview/webview?src=" + encodeURIComponent(t)
      });
    }, r.showService = function(e) {
      var t = this,
        a = e.currentTarget.dataset.type,
        s = this.data.serviceMsg,
        i = "";
      "Ttype" == a ? (s = this.data.busInfo.STTDesc, i = "Ttype") : "service" == a && (s = "服务费全网售票平台均收，含技术接入费、短信费等；出票成功后退票服务费不予退还，出票失败将全额退还。",
        i = "service"), this.data.showSericeCharge ? (clearTimeout(this.data.setTC), this.setData({
        showSericeCharge: !1,
        serviceMsg: s,
        sshowType: i
      })) : (this.setData({
        showSericeCharge: !0,
        serviceMsg: s,
        sshowType: i
      }), this.data.setTC = setTimeout(function() {
        t.setData({
          showSericeCharge: !1,
          serviceMsg: s,
          sshowType: i
        }), clearTimeout(t.data.setTC);
      }, 5e3));
    }, r.closeSericeCharge = function() {
      this.setData({
        showSericeCharge: !1
      }), this.data.setTC && clearTimeout(this.data.setTC);
    }, r.formBookingBtn = function(e) {
      var t = e.detail.formId;
      console.log(t), p.saveFormid(t, "填写订单", "", "订单填写页");
    }, r.showDetContent = function(e) {
      var t = e.currentTarget.dataset,
        a = this;
      this.hideAllDetailContent(), this.data.showDetTipObj[t.type] = !0, "serviceChargePrice" == t.type && wx.createSelectorQuery().select("#det-box").boundingClientRect(function(e) {
        a.setData({
          scrollTop: e.bottom
        });
      }).exec(), this.setData({
        showDetTipObj: this.data.showDetTipObj
      });
    }, r.checkProofingCode = function() {
      var e = this,
        t = this.data.busInfo;
      p.$http(f.checkProofingCode, {
        departure: t.departure,
        departureStation: "",
        destination: t.destination,
        destinationStation: "",
        supplierId: t.supplierId,
        code: "supportCancelAddValueServiceCity"
      }).then(function(t) {
        e.setData({
          isShortcutCancel: t
        });
      }).catch(function() {
        e.setData({
          isShortcutCancel: !1
        });
      });
    }, r.buyIt = function(e) {
      var t = e.currentTarget.dataset;
      this.data.showDetTipObj[t.type] = !1, this.setData({
        showDetTipObj: this.data.showDetTipObj
      });
    }, r.buyMao = function(e) {
      var t = e.currentTarget.dataset,
        a = null,
        s = [],
        i = [];
      if (this.data.showDetTipObj[t.type] = !1, this.setData({
          showDetTipObj: this.data.showDetTipObj
        }), -1 < t.type.indexOf("insurance")) {
        if (s = wx.getStorageSync("bus_insuranceLists") || [], (i = s.length ? s[t.index] : []).value.length) {
          var r = i.value,
            n = !1;
          this.data.defInsMulti[t.index] = r[r.length - 1], n = this.data.defInsMulti.every(function(e) {
            return 0 === e.pubID;
          }), this.setData({
            defInsMulti: this.data.defInsMulti,
            defInsMultiNoBuy: n
          }), wx.setStorageSync("bus_insuranceDefMulti", this.data.defInsMulti);
        }
        this.funRenderIns();
      } else {
        switch (t.type) {
          case "youxuan":
            a = this.data.slectedVAList, this.data.defaultOpt = a[a.length - 1], this.setData({
              defaultOpt: this.data.defaultOpt
            }), wx.setStorageSync("bus_optimizationDefault", this.data.defaultOpt);
            break;

          case "zhizun":
            a = this.data.slectedVAList, this.data.defaultExt = a[a.length - 1], this.setData({
              defaultExt: this.data.defaultExt
            }), wx.setStorageSync("bus_extremeDefault", this.data.defaultExt);
            break;

          case "tgwuyou":
            this.setData({
              refundStatus: !1
            });
            break;

          case "fastTicketOut":
            this.setData({
              IssueStatus: !1
            });
            break;

          case "busYiyuanFree":
            this.setData({
              YyStatus: !1
            });
            break;

          case "homeDelivery":
            var d, o;
            this.data.isHasSpeed && !this.data.pkg.isSpeed && (d = !0), (this.data.isRefundChange || this.data.isRefundOrder) && (o = !0),
              this.setData({
                homeDeliveryStatus: !1,
                isShowSpeed: d,
                isShowrefund: o
              });
            break;

          case "hotelCoupon":
            this.setData({
              hotelCouNum: 0
            });
            break;

          case "carCoupon":
            this.setData({
              carCouNum: 0
            });
            break;

          case "busVoucher":
            this.setData({
              busVoucherIsSel: !1
            });
            break;

          case "vipSubscribe":
            this.SelectedDefaultSubscribe();
            break;

          case "monthcard":
            this.setData({
              isSelectedRedCard: !1
            });
        }
        this.judgeWechatCardIsCanUse(this.data.cardMsg), this.funCountPrice();
      }
    }, r.hideAllDetailContent = function() {
      this.setData({
        showDetTipObj: {}
      });
    }, r.getPreferentialActivity = function() {
      var e = this.data,
        t = this,
        a = e.busInfo;
      p.$http(f.getPreferentialActivity, {
        departureName: a.departure,
        departureStation: a.dptStation,
        destinationName: a.destination,
        ticketPrice: e.adultPriceCount || !e.adultPriceCount && !e.childPriceCount ? a.ticketPrice : e.childPrice,
        totalTicketPrice: a.ticketPrice * e.adultPriceCount + e.childPriceCount * e.childPrice || a.ticketPrice,
        supplierId: a.supplierId || ""
      }).then(function(e) {
        !p.isEmpty(e) && e.length ? (t.setData({
          preferInfo: e[0],
          havePerferInfo: !0,
          selectedPrefer: !0
        }), t.cancelSelectedWechatCard()) : t.setData({
          preferInfo: {},
          havePerferInfo: !1,
          selectedPrefer: !1
        });
      });
    }, r.onShareAppMessage = function() {
      return {
        title: "买车票就上同程汽车票！省心、更放心！",
        path: "/pages/index/index"
      };
    }, r.fnShowAgreement = function(e) {
      var t = e.currentTarget.dataset;
      wx.navigateTo({
        url: "/pages/userAgreement/userAgreement?id=" + t.id
      });
    }, r.btnNoNeed = function() {
      this.setData({
        isShowRedCardPop: !1
      }), this.btnToPay(), u.default.setEvent(l.booking, "DLDD16", "^出发城市:" + this.data.busInfo.departure + "^到达城市:" + this.data.busInfo.destination + "^");
    }, r.btnBuyLiJian = function() {
      var e = this;
      this.setData({
        isShowRedCardPop: !1,
        isSelectedRedCard: !0
      }), this.funCountPrice(function() {
        e.btnToPay();
      }), u.default.setEvent(l.booking, "DLDD17", "^保险价格[" + this.data.reduceCard_buy.sellPrice + "]^出发城市:" + this.data.busInfo.departure + "^到达城市:" + this.data.busInfo.destination + "^");
    }, r.btnToggleRCpop = function() {
      this.setData({
        isShowRCUsePop: !this.data.isShowRCUsePop
      }), this.data.isShowRCUsePop && u.default.setEvent(l.booking, "DLDD11");
    }, r.btnSwitchRC = function() {
      this.data.ticketPriceLimitUse ? (this.setData({
        isSelectedRedCard: !this.data.isSelectedRedCard,
        isShowRCUsePop: !this.data.isShowRCUsePop
      }), this.funCountPrice()) : this.btnToggleRCpop();
    }, r.btnToggleLijianDesc = function() {
      this.setData({
        isShowRCDesc: !this.data.isShowRCDesc
      }), this.data.isShowRCDesc && u.default.setEvent(l.booking, "DLDD15");
    }, r));
  }
}, [108]);