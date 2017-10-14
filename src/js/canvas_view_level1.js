var view = {};
var data = {};
var game = {};
game.level1 = {};
game.level2 = {};
game.level3 = {};
game.time1 = {};
game.time1.else = 15;
game.time2 = {};
game.time2.else = 18;
game.time3 = {};
game.time3.else = 15;

view.loader = {};
view.loader.loader = function(){
    canvas.ccv("loader");
    canvas.drawArea("loader_bg", "", [0,0, 700, 1140], "#00000");
    canvas.drawImg("loader_line", "", {x:299 , y:561, scaleX:0.1}, canvas.loaded["loader_line"]);
    canvas.drawImg("loader_box", "", {x:267 , y:554}, canvas.loaded["loader_box"]);

    canvas.draw("loader" , [
        canvas.dom["loader_bg"],
        canvas.img["loader_line"],
        canvas.img["loader_box"]
    ]);
};

view.enter = {};
view.enter.enter = function(){
    canvas.ccv("enter");
    canvas.drawArea("enter_bg", "", [0,0, 700, 1140], "#00000");
    canvas.drawImg("enter", "", {x:0 , y:0});
    canvas.drawImg("gz", "", {x:0 , y:0, alpha:0});
    canvas.drawArea("enter_clk", "", [497, 942, 84, 137], "#ffffff", {alpha: 0.01});
    canvas.drawArea("gz_clk", "", [255, 782, 218, 78], "#ffffff", {alpha: 0.01});
    canvas.draw("enter" , [
        canvas.dom["enter_bg"],
        canvas.img["enter"],
        canvas.dom["enter_clk"],
        canvas.dom["gz_clk"],
        canvas.img["gz"]
    ]);
    canvas.dom["gz_clk"].on("click", function () {
        canvas.img["gz"].alpha = 1;
    });
    canvas.img["gz"].on("click", function () {
        canvas.img["gz"].alpha = 0;
    });
    canvas.dom["enter_clk"].on("click", function () {
        action.level1_start();
        //action.level3_loader();
    });
};

view.start1= {};
view.start1.start1 = function(){
    canvas.ccv("l1_start");
    canvas.drawArea("start_bg", "", [0,0, 700, 1140], "#00000");
    canvas.drawImg("p1", "", {x:204 , y:532});

    canvas.draw("l1_start" , [
        canvas.dom["start_bg"],
        canvas.img["p1"]
    ]);

    canvas.img["p1"].on("click", function () {
        action.level1();
    });
};

view.level1 = {};
view.level1.level1 = function() {
    canvas.ccv("level1");
    canvas.drawImg("l1_bg", "", {x: 0, y: 0});
    canvas.drawImg("l1_border", "", {x: 0, y: 0}, canvas.loaded["border"]);

    canvas.drawSpriteE("l1_hua", "", {
        framerate: 16,
        mov: {
            ini: [0],
            run: [0, 12]
        }
    });
    canvas.drawSpriteE("l1_eye", "", {
        framerate: 16,
        mov: {
            ini: [0],
            run: [0, 12]
        }
    });
    canvas.drawSpriteE("l1_book", "", {
        framerate: 16,
        mov: {
            ini: [0],
            run: [0, 12],
            back: {
                frames: [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
            }
        }
    });
    canvas.drawSpriteE("l1_mao", "", {
        framerate: 16,
        mov: {
            ini: [0],
            run: {
                frames: [0,1,2,3,4,5,6,7,8,9,10,11,12, 12, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
            }
        }
    });
    canvas.drawSpriteE("l1_pen", "", {
        framerate: 16,
        mov: {
            ini: [0],
            run: [0, 12]
        }
    });
    canvas.drawSpriteE("l1_td", "", {
        framerate: 16,
        mov: {
            ini: [0],
            run: [0, 12]
        }
    });

    // canvas.drawSpriteE("l1_ym", "", {
    //     framerate: 10,
    //     mov: {
    //         ini: [0],
    //         run: [0, 24]
    //     }
    // });

    canvas.drawSpriteE("l1_key", "", {
        framerate: 16,
        mov: {
            ini: [0],
            run: [0, 12]
        },
        conf: {alpha: 0}
    });
    canvas.drawSpriteE("l1_tree", "", {
        framerate: 16,
        mov: {
            ini: [0],
            run: {
                frames: [0,1,2,3,4,5,6,7,8,9,10,11,12, 12, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
            }
        }
    });

    canvas.drawSpriteE("l1_box1", "", {
        framerate: 16,
        mov: {
            ini: [0],
            run: [0, 12]
        }
    });

    canvas.drawSpriteE("l1_box2", "", {
        framerate: 16,
        mov: {
            ini: [0],
            run: [0, 12]
        },
        conf: {alpha: 0}
    });

    canvas.drawSpriteE("l1_lu", "", {
        framerate: 16,
        mov: {
            ini: [0],
            run: [0, 5]
        }
    });
    canvas.drawSpriteE("l1_guo", "", {
        framerate: 16,
        mov: {
            ini: [0],
            run: [0, 6]
        }
    });
    canvas.drawSpriteE("l1_yan", "", {
        framerate: 10,
        mov: {
            ini: [0],
            run: [0, 24]
        }
    });

    canvas.drawImg("l1_mkey", "", {x: 301, y: 801, alpha: 0});
    canvas.drawImg("l1_mtree", "", {x: 238, y: 901, alpha: 0});

    canvas.drawArea("l1_clk_hua", "", [19, 280, 110, 249], "#ffffff", {alpha: 0.01});
    canvas.drawArea("l1_clk_eye", "", [453, 407, 149, 146], "#ffffff", {alpha: 0.01});
    canvas.drawArea("l1_clk_mao", "", [382, 583, 220, 195], "#ffffff", {alpha: 0.01});
    canvas.drawArea("l1_clk_td", "", [428, 867, 182, 118], "#ffffff", {alpha: 0.01});
    canvas.drawArea("l1_clk_pen", "", [400, 46, 194, 284], "#ffffff", {alpha: 0.01});
    canvas.drawArea("l1_clk_book", "", [251, 60, 111, 139], "#ffffff", {alpha: 0.01});
    canvas.drawArea("l1_clk_box", "", [238, 330, 118, 129], "#ffffff", {alpha: 0.01});
    canvas.drawArea("l1_clk_key", "", [254, 969, 161, 95], "#ffffff", {alpha: 0.01});

    canvas.draw("level1", [
        canvas.img["l1_bg"],

        canvas.sprite["l1_hua"],
        canvas.sprite["l1_eye"],
        canvas.sprite["l1_book"],
        canvas.sprite["l1_mao"],
        canvas.sprite["l1_pen"],
        canvas.sprite["l1_td"],
        //canvas.sprite["l1_ym"],
        canvas.sprite["l1_key"],
        canvas.sprite["l1_tree"],
        canvas.sprite["l1_box1"],
        canvas.sprite["l1_box2"],

        canvas.sprite["l1_lu"],
        canvas.sprite["l1_guo"],
        canvas.sprite["l1_yan"],

        canvas.img["l1_mkey"],
        canvas.img["l1_mtree"],

        canvas.img["l1_border"],

        canvas.dom["l1_clk_hua"],
        canvas.dom["l1_clk_eye"],
        canvas.dom["l1_clk_mao"],
        canvas.dom["l1_clk_td"],
        canvas.dom["l1_clk_pen"],
        canvas.dom["l1_clk_book"],
        canvas.dom["l1_clk_box"],
        canvas.dom["l1_clk_key"]
    ]);

    canvas.sprite["l1_hua"].stop();
    canvas.sprite["l1_eye"].stop();
    canvas.sprite["l1_book"].stop();
    canvas.sprite["l1_mao"].stop();
    canvas.sprite["l1_td"].stop();
    canvas.sprite["l1_pen"].stop();
    canvas.sprite["l1_box1"].stop();
    canvas.sprite["l1_box2"].stop();
    canvas.sprite["l1_key"].stop();
    //canvas.sprite["l1_ym"].stop();
    canvas.sprite["l1_lu"].stop();
    canvas.sprite["l1_guo"].stop();
    canvas.sprite["l1_yan"].stop();


    canvas.dom["l1_clk_hua"].on("click", function () {
        canvas.sprite["l1_hua"].gotoAndPlay("run");
        createjs.Sound.play("ml1_hua");
        if(!game.time1.else1) {
            game.time1.else -= 3;
            game.time1.else1 = 1;
        }
    });
    canvas.sprite["l1_hua"].on("animationend", function(){
        canvas.sprite["l1_hua"].stop();
    });

    canvas.dom["l1_clk_eye"].on("click", function () {
        canvas.sprite["l1_eye"].gotoAndPlay("run");
        createjs.Sound.play("ml1_eye");
        if(!game.time1.else2) {
            game.time1.else -= 3;
            game.time1.else2 = 1;
        }
    });
    canvas.sprite["l1_eye"].on("animationend", function(){
        canvas.sprite["l1_eye"].stop();
    });

    canvas.dom["l1_clk_mao"].on("click", function () {
        canvas.sprite["l1_mao"].gotoAndPlay("run");
        createjs.Sound.play("ml1_mao");
        if(!game.time1.else3) {
            game.time1.else -= 3;
            game.time1.else3 = 1;
        }
    });
    canvas.sprite["l1_mao"].on("animationend", function(){
        canvas.sprite["l1_mao"].stop();
    });

    canvas.dom["l1_clk_td"].on("click", function () {
        canvas.sprite["l1_td"].gotoAndPlay("run");
        createjs.Sound.play("ml1_td");
        if(!game.time1.else4) {
            game.time1.else -= 3;
            game.time1.else4 = 1;
        }
    });
    canvas.sprite["l1_td"].on("animationend", function(){
        canvas.sprite["l1_td"].stop();
    });

    canvas.dom["l1_clk_pen"].on("click", function () {
        canvas.sprite["l1_pen"].gotoAndPlay("run");
        createjs.Sound.play("ml1_pen");
        if(!game.time1.else5) {
            game.time1.else -= 3;
            game.time1.else5 = 1;
        }
    });
    canvas.sprite["l1_pen"].on("animationend", function(){
        canvas.sprite["l1_pen"].stop();
    });

    canvas.dom["l1_clk_box"].on("click", function () {
        canvas.sprite["l1_box1"].gotoAndPlay("run");
        createjs.Sound.play("ml1_box");
    });
    canvas.sprite["l1_box1"].on("animationend", function(){
        canvas.sprite["l1_box1"].stop();
    });

    /////////////
    canvas.dom["l1_clk_book"].on("click", function () {
        if (game.level1.bookBack) return;
        game.level1.bookClk = 1;
        game.level1.bookBack = 1;

        canvas.sprite["l1_book"].gotoAndPlay("run");
        createjs.Sound.play("ml1_book");

    });
    canvas.sprite["l1_book"].on("animationend", function(){
        canvas.sprite["l1_book"].stop();
        if(!game.level1.bookBack) return;
        setTimeout(function(){
            game.level1.bookBack = 0;
            canvas.sprite["l1_book"].gotoAndPlay("back");
            createjs.Sound.play("ml1_book");
        }, 4000);
    });

    canvas.dom["l1_clk_key"].on("click", function () {
        if (game.level1.keyClk) return;
        game.level1.keyClk = 1;

        if(game.level1.bookClk){
            canvas.sprite["l1_tree"].alpha = 0;
            canvas.sprite["l1_key"].alpha = 1;
            canvas.sprite["l1_key"].gotoAndPlay("run");
        }else{
            canvas.sprite["l1_tree"].gotoAndPlay("run");
        }
        createjs.Sound.play("ml1_key");
    });
    canvas.sprite["l1_key"].on("animationend", function(){
        canvas.sprite["l1_key"].stop();

        canvas.img["l1_mkey"].alpha = 1;
        canvas.img["l1_mtree"].alpha = 1;
        canvas.sprite["l1_key"].alpha = 0;

        if (game.level1.bookClk) {
            game.level1.move = 1;
        }
    });
    canvas.sprite["l1_tree"].on("animationend", function(){
        canvas.sprite["l1_tree"].stop();
        game.level1.keyClk = 0;
    });


    //key move
    canvas.cc["level1"].addEventListener("mousedown", function (event) {
        if(!game.level1.move || game.level1.moveOK) return;
        var x = event.stageX;
        var y = event.stageY;

        if(x>269 && x<(269+98) && y>781 && y<(781+163)){
            game.level1.key = 1;
        }
    });

    canvas.cc["level1"].addEventListener("pressmove", function (event) {
        if(!game.level1.move || !game.level1.key) return;

        canvas.img["l1_mkey"].x = event.stageX-20;
        canvas.img["l1_mkey"].y = event.stageY-80;

    }, false);

    canvas.cc["level1"].addEventListener("pressup", function (event) {
        if(!game.level1.move || !game.level1.key) return;

        var x = event.stageX;
        var y = event.stageY;
        if(x>238 && x<(238+118) && y>330 && y<(330+145)){
            game.level1.moveOK = 1;
            canvas.img["l1_mkey"].alpha = 0;

            canvas.sprite["l1_box1"].alpha = 0;
            canvas.sprite["l1_box2"].alpha = 1;
            canvas.sprite["l1_box2"].gotoAndPlay("run");
        }else{
            game.level1.key = 0;
            canvas.img["l1_mkey"].x = 301;
            canvas.img["l1_mkey"].y = 801;
        }

    });

    canvas.sprite["l1_box2"].on("animationend", function(){
        canvas.sprite["l1_box2"].stop();
        if(game.level1.moveOK) {
            canvas.sprite["l1_lu"].gotoAndPlay("run");
            canvas.sprite["l1_guo"].gotoAndPlay("run");
            canvas.sprite["l1_yan"].gotoAndPlay("run");
            createjs.Sound.play("ml1_ym");
        }
    });
    canvas.sprite["l1_lu"].on("animationend", function(){
        canvas.sprite["l1_lu"].stop();
    });
    canvas.sprite["l1_yan"].on("animationend", function(){
        canvas.sprite["l1_yan"].stop();
        if(game.level1.moveOK) {
            /////////////////
            action.level2_loader();
        }
    });
};