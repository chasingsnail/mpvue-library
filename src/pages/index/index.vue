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

  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  components: {},
  methods: {
    mapTo (key) {
      this.$naviTo(key)
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
</style>
