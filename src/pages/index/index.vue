<template>
  <div class="container">
    <div class="header">
      <div class="header-title">Broccoli UI</div>
      <div class="header-sub-title">常用UI组件封装，基于mpvue。</div>
    </div>

    <ul class="comp-list">
      <li class="comp-item" @click="mapTo('dateTimePicker')">
        日期时间选择器
      </li>
      <li class="comp-item" @click="mapTo('chart')">
        图表（echarts）
      </li>
    </ul>

    <!--<div class="row-cell">-->
      <!--<div class="cell-title">时间日期选择器</div>-->
      <!--<div class="cell-content"  @click="showPicker = true">{{date ? date : '点击选择时间'}}</div>-->
    <!--</div>-->

    <Date-Picker
      :isShow="showPicker"
      @handleConfirm="confirm"
      @handleClose="handleClose"/>
  </div>
</template>

<script>
import DatePicker from '@/components/date-picker'

export default {
  data () {
    return {
      date: '',
      showPicker: false
    }
  },
  components: {
    DatePicker
  },
  methods: {
    mapTo (key) {
      this.$naviTo(key)
    },
    handleClose () {
      this.showPicker = false
    },
    confirm (date) {
      this.date = `${date[0]}/${date[1]}/${date[2]} ${date[3]}:${date[4]}`
    }
  },

  created () {}
}
</script>

<style lang="scss" scoped>
.container {
  min-height: 100%;
  background-color: #F3F3F3;
}
.header {
  padding: 16rpx;
  .header-title {
    font-size: 36rpx;
  }
  .header-sub-title {
    margin-top: 16rpx;
    font-size: 24rpx;
    color: #A7A7A7;
  }
}
.comp-list {
  margin-top: 28rpx;
  .comp-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 90rpx;
    margin-bottom: 24rpx;
    padding: 0 20rpx;
    font-size: 28rpx;
    color: #fff;
    background-color: $green;
    border-radius: 8rpx;
  }
}
.row-cell {
  padding: 20rpx;
  border-bottom: 2rpx solid black;
  font-size: 36rpx;
  .cell-title {
    color: #A7A7A7;
  }
  .cell-content {
    margin-top: 16rpx;
  }
}
</style>
