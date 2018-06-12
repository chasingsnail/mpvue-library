const router = {
  dateTimePicker: '/pages/dateTimePicker/main',
  chart: '/pages/chart/main'
}

const naviTo = (key) => {
  console.log(key)
  return wx.navigateTo({url: router[key]})
}

export default naviTo
