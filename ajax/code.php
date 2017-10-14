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

$ok = 1;

//判断此用户是否要发
$cc->where = "openid='".$openid."'";
$user = $cc->opsql("openid");
if(!$user["openid"]){
    echo "ERR";
    exit;
}
if($user["code"]){
    echo $user["code"];
    exit;
}

//判断是否数据库里有的发
$cc->where = "op=0";
$rs = $cc->opsql("code");
if($rs["code"]){
    //处理券表
    $cc->where = "id=".$rs["id"];
    $cc->sqli("op" , 1, "num");
    $cc->sqli("dates" , $cc->now());
    $cc->opsql("code", "edit");
}else{
    echo "10000份已经发完了";
    exit;
}

//处理用户表
$cc->where = "openid='".$openid."'";
$cc->sqli("code" , $rs["code"]);
$cc->sqli("code_dates" , $cc->now());
$cc->opsql("openid", "edit");

// 5342400000001
echo $rs["code"];