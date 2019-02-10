Page({
  /*页面的初始数据*/
  data: {
    sliderList:[],
    menuList:[]
  },
  /*生命周期函数--监听页面加载*/
  onLoad: function (options) {
    /**微信请求
     * 请求轮播图
     */
    wx.request({
      url: 'https://locally.uieee.com/slides',
      success: (result)=>{
        /**赋值只更新数据,不更新视图 */
        // this.data.sliderList = result.data;
        this.setData({
          sliderList: result.data
        })
      },
      fail: ()=>{},
      complete: ()=>{}
    });
    /**请求菜单列表 */
    wx.request({
      url: 'https://locally.uieee.com/categories',
      success: (result)=>{
        this.setData({
          menuList:result.data
        })
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  },
  /*生命周期函数--监听页面初次渲染完成*/
  onReady: function () {
    
  },
  /*生命周期函数--监听页面显示*/
  onShow: function () {
    
  },
  /*生命周期函数--监听页面隐藏*/
  onHide: function () {
    
  },
  /*生命周期函数--监听页面卸载*/
  onUnload: function () {
    
  },
  /*页面相关事件处理函数--监听用户下拉动作*/
  onPullDownRefresh: function () {
    
  },
  /*页面上拉触底事件的处理函数*/
  onReachBottom: function () {
    
  },
  /*用户点击右上角分享*/
  onShareAppMessage: function () {
    
  }
})