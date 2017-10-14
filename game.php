<?php
include('mv3c/cc.php');

$cc = new cc();
$get = $cc->get();

if(!$get->openid){
    echo "Err";
    exit;
}

//echo $get->openid;
$OPENID = $get->openid;
$APPID = "wxd018f3b50df95b58";
$SECRET = "*****";
//$json = wx_curl_post("http://inmwx.mmbbsay.com/common/GetUserInfo", "openid=".$get->openid);
//$tk = wx_curl_get("https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid={$APPID}&secret={$SECRET}");
//$tk = json_decode($tk, true);
//$ACCESS_TOKEN = $tk["access_token"];
////echo "+++++++++++++++++++++++++++++++++++++++++".$ACCESS_TOKEN."|||";
////$json = wx_curl_get("https://api.weixin.qq.com/sns/userinfo?access_token={$ACCESS_TOKEN}&openid={$OPENID}&lang=zh_CN");
//https://api.weixin.qq.com/cgi-bin/user/info?access_token=ACCESS_TOKEN&openid=OPENID&lang=zh_CN 
//$json = wx_curl_get("https://api.weixin.qq.com/cgi-bin/user/info?access_token={$ACCESS_TOKEN}&openid={$OPENID}&lang=zh_CN");
//
//echo $json;
//exit;

function wx_curl_get($url){
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_HEADER, 0);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    // 3. 执行并获取HTML文档内容
    $output = curl_exec($ch);
    // 4. 释放curl句柄
    curl_close($ch);
    return $output;
}

function wx_curl_post($url, $data){
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_HEADER, 0);
    curl_setopt($ch, CURLOPT_POST, 1);//设置为POST方式
    curl_setopt($ch, CURLOPT_POSTFIELDS, $data);//POST数据
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    // 3. 执行并获取HTML文档内容
    $output = curl_exec($ch);
    // 4. 释放curl句柄
    curl_close($ch);
    return $output;
}

$openid_php = md5($OPENID."zhangwei8k");

/////完成openid验证
$re = wx_curl_get("http://139.224.8.198:8091/ajax/openid.php?openid=".$OPENID."&oc=".$openid_php);

?>
<!DOCTYPE HTML>
<html>
<head>
    <meta http-equiv="Content-Type">
    <meta content="text/html; charset=utf-8">
    <meta charset="utf-8">
    <title>一鸣温酸奶新品上市</title>

    <meta name="format-detection" content="telephone=no">
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>

    <link rel="stylesheet" href="src/css/style.css" />
    <link rel="stylesheet" href="lib/mov/mov.css" />

</head>
<body ondragstart="return false" onselect="return false" onselectstart="return false" oncontextmenu="return false">

<div id="CC">

    <div id="_unable">Loading</div>
    <div id="_share"></div>
    <div class="oid hide"><?php echo $OPENID ?></div>
    <div class="codeX hide"><?php echo $openid_php ?></div>

    <section class="cc" id="Loader"></section>

    <section class="cc" id="Main">
        <canvas id="Canvas" width="700" height="1140"></canvas>
    </section>

    <section class="cc" id="Page1">
        <div class="getCode"></div>
        <div class="input"><input type="text" name="tel" id="tel" placeholder="请如实填写，方便联系领奖事宜"></div>

        <div class="btn1"></div>
        <div class="btn2"></div>

        <div class="good hide"><img src="src/img/page/good.png" alt=""></div>
        <div class="share hide"><img src="src/img/code.jpg" alt=""></div>
    </section>

</div>

<script src="lib/jquery-2.1.4.min.js"></script>
<script src="lib/jquery.mobile-1.4.5.min.js"></script>
<script src="lib/modernizr.js"></script>

<script src="lib/createjs/createjs-2015.11.26.min.js"></script>
<!--<script src="lib/createjs/easeljs-0.8.2.min.js"></script>-->
<!--<script src="lib/createjs/preloadjs-0.6.2.min.js"></script>-->
<!--<script src="lib/createjs/tweenjs-0.6.0.min.js"></script>-->
<!--<script src="lib/createjs/webgl-0.8.2.js"></script>-->

<script src="src/js/canvas_lib.js"></script>
<script src="src/js/sprite.js"></script>
<script src="src/js/loader.js"></script>
<script src="src/js/init.js"></script>
<script src="src/js/canvas_view_level1.js"></script>
<script src="src/js/canvas_view_level2.js"></script>
<script src="src/js/canvas_view_level3.js"></script>
<script src="src/js/canvas_action.js"></script>
<script src="lib/mov/mov.js"></script>

<script src="lib/cc/mvc.js"></script>
<script src="src/js/room.js"></script>

<script>

    $(function(){
        //if(Modernizr.webgl) alert("webGL");
        Room.ini();
        setTimeout(function(){
            Loader(700,1140,'Main');
        },200);

        $('body').on('touchmove', function (event) { event.preventDefault(); });

        $(".input input").focus(function(){
            $('#CC').css({"position":"relative" , "top":"0px"});
        });
        $(".input input").blur(function(){
            $('#CC').css({"position":"fixed" , "top":"0px"});
        });
        $('.btn2').click(function(){
            //e.preventDefault();
            $(".share").show();
        });
        $('.share').click(function(){
            //e.preventDefault();
            $(".share").hide();
        })

        $('.btn1').click(function(){
            //e.preventDefault();

            $.get("/ajax/tel.php?openid="+$(".oid").html()+"&oc="+$(".codeX").html()+"&tel="+$("#tel").val(),function(re){
                if(re=="good"){
                    $(".good").show();
                }else{
                    alert("感谢你的参与，记得告诉其他小伙伴哦！~");
                }
            });
        });

    });



</script>
<?php //require_once 'cs.php';echo '<img src="'._cnzzTrackPageView(1260484380).'" width="0" height="0"/>';?>
<?php
require_once "wx/jssdk.php";
$jssdk = new JSSDK($APPID, $SECRET);
$signPackage = $jssdk->GetSignPackage();
?>
<script src="wx/jweixin-1.0.0.js"></script>

<script>
    /*
     * 注意：
     * 1. 所有的JS接口只能在公众号绑定的域名下调用，公众号开发者需要先登录微信公众平台进入“公众号设置”的“功能设置”里填写“JS接口安全域名”。
     * 2. 如果发现在 Android 不能分享自定义内容，请到官网下载最新的包覆盖安装，Android 自定义分享接口需升级至 6.0.2.58 版本及以上。
     * 3. 常见问题及完整 JS-SDK 文档地址：http://mp.weixin.qq.com/wiki/7/aaa137b55fb2e0456bf8dd9148dd613f.html
     *
     * 开发中遇到问题详见文档“附录5-常见错误及解决办法”解决，如仍未能解决可通过以下渠道反馈：
     * 邮箱地址：weixin-open@qq.com
     * 邮件主题：【微信JS-SDK反馈】具体问题
     * 邮件内容说明：用简明的语言描述问题所在，并交代清楚遇到该问题的场景，可附上截屏图片，微信团队会尽快处理你的反馈。
     */
    wx.config({
        debug: false,
        appId: '<?php echo $signPackage["appId"];?>',
        timestamp: <?php echo $signPackage["timestamp"];?>,
        nonceStr: '<?php echo $signPackage["nonceStr"];?>',
        signature: '<?php echo $signPackage["signature"];?>',
        jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage']
    });

    wx.ready(function () {

        wx.onMenuShareAppMessage({
            title: '一鸣温酸奶新品上市', // 分享标题
            desc: '想尽办法“温暖”她！！！', // 分享描述
            link: 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxaa1f5cf3a7732b09&redirect_uri=http://inmwx.mmbbsay.com/common/OtherUrlRedirect?action=viewtest&response_type=code&scope=snsapi_base&state=1&connect_redirect=1#wechat_redirect', // 分享链接
            imgUrl: 'http://ymgame.yi-ming.cn:8090/wx/logo.jpg', // 分享图标
            type: 'link', // 分享类型,music、video或link，不填默认为link
            dataUrl: '' // 如果type是music或video，则要提供数据链接，默认为空
        });

        wx.onMenuShareTimeline({
            title: '一鸣温酸奶新品上市', // 分享标题
            link:"https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxaa1f5cf3a7732b09&redirect_uri=http://inmwx.mmbbsay.com/common/OtherUrlRedirect?action=viewtest&response_type=code&scope=snsapi_base&state=1&connect_redirect=1#wechat_redirect",
            imgUrl: "http://ymgame.yi-ming.cn:8090/wx/logo.jpg" // 分享图标
        });
    });
</script>
</body>
</html>
