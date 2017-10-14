<?php
include('../mv3c/cc.php');
include('../config.php');

$cc = new cc();
$get = $cc->get();

$openid = $get->openid;
$oc = $get->oc;
if(md5($openid."zhangwei8k")!=$oc){
    echo "ERR";
    exit;
}


//判断是否数据库里有
$cc->where = "openid='".$openid."'";
$rs = $cc->opsql("openid");

if($rs["openid"]){
    echo "ERR";
    exit;
}

//加入数据库
$cc->sqli("openid" , $openid);
$cc->opsql("openid", "add");