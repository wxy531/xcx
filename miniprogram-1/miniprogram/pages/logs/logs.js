// logs.js
var app = getApp()
Page({
  data: {
    sex:'',
    age:'',
    genre:'',
    time1: '13:35',
    time2: '13:30',
    time3: '02:35',
    ytxs:'0',
    ywqz:'0',
    fwc:'0',
    sxp:'0',
    ps:'0'
  },
  jump1:function(){
    wx.navigateTo({
     url: '../XLBZ/XLBZ',
     success: function(res) {
  
     },
     fail: function(res) {
  
     },
     complete: function(res) {
  
     },
    })
   },
  bindTime1Change: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      time1: e.detail.value
    })
  },
  bindTime2Change: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      time2: e.detail.value
    })
  },
  bindTime3Change: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      time3: e.detail.value
    })
  },
  ytxsInput:function(e)
  {
    this.setData({
      ytxs: e.detail.value
    })
    console.log(e.detail.value)
  },
  ywqzInput:function(e)
  {
    this.setData({
      ywqz: e.detail.value
    })
    console.log(e.detail.value)
  },
  fwcInput:function(e)
  {
    this.setData({
      fwc: e.detail.value
    })
    console.log(e.detail.value)
  },
  sxpInput:function(e)
  {
    this.setData({
      sxp: e.detail.value
    })
    console.log(e.detail.value)
  },
  psInput:function(e)
  {
    this.setData({
      ps: e.detail.value
    })
    console.log(e.detail.value)
  },
  onShow: function () {
    this.setData({
      sex: app.globalData.sex,
      age: app.globalData.age,
      genre: app.globalData.genre
      
    });
    console.log(app.globalData.sex)
    console.log(app.globalData.age)
    console.log(app.globalData.genre)
    }
})