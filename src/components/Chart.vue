<template>
  <div class="charts-wrap">
    <mpvue-echarts :echarts="echarts" lazyLoad :onInit="handleInit" ref="echarts" :canvasId="canvasId" />
  </div>
</template>

<script>
  import * as echarts from '../../static/echarts/echarts.simple.min'
  import mpvueEcharts from 'mpvue-echarts'

  export default {
    props: ['chartData', 'canvasId'],
    data () {
      return {
        echarts,
        option: null,
        lazyLoad: true
      }
    },
    watch: {
      'chartData': {
        handler (newV, oldV) {
          this.initChart(newV)
        },
        deep: true
      }
    },
    computed: {},
    components: {
      mpvueEcharts
    },
    methods: {
      initChart (option) {
        this.option = option
        this.$refs.echarts.init()
      },
      handleInit (canvas, width, height) {
        const chart = echarts.init(canvas, null, {
          width: width,
          height: height
        })
        canvas.setChart(chart)
        chart.setOption(this.option)
        return chart
      }
    },
    mounted () {
//      this.initChart(option())
    }
  }
</script>

<style lang="scss" scoped>
  .charts-wrap {
    height: 450rpx;
    width: 100%;
    /*padding: 54rpx 32rpx 48rpx;*/
    .canvas {
      width: 400rpx;
      height: 400rpx;
    }
  }
</style>
