//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    // 轮播
    imgUrls: [
      '/img/banner.jpg',
      '/img/banner.jpg',
      '/img/banner.jpg'
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    currentSwiper: 0,
   
  },
 
  onLoad: function () {
    
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  swiperChange: function (e) {
    this.setData({
      currentSwiper: e.detail.current
    })
  } 
})
