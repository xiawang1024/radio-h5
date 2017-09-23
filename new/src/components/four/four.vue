<template>
    <div class="five">
        <div class="border-1 ani" swiper-animate-effect="bounceInDown
" swiper-animate-duration="0.5s" swiper-animate-delay="0.5s"></div>
        <div class="border-2 ani" swiper-animate-effect="fadeIn
" swiper-animate-duration="0.3s" swiper-animate-delay="0s"></div>
        <div class="title ani" swiper-animate-effect="bounceInDown
" swiper-animate-duration="0.5s" swiper-animate-delay="0s">活动流程</div>
        <div class="step-wrap">
            <p class="step ani" swiper-animate-effect="flipInX
" swiper-animate-duration="1s" swiper-animate-delay="0.5s">
                <span class="time">14:30</span>
                <span class="cont">签到入场及参观展区</span>
            </p>
            <p class="step ani" swiper-animate-effect="flipInX
" swiper-animate-duration="1s" swiper-animate-delay="0.75s">
                <span class="time">15:00</span>
                <span class="cont">推介会正式开始</span>
            </p>
            <p class="step ani" swiper-animate-effect="flipInX
" swiper-animate-duration="1s" swiper-animate-delay="1s">
                <span class="time">15:02</span>
                <span class="cont">领导致辞</span>
            </p>
            <p class="step ani" swiper-animate-effect="flipInX
" swiper-animate-duration="1s" swiper-animate-delay="1.25s">
                <span class="time">15:10</span>
                <span class="cont">河南电台品牌价值分析</span>
            </p>
            <p class="step ani" swiper-animate-effect="flipInX
" swiper-animate-duration="1s" swiper-animate-delay="1.5s">
                <span class="time">15:30</span>
                <span class="cont">各频率及新媒体品牌价值展示</span>
            </p>
            <p class="step ani" swiper-animate-effect="flipInX
" swiper-animate-duration="1s" swiper-animate-delay="1.75s">
                <span class="time">17:10</span>
                <span class="cont">合影留念</span>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name:'five',
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/mixin.styl'
.five
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
    .title
        font-size 46px
        color #f6c84f
        text-align center 
        padding-top 260px
        letter-spacing 6px
    .step-wrap
        width 90%
        margin 80px auto
        box-sizing border-box
        color #f6c84f
        .step
            width 100%
            height 80px
            font-size 36px
            display flex
            .time
                flex 1
                text-align center
            .cont   
                flex 3
</style>

