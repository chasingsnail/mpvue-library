<template>
  <div class="date-picker" v-if="isShow">

    <div class="date-picker_mask" @click="close"></div>

    <div class="date-picker_content">

      <div class="content-operate">
        <a class="btn btn-cancel" @click="close">取消</a>
        <a class="btn btn-confirm" @click="confirm">确认</a>
      </div>

      <div class="content-select">

        <picker-view
          class="date-picker-content-item"
          indicator-style="height: 90rpx;"
          :value="tempYearPos"
          @change="handleChange('Year', $event)">
          <picker-view-column>
            <view v-for="item in years" :key="item" style="line-height: 34px">{{item}}年</view>
          </picker-view-column>
        </picker-view>

        <picker-view
          class="date-picker-content-item"
          indicator-style="height: 90rpx; "
          :value="tempMonthPos"
          @change="handleChange('Month', $event)">
          <picker-view-column>
            <view v-for="item in months" :key="item" style="line-height: 34px">{{item}}月</view>
          </picker-view-column>
        </picker-view>

        <picker-view
          class="date-picker-content-item"
          indicator-style="height: 90rpx; "
          :value="tempDayPos"
          @change="handleChange('Day', $event)">
          <picker-view-column>
            <view v-for="item in days" :key="item" style="line-height: 34px">{{item}}日</view>
          </picker-view-column>
        </picker-view>

        <picker-view
          class="date-picker-content-item"
          indicator-style="height: 90rpx; "
          :value="tempHourPos"
          @change="handleChange('Hour', $event)">
          <picker-view-column>
            <view v-for="item in hours" :key="item" style="line-height: 34px">{{item}}时</view>
          </picker-view-column>
        </picker-view>

        <picker-view
          class="date-picker-content-item"
          indicator-style="height: 90rpx; "
          :value="tempMinPos"
          @change="handleChange('Min', $event)">
          <picker-view-column>
            <view v-for="item in mins" :key="item" style="line-height: 34px">{{item}}分</view>
          </picker-view-column>
        </picker-view>

      </div>
    </div>
  </div>
</template>

<script>
  const currentDate = new Date()

  export default {
    props: {
      'isShow': Boolean,
      'startYear': {
        type: Number,
        default: currentDate.getFullYear()
      },
      'gap': {
        type: Number,
        default: 10
      }
    },
    data () {
      return {
        years: [],
        months: [],
        days: [],
        hours: [],
        mins: [],
        tempYearPos: [0],
        tempMonthPos: [0],
        tempDayPos: [0],
        tempHourPos: [0],
        tempMinPos: [0],
        animation: {}
      }
    },
    computed: {},
    components: {},
    methods: {
      close () {
        this.$emit('handleClose')
      },
      confirm () {
        const year = this.years[this.tempYearPos]
        const month = this.months[this.tempMonthPos]
        const day = this.days[this.tempDayPos]
        const hour = this.hours[this.tempHourPos]
        const min = this.mins[this.tempMinPos]
        const date = [year, month, day, hour, min]
        this.$emit('handleConfirm', date)
        this.close()
      },
      getDays (year, month) {
        let days = []
        month = parseInt(month, 10)
        let date = new Date(year, month, 0)
        let maxDay = date.getDate()
        for (let i = 1; i <= maxDay; i++) {
          let day = 0
          day = i < 10 ? '0' + i : i
          days.push(day)
        }
        return days
      },
      getRefreshData () {
        if (this.years === null || this.years.length === 0) {
          return
        }

        let date = new Date()

        let tempYearPos = this.years.length - 1
        let tempMonthPos = date.getMonth()
        let tempDayPos = date.getDate() - 1
        let tempHourPos = date.getHours()
        let tempMinPos = date.getMinutes()

        let days = []
        let curYear = this.years[tempYearPos]
        days = this.getDays(curYear, this.months[tempMonthPos])
        this.days = days
        // this.tempYearPos = [tempYearPos]
        this.tempMonthPos = [tempMonthPos]
        this.tempDayPos = [tempDayPos]
        this.tempHourPos = [tempHourPos]
        this.tempMinPos = [tempMinPos]
      },
      handleYearChange (e) {
        let days = []
        let curYear = this.years[e.mp.detail.value]
        let curMonth = this.months[this.tempMonthPos]
        days = this.getDays(curYear, curMonth)
        const daySum = days.length
        this.days = days
        this.tempYearPos = e.mp.detail.value
        if (this.tempDayPos[0] > daySum) {
          this.tempDayPos = [daySum]
        }
      },
      handleMonthChange (e) {
        let days = []
        let curYear = this.years[this.tempYearPos]
        let curMonth = this.months[e.mp.detail.value]
        days = this.getDays(curYear, curMonth)
        const daySum = days.length
        this.days = days
        this.tempMonthPos = e.mp.detail.value
        if (this.tempDayPos[0] > daySum) {
          this.tempDayPos = [daySum]
        }
      },
      handleChange (key, e) {
        if (key === 'Year') {
          this.handleYearChange(e)
        } else if (key === 'Month') {
          this.handleMonthChange(e)
        } else {
          this[`temp${key}Pos`] = e.mp.detail.value
        }
      },
      count (start, end) {
        let result = []
        for (let i = start; i <= end; i++) {
          result.push(i < 10 ? '0' + i : i)
        }
        return result
      }
    },
    created () {
      let date = new Date()
      let days = []
      days = this.getDays(date.getFullYear(), date.getMonth() + 1)
      this.years = this.count(date.getFullYear(), date.getFullYear() + this.gap)
      this.months = this.count(1, 12)
      this.hours = this.count(0, 23)
      this.mins = this.count(0, 59)
      this.days = days
      this.getRefreshData() // 获取当前日期时间
      // this.animation = this.animation.export()
    },
    mounted () {
      this.animation = wx.createAnimation({
        duration: 7000,
        timingFunction: 'ease-out'
      })
      this.animation.bottom(0).step()
    },
    onShow () {
      console.log(123)
    }
  }
</script>

<style lang="scss" scoped>
  .date-picker {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: 0;
    padding: 0;
    /*width: 100%;*/
    /*height: 100%;*/
    /*overflow: hidden;*/
    z-index: 9;
    .date-picker_mask {
      position: absolute;
      top: 0;
      left: 0;
      background-color: rgba(0, 0, 0, .3);
      width: 100%;
      height: 100%;
      z-index: 10;
    }
    .date-picker_content {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      /*height: 474rpx;*/
      /*margin: 0 48rpx;*/
      border-radius: 8rpx;
      background-color: #fff;
      z-index: 15;
      overflow: hidden;
      .content-operate {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 3rpx solid $green;
        .btn {
          height: 100rpx;
          line-height: 100rpx;
          font-size: 36rpx;
          padding: 0 48rpx;
          &.btn-cancel {
            color: #353535;
          }
          &.btn-confirm {
            color: $green;
          }
        }
      }
      .content-select {
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 375rpx;
        overflow: hidden;
        margin-top: 6rpx;
        margin-bottom: 6rpx;
        justify-content: space-between;
      }
      .date-picker-content-item {
        flex: 1;
        height: 100%;
        text-align:center;
      }
      /*.column-item {*/
      /*!*height: 70rpx;*!*/
      /*font-size: 36rpx;*/
      /*line-height:34rpx;*/
      /*color:#353535;*/
      /*text-align:center;*/
      /*}*/
    }
  }
</style>
