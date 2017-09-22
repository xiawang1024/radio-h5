<template>
  <div class="one">
      <div class="name ani" swiper-animate-effect="bounceInDown" swiper-animate-duration="1s" swiper-animate-delay="0s">邀请函</div>
      <div class="title ani" swiper-animate-effect="rotateIn" swiper-animate-duration="1s" swiper-animate-delay="0.5s"></div>
      <div class="titlec ani" swiper-animate-effect="bounceIn" swiper-animate-duration="1s" swiper-animate-delay="0.75s"></div>
      <div class="voice ani" swiper-animate-effect="rotateInUpLeft
" swiper-animate-duration="1s" swiper-animate-delay="0.75s"></div>
      <div class="address ani" swiper-animate-effect="bounceInUp
" swiper-animate-duration="1s" swiper-animate-delay="0.8s"></div>
      <div class="desc ani" swiper-animate-effect="bounceInLeft
" swiper-animate-duration="1s" swiper-animate-delay="1s"></div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/mixin.styl'
.one
    fullpage()
    background url('../bg.png') center center no-repeat
    background-size cover
    .name 
        position absolute
        top 150px
        width 100%
        text-align center
        color #f6c84f
        font-size 56px
        letter-spacing 12px
    .title
        position absolute
        left 96px
        top 210px
        width 2*279px
        height 2*144px
        background url('./0.png') center center no-repeat
        background-size 7.44rem 
    .titlec
        position absolute
        left 203px
        top 490px
        width 2*172px
        height 2*39px
        background url('./1.png') center center no-repeat
        background-size 4.59rem
    .voice
        position absolute
        left 286px
        bottom 400px
        width 2*89px
        height 2*95px
        background url('./2.png') center center no-repeat
        background-size 2.37rem
    .address
        position absolute
        left 263px
        bottom 300px
        width 2*112px
        height 2*38px
        background url('./3.png') center center no-repeat
        background-size 2.98rem
    .desc
        position absolute
        left 76px
        bottom 200px
        width 2*299px
        height 2*19px
        background url('./4.png') center center no-repeat
        background-size 7.97rem
</style>

