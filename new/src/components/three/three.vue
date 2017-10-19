<template>
    <div class="three">
        <div class="border-1 ani" swiper-animate-effect="bounceIn
" swiper-animate-duration="0.5s" swiper-animate-delay="0.5s"></div>
        <div class="border-2 ani" swiper-animate-effect="fadeIn
" swiper-animate-duration="0.3s" swiper-animate-delay="0s"></div>
        <div class="text-1 ani" swiper-animate-effect="rotateInDownLeft
" swiper-animate-duration="0.5s" swiper-animate-delay="0.75s"></div>
        <div class="text-2 ani" swiper-animate-effect="bounceInLeft
" swiper-animate-duration="0.7s" swiper-animate-delay="1s"></div>
        <div class="text-3 ani" swiper-animate-effect="lightSpeedIn
" swiper-animate-duration="0.7s" swiper-animate-delay="1.25s">11月8日</div>
        <div class="text-4 ani" swiper-animate-effect="lightSpeedIn
" swiper-animate-duration="0.7s" swiper-animate-delay="1.75s">河南人民会堂</div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/mixin.styl'
.three
    fullpage()
    .border-1
        position absolute
        top 0
        left 0
        width 100%
        height 100%
        background url('./2.png') center center no-repeat
        background-size cover
    .border-2
        position absolute
        top 0
        left 0
        width 100%
        height 100%
        background url('./3.png') center center no-repeat
        background-size 90%
    .text-1
        position absolute
        top 200px
        left 0
        width 100%
        height 350px
        background url('./0.png') center center no-repeat
        background-size contain
    .text-2
        position absolute
        bottom 400px
        left 0
        width 100%
        height 140px
        background url('./1.png') center center no-repeat
        background-size contain
    .text-3,.text-4
        width 100%
        text-align center
        color #f6c84f
        font-size 40px
    .text-3
        position absolute
        bottom 300px        
    .text-4
        position absolute
        bottom 240px
</style>

