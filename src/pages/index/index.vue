<template>
  <div class="container">
    <div class="row-cell">
      <div class="cell-title">时间日期选择器</div>
      <div class="cell-content"  @click="showPicker = true">{{date ? date : '点击选择时间'}}</div>
    </div>

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
