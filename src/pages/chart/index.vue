<template>
  <div class="comp-wrap">
    <div class="comp-head">
      <div class="comp-title">chart</div>
      <div class="comp-desc">常用折线、柱形、饼图。</div>
      <div class="comp-desc">前置：mpvue-echarts、echarts官网精简版。</div>
      <div class="comp-desc">支持异步获取数据、刷新重置图表</div>
    </div>

    <div class="comp-cell">

      <scroll-view class="scroll-view" scroll-x>
        <div
          class="scroll-view_item"
          :class="{active: date === index}"
          v-for="(item, index) in dates"
          :key="item"
          @click="choose(index)">
          <div>{{item.date}}</div>
          <div class="date" v-if="item.week">{{item.week}}</div>
        </div>
      </scroll-view>

      <div class="chart-wrap">
        <Chart :chartData="chartData" />
      </div>
    </div>
  </div>
</template>

<script>
  import Chart from '@/components/Chart'
  import options from './option'

  let _option = options()

  export default {
    data () {
      return {
        chartData: null,
        date: 0,
        dates: [
          {
            date: '12-14'
          }, {
            date: '12-15'
          }, {
            date: '12-16'
          }
        ]
      }
    },
    computed: {},
    components: {
      Chart
    },
    methods: {
      choose (index) {
        this.date = index
        _option.series[0].data = [Math.random() * 600, 12, 65, 30, 764, 40, 33]
        this.chartData = _option
      }
    },
    mounted () {
      this.chartData = _option
    }
  }
</script>

<style lang="scss" scoped>
  .scroll-view {
    display: flex;
    margin-top: 48rpx;
    white-space: nowrap;
    .scroll-view_item {
      position: relative;
      display: inline-block;
      min-height: 48rpx;
      margin-right: 48rpx;
      font-size: 32rpx;
      color: #222;
      text-align: center;
      .date {
        padding-bottom: 16rpx;
        font-size: 24rpx;
        color: #7B7B7B;
      }
      &.active:after {
        content: '';
        position: absolute;
        left: 50%;
        bottom: 0;
        width: 54rpx;
        height: 4rpx;
        transform: translateX(-50%);
        background-color: $green;
      }
    }
  }
  .chart-wrap {
    margin-top: 20rpx;
    box-shadow: 0 8px 18px 0 rgba(179,179,179,0.34);
    border-radius: 12rpx;
    border: 2rpx solid $green;
  }
</style>
