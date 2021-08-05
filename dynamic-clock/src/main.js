import Vue from 'vue'
import './assets/css/base.scss'
Vue.config.productionTip = false

var App = new Vue({
  el: '#app',
  data: {
    duration: 0.4,
    circleRadius: 300,

    numberHeightRatio: 0.9,
    hourHandHeightRatio: 0.4,
    minuteHandHeightRatio: 0.6,
    secondHandHeightRatio: 0.8,

    numbersize: 24,
    hourHandWidth: 4,
    minuteHandWidth: 3,
    secondHandWidth: 2,

    numberHeight: 0,
    hourHandHeight: 0,
    minuteHandHeight: 0,
    secondHandHeight: 0,

    centerX: 0,
    centerY: 0,
    hourX: 0,
    hourY: 0,
    minuteX: 0,
    minuteY: 0,
    secondX: 0,
    secondY: 0,

    hour: 0,
    minute: 0,
    second: 0,

    hourDegree: 0,
    minuteDegree: 0,
    secondDegree: 0,
    
    numberCount: 12,
    numbersX: [],
    numbersY: [],
  },
  methods: {
    initTime: function () {
      let now = new Date()
      let [h, m, s] = [now.getHours(), now.getMinutes(), now.getSeconds()]
      this.hourDegree = 360 * (h * 3600 + m * 60 + s + 1) / 43200
      this.minuteDegree = 360 * (m * 60 + s + 1) / 3600
      this.secondDegree = 360 * (s + 1) / 60
    },
    initSize: function () {
      this.numberHeight = this.circleRadius * this.numberHeightRatio
      this.hourHandHeight = this.circleRadius * this.hourHandHeightRatio
      this.minuteHandHeight = this.circleRadius * this.minuteHandHeightRatio
      this.secondHandHeight = this.circleRadius * this.secondHandHeightRatio
    },
    initPosition: function () {
      this.centerX = this.circleRadius
      this.centerY = this.circleRadius
      this.hourX = this.circleRadius
      this.hourY = this.circleRadius
      this.minuteX = this.circleRadius
      this.minuteY = this.circleRadius
      this.secondX = this.circleRadius
      this.secondY = this.circleRadius
    },
    initNumberPosition: function () {
      let k = 2 * Math.PI / 360
      let r = this.numberHeight
      let degUnit = 360 / this.numberCount
      for (let i = 0; i < this.numberCount; i++) {
        let deg = k * ((i + 1) * degUnit)
        this.numbersX[i] = this.centerX - this.numbersize + r * Math.sin(deg)
        this.numbersY[i] = this.centerY - this.numbersize / 2 - r * Math.cos(deg)
      }
    },
    init: function () {
      this.initSize()
      this.initTime()
      this.initPosition()
      this.updatePosition()
      this.initNumberPosition()
    },
    updatePosition: function () {
      let k = 2 * Math.PI / 360
      let [hr, hd] = [this.hourHandHeight / 2,  k * this.hourDegree]
      this.hourX = this.centerX + hr * Math.sin(hd)
      this.hourY = this.centerY - hr * Math.cos(hd) - hr
      let [mr, md] = [this.minuteHandHeight / 2, k * this.minuteDegree]
      this.minuteX = this.centerX + mr * Math.sin(md)
      this.minuteY = this.centerY - mr * Math.cos(md) - mr
      let [sr, sd] = [this.secondHandHeight / 2, k * this.secondDegree]
      this.secondX = this.centerX + sr * Math.sin(sd)
      this.secondY = this.centerY - sr * Math.cos(sd) - sr
    },
    update: function () {
      setTimeout(() => {
        setInterval(() => {
          let now = new Date()
          this.secondDegree += (360 / 60)
          if (now.getSeconds() === 0) {
            this.minuteDegree += (360 / 60)
            if (now.getMinutes() === 0) {
              this.hourDegree += (360 / 12)
            }
          }
          this.updatePosition()
        }, 1000)
      }, 1000 - (new Date).getMilliseconds())
    },
  },
  created: function () {
    this.init()
    this.update()
  },
})

window.App = App