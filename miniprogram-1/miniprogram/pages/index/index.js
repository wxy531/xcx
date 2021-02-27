// index.js
// 获取应用实例
var app = getApp()

Page({
  data: {
    sexItem:['男','女'],
    index1: 0,
    ageItem:['24岁（含以下）','25岁','26岁','27岁','28岁','29岁','30岁','31岁','32岁','33岁','34岁','35岁',
    '36岁','37岁','38岁','39岁','40岁','41岁','42岁','43岁','44岁','45岁','46岁','47岁','48岁','49岁',
    '50岁','51岁','52岁','53岁','54岁','55岁','56岁','57岁','58岁','59岁','60岁（含以上）'],
    index2: 0,
    genreItem:['二类人员','文职人员'],
    sex:'',
    age:'',
    genre:'',
    index3: 0,
    height:'170',
    weight:'60'
  },
  onLoad: function () {
  
    app.globalData.sex=this.data.sexItem[this.data.index1]
    app.globalData.age=this.data.ageItem[this.data.index2]
    app.globalData.genre=this.data.genreItem[this.data.index3]
  },
  sexChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index1: e.detail.value
    })
    console.log(this.data.sexItem['姓别：',e.detail.value])
    app.globalData.sex=this.data.sexItem[this.data.index1]
  },
  ageChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index2: e.detail.value
    })
    console.log(this.data.ageItem['年龄：',e.detail.value])
    app.globalData.age=this.data.ageItem[this.data.index2]
  },
  genreChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index3: e.detail.value
    })
    console.log(this.data.genreItem['类别：',e.detail.value])
    app.globalData.genre=this.data.genreItem[this.data.index3]
  },
  heightInput:function(e)
  {
    this.setData({
      height: e.detail.value
    })
    console.log(e.detail.value)
  },
  weightInput:function(e)
  {
    this.setData({
      weight: e.detail.value
    })
    console.log(e.detail.value)
  },
  jump:function(){
    wx.navigateTo({
     url: '../BMI/BMI',
     success: function(res) {
  
     },
     fail: function(res) {
  
     },
     complete: function(res) {
  
     },
    })
   }
})