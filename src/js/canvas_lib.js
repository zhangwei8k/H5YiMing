///制作于2016-11
///游戏开发：张伟
///邮箱：66964996@qq.com


var canvas = {};
var act = {};
var view = {};
var action = {};
var music = {};
//已经运行过的view
canvas.viewRuned = [];
//已经加载的图片
canvas.loaded = [];
//图片
canvas.img = [];
//精灵图
canvas.sprite = [];
canvas.sprite_webgl = [];
//其他节点
canvas.dom = [];
//容器
canvas.cc = [];
//动画
canvas.tw = createjs.Tween;

//系统
var u = navigator.userAgent;
var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
var mp3Loop = new createjs.PlayPropsConfig().set({loop: -1});

//画布
canvas.m = document.getElementById("Canvas");
//createJs舞台
canvas.stage = new createjs.Stage(canvas.m);
createjs.Touch.enable(canvas.stage);

//加载
canvas.loads = function(manifest, fn, src){
    var preload = new createjs.LoadQueue();
    preload.installPlugin(createjs.Sound);
    if(fn.Progress) preload.on("progress", fn.Progress);
    if(fn.Complete) preload.on("complete", fn.Complete);
    preload.on("fileload", function(ev){
        var id = ev.item.id;
        //console.log("fileload", id);
        canvas.loaded[id] = ev.currentTarget._loadedResults[id];
        if(fn.FileLoad) fn.FileLoad(ev);
    });

    if(!src) src = "src/img/";
    var loading = new Array();
    for(var i in manifest){
        if(!canvas.loaded[manifest[i].id]){
            loading.push(manifest[i]);
        }
    }

    preload.loadManifest(loading, true, src);
};

canvas.run = function(fps){
    createjs.Ticker.setFPS(fps);
    createjs.Ticker.addEventListener("tick", canvas.stage);
};

canvas.ccv = function(key, pa){
    if(canvas.cc[key]) return;

    canvas.cc[key] = new createjs.Container();

    if(pa) {
        for(var it in pa){
            canvas.cc[id][it] = pa[it];
        }
    }
};

//画图
//id:加载的id
//pa:配置图片的x,y,透明度等
canvas.drawImg = function(id, cc, pa, img){

    if(!canvas.img[id]) {
        if(!img) img = canvas.loaded[id];
        canvas.img[id] = new createjs.Bitmap(img);
    }

    if(pa) {
        for(var it in pa){
            canvas.img[id][it] = pa[it];
        }
    }

    if(cc) {
        if(cc=="stage") canvas.stage.addChild(canvas.img[id]);
        else canvas.cc[cc].addChild(canvas.img[id]);
    }

};

//精灵图
//id:加载的id
//pa.json:对应flash-zoe导出的json(width,height,x,y)
//pa.mov:对应sprite的spriteSheet->animations
//pa.conf:配置canvas.sprite的属性
canvas.drawSprite = function(id, cc, pa, img){
    if(!canvas.sprite[id]) {

        if(!pa) pa = {};
        if(!pa.framerate) pa.framerate = 10;

        if(!img) img = [canvas.loaded[id]];
        var spriteSheet = new createjs.SpriteSheet({
            "framerate": pa.framerate,
            "images": img,
            "frames": {width:pa.json[0], height:pa.json[1]},
            // define two animations, run (loops, 1.5x speed) and jump (returns to run):
            //pa.mov 格式{"ini":[0,0]}
            "animations": pa.mov
        });

        canvas.sprite[id] = new createjs.Sprite(spriteSheet, "ini");
        canvas.sprite[id].x = pa.json[2];
        canvas.sprite[id].y = pa.json[3];

        // canvas.sprite[id] = new createjs.SpriteContainer(spriteSheet);
        // canvas.sprite_webgl[id] = new createjs.Sprite(spriteSheet, "ini");
        // canvas.sprite[id].addChild(canvas.sprite_webgl[id]);
        // canvas.sprite[id].x = pa.json[2];
        // canvas.sprite[id].y = pa.json[3];

    }

    if(pa.conf){
        for(var it in pa.conf){
            canvas.sprite[id][it] = pa.conf[it];
        }
    }

    if(cc) {
        if(cc=="stage") canvas.stage.addChild(canvas.sprite[id]);
        else canvas.cc[cc].addChild(canvas.sprite[id]);
    }
};

//精灵图
//id:加载的id
//pa.json:对应flash-zoe导出的json(width,height,x,y)
//pa.mov:对应sprite的spriteSheet->animations
//pa.conf:配置canvas.sprite的属性
canvas.drawSpriteE = function(id, cc,  pa, img){
    if(!canvas.sprite[id]) {

        if(!pa) pa = {};
        if(!pa.framerate) pa.framerate = 10;

        var es = spriteJson[id];
        var framesKey = [];
        var frames = [];
        for ( var p in es.frames ){
            if ( typeof ( es.frames[p]) == "function" ){
                continue;
            } else {
                framesKey.push(p);
            }
        }
        for (var k in framesKey){
            var est = es.frames[framesKey[k]];
            frames.push([est.x, est.y, est.w, est.h, 0, -est.offX, -est.offY])
        }

        if(!img) img = [canvas.loaded[id]];
        var spriteSheet = new createjs.SpriteSheet({
            "framerate": pa.framerate,
            "images": img,
            "frames": frames,
            // define two animations, run (loops, 1.5x speed) and jump (returns to run):
            //pa.mov 格式{"ini":[0,0]}
            "animations": pa.mov
        });

        canvas.sprite[id] = new createjs.Sprite(spriteSheet, "ini");
        // canvas.sprite[id].x = 0;
        // canvas.sprite[id].y = 0;

        // canvas.sprite[id] = new createjs.SpriteContainer(spriteSheet);
        // canvas.sprite_webgl[id] = new createjs.Sprite(spriteSheet, "ini");
        // canvas.sprite[id].addChild(canvas.sprite_webgl[id]);
        // canvas.sprite[id].x = pa.json[2];
        // canvas.sprite[id].y = pa.json[3];

    }

    if(pa.conf){
        for(var it in pa.conf){
            canvas.sprite[id][it] = pa.conf[it];
        }
    }

    if(cc) {
        if(cc=="stage") canvas.stage.addChild(canvas.sprite[id]);
        else canvas.cc[cc].addChild(canvas.sprite[id]);
    }
};

canvas.drawArea = function(id, cc, rect, color, pa){

    if(!canvas.dom[id]) {
        var gra = new createjs.Graphics().beginFill(color).drawRect(rect[0],rect[1],rect[2],rect[3]);
        canvas.dom[id] = new createjs.Shape(gra);

    }

    if(pa){
        for(var it in pa){
            canvas.dom[id][it] = pa[it];
        }
    }

    if(cc) {
        if(cc=="stage") canvas.stage.addChild(canvas.dom[id]);
        else canvas.cc[cc].addChild(canvas.dom[id]);
    }

};

canvas.draw = function(cc , img, fn){

    var dom;
    if(cc) dom = canvas.cc[cc];
    else dom = canvas.stage;

    for(var i in img){
        dom.addChild(img[i]);
    }

    if(fn) fn();
};

//清理
canvas.clsDom = function(cc , dom){
    if(cc=="stage") canvas.stage.removeChild(dom);
    else canvas.cc[cc].removeChild(dom);
};

//动画
canvas.mov = function(dom, pa, time, fn, ease){
    if(ease){
        var target = createjs.Tween.get(dom).to(pa, time, ease);
    }else{
        var target = createjs.Tween.get(dom).to(pa, time);
    }

    if(fn) target.call(fn);
};

//view
canvas.view_ini = function(key){

    for(var nm in view[key]){
        if(!canvas.viewRuned[nm]){
            canvas.viewRuned[nm] = 1;
            view[key][nm]();
        }
    }
};

canvas.set = function(id, pa, dom){
    if(!dom){
        dom = canvas.cc[id];
    }

    for(var it in pa){
        dom[it] = pa[it];
    }
};
canvas.show = function(id,  mov, time, fn){

    //canvas.stage.removeChild(canvas.cc[id]);
    canvas.stage.addChildAt(canvas.cc[id], 0);

    if(mov){
        canvas.mov(canvas.cc[id], mov, time, fn);
    }

};
canvas.hide = function(id, mov, time, fn){

    if(mov){
        canvas.mov(canvas.cc[id], mov, time, function(){
            canvas.stage.removeChild(canvas.cc[id]);
            if(fn) fn();
        });
    }else{
        canvas.stage.removeChild(canvas.cc[id]);
    }

};

//上划
act.swipeUp = function(target, fn){
    var stageY;
    target.on("pressmove", function(ev){
        if(!stageY) stageY = ev.stageY;
    });
    target.on("pressup", function(ev){
        //if(!stageY) return;
        var des = stageY-ev.stageY;
        stageY = 0;
        if(des>10){
            if(fn) fn(des, ev);
        }
    });
};

//下划
act.swipeDown = function(target, fn){
    var stageY;
    target.on("pressmove", function(ev){
        if(!stageY) stageY = ev.stageY;
    });
    target.on("pressup", function(ev){
        //if(!stageY) return;
        var des = stageY-ev.stageY;
        stageY = 0;
        if(des<-10){
            if(fn) fn(des, ev);
        }
    });
};

//摇动
act.shake = function(fn){
    if (window.DeviceMotionEvent) {
        window.addEventListener("devicemotion", deviceMotionHandler, false);
    }

    var SHAKE_THRESHOLD = 3000;
    var last_update = 0;
    var x, y, z, last_x, last_y, last_z;
    function deviceMotionHandler(eventData) {
        var acceleration =eventData.accelerationIncludingGravity;
        var curTime = new Date().getTime();
        if ((curTime-last_update)> 100) {
            var diffTime = curTime -last_update;
            last_update = curTime;
            x = acceleration.x;
            y = acceleration.y;
            z = acceleration.z;
            var speed = Math.abs(x +y + z - last_x - last_y - last_z) / diffTime * 10000;
            if (speed > SHAKE_THRESHOLD) {
//                window.removeEventListener("devicemotion", deviceMotionHandler, false);
                fn();
            }
            last_x = x;
            last_y = y;
            last_z = z;
        }
    }
};
act.clsShake = function(){
    window.removeEventListener("devicemotion");
};



//生成随机数
act.random = function() {

    var i = Math.floor(Math.random()*10);

    var myDate = new Date();
    var yue = myDate.getMonth()+1;
    var ri = myDate.getDate();
    var shi = myDate.getHours();
    var fen = myDate.getMinutes();
    var miao = myDate.getSeconds();

    var random = yue.toString()+ri.toString()+shi.toString()+fen.toString()+miao.toString();

    alert(random);
};