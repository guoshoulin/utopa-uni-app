// #ifdef H5
import wxsdk from "weixin-js-sdk";
// #endif
import { fetchWeixinConfig } from "@/api/auth";
import { noop } from "./index";
import { isH5 } from "./platform";

let wx = {
  config: noop,
  ready: noop,
  error: noop,
  checkJsApi: noop,
  updateAppMessageShareData: noop,
  updateTimelineShareData: noop,
  onMenuShareTimeline: noop,
  onMenuShareAppMessage: noop,
  previewImage: noop
};

// #ifdef H5
wx = wxsdk;
// #endif

let wxApi = {
  isweixin: noop,
  wxRegister: noop,
  ShareTimeline: noop,
  ShareAppMessage: noop,
  MenuShareQQ: noop,
  hideShareOption: noop,
  showShareOption: noop,
  shareCallbackList: noop,
  chooseWXPay: noop
};

// #ifdef H5
wxApi = {
    /**
     * [isweixin 判断是否微信浏览器]
     */
    isweixin() {
      if (isH5) {
        const ua = navigator.userAgent.toLowerCase();
        const matcher = ua.match(/MicroMessenger/i);
        return matcher && matcher[0] === "micromessenger";
      }

      return false;
    },
    /**
     * [wxRegister 微信Api初始化]
     * @param  {Function} callback [ready回调函数]
     */
    wxRegister(callback) {
      let url = window.location.href.split("#")[0];
      fetchWeixinConfig({ url })
        .then(res => {
          if (res.data) {
            wx.config({
              debug: false,
              appId: res.data.appId, // 必填，公众号的唯一标识
              timestamp: res.data.timestamp, // 必填，生成签名的时间戳
              nonceStr: res.data.nonceStr, // 必填，生成签名的随机串
              signature: res.data.signature, // 必填，签名，见附录1
              jsApiList: [
                "onMenuShareAppMessage", // 获取“分享给朋友”按钮点击状态及自定义分享内容接口
                "onMenuShareTimeline", // 获取“分享到朋友圈”按钮点击状态及自定义分享内容接口
                "onMenuShareQQ",
                "hideOptionMenu",
                "showOptionMenu",
                "chooseWXPay"
              ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
            });
          }
        })
        .catch(error => {
          console.log(error);
        });
      wx.ready(res => {
        if (callback) {
          callback(res);
        }
      });
      wx.error(function(res) {
        // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
      });
    },
    /**
     * [ShareTimeline 微信分享到朋友圈]
     * @param {[type]} opstion [分享信息]
     * @param {[type]} success [成功回调]
     * @param {[type]} error   [失败回调]
     */
    ShareTimeline(opstion) {
      if (!opstion.link) {
        console.log("分享参数缺失--朋友圈");
        return;
      }
      wx.ready(res => {
        wx.onMenuShareTimeline({
          title: opstion.title, // 分享标题
          link: opstion.link, // 分享链接
          imgUrl: opstion.imgUrl, // 分享图标
          success() {
            // 用户成功分享后执行的回调函数
            if (JSON.parse(window.localStorage.getItem("shareItem"))) {
              let data = JSON.parse(window.localStorage.getItem("shareItem"));
              data._share_type = 5;
              if (window.s != undefined) {
                window.s.trackShare(data);
              }
            }
            opstion.success && opstion.success();
          },
          cancel() {
            // 用户取消分享后执行的回调函数
            opstion.cancel && opstion.cancel();
          }
        });
      });
    },
    /**
     *[AppMessage 微信分享到朋友]
     * @param {[type]} opstion [分享信息]
     * @param {[type]} success [成功回调]
     * @param {[type]} error   [失败回调]
     */
    ShareAppMessage(opstion) {
      if (!opstion.link) {
        console.log("分享参数缺失--朋友");
        return;
      }
      wx.ready(res => {
        console.log(res, "分享到朋友");
        wx.onMenuShareAppMessage({
          title: opstion.title, // 分享标题
          desc: opstion.desc, // 分享描述
          link: opstion.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: opstion.imgUrl, // 分享图标
          type: opstion.type, // 分享类型,music、video或link，不填默认为link
          dataUrl: opstion.dataUrl, // 如果type是music或video，则要提供数据链接，默认为空
          success: function() {
            // 用户确认分享后执行的回调函数
            if (JSON.parse(window.localStorage.getItem("shareItem"))) {
              let data = JSON.parse(window.localStorage.getItem("shareItem"));
              data._share_type = 4;
              if (window.s != undefined) {
                window.s.trackShare(data);
              }
            }
            opstion.success && opstion.success();
          },
          cancel: function() {
            // 用户取消分享后执行的回调函数
            opstion.cancel && opstion.cancel();
          }
        });
      });
    },
    /**
     *[MenuShareQQ 分享到QQ]
     * @param {[type]} opstion [分享信息]
     * @param {[type]} success [成功回调]
     * @param {[type]} error   [失败回调]
     */
    MenuShareQQ(opstion) {
      if (!opstion.link) {
        console.log("分享参数缺失--QQ");
        return;
      }
      wx.ready(res => {
        wx.onMenuShareQQ({
          title: opstion.title, // 分享标题
          desc: opstion.desc, // 分享描述
          link: opstion.link, // 分享链接
          imgUrl: opstion.imgUrl, // 分享图标
          success: function() {
            // 用户确认分享后执行的回调函数
            if (JSON.parse(window.localStorage.getItem("shareItem"))) {
              let data = JSON.parse(window.localStorage.getItem("shareItem"));
              data._share_type = 6;
              if (window.s != undefined) {
                window.s.trackShare(data);
              }
            }
            opstion.success && opstion.success();
          },
          cancel: function() {
            // 用户取消分享后执行的回调函数
            opstion.cancel && opstion.cancel();
          }
        });
      });
    },
    hideShareOption() {
      // 禁用分享

      console.log("禁用分享");
      wx.ready(res => {
        wx.hideOptionMenu();
      });
    },
    showShareOption() {
      console.log("开启分享");
      wx.ready(res => {
        wx.showOptionMenu();
      });
    },
    shareCallbackList(shareOption, hiddenShare = false) {
      console.log(shareOption, "分享参数");
      this.MenuShareQQ(shareOption);
      this.ShareAppMessage(shareOption);
      this.ShareTimeline(shareOption);
      hiddenShare && this.hideShareOption(); // 隐藏分享给好友等功能
      !hiddenShare && this.showShareOption(); // 重新显示分享给好友等功能
    },
    /**
     *[chooseWXPay 微信支付]
     * @param {[type]} opstion [分享信息]
     * @param {[type]} success [成功回调]
     * @param {[type]} fail    [失败回调]
     * @param {[type]} cancel  [取消回调]
     */
    chooseWXPay(opstion) {
      wx.ready(res => {
        wx.chooseWXPay({
          timestamp: opstion.timestamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
          nonceStr: opstion.nonceStr, // 支付签名随机串，不长于 32 位
          package: opstion.package, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\*\*\*）
          signType: opstion.signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
          paySign: opstion.paySign, // 支付签名
          success: function(res) {
            opstion.success && opstion.success(res);
          },
          fail: function(res) {
            opstion.fail && opstion.fail(res);
          },
          cancel: function(res) {
            opstion.cancel && opstion.cancel(res);
          }
        });
      });
    }

};
// #endif

export default wxApi;
