<template>
  <div class="charts-wrap">
    <mpvue-echarts :echarts="echarts" :lazyLoad="lazyLoad" :onInit="onInit" canvasId="temp1" />
  </div>
</template>

<script>
  import * as echarts from '../../static/echarts/echarts.simple.min'
  import mpvueEcharts from 'mpvue-echarts'

  let chart = null

  let _option = {}

  function initChart (canvas, width, height) {
    chart = echarts.init(canvas, null, {
      width: width,
      height: height
    })
    canvas.setChart(chart)

    let option = _option // 配置项

    chart.setOption(option)

    return chart
  }

  export default {
    props: ['chartData'],
    data () {
      return {
        echarts,
        onInit: initChart,
        lazyLoad: true
      }
    },
    watch: {
      'chartData': {
        handler (newV, oldV) {
          _option = newV
          this.init()
        },
        deep: true
      }
    },
    computed: {},
    components: {
      mpvueEcharts
    },
    methods: {
      init () {
        this.$children[0].init()
      }
    },
    mounted () {
      this.init()
    }
  }
</script>

<style lang="scss" scoped>
  .charts-wrap {
    height: 450rpx;
    width: 100%;
    .canvas {
      width: 400rpx;
      height: 400rpx;
    }
  }
</style>
