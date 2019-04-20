!function() {
    require("./../../common.js"), wx.webpackJsonp.apply(null, arguments);
}([ 9 ], {
    101: function(e, a, t) {
        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        var s = n(t(27)), l = (n(t(0)), n(t(5))), o = t(14);
        getApp();
        Page({
            data: {
                selectedDay: "",
                saleDay: {"isSubscribe":true,"canSaleDay":75,"subscribe":23,"saleDay":52,"saleBeginDate":"2019-04-18"},
                page: ""
            },
            onLoad: function(e) {
                this.setData({
                    selectedDay: e.selectedDate || (0, s.default)().format("l"),
                    saleDay: JSON.parse(e.saleDay || "{}"),
                    page: e.page || ""
                });
            },
            getCalendar: function(e) {
                var a = e.detail;
                // console.log(a), l.default.setEvent(o.index, "DLSY04", "^日期:" + a.year + "年" + a.month + "月" + a.day + "日^");
                wx.setStorageSync("_selectedDate", a) ;
                wx.setStorageSync("selectedDate", a), 
                wx.navigateBack();
            },
            onShareAppMessage: function() {
                return {
                    title: "买车票就用这个小程序！省心、更放心！",
                    path: "/pages/index/index"
                };
            }
        });
    }
}, [ 101 ]);