var Base   = {};
var View   = {};
var Action = {};
Action.Set = {};
var Page = {};
var Dom  = {};
//锁程序
var Lock = {};
//房间程序
var Room = {};
//其他异步句柄
var Hand = {};
//运行整合
var Run = {};


function Stage(){

    //////////////
    this.version = "1.0.2";
    this.version_update = "2015-8-15";

    //动画函数
    this.cc = new Mov();

    //w&h
    this.h = $(window).height();
    this.w = $(window).width();
    this.ww = 640;
    this.hh = parseInt((this.h*this.ww)/this.w)+1;


    //舞台
    //所有舞台的Dom
    this.stage = new Array();
    //现在的显示舞台
    this.now = {};
    this.old = {};
    //场景
    this.se = new Array();

}

////////////////////////////// Loader //////////////////////////////
Stage.prototype.load = function(id , fn){

    //触控兼容
    document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);


    //Loader显示
    var CC = $("#CC");
    CC.show().height(this.hh);
    var loader = $(id);
    loader.show().css("z-index",99999);


    //页面&变量初始化
    var cca = $(".cc");
    cca.show().height(this.hh);
    $("._LongBox").css({"height":this.hh , "overflow":"hidden"});

    var stages = $("#CC>section.cc");

    for(var i=0; i<stages.length; i++){

        var stage = $(stages[i]);
        var sid = "#"+stages[i].id;
        this.stage.push(sid);
        this.se[sid] = new Array();

        var ses = stage.find("section.cc");

        if(ses[0]) {

            for(var s=0; s<ses.length; s++){

                var cid = "#"+ses[s].id;
                var se = $(ses[s]);
                se.attr("data-sid", sid);

                //LongBox
                var longbox = se.find("._LongBox");
                var longh = longbox.height();
                var long = false;
                if(longh<this.hh) longh = this.hh;
                else if(longbox[0]) {
                    var long = true;
                    longbox.attr("data-sid", sid);
                    longbox.attr("data-cid", cid);
                }


                this.se[sid].dom = stage;
                this.se[sid].push(cid);
                this.se[sid][cid] = {
                    id : cid, //id号
                    height : longh, //实际高度
                    long : long, //是否是长页
                    scroll : 0, //滚动条最后位置
                    bar : 0, //滚动条的bar最后所在位置

                    dom : se //jq节点
                };
                //if(longbox[0]) this.se[sid][cid].act = new HammerScroll({id:cid+" ._LongBox" , height:this.hh});
                if(longbox[0]){
                    this.se[sid][cid].act = new IScroll(cid+'_s', {
                        bounce:false ,
                        click:true ,
                        deceleration:0.0001,
                        disableMouse:true,
                        disablePointer: true
                    });
                }

            }

        }else{

            //LongBox
            var longbox = stage.find("._LongBox");
            var longh = longbox.height();
            var long = false;
            if(longh<this.hh) longh = this.hh;
            else if(longbox[0]) {
                var long = true;
                longbox.attr("data-sid", sid);
            }

            this.se[sid] = {
                id : sid, //id号
                length : 0, //jq节点
                height : longh, //实际高度
                long : long, //是否是长页
                scroll : 0, //滚动条最后位置
                bar : 0, //滚动条的bar最后所在位置

                dom : stage
            };
            //if(longbox[0]) this.se[sid].act = new HammerScroll({id:sid+" ._LongBox" , height:this.hh});
            if(longbox[0]){
                this.se[sid].act = new IScroll(sid+'_s', { bounce:false , click:true , deceleration:0.0001, disableMouse:true, disablePointer: true});
//                this.se[sid].act.on('scrollEnd', function(){
//
//                });
            }
        }

    }

    //插件初始化


    //大小兼容
    var scale = this.w/this.ww;
    CC.css({"transform":"scale("+scale+")" , "transform-origin":"top left"});

    //复原
    cca.hide();
    loader.show().css("z-index","0");

    //Set启动
    for(var key in Action.Set){
        Action.Set[key]();
    }

    fn();
};


////////////////////////////// act //////////////////////////////

Stage.prototype.tap = function(id, fn){
    new HammerTap(id, fn);
};

Stage.prototype.taps = function(id, fn){

};

Stage.prototype.pan = function(id, fn){

};

Stage.prototype.swipe = function(id, pa){
    var dom = $(id);
    var box = dom.find("._LongBox");
    var sid = box.attr("data-sid");

    var _this = this;

    var spa = {};
    if(pa.up) spa.up = { fn: pa.up };
    if(pa.down) spa.down = { fn: pa.down };
    if(pa.left) spa.left = { fn: pa.left };
    if(pa.right) spa.right = { fn: pa.right };

    if(box[0]){

        if(pa.up) spa.up.able = false;
        if(pa.down) spa.down.able = false;

        if(sid) {
            this.se[sid][id].swipe = {
                ha : new HammerSwipe(id, spa),
                up : false,
                down : true
            };

            if(pa.up || pa.down) {
                this.se[sid][id].act.on('scrollEnd', function(){
                    var y = _this.se[sid][id].act.y;
                    if(pa.up && y == _this.se[sid][id].act.maxScrollY){
                        console.log("mup");
                        if(!_this.swipe_get("up", sid, id)) {
                            _this.swipe_set("up", sid, id, true);
                        }else{
                            _this.se[sid][id].swipe.ha.act_ok("up");
                        }
                    }else if(pa.down && y == 0){
                        console.log("mdown");
                        if(!_this.swipe_get("down", sid, id)) {
                            _this.swipe_set("down", sid, id, true);
                        }else{
                            _this.se[sid][id].swipe.ha.act_ok("down");
                        }
                    }else{
                        console.log("mmove");
                        if(_this.swipe_get("up", sid, id) && y>0){
                            _this.swipe_set("up", sid, id, false);
                        }
                        if(_this.swipe_get("down", sid, id) && y<_this.se[sid][id].act.maxScrollY){
                            _this.swipe_set("down", sid, id, false);
                        }
                        _this.se[sid][id].swipe.ha.act_cls("h");
                    }
                });

            }

        }else{
            this.se[id].swipe = {
                ha : new HammerSwipe(id, spa),
                up : false,
                down : true
            };

            if(pa.up || pa.down) {
                this.se[id].act.on('scrollEnd', function(){
                    var y = _this.se[id].act.y;
                    if(pa.up && y == _this.se[id].act.maxScrollY){
                        if(!_this.swipe_get("up", id, "")) {
                            _this.swipe_set("up", id, "", true);
                        }else{
                            _this.se[id].swipe.ha.act_ok("up");
                        }
                    }else if(pa.down && y == 0){
                        if(!_this.swipe_get("down", id, "")) {
                            _this.swipe_set("down", id, "", true);
                        }else{
                            _this.se[id].swipe.ha.act_ok("down");
                        }
                    }else{
                        if(_this.swipe_get("up", id, "") && y>0){
                            _this.swipe_set("up", id, "", false);
                        }
                        if(_this.swipe_get("down", id, "") && y<0){
                            _this.swipe_set("down", id, "", false);
                        }
                        _this.se[id].swipe.ha.act_cls("h");
                    }
                });

            }


        }

    }else{
        new HammerSwipe(id, spa);
    }
};

Stage.prototype.swipe_get = function(tp, sid, cid){
    if(cid){
        return this.se[sid][cid].swipe[tp];
    }else{
        return this.se[sid].swipe[tp];
    }
};
Stage.prototype.swipe_set = function(tp, sid, cid, val){
    if(cid){
        this.se[sid][cid].swipe[tp] = val;
    }else{
        this.se[sid].swipe[tp] = val;
    }
};

////////////////////////////// mov //////////////////////////////

Stage.prototype.ppt = function(pa, fn){

    var se = $(pa.id[1]);
    var sid = se.attr("data-sid");
    if(sid){
        this.old.sid = this.now.sid;
        this.now.sid = sid;
        this.old.cid = this.now.cid;
        this.now.cid = pa.id[1];
    }else{
        this.old.sid = this.now.sid;
        this.now.sid = pa.id[1];
        this.old.cid = this.now.cid;
        this.now.cid = "";
    }


    if(pa.show) {
        $(pa.show).show();
    }
    if(pa.hide) {
        $(pa.show).hide();
    }

    this.cc.ppt(pa, function(){
        if(fn) fn();
    });

};

Stage.prototype.mov = function(pa, fn){

    this.cc.mov(pa, function(){
        if(fn) fn();
    });

};


var cc = new Stage();


/////////////////////////////////////////////////////////////





//用于输出测试，正式运行时可以注释下面程序
var Log = function(w , obj){
    console.log(w);
    if(obj) console.log(obj);
};

//房间设定
Room.nm  = "";
Room.old = "";
Room.set = function(nm){
    Room.old = Room.nm;
    Room.nm = nm;
};
Room.is = function(nm){
    if(Room.nm == nm) return true;
    else return false;
};

//运行整合
Run.action = function(){
    if(Action.Set){
        for(var key in Action.Set){
            Action.Set[key]();
        }
    }
};

//等待多少时间开始运行下一个程序
Lock.hand = new Array();
Lock.wait = function(pa, fn){
    //pa.nm 关键字
    //pa.time 等待时间
    //pa.fn 等待每1秒的回调函数
    //fn 完成后的回调函数
    Log("【Lock.wait】("+pa.nm+")：等待"+pa.time+"秒,开始运行程序");

    var time = 0;
    Lock.hand[pa.nm] = setInterval(function(){
        time++;
        Log("@【Lock.wait】("+pa.nm+")：等待中，运行了"+time+"秒");
        if(pa.fn) pa.fn(time);

        if(time>=pa.time) {
            Log("@【Lock.wait】("+pa.nm+")：等待完成，运行了"+time+"秒");
            clearInterval(Lock.hand[pa.nm]);

            setTimeout(function(){ if(fn)fn(); },1);

        }
    }, 1000);
};
Lock.wait_cls = function(nm){
    Log("【Lock.wait】("+nm+")：清理完毕");
    clearInterval(Lock.hand[nm]);
};

//开关按钮，点击后默认3秒后才能继续点击
Lock.btn_mk = new Array();
Lock.btn = function(nm, time){
    Log("【Lock.btn】("+nm+")：开关按钮,点击后默认"+(time?time:"3")+"秒后才能继续点击");

    if(!time) time=3;
    if(!Lock.btn_mk[nm]){
        Lock.btn_mk[nm]=1;
        setTimeout(function(){
            Log("@【Lock.btn】("+nm+")：处于开放状态间隔"+time+"秒");
            Lock.btn_mk[nm]=0;
        }, time*1000);
        return true;
    }else{
        Log("【Lock.btn】("+nm+")：处于关闭状态，不能运行");
        return false;
    }
};
