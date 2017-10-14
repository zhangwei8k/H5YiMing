//画加载
action.levelProgress = function(i){
    //console.log(i);
    canvas.img["loader_line"].scaleX = i/100;
};


action.enter = function(){

    canvas.hide("loader", {alpha:0}, 500);
    canvas.show("enter");
    createjs.Sound.play("mp3_bg",mp3Loop);

};

//Level1
action.level1_start = function(){
    canvas.set("l1_start", {alpha:0});
    canvas.hide("enter", {alpha:0}, 300, function(){
        canvas.show("l1_start", {alpha:1}, 300);
    });

};
action.level1 = function(){
    game.time1.start = new Date();
    canvas.set("level1", {alpha:0});
    canvas.hide("l1_start", {alpha:0}, 500);
    canvas.show("level1", {alpha:1}, 500);
};

//Level2
action.level2_loader = function(){
    game.time1.end = new Date();

    game.time1.score = game.time1.end-game.time1.start+(game.time1.else*10000);
    $.get("/ajax/game1.php?openid="+$(".oid").html()+"&oc="+$(".codeX").html()+"&s="+game.time1.score,function(re){
        //alert(re);
    });

    canvas.set("l2_loader", {alpha:0});
    canvas.hide("level1", {alpha:0}, 300, function(){
        canvas.show("l2_loader", {alpha:1}, 300);
    });
    level2_load();
};
action.level2_start = function(){

    canvas.set("l2_start", {alpha:0});
    canvas.hide("l2_loader", {alpha:0}, 300, function(){
        canvas.show("l2_start", {alpha:1}, 300);
    });

};

action.level2 = function(){
    game.time2.start = new Date();
    canvas.set("level2", {alpha:0});
    canvas.hide("l2_start", {alpha:0}, 300, function(){
        canvas.show("level2", {alpha:1}, 300);

        action.orientation();
    });
};

action.orientation = function(){
    window.addEventListener("deviceorientation", handleOrientation, true);
};

function handleOrientation(event) {

    if(!game.level2.ballStart) return;

    var x = event.gamma;  // In degree in the range [-180,180]
    var y = event.beta; // In degree in the range [-90,90]
    var maxX = 700 - 39;
    var maxY = 1140 - 39;

    if (x > 90) {
        x = 90
    }
    if (x < -90) {
        x = -90
    }

    x += 90;
    y += 90;

    var bx = maxX * x / 180 - 10;
    var by = maxY * y / 180 - 10;

    canvas.img["l2_ball"].x = bx;
    canvas.img["l2_ball"].y = by;

    if(bx>422 && bx<(422+20) && by>248 && by<(248+20)){
        game.level2.ballStart = 0;

        //完成
        canvas.tw.get(canvas.img["l2_ball"]).to( {alpha:0, x:445, y:277, scaleX:0.3,  scaleY:0.3}, 300, createjs.Ease.sineInOut);

        canvas.sprite["l2_wbl2"].alpha =1;
        canvas.sprite["l2_wbl1"].alpha =0;
        canvas.sprite["l2_wbl2"].gotoAndPlay("run");
        createjs.Sound.play("ml2_wbl2");

        setTimeout(function(){
            action.level3_loader();
        },800);
    }

}

action.level3_loader = function(){

    game.time2.end = new Date();
    game.time2.score = game.time2.end-game.time2.start+(game.time2.else*10000);
    $.get("/ajax/game2.php?openid="+$(".oid").html()+"&oc="+$(".codeX").html()+"&s="+game.time2.score,function(re){
        //alert(re);
    });

    canvas.view_ini("start3");
    canvas.view_ini("loader3");

    setTimeout(function(){
        canvas.set("l3_loader", {alpha:0});
        canvas.hide("level2", {alpha:0}, 300, function(){
        //canvas.hide("enter", {alpha:0}, 300, function(){
            canvas.show("l3_loader", {alpha:1}, 300);
        });
        level3_load();
    },500);

};
action.level3_start = function(){

    canvas.set("l3_start", {alpha:0});
    canvas.hide("l3_loader", {alpha:0}, 300, function(){
        canvas.show("l3_start", {alpha:1}, 300);
    });

};

action.level3 = function(){

    game.time3.start = new Date();
    canvas.set("level3", {alpha:0});
    canvas.hide("l3_start", {alpha:0}, 300, function(){
        canvas.show("level3", {alpha:1}, 300);

        act.shake(function(){
            if(game.level3.finish) return;

            if(!game.level3.yao2){
                createjs.Sound.play("ml3_yao");
            }else{


                action.level3_finish();

            }
        });
    });

};


action.level3_finish = function(){

    game.time3.end = new Date();
    game.time3.score = game.time3.end-game.time3.start+(game.time3.else*10000);
    $.get("/ajax/game3.php?openid="+$(".oid").html()+"&oc="+$(".codeX").html()+"&s="+game.time3.score,function(re){
        //alert(re);
    });

    game.level3.finish = 1;
    clearTimeout(game.level3.yaoHand);

    canvas.sprite["l3_jpq"].alpha = 1;
    canvas.img["l3_jpq_png"].alpha = 0;
    canvas.sprite["l3_jpq"].gotoAndPlay("run");

    setTimeout(function(){

        canvas.sprite["l3_ym"].alpha = 0;
        canvas.sprite["l3_cfj"].alpha = 1;
        canvas.img["l3_cfj_png"].alpha = 0;
        canvas.sprite["l3_cfj"].gotoAndPlay("run");
        createjs.Sound.play("ml3_cfj", mp3Loop);

        canvas.sprite["l3_cfj"].on("animationend", function(){
            if(game.level3.allok) return;
            game.level3.allok = 1;
            act.clsShake();

            setTimeout(function(){
                action.page1();
            },3000);

        });

    },3000);

};

action.page1 = function(){

    $.get("/ajax/code.php?openid="+$(".oid").html()+"&oc="+$(".codeX").html() ,function(re){
        $("#Page1 .getCode").html(re);
    });

    Room.ppt({id:["Main" , "Page1"] , mov:["fadeOut" , "fadeIn"]}, function(){
       createjs.Sound.stop();
        $("#_unable").hide();
    });
};