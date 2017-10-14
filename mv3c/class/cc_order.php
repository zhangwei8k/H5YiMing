<?php
class cc_order extends cc
{

//全表排序
//参数：表名
function order_re($tnm)
{
	if(!$tnm) return false;
	
	$this->field = 'id';
	$rsc = $this->opsql($tnm, 'rsc');
	
	$seat = 1;
	while($rs = $this->rs($rsc)){
		$this->sqli('seat', $seat*2, 'num');
		$this->where = "id='".$rs['id']."'";
		$this->opsql($tnm, 'edit');
		$seat++;
	}
}

//置顶排序
//参数：表名
function order_top($tnm, $id)
{
	if(!$tnm || !$id) return false;

	$sql = $this->sqlget();
	$this->order_re($tnm);
	
	$this->sqlset($sql);
	$this->where = "id='{$id}'";
	$this->sqli('seat', 0, 'nums');
	$this->opsql($tnm, 'edit');
}

//置底排序
//参数：表名
function order_bot($tnm, $id)
{
	if(!$tnm || !$id) return false;
	
	$sql = $this->sqlget();
	$this->order_re($tnm);
	
	$this->sqlset($sql);
	$num = $this->rsnum($tnm);
	
	$this->sqlset($sql);
	$this->where = "id='{$id}'";
	$this->sqli('seat', ($num*2)+1, 'num');
	$this->opsql($tnm, 'edit');
}

//置顶位置
//参数：表名
function order_set($tnm, $id, $seat)
{
	if(!$tnm || !$id ||!$seat) return false;
	$seat = (int)$seat;
	
	$sql = $this->sqlget();
	$this->order_re($tnm);
	
	$this->sqlset($sql);
	$all = $this->rsnum($tnm);
	
	if($seat>$all) $seat=($all*10)+1;
	if($seat==0 || $seat==1) $seat=0;
	
	
	$this->sqlset($sql);
	$this->where = "id='{$id}'";
	$this->field = 'seat';
	$rs = $this->opsql($tnm);
	if($rs['seat']==($seat*2)) $seat=($seat*2);
	elseif($rs['seat']>($seat*2)){
		$seat = ($seat*2)-1;
	}else{
		$seat = ($seat*2)+1;
	}
	
	$this->sqlset($sql);
	$this->where = "id='{$id}'";
	$this->sqli('seat', $seat, 'nums');
	$this->opsql($tnm, 'edit');
}

}
?>