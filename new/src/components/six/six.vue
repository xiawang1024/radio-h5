<template>
    <div class="five">
        <div v-if="!toastIsShowc">
            <div class="title ani" swiper-animate-effect="bounceInDown
        " swiper-animate-duration="0.5s" swiper-animate-delay="0s">接受邀请</div>
            <div class="tab-cont">
                <form class="form">
                    <p class="name ani" swiper-animate-effect="bounceInLeft
        " swiper-animate-duration="0.5s" swiper-animate-delay="0.5s">
                        <span class="text">姓名</span>
                        <input type="text" class="ipt" v-model="name">
                    </p>
                    <p class="tel ani" swiper-animate-effect="bounceInLeft
        " swiper-animate-duration="0.5s" swiper-animate-delay="0.75s">
                        <span class="text">电话</span>
                        <input type="tel" class="ipt" v-model="mobile">
                    </p>
                    <p class="company ani" swiper-animate-effect="bounceInLeft
        " swiper-animate-duration="0.5s" swiper-animate-delay="1s" v-show="tabIndex == 1">
                        <span class="text">单位</span>
                        <input type="text" class="ipt" v-model="company">
                    </p>
                    <!-- <p class="job ani" swiper-animate-effect="bounceInLeft
        " swiper-animate-duration="0.5s" swiper-animate-delay="1.25s" v-show="tabIndex == 1">
                        <span class="text">职务</span>
                        <input type="text" class="ipt" v-model="position">
                    </p> -->
                    <p class="beizhu ani" swiper-animate-effect="bounceInLeft
        " swiper-animate-duration="0.5s" swiper-animate-delay="1s" v-show="tabIndex == 0">
                        <span class="text">备注</span>
                        <input type="text" class="ipt" v-model="description">
                    </p>
                    <p class="beizhu ani" swiper-animate-effect="bounceInLeft
        " swiper-animate-duration="0.5s" swiper-animate-delay="1.5s" v-show="tabIndex == 1">
                        <span class="text">备注</span>
                        <input type="text" class="ipt" v-model="description">
                    </p>
                </form>
            </div>
            <div class="submit ani" swiper-animate-effect="bounceIn
        " swiper-animate-duration="0.5s" swiper-animate-delay="1.25s">
                <button class="btn" @click="submit">提交</button>
            </div>
        </div>
        <toast :isShow="toastIsShow" :title="title" :msg="msg" @closeToast="closeToast"></toast>
        <toasting :isShow="toastIsShowc" :title="titlec" :msg="msgc" ></toasting>
    </div>
</template>

<script>
import { postData, checkOpenId } from "../../api/index"
import Toast from '../toast/toast.vue'
import Toasting from '../toast/toasting.vue'
export default {
    name: 'five',
    components:{
        Toast,
        Toasting
    },
    data() {
        return {
            tabIndex: 1, //0：个人； 1,：公司
            name: '',
            mobile: '',
            company: '',
            position: '',
            description:'',
            origin: '',
            openId: '',
            toastIsShow: false,
            title:'',
            msg: '',
            toastIsShowc: false,
            titlec:'',
            msgc: '',
            isFirstSubmit:true,
            successMsg:'<p>温馨提示推介会签到：请务必使用报名微信扫描二维码入场签到，否则签到失败不得入场。</p><p>地点：河南人民会堂</p><p>时间：2017年11月08日</p><p>活动流程：</p><p>14:00---签到入场及参观展区</p><p>14:30---推介会正式开始</p><p>14:32---领导致辞</p><p>14:40---数据专家对河南广播品牌价值进行分析解读</p><p>15:00---各频率及新媒体品牌价值展示</p><p>16:40---合影留念</p>',
            failMsg: '<p>报名人数已满，敬请关注河南广播网<br/>11月08日推介会现场直播。</p>'
        }
    },
    created () {
        this.openId = this._getQueryString('openId')
        checkOpenId(this.openId).then((res) => {
            let data = res.data
            if(data.status == 1) {
                this.titlec = '报名成功'
                this.msgc = this.successMsg;
                this.toastIsShowc = true
                this.$nextTick(() => {

                })
            }else{
                this.toastIsShowc = false
            }
        })
    }, 
    methods: {
        setTabIndex(index) {
            this.tabIndex = index
        },
        submit() {
            if(!this.isFirstSubmit) {
                this.title = '请不要重复提交'
                this.msg = '关注河南广播网了解更多信息'
                this.toastIsShow = true
                return 
            }
            if(!this.name) {
                this.title = '请填写姓名！'
                this.msg = ''
                this.toastIsShow = true;
                return
            }
            if(!this.mobile) {
                this.title = '请填写手机号！'
                this.msg = ''
                this.toastIsShow = true;
                return
            }
            if(!this._checkPhone(this.mobile)) {
                this.title = '请填写正确的手机号！'
                this.msg = ''
                this.toastIsShow = true;
                return
            }
            if(!this.company) {
                this.title = '请填写单位！'
                this.msg = ''
                this.toastIsShow = true;
                return
            }
            postData(this.name, this.mobile, this.company, this.position, this.origin, this.openId).then((res) => {
                let status = res.data.status;
                if(status == 1){
                    this.titlec = '报名成功'
                    this.msgc = this.successMsg;
                    this.toastIsShowc = true
                }else{
                    this.title = '报名失败'
                    this.msg = this.failMsg
                    this.toastIsShow = true
                }

                this.isFirstSubmit = false;
                // setTimeout(() => {
                //     this.name = ''
                //     this.mobile = ''
                //     this.company = ''
                //     this.position = ''
                // }, 1500)


            }).catch((error) => {
                console.log(error)
                this.title = '报名失败'
                this.msg = this.failMsg;
                this.toastIsShow = true
                // setTimeout(() => {
                //     this.name = ''
                //     this.mobile = ''
                //     this.company = ''
                //     this.position = ''
                // }, 1500)
            })
        },
        _getQueryString(name) {
            let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
            let r = window.location.search.substr(1).match(reg);
            if (r != null) return unescape(r[2]);
            return null;
        },
        _checkPhone(phone) { 
            if(!(/^1[34578]\d{9}$/.test(phone))){                 
                return false; 
            }else{
                return true
            }
        },
        closeToast(flag) {
            this.toastIsShow = flag
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/mixin.styl'
.five
    fullpage()
    .title
        font-size 46px
        color #f6c84f
        text-align center 
        padding-top 150px
        letter-spacing 6px
    .tab-wrap
        width 500px
        height 60px
        line-height 60px
        margin 60px auto
        color #f6c84f
        display flex
        align-items stretch
        border-radius 12px
        overflow hidden
        border 1px solid #dddddd
        .tab
            flex 1
            text-align center
            font-size 32px
            &.z-crt
                background #f6c84f
                color #ffffff
    .tab-cont
        width 600px
        margin 100px auto
        overflow hidden
        .form
            width 100%
            box-sizing border-box
            p
                width 100%
                display flex
                align-items center
                height 80px
                margin-bottom 20px
                background rgba(255,255,255,0.5)
                border-radius 10px
                .text
                    width 120px
                    text-align center
                    font-size 30px
                .ipt
                    flex 1
                    border none 
                    background none 
                    height 100%
                    font-size 36px
    .submit
        // position absolute
        bottom 200px
        left 75px
        width 600px
        height 70px
        line-height 70px
        margin 100px auto
        .btn
            width 100%
            height 100%
            border none 
            background #f6c84f
            color #ffffff
            font-size 32px
            border-radius 12px
            letter-spacing 16px
</style>

