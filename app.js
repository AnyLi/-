//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    member:{
      id:'123456789',
      nickName:'米花',
      face:'https://hbimg.huabanimg.com/b36601d2f6dc2f6e2961c981e4b4b5d1b787c9dead6e-Z5IIIU_fw658/format/webp',
      tel:15009294469
    },
    swiper:[
      {
        remark:'抽象画数字绘画现代抽象画抽象背景墙壁纸抽象背景底纹炫彩背景墙图案星云酒店',
        title:'临摹-抽象画A',
        src:'https://hbimg.huabanimg.com/af33b32c7a62d3bcf96150d7be25e666cc4437c383cf6-e2NOmH_fw658/format/webp',
        url:'/pages/zhuanfen/pages/order/order'
      },
      {
        remark:'抽象画数字绘画现代抽象画抽象背景墙壁纸抽象背景底纹炫彩背景墙图案星云酒店',
        title:'临摹-抽象画B',
        src:'https://hbimg.huabanimg.com/225238e257f5ab44bc5fd4df23670300e8b9aba212a4dd-pnWZ4X_fw658/format/webp',
        url:'/pages/index/pages/indexDetail/indexDetail'
      },
      {
        remark:'抽象画数字绘画现代抽象画抽象背景墙壁纸抽象背景底纹炫彩背景墙图案星云酒店',
        title:'临摹-抽象画C',
        src:'https://hbimg.huabanimg.com/162a825c9b680a7d4ac22a561ae2ebf403f1316d4991a-jpzfp2_fw658/format/webp',
        url:'/pages/zhuanfen/pages/order/order'
      },
      {
        remark:'抽象画数字绘画现代抽象画抽象背景墙壁纸抽象背景底纹炫彩背景墙图案星云酒店',
        title:'临摹-抽象画A',
        src:'https://hbimg.huabanimg.com/af33b32c7a62d3bcf96150d7be25e666cc4437c383cf6-e2NOmH_fw658/format/webp',
        url:'/pages/wode/pages/logs/logs'
      },
      {
        remark:'抽象画数字绘画现代抽象画抽象背景墙壁纸抽象背景底纹炫彩背景墙图案星云酒店',
        title:'临摹-抽象画B',
        src:'https://hbimg.huabanimg.com/225238e257f5ab44bc5fd4df23670300e8b9aba212a4dd-pnWZ4X_fw658/format/webp',
        url:'/pages/index/pages/indexDetail/indexDetail'
      },
      {
        remark:'抽象画数字绘画现代抽象画抽象背景墙壁纸抽象背景底纹炫彩背景墙图案星云酒店',
        title:'临摹-抽象画C',
        src:'https://hbimg.huabanimg.com/162a825c9b680a7d4ac22a561ae2ebf403f1316d4991a-jpzfp2_fw658/format/webp',
        url:'/pages/zhuanfen/pages/order/order'
      },
    ],
  }
})