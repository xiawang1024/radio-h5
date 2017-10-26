window.onload = function() {
    //http://hndt.com/h5/sign/index.html
    //微信配置
    var href = window.location.href
    $.post('https://a.weixin.hndt.com/at/sign', { url: href }, function(data) {
            wx.config({
                debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                appId: data.appId, // 必填，公众号的唯一标识
                timestamp: data.timestamp, // 必填，生成签名的时间戳
                nonceStr: data.nonceStr, // 必填，生成签名的随机串
                signature: data.signature, // 必填，签名，见附录1
                jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
            });
        })
        //微信端audio自动播放
    function audioAutoPlay() {
        var audio = document.getElementById('audio');
        audio.play();
        document.addEventListener("WeixinJSBridgeReady", function() {
            audio.play();
        }, false);
    }
    audioAutoPlay()
    wx.ready(function() {
        audioAutoPlay()
        wx.onMenuShareTimeline({
            title: '2018河南广播河南广播电视台2018广播品牌价值推介会', // 分享标题
            link: 'http://a.weixin.hndt.com/wx/index?cate=company', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: 'http://hndt.com/res/logo_300.png', // 分享图标
            success: function() {
                // 用户确认分享后执行的回调函数
            },
            cancel: function() {
                // 用户取消分享后执行的回调函数
            }
        });
        wx.onMenuShareAppMessage({
            title: '河南广播电视台2018广播品牌价值推介会', // 分享标题
            desc: '河南广播电视台2018广播品牌价值推介会于2017年11月8日在河南人民会堂举行！', // 分享描述
            link: 'http://a.weixin.hndt.com/wx/index?cate=company', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: 'http://hndt.com/res/logo_300.png', // 分享图标
            type: '', // 分享类型,music、video或link，不填默认为link
            dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
            success: function() {
                // 用户确认分享后执行的回调函数
            },
            cancel: function() {
                // 用户取消分享后执行的回调函数
            }
        });
    });

}