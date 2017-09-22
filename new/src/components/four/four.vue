<template>
    <div class="three">
        <div class="border-1 ani" swiper-animate-effect="bounceIn
" swiper-animate-duration="0.5s" swiper-animate-delay="0.5s"></div>
        <div class="border-2 ani" swiper-animate-effect="fadeIn
" swiper-animate-duration="0.3s" swiper-animate-delay="0s"></div>
        <div class="text-1 ani" swiper-animate-effect="zoomIn
" swiper-animate-duration="0.75s" swiper-animate-delay="0.5s"></div>
        <div class="text-2 ani" swiper-animate-effect="zoomIn
" swiper-animate-duration="0.75s" swiper-animate-delay="0.75s"></div>
        <div class="text-3 ani" swiper-animate-effect="bounceInLeft
" swiper-animate-duration="0.75s" swiper-animate-delay="1s"></div>
        <div class="text-4 ani" swiper-animate-effect="bounceInRight
" swiper-animate-duration="0.75s" swiper-animate-delay="1.25s"></div>
        <div class="text-5 ani" swiper-animate-effect="fadeInUp
" swiper-animate-duration="0.75s" swiper-animate-delay="1.75s">咨询电话：0371-65889111</div>
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
        background url('./border-1.png') center center no-repeat
        background-size cover
    .border-2
        position absolute
        top 0
        left 0
        width 100%
        height 100%
        background url('./border.png') center center no-repeat
        background-size 90%
    .text-1
        position absolute
        top 200px
        left 0
        width 100%
        height 300px
        background url('./0.png') center center no-repeat
        background-size contain
    .text-2
        position absolute
        top 500px
        left 100px
        width 100%
        height 140px
        background url('./1.png') center center no-repeat
        background-size contain
    .text-3
        position absolute
        top 640px
        left -100px
        width 100%
        height 180px
        background url('./2.png') center center no-repeat
        background-size contain
    .text-4
        position absolute
        top 800px
        left 120px
        width 100%
        height 180px
        background url('./3.png') center center no-repeat
        background-size contain
    .text-5
        position absolute
        top 1050px
        width 100%
        text-align center
        color #f6c84f
        font-size 40px
</style>

