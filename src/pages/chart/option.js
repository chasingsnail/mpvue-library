/**
 * Created by VamW on 2018/5/31.
 */
const option = () => {
  return {
    color: ['#6eba94'],
    grid: {
      containLabel: true
    },

    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      nameTextStyle: {
        fontSize: 50
      }
      // show: false
    },
    yAxis: {
      x: 'center',
      type: 'value',
      splitNumber: 4
    },
    series: [{
      name: 'A',
      type: 'line',
      data: [18, 36, 65, 30, 78, 40, 33]
    }]
  }
}

export default option
