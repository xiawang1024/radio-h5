<template>

    <transition name="fade">
        <div class="toast"  v-show="isShow">
            <h2 class="title">{{title}}</h2>
            <p class="info" v-html="msg"></p>
            <button class="close" @click="closeToast">关闭</button>
        </div>
    </transition>
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
.fade-enter-active, .fade-leave-active 
    transition: opacity .5s

.fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ 
    opacity: 0

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
        padding 20px 10px 90px
        line-height 1.75
        text-indent 2em
        overflow hidden
        font-size 30px
    .close
        position absolute
        display block
        bottom 0
        width 100%
        height 80px
        background #0a90e3
        border none 
        outline none 
        color #ffffff
        font-size 32px
        letter-spacing 6px
</style>


