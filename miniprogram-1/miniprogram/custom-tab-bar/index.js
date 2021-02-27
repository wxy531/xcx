Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [{
      "pagePath": "pages/index/index",
      "text": "体型",
      "iconPath": "/images/tixing.png",
      "selectedIconPath": "/images/tixing - 副本.png"
    }, {
      "pagePath": "pages/logs/logs",
      "text": "科目",
      "iconPath": "/images/yundong-.png",
      "selectedIconPath": "/images/yundong - 副本.png"
    },
    {
      "current": 2,
      "pagePath": "pages/my/my",
      "text": "标准",
      "iconPath": "/images/data.png",
      "selectedIconPath": "/images/data - 副本.png"
    }

  ]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})