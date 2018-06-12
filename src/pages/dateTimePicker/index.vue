<template>
  <div class="comp-wrap">
    <div class="comp-head">
      <div class="comp-title">dateTimePicker</div>
      <div class="comp-desc">时间日期选择</div>
    </div>

    <div class="comp-cell">
      <div class="dateTimePicker"  @click="showPicker = true">{{date ? date : '点击选择时间'}}</div>
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
    computed: {},
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
.dateTimePicker {
  height: 100rpx;
  padding: 0 20rpx;
  line-height: 100rpx;
  font-size: 28rpx;
  color: #fff;
  background-color: $green;
  border-radius: 8rpx;
}
</style>
