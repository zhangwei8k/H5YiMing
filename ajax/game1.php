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

$s = $get->s;

if($s<10000) $s = 1000000;

//判断是否数据库里有
$cc->where = "openid='".$openid."'";
$rs = $cc->opsql("openid");

if($rs["game1"]){
    echo "ERR";
    exit;
}

//加入数据库
$cc->where = "openid='".$openid."'";
$cc->sqli("game1" , $s, "num");
$cc->opsql("openid", "edit");