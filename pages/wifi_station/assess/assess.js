var app=getApp()
var humData = 0
var lightData = 0
var tempeData = 0
var soundData = 0
var result = null
var result1=null
var result2 = null
var result3 = null
var result4 = null
Page({
  
  data: {
    hum: [],
    light: [],
    tempe: [],
    sound: [],
    
  },
  onPullDownRefresh: function () {
    console.log('onPullDownRefresh', new Date())
  },

  onReachBottom: function () {

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
  convert: function () {
    //var categories = [];
    var humidity = [];
    var light = [];
    var tempe = [];
    var sound = [];  //改

    var length = app.globalData.sound.datapoints.length
    for(var i=0; i<length ; i++){
      //categories.push(app.globalData.humidity.datapoints[i].at.slice(11, 19));
      humidity.push(app.globalData.humidity.datapoints[i].value);
      light.push(app.globalData.light.datapoints[i].value);
      tempe.push(app.globalData.temperature.datapoints[i].value);
      sound.push(app.globalData.sound.datapoints[i].value);
    }
    return {
      humidity: humidity,
      light: light,
      tempe: tempe,
      sound: sound   
    }
    

  },
  onLoad: function (){
    var that = this
    var wheatherData = this.convert();
   
    
    
    this.setData({
      hum: wheatherData.humidity ,
      light: wheatherData.light,
      tempe: wheatherData.tempe,
      sound: wheatherData.sound,
      


    })
    
    
    
    var i = app.globalData.sound.datapoints.length
    humData = app.globalData.humidity.datapoints[i-1].value
    lightData = app.globalData.light.datapoints[i - 1].value
    tempeData = app.globalData.temperature.datapoints[i - 1].value
    soundData = app.globalData.sound.datapoints[i - 1].value



     this.setData({
       humData: humData,
       lightData:lightData,
       tempeData: tempeData,
       soundData: soundData

     })
    if (soundData < 40 && lightData < 200 && tempeData<30){
      this.setData({
        result:"睡眠环境良好",
        result2: "(隔壁没有唱歌)"
      })
      
    
    }

    else{
      this.setData({
        result: "睡眠环境较差"
      })
      if (humData < 20) {
        this.setData({
          result1: "请放一些水在地上"
        })
       
      } 
      if (soundData>40){
        this.setData({
          rusult3:"隔壁声音太大，让他们歌声小些"
        })
      }

      if (tempeData > 30) {
        this.setData({
          rusult4: "室温有些焦灼"
        })
      }

    }
     
    
  }

  
   
  
})










