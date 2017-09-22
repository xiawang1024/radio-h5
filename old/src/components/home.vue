<template>
    <div class="home">

        <div class="swiper-container" ref="swiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <one></one>
                </div>
                <div class="swiper-slide">
                    <two></two>
                </div>
                <div class="swiper-slide">
                    <three></three>
                </div>
                <div class="swiper-slide">
                    <four></four>
                </div>
                <div class="swiper-slide">
                    <five></five>
                </div>
            </div>
        </div>
        <div class="up-wrap">

        </div>
        <div class="audio-wrap" @click="toggle">
            <audio src="http://www.hndt.com/h5/promotion/static/mp3/mp3.mp3" class="audio" id="audio" autoplay loop></audio>
        </div>
    </div>
</template>

<script>
import One from '@/components/one/one'
import Two from '@/components/two/two'
import Three from '@/components/three/three'
import Four from '@/components/four/four'
import Five from '@/components/five/five'

export default {
    name: 'home',
    components: {
        One,
        Two,
        Three,
        Four,
        Five
    },
    data() {
        return {

        }
    },
    mounted() {
        setTimeout(() => {
            this.mySwiper = new Swiper('.swiper-container', {
                direction : 'vertical',
                // loop:true,
                onInit: function(swiper) {
                    swiperAnimateCache(swiper);
                    swiperAnimate(swiper);
                },
                onSlideChangeEnd: function(swiper) {
                    swiperAnimate(swiper);
                }
            })
            this.audio = document.getElementById('audio')
            document.addEventListener("touchstart", this._play(), false);
        }, 20)
    },
    methods:{
        _play() {
            this.audio.play()
        },
        toggle() {
            if(this.audio.paused){
                this.audio.play()
            }else{
                this.audio.pause()
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/mixin.styl'
@keyframes rotate 
    0%
        transform rotate(0)
    100%
        transform rotate(360deg)
@keyframes up 
    0%
        transform translate3d(0,0,0)
        opacity 0
    100%
        transform translate3d(0,-80px,0)    
        opacity 0.7

.swiper-container
    position absolute
    top 0
    right 0
    bottom 0
    left 0
    width 750px
    overflow hidden
    background #f5f5f5
    .swiper-wrapper        
        width 100%
        height 100%
        .swiper-slide
            position relative
            width 100%
            height 100%
.up-wrap
    opacity 0
    position absolute
    bottom 10px
    left 340px
    z-index 1024
    width 70px
    height 70px
    background url('./up.png') center center no-repeat
    background-size contain
    animation up 1.2s ease-in infinite 
    animation-delay 1.5s
.audio-wrap
    position absolute
    z-index 1024
    top 50px
    right 50px
    width 60px
    height 60px
    animation rotate 2.5s linear infinite
    background url('./voice.svg') 
    background-size cover
    .audio
        display none
</style>

