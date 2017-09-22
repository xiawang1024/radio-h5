<template>
  <div class="toast ani" swiper-animate-effect="bounceInDown
    " swiper-animate-duration="1s" swiper-animate-delay="0s" v-show="isShow">
      <h2 class="title">报名成功</h2>
      <p class="info">温馨提示推介会签到：请务必使用报名微信扫描二维码入场签到，否则签到失败不得入场。</p>
      <button class="close" @click="closeToast">关闭</button>
  </div>
</template>

<script>
export default {
  props:{
      title:{
          type:String,
          default:''
      },
      msg:{
          type:String,
          default:''
      },
      isShow:{
          type:Boolean,
          default:true
      }
  },
  methods:{
      closeToast() {
          this.$emit('closeToast',false)
      }
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/mixin'
.toast  
    position absolute
    top 50%
    right 0
    left 0
    width 600px
    margin auto auto
    padding 30px 0
    border-radius 10px
    transform translate3d(0,-50%,0)
    background rgba(0,0,0,0.8)
    box-sizing border-box
    color #f6c84f
    overflow hidden
    .title  
        text-align center
        font-size 36px
        line-height 2
    .info
        padding 20px 20px 90px
        line-height 1.6
        text-indent 2em
        overflow hidden
        font-size 30px
    .close
        position absolute
        display block
        bottom 0
        width 100%
        height 70px
        background #0a90e3
        border none 
        outline none 
        color #ffffff
        font-size 32px
        letter-spacing 6px
</style>


