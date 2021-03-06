let check = {
  isBrowser: function(){
    let userAgent = navigator.userAgent,
      isOpera = userAgent.indexOf("Opera") > -1,
      isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera,
      isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1,
      isEdge = userAgent.indexOf("Edge") > -1 && !isIE,
      isFF = userAgent.indexOf("Firefox") > -1,
      isSafari = userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") == -1,
      isChrome = userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Safari") > -1;

    // console.log(userAgent)
    if (isIE) {
      let reIE = new RegExp("MSIE (\\d+\\.\\d+);");
      reIE.test(userAgent);
      let fIEVersion = parseFloat(RegExp["$1"]);
      return {name: 'IE', version: fIEVersion}
    }
    if (isIE11) return {name: 'IE11', version: 11};
    if (isEdge) return {name: 'Edge', version:0};
    if (isFF) return {name: 'Firefox', version: 0};
    if (isOpera) return {name: 'Opera', version: 0};
    if (isSafari) return {name: 'Safari', version: 0};
    if (isChrome) return {name: 'Chrome', version: 0};
  },
  isString: function (o) {
    return Object.prototype.toString.call(o).slice(8, -1) === 'String'
  },
  isNumber: function (o) {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Number'
  },
  isBoolean: function (o) {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Boolean'
  },
  isFunction: function (o) {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Function'
  },
  isNull: function (o) {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Null'
  },
  isUndefined: function (o) {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Undefined'
  },
  isObj: function (o) {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Object'
  },
  isArray: function (o) {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Array'
  },
  isDate: function (o) {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Date'
  },
  isError: function (o) {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Error'
  },
  isSymbol: function (o) {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Symbol'
  },
  isPromise: function (o) {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Promise'
  },
  isSet: function (o) {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Set'
  },
  isEmpty: function (o) {
    if(JSON.stringify(o) === "{}" || JSON.stringify(o) === "[]") return true
    return false
  },
  isFalse: function (o) {
    if (!o || o === 'null' || o === 'undefined' || o === 'false' || o === 'NaN') return true;
    return false
  },
  isInt: function(str){
    return /^-?\d+$/.test(str);
  },
  isPhone: function(str){
    return /^1[3|4|5|6|7|8|9][0-9]{9}$/.test(str);
  },
  isTel: function(str){
    return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str);
  },
  isUser: function(str){
    return /^[a-zA-Z]\w{1,17}$/.test(str);//????????????????????????????????????1~18????????????????????????????????????????????????
  },
  isPassword: function(str){
    return /^[a-zA-Z]\w{5,17}$/.test(str);//?????????????????????????????????6~18????????????????????????????????????????????????
  },
  isPostal: function(str){
    return /[1-9]\d{5}(?!\d)/.test(str);//????????????
  },
  isQQ: function(str){
    return /^[1-9][0-9]{4,9}$/.test(str);
  },
  isEmail: function(str){
    return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str);
  },
  isMoney: function(str){
    return /^\d*(?:\.\d{0,2})?$/.test(str);//??????(?????????2???)
  },
  isURL: function(str){
    return /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(str);
  },
  isIP: function(str){
    return /((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/.test(str);
  },
  isEnglish: function(str){
    return /^[a-zA-Z]+$/.test(str);
  },
  isChinese: function(str){
    return /^[\u4E00-\u9FA5]+$/.test(str);
  },
  isLower: function(str){
    return /^[a-z]+$/.test(str);
  },
  isUpper: function(str){
    return /^[A-Z]+$/.test(str);
  },
  isHTML: function(str){
    return /<("[^"]*"|'[^']*'|[^'">])*>/.test(str);
  },
  isSpace: function(str){
    return /\s/.test(str);
  },
  isIdCard: function(str){
    return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(str);
  },
  isBankCard: function(str){
    return /^\d{16}|\d{19}$/.test(str);
  },
  isIos: function () {
    let u = navigator.userAgent;
    if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {//????????????
      // return "Android";
      return false
    } else if (u.indexOf('iPhone') > -1) {//????????????
      // return "iPhone";
      return true
    } else if (u.indexOf('iPad') > -1) {//iPad
      // return "iPad";
      return false
    } else if (u.indexOf('Windows Phone') > -1) {//winphone??????
      // return "Windows Phone";
      return false
    } else {
      return false
    }
  },
  isPC: function () {
    let userAgentInfo = navigator.userAgent;
    let Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
    let flag = true;
    for (let v = 0; v < Agents.length; v++) {
      if (userAgentInfo.indexOf(Agents[v]) > 0) {
        flag = false;
        break;
      }
    }
    return flag;
  },
  isCardID: function (sId) {
    if (!/(^\d{15}$)|(^\d{17}(\d|X|x)$)/.test(sId)) {
      alert('??????????????????????????????????????????');
      return false
    }
    //???????????????
    let aCity = {
      11: "??????",
      12: "??????",
      13: "??????",
      14: "??????",
      15: "?????????",
      21: "??????",
      22: "??????",
      23: "?????????",
      31: "??????",
      32: "??????",
      33: "??????",
      34: "??????",
      35: "??????",
      36: "??????",
      37: "??????",
      41: "??????",
      42: "??????",
      43: "??????",
      44: "??????",
      45: "??????",
      46: "??????",
      50: "??????",
      51: "??????",
      52: "??????",
      53: "??????",
      54: "??????",
      61: "??????",
      62: "??????",
      63: "??????",
      64: "??????",
      65: "??????",
      71: "??????",
      81: "??????",
      82: "??????",
      91: "??????"
    };
    if (!aCity[parseInt(sId.substr(0, 2))]) {
      alert('???????????????????????????')
      return false
    }

    // ??????????????????
    let sBirthday = (sId.substr(6, 4) + "-" + Number(sId.substr(10, 2)) + "-" + Number(sId.substr(12, 2))).replace(/-/g, "/"),
      d = new Date(sBirthday)
    if (sBirthday != (d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate())) {
      alert('?????????????????????????????????')
      return false
    }

    // ?????????????????????
    let sum = 0,
      weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2],
      codes = "10X98765432"
    for (let i = 0; i < sId.length - 1; i++) {
      sum += sId[i] * weights[i];
    }
    let last = codes[sum % 11]; //??????????????????????????????????????????
    if (sId[sId.length - 1] != last) {
      alert('??????????????????????????????')
      return false
    }
    return true
  },
}
export default check
