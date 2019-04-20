var api = require('../config/api.js');
var app =getApp();

function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('-')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function isEmpty(e){
  var t = Object.prototype.toString;
  if (null == e) return !0;
  if ("[object Array]" == t.call(e) || "[object String]" == t.call(e)) return 0 === e.length;
  if ("[object Object]" == t.call(e))
    for (var n in e) return !1;
  return !0;
}


//将string格式日期转换为“/”连接只包含月日的日期
function formatDateToSimple(data ) {
  var date = new Date(Date.parse(data));
  const month = date.getMonth() + 1
  const day = date.getDate()

  return [month, day].join('月')+'日';
}
//获取string格式日期的星期
function formatDateToWeek (data ) {
  var date = new Date(Date.parse(data));
  const month = date.getDay();
  var weekDay;
  switch (month) {
    case 0:
      weekDay = '周日';
      break;
    case 1:
      weekDay = '周一';
      break;
    case 2:
      weekDay = '周二';
      break;
    case 3:
      weekDay = '周三';
      break;
    case 4:
      weekDay = '周四';
      break;
    case 5:
      weekDay = '周五';
      break;
    case 6:
      weekDay = '周六';
      break
  }
  return weekDay;
}

function saveFormid(e, t, n, r, o) {
  if ("" == e || "the formId is a mock one" == e) return !1;
  var i = encodeURIComponent,
    a = "openid=" + i(wx.getStorageSync("tongcheng.openid")) + "&unionid=" + i(wx.getStorageSync("tongcheng.unionid")) + "&memberid=" + i(wx.getStorageSync("tongcheng.memberid")) + "&formid=" + i(e) + "&category=" + (i(t) || "category") + "&action=" + (i(n) || "click") + "&label=" + i(r) + "&value=" + i(o || r) + "&scene=" + getApp().globalData.scene;
  u(g.default.saveFormid, a, "POST", {
    "Content-Type": "application/x-www-form-urlencoded"
  }, 3e3).then(function () { }).catch(function () { });
}

function setEvent(e, t, n) {
  // n = n || "";
  // var o = event({
  //   pagename: "pageName",
  //   productcode: "2021",
  //   category: "汽车票独立小程序-首页-小程序",
  //   action: "汽车票",
  //   label: "label",
  //   value: "value",
  //   debug: !0
  // });
  // o.settings.pagename = e, o.settings.label = t, n && (o.settings.value = n), o.submit(),
  //   console.log("埋点：↓↓↓↓"), console.log("pageName:", e), console.log("label:", t), console.log("value:", n),
  //   console.log("\r\n");
}

function i(e, t) {
  return 0 == t ? e.replace("T", " ").replace(/-/g, "/") : 1 == t ? e.replace(/T/, " ").replace(/\//g, "-") : void 0;
} 

function addTime(e, t, n) {
  var o = e || new Date();
  if ("string" == typeof o) o = new Date(i(o, 0)); else if ("number" == typeof o) o = new Date(o); else if (!t || 0 > t.search(/Y|M|D|H|F|S/g)) return;
  var a, c = t.split(/Y|M|D|H|F|S/g)[0], u = t.substr(-1, 1);
  return "M" === u ? a = 30 * c * 24 * 60 * 60 * 1e3 : "D" === u ? a = 24 * c * 60 * 60 * 1e3 : "H" === u ? a = 60 * c * 60 * 1e3 : "F" === u ? a = 60 * c * 1e3 : "S" === u && (a = 1e3 * c),
    o.setTime(o.getTime() + a), n ? r(o, n) : o;
}
function alert(e, t, n, r, o, i, a, c) {
  wx.showModal({
    content: e || "",
    title: t || "温馨提示",
    showCancel: n || !1,
    cancelText: r || "我知道了",
    confirmText: o || "确定",
    confirmColor: c || "#3CC51F",
    success: function (e) {
      e.confirm ? f(i) && i(e) : f(a) && a();
    }
  });
}
 function loading(e) {
  wx.showToast({
    title: e || "加载中...",
    icon: "loading",
    mask: !0,
    duration: 1e4
  });
}
function hideLoading() {
  wx.hideToast();
}
function showToast(e, t, n, r) {
  wx.showToast({
    title: e || "加载中...",
    icon: t || "loading",
    duration: n || 1500,
    mask: !0,
    success: r || null
  });
}

function parseDate(e) {
  return e ? new Date(e.replace(/-/g, "/")) : new Date();
}

module.exports = {
  formatTime,
  formatDateToSimple,
  formatDateToWeek,
  formatNumber,
  isEmpty,
  saveFormid,
  setEvent,
  addTime,
  alert,
  loading,
  showToast,
  hideLoading,
  parseDate
}