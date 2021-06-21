// pages/applicationModule/staticDisplay/portraitScreen/normalFont/normalFont.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: '0',
    picker: [
      {name:'小',value:"24rpx"}, 
      {name:'中',value:"40rpx"}, 
      {name:'大',value:"60rpx"}, 
      {name:'特大',value:"80rpx"}, 
  ],
  fontSize:"24rpx",
  isCenter:false,
  isSet:false,
  content:"暂无展示文字"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  PickerChange(e) {
    console.log(e);
    this.setData({
      index: e.detail.value,
      fontSize:this.data.picker[e.detail.value].value
    })
  },
  switchChange(e){
    this.setData({
      isCenter:!this.data.isCenter
    
    })
  },
  isSetChange(){
    this.setData({
      isSet:!this.data.isSet
    
    })
  },
  textareaBInput(e){
    this.setData({
      content: e.detail.value,
    
    })
  },
  backEvent: function () {
    wx.navigateBack()
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

  }
})