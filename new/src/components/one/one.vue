<template>
  <div class="one">
      <div class="shoot-star-wrap">
          <div class="star-1 ani" swiper-animate-effect="wxStar
" swiper-animate-duration="1s" swiper-animate-delay="1.5s"></div>
          <div class="star-2 ani" swiper-animate-effect="wxStar
" swiper-animate-duration="1s" swiper-animate-delay="1.75s"></div>
          <div class="star-3 ani" swiper-animate-effect="wxStar
" swiper-animate-duration="1s" swiper-animate-delay="2s"></div>
      </div>
      <div class="star-wrap">
          <div class="star-1 ani" swiper-animate-effect="bounceIn" swiper-animate-duration="1s" swiper-animate-delay="1.5s"></div>
          <div class="star-2 ani" swiper-animate-effect="bounceIn" swiper-animate-duration="1s" swiper-animate-delay="1.75s"></div>
          <div class="star-3 ani" swiper-animate-effect="bounceIn" swiper-animate-duration="1s" swiper-animate-delay="2s"></div>
      </div>
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
    .shoot-star-wrap
        position relative
        .star-1
            position absolute
            top 0 
            left 0
            width 375px
            height 297px
            background url('./shooting-star.png') center center no-repeat
            background-size 3.6rem
        .star-2
            position absolute
            top 200px 
            right 0
            width 375px
            height 297px
            background url('./shooting-star.png') center center no-repeat
            background-size 3.6rem
        .star-3
            position absolute
            top 500px 
            right 0
            width 375px
            height 297px
            background url('./shooting-star.png') center center no-repeat
            background-size 3.6rem
    .star-wrap
        position relative
        .star-1
            position absolute
            top 200px
            left 320px
            width 375px
            height 203px
            background url('./star.png') center center no-repeat
            background-size 2.8rem
        .star-2
            position absolute
            top 350px
            left 270px
            width 375px
            height 203px
            background url('./star.png') center center no-repeat
            background-size 2.8rem
        .star-3
            position absolute
            top 200px
            left 100px
            width 375px
            height 203px
            background url('./star.png') center center no-repeat
            background-size 2.8rem
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
        left 0
        top 240px
        width 750px
        height 309px
        background url('./0.png') center center no-repeat
        background-size auto 3.6rem 
    .titlec
        position absolute
        left 0
        top 500px
        width 750px
        height 137px
        background url('./1.png') center center no-repeat
        background-size auto 1rem
    .voice
        position absolute
        left 193px
        bottom 260px
        width 363px
        height 324px
        background url('./2.png') center center no-repeat
        background-size 2rem
    .address
        position absolute
        left 185px
        bottom 160px
        width 379px
        height 69px
        background url('./3.png') center center no-repeat
        background-size auto 0.6rem
    .desc
        position absolute
        left 0
        bottom 100px
        width 750px
        height 36px
        background url('./4.png') center center no-repeat
        background-size 7.97rem
</style>

