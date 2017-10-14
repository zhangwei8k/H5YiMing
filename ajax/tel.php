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
$user = $cc->opsql("openid");
if(!$user["openid"]){
    echo "ERR";
    exit;
}

if(!$user["game1"] || !$user["game2"] || !$user["game3"] || !$user["code"]){
    echo "ERR";
    exit;
}

if($user["pm"]){
    echo "ERR";
    exit;
}

if($user["tel"]){
    $cc->where = "openid='".$openid."'";
    $cc->sqli("tel" , $get->tel);
    $cc->sqli("tel_dates" , $cc->now());
    $cc->opsql("openid", "edit");
    exit;
}



$cc->where = "openid='".$openid."'";
$cc->sqli("tel" , $get->tel);
$cc->sqli("pm" , 1, "num");
$cc->sqli("game" , $user["game1"]+$user["game2"]+$user["game3"]  , "num");
$cc->sqli("tel_dates" , $cc->now());
$cc->opsql("openid", "edit");


//加入数据库

//是否为1118