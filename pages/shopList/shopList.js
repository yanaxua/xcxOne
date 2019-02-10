// pages/shopList/shopList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shopList: [],
    navi: 1,
    pageIndex: 0,
    pageSize: 20,
    loading: false,
  },
  ask_shopList() {
    if (this.data.loading) {
      
    } else {
      this.setData({
        loading: true
      })
      // 头部导航条加载动画
      wx.showNavigationBarLoading();
      // loading样式
      wx.showLoading({
        title: "加载数据中",
        mask: true,
        success: (result)=>{
          
        },
        fail: ()=>{},
        complete: ()=>{}
      });
      wx.request({
        url: 'https://locally.uieee.com/categories/' + this.data.navi + '/shops',
        data: {
          _limit: this.data.pageSize,
          _page: ++this.data.pageIndex
        },
        success: (result) => {
          let newList = this.data.shopList.concat(result.data);
          if (!result.data.length) {
            this.setData({
              pageIndex: --this.data.pageIndex
            });
            wx.showToast({
              title: '到底了',
              icon: 'none',
              image: '',
              duration: 1500,
              mask: false,
              success: (result)=>{
                
              },
              fail: ()=>{},
              complete: ()=>{}
            });
          }
          this.setData({
            shopList: newList
          })
        },
        fail: () => {},
        complete: () => {
          wx.hideNavigationBarLoading();
          wx.hideLoading();
          this.setData({
            loading: false
          })
        }
      });
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    /**
     * 1,读取参数中的title
     * 2,根据参数类型,请求对应数据
     * 3,api文档
     */
    wx.setNavigationBarTitle({
      title: options.title
    });
    this.setData({
      navi: options.navi
    });
    this.ask_shopList();
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
    console.log("下拉");
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.ask_shopList();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})