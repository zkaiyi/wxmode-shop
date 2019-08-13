// pages/type/type.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navs: [{id:1,name:"为你推荐"},
      { id: 2, name: "美妆彩妆" },
      { id: 3, name: "母婴专区" },
      { id: 4, name: "营养保健" },
      { id: 5, name: "数码家电" },
      { id: 6, name: "个人洗护" },
      { id: 7, name: "轻奢" },
      { id: 8, name: "运动户外" },
      { id: 9, name: "家具生活" },
      { id: 10, name: "美食" },
      { id: 11, name: "护肤品" },
    ],
    navIndex: 0,
    hasData: true,
    product: [
      {id: 197, images: "../../img/type01.jpg", name:"鞋子",e_name:"shose"},
      { id: 198, images: "../../img/type02.jpg", name: "上衣", e_name: "jacket" },
      { id: 199, images: "../../img/type03.jpg", name: "裤子", e_name: "tiousers" },
      { id: 200, images: "../../img/type04.jpg", name: "生活", e_name: "lief" },
      ],

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  // 事件
  tabNav: function (e) {
    let that = this;
    let index = e.currentTarget.dataset.index;
    let productid = e.currentTarget.dataset.productid;
    this.setData({
      navIndex: index,
      hasData: true
    })
    // let params = {
    //   typeId: productid,
    //   pageSize: that.data.pageSize,
    //   pageNo: 1
    // }
    // that.queryGoodsByTypeId(params);
  },
})