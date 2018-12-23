// pages/wifi_station/tianqi/text/text.js



Page({
  
  getDataFromOneNet: function () {
    //从oneNET请求我们的Wi-Fi气象站的数据
    const requestTask = wx.request({
      url: 'https://api.heclouds.com/devices/505139609/datapoints?datastream_id=Light,Temperature,Humidity,sound&limit=15',
      header: {
        'content-type': 'application/json',
        'api-key': '6PDYu9IT2cI0lBJJJokYZO15ZKA='
      },
      success: function (res) {
        //console.log(res.data)
        //拿到数据后保存到全局数据
        var app = getApp()
        app.globalData.temperature = res.data.data.datastreams[0]
        app.globalData.light = res.data.data.datastreams[1]
        app.globalData.humidity = res.data.data.datastreams[2]
        app.globalData.sound = res.data.data.datastreams[3]
        app.global.t = app.globalData.temperature/15
        app.global.l = app.globalData.light/15
        app.global.h = app.globalData.humidity/15
        app.global.s = app.globalData.sound/15
        console.log(app.globalData.light)
        console.log(app.globalData.temperature)
        console.log(app.globalData.humidity)
        console.log(app.globalData.sound)
      
        
      
        if (app.global.s<50) {
          if(app.global.l<100){
          wx.redirectTo({
            url: '../con1/con1'
          })
        }
        }
        else {
          wx.redirectTo({
            url: '../con2/con2'
          })
        }
      
      
      
      
      },
  
   
    
    })


  },
  /**
   * 页面的初始数据
   */
 
   
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {       
    if (1) {
      wx.redirectTo({
        url: '../con1/con1'
      })
    }
    else {
      wx.redirectTo({
        url: '../con2/con2'
      })
    }
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