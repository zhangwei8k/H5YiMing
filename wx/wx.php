<?php
//配置部分
//$json["title"] = "这才是测试";
//$json["desc"] = "这才是测试再次回归！";
//$json["logo"] = "http://sopom.zhy40355.zhihui.chinaccnet.cn/wpp/zwq/lib/wx/logo.png";
//$json["url"] = "http://sopom.zhy40355.zhihui.chinaccnet.cn/wpp/zwq/index.php";//分享本页
//配置结束

require_once "jssdk.php";
$jssdk = new JSSDK("wx26f318bf5b794ad8", "b34bad05a3309e8a2db87e0364ea690b");
$signPackage = $jssdk->GetSignPackage($json["url"]);

//$json["title"] = urlencode($json["title"]);
//$json["desc"] = urlencode($json["desc"]);
//$json["logo"] = urlencode($json["logo"]);
//$json["url"] = urlencode($json["url"]);
//
//$json["appId"] = $signPackage["appId"];
//$json["timestamp"] = $signPackage["timestamp"];
//$json["nonceStr"] = $signPackage["nonceStr"];
//$json["signature"] = $signPackage["signature"];
//
//$json = json_encode($json);
//echo urldecode($json);
?>