// logs.js
var app = getApp()
Page({
  data: {
    sex:'',
    age:'',
    genre:'',
    ageIndex: 0,
    time1: '13:35',//3000
    time2: '13:30',
    time3: '02:35',
    time4: '13:35',
    time5: '13:30',
    time6: '02:35',
    ytxs:'0',
    ywqz:'0',
    fwc:'0',
    sxp:'0',
    ps:'0',
    jg: 0,
    lh: 0,
    yx: 0
  },
  list: {
    //wn
    ytxsw:[[24,7,11,13],[27,7,10,12],[30,6,9,11],[33,5,8,10],[36,4,7,9],[39,3,6,8]],
    ywqzwn:[[24,43,59,67],[27,41,57,65],[30,39,55,63],[33,35,51,60],[36,30,49,59],[39,28,46,56],[42,25,44,54],[45,23,42,51],[48,21,39,48],[51,19,37,46],[54,17,35,44],[57,15,32,42],[59,13,30,40]],
    cpwn:[[24,13.52,13.07,12.37],[27,14.28,13.43,13.13],[30,15,14.19,13.49],[33,15.4,14.55,14.25],[36,16,15.31,15.01],[39,16.58,16.13,15.43],[42,17.4,16.55,16.25],[45,18.22,17.37,17.07],[48,19.04,18.19,17.49],[51,19.46,19.01,18.31],[54,20.28,19.43,19.13],[57,21.1,20.25,19.55],[59,21.52,21.07,20.37]]
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
  bindTime4Change: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      time4: e.detail.value
    })
  },
  bindTime5Change: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      time5: e.detail.value
    })
  },
  bindTime6Change: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      time6: e.detail.value
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
      genre: app.globalData.genre,
      ageIndex: app.globalData.ageIndex
      
    });
    console.log(app.globalData.sex)
    console.log(app.globalData.ageIndex)
    console.log(app.globalData.genre)
    },
    CalNumber: function(number,list) {
      var tAge = Number(this.data.ageIndex)+24
      var tIndex = 0
      while(tAge>Number(list[tIndex][0])){
        tIndex = tIndex + 1
      }
      if(Number(number)>=Number(list[tIndex][3])){
        this.setData({
          yx: this.data.yx+1
        })
        console.log("优秀+1")
      }
      else if(Number(number)>=Number(list[tIndex][2])){
        this.setData({
          lh: this.data.lh+1
        })
        console.log("良好+1")
      }
      else if(Number(number)>=Number(list[tIndex][1])){
        this.setData({
          jg: this.data.jg+1
        })
        console.log("及格+1")
      }
    },
    CalTime: function(time,list) {
      var number = Number(time.replace(":","."))
      var tAge = Number(this.data.ageIndex)+24
      var tIndex = 0
      while(tAge>Number(list[tIndex][0])){
        tIndex = tIndex + 1
      }
      if(Number(number)<=Number(list[tIndex][3])){
        this.setData({
          yx: this.data.yx+1
        })
        console.log("优秀+1")
      }
      else if(Number(number)<=Number(list[tIndex][2])){
        this.setData({
          lh: this.data.lh+1
        })
        console.log("良好+1")
      }
      else if(Number(number)<=Number(list[tIndex][1])){
        this.setData({
          jg: this.data.jg+1
        })
        console.log("及格+1")
      }
    },
    calAll: function(){
      console.log("计算")
      console.log(this.data.genre)
      console.log(this.data.ageIndex)
      console.log(this.data.sex)
      this.data.jg = this.data.lh = this.data.yx = 0
      if(this.data.genre=='文职人员'&&this.data.ageIndex<=16&&this.data.sex=='男'){
        console.log("40岁以下文职人员计算")
        this.CalNumber(this.data.ytxs,this.list.ytxsw)
        this.CalNumber(this.data.ywqz,this.list.ywqzwn)
        this.CalTime(this.data.time1,this.list.cpwn)
      }
    }
})