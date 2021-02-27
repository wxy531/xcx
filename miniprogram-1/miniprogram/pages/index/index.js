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
    bmiBoyList:[[24,25.9],[29,26.9],[39,27.9],[49,28.9],[59,29.4],[60,29.9]],
    bmiGirlList:[[24,23.9],[29,24.9],[39,25.9],[49,26.9],[59,27.4],[60,27.9]],
    index2: 0,
    genreItem:['二类人员','文职人员'],
    sex:'',
    age:'',
    genre:'',
    index3: 0,
    height:'170',
    weight:'60',
    bmi: '20.76',
    pass: '合格'
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
    this.bmiPass()
  },
  ageChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index2: e.detail.value
    })
    console.log(this.data.ageItem['年龄：',e.detail.value])
    app.globalData.age=this.data.ageItem[this.data.index2]
    this.bmiPass()
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
      height: e.detail.value,
    })
    console.log(e.detail.value)
    this.setData({
      bmi: (this.data.weight/((this.data.height/100)*(this.data.height/100))).toFixed(2)
    })
    this.bmiPass()
    console.log(this.data.bmi)
  },
  weightInput:function(e)
  {
    this.setData({
      weight: e.detail.value,
    })
    console.log(e.detail.value)
    this.setData({
      bmi: (this.data.weight/((this.data.height/100)*(this.data.height/100))).toFixed(2)
    })
    console.log(this.data.bmi)
    this.bmiPass()
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
   },
   bmiPass: function(e){
    this.setData({
      pass: '不合格'
    })
    var tAge = Number(this.data.index2)+24
    var tIndex = 0
    if(this.data.index1==0){
      while(tAge>this.data.bmiBoyList[tIndex][0]){
        tIndex = tIndex + 1
      }
      if(this.data.bmi>=18.5&&this.data.bmi<=Number(this.data.bmiBoyList[tIndex][1])){
        this.setData({
          pass: '合格'
        })
      }
    }
    else{
      while(tAge>this.data.bmiGirlList[tIndex][0]){
        tIndex = tIndex + 1
      }
      if(this.data.bmi>=18.5&&this.data.bmi<=Number(this.data.bmiGirlList[tIndex][1])){
        this.setData({
          pass: '合格'
        })
      }
    }
   }
})