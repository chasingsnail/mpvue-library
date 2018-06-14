/**
 * Created by VamW on 2018/5/31.
 */
const option = () => {
  return {
    color: ['#6eba94'],
    // legend: {
    //   data: ['A', 'B', 'C'],
    //   top: 50,
    //   left: 'center',
    //   backgroundColor: 'red',
    //   z: 100
    // },
    grid: {
      containLabel: true,
      // width: '100%',
      // height: '100%'
      left: '10%',
      right: '10%',
      top: '20%',
      bottom: '10%'
    },

    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      axisLabel: {
        color: '#9B9B9B'
      },
      axisLine: {
        lineStyle: {
          color: '#D3D3D3'
        }
      }
    },
    yAxis: {
      x: 'center',
      type: 'value',
      splitNumber: 4,
      axisLabel: {
        color: '#9B9B9B'
      },
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      }
    },
    series: [{
      name: 'A',
      type: 'line',
      // smooth: true,
      data: [18, 36, 65, 30, 78, 40, 33]
    }]
  }
}

export default option
