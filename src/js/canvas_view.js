var view = {};
var data = {};
var game = {};
game.level1 = {};
game.level2 = {};
game.level3 = {};

view.loader = {};
view.loader.loader = function(){
    canvas.ccv("loader");
    canvas.drawArea("loader_bg", "", [0,0, 700, 1140], "#00000");
    canvas.drawImg("loader_line", "", {x:262 , y:557, scaleX:0.1}, canvas.loaded["loader_line"]);
    canvas.drawImg("loader_box", "", {x:203 , y:536}, canvas.loaded["loader_box"]);

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
    });
    canvas.sprite["l1_hua"].on("animationend", function(){
        canvas.sprite["l1_hua"].stop();
    });

    canvas.dom["l1_clk_eye"].on("click", function () {
        canvas.sprite["l1_eye"].gotoAndPlay("run");
        createjs.Sound.play("ml1_eye");
    });
    canvas.sprite["l1_eye"].on("animationend", function(){
        canvas.sprite["l1_eye"].stop();
    });

    canvas.dom["l1_clk_mao"].on("click", function () {
        canvas.sprite["l1_mao"].gotoAndPlay("run");
        createjs.Sound.play("ml1_mao");
    });
    canvas.sprite["l1_mao"].on("animationend", function(){
        canvas.sprite["l1_mao"].stop();
    });

    canvas.dom["l1_clk_td"].on("click", function () {
        canvas.sprite["l1_td"].gotoAndPlay("run");
        createjs.Sound.play("ml1_td");
    });
    canvas.sprite["l1_td"].on("animationend", function(){
        canvas.sprite["l1_td"].stop();
    });

    canvas.dom["l1_clk_pen"].on("click", function () {
        canvas.sprite["l1_pen"].gotoAndPlay("run");
        createjs.Sound.play("ml1_pen");
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
        if(x>238 && x<(238+118) && y>330 && y<(330+129)){
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
            action.level2_loader();
        }
    });
};

view.loader2 = {};
view.loader2.loader2 = function(){
    canvas.ccv("l2_loader");
    canvas.drawArea("loader_bg", "", [0,0, 700, 1140], "#00000");
    canvas.drawImg("loader_line", "", {x:262 , y:557, scaleX:0.1}, canvas.loaded["loader_line"]);
    canvas.drawImg("loader_box", "", {x:203 , y:536}, canvas.loaded["loader_box"]);

    canvas.draw("l2_loader" , [
        canvas.dom["loader_bg"],
        canvas.img["loader_line"],
        canvas.img["loader_box"]
    ]);
};

view.start2 = {};
view.start2.start2 = function(){
    canvas.ccv("l2_start");
    canvas.drawArea("start_bg", "", [0,0, 700, 1140], "#00000");
    canvas.drawImg("next", "", {x:175 , y:536});

    canvas.draw("l2_start" , [
        canvas.dom["start_bg"],
        canvas.img["next"]
    ]);

    canvas.img["next"].on("click", function () {
        action.level2();
    });
};

view.level2 = {};
view.level2.level2 = function(){
    canvas.ccv("level2");

    canvas.drawImg("l2_bg", "", {x: 0, y: 0});

    canvas.drawSpriteE("l2_book1", "", {
        framerate: 16,
        mov: {
            ini: [0],
            run: [0, 12]
        }
    });
    canvas.drawSpriteE("l2_book2", "", {
        framerate: 16,
        mov: {
            ini: [0],
            run: [0, 12]
        },
        conf: {alpha: 0}
    });
    canvas.drawSpriteE("l2_book3", "", {
        framerate: 16,
        mov: {
            ini: [0],
            run: [0, 12]
        },
        conf: {alpha: 0}
    });
    canvas.drawSpriteE("l2_td", "", {
        framerate: 16,
        mov: {
            ini: [0],
            run: [0, 12]
        }
    });
    canvas.drawSpriteE("l2_ct1", "", {
        framerate: 16,
        mov: {
            ini: [0],
            run: [0, 12],
            back: {
                frames: [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
            }
        },
        conf: {alpha: 0}
    });
    canvas.drawSpriteE("l2_ct2", "", {
        framerate: 16,
        mov: {
            ini: [0],
            run: [0, 12]
        },
        conf: {alpha: 0}
    });
    canvas.drawSpriteE("l2_ct3", "", {
        framerate: 16,
        mov: {
            ini: [0],
            run: [0, 12],
            back: {
                frames: [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
            }
        },
        conf: {alpha: 0}
    });
    canvas.drawSpriteE("l2_ct4", "", {
        framerate: 16,
        mov: {
            ini: [0],
            run: [0, 12],
            back: {
                frames: [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
            }
        },
        conf: {alpha: 0}
    });
    canvas.drawSpriteE("l2_ct5", "", {
        framerate: 16,
        mov: {
            ini: [0],
            run: [0, 12],
            back: {
                frames: [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
            }
        },
        conf: {alpha: 0}
    });
    canvas.drawSpriteE("l2_lz", "", {
        framerate: 16,
        mov: {
            ini: [0],
            run: [0, 12]
        },
        conf: {alpha: 0}
    });
    canvas.drawSpriteE("l2_wbl1", "", {
        framerate: 16,
        mov: {
            ini: [0],
            run: [0, 12]
        }
    });
    canvas.drawSpriteE("l2_wbl2", "", {
        framerate: 16,
        mov: {
            ini: [0],
            run: [0, 10]
        },
        conf: {alpha: 0}
    });
    canvas.drawSpriteE("l2_yq", "", {
        framerate: 16,
        mov: {
            ini: [0],
            run: [0, 12]
        }
    });

    canvas.drawImg("l2_ball", "", {x: 377, y: 555, alpha: 0});
    canvas.drawImg("l2_border", "", {x: 0, y: 0});
    canvas.drawImg("l2_mlz", "", {x: 95, y: 539});
    canvas.drawImg("l2_door", "", {x: 361, y: 172});

    canvas.drawImg("l2_mct1", "", {x: 438, y: 560});
    canvas.drawImg("l2_mct3", "", {x: 292, y: 660});
    canvas.drawImg("l2_mct4", "", {x: 292, y: 734});
    canvas.drawImg("l2_mct5", "", {x: 405, y: 653});

    canvas.drawArea("l2_clk_door", "", [350, 169, 189, 218], "#ffffff", {alpha: 0.01});
    canvas.drawArea("l2_clk_wbl", "", [225, 300, 117, 145], "#ffffff", {alpha: 0.01});
    canvas.drawArea("l2_clk_lz", "", [105, 527, 98, 144], "#ffffff", {alpha: 0.01});
    canvas.drawArea("l2_clk_book", "", [203, 483, 189, 143], "#ffffff", {alpha: 0.01});
    canvas.drawArea("l2_clk_td", "", [392, 406, 119, 109], "#ffffff", {alpha: 0.01});
    canvas.drawArea("l2_clk_ct1", "", [440, 581, 65, 90], "#ffffff", {alpha: 0.01});
    canvas.drawArea("l2_clk_ct3", "", [292, 671, 69, 88], "#ffffff", {alpha: 0.01});
    canvas.drawArea("l2_clk_ct4", "", [292, 759, 100, 177], "#ffffff", {alpha: 0.01});
    canvas.drawArea("l2_clk_ct5", "", [412, 692, 93, 165], "#ffffff", {alpha: 0.01});

    canvas.draw("level2", [
        canvas.img["l2_bg"],

        canvas.img["l2_mct1"],
        canvas.img["l2_mct3"],
        canvas.img["l2_mct4"],
        canvas.img["l2_mct5"],

        canvas.sprite["td"],
        canvas.sprite["l2_ct1"],
        canvas.sprite["l2_ct2"],

        canvas.sprite["l2_ct5"],
        canvas.sprite["l2_ct4"],
        canvas.sprite["l2_ct3"],

        canvas.sprite["l2_wbl1"],
        canvas.sprite["l2_wbl2"],
        canvas.sprite["l2_yq"],
        canvas.img["l2_door"],
        canvas.sprite["l2_td"],

        canvas.img["l2_mlz"],
        canvas.sprite["l2_lz"],

        canvas.sprite["l2_book1"],
        canvas.sprite["l2_book2"],
        canvas.sprite["l2_book3"],

        canvas.img["l2_ball"],
        canvas.img["l2_border"],

        canvas.dom["l2_clk_door"],
        canvas.dom["l2_clk_wbl"],
        canvas.dom["l2_clk_lz"],
        canvas.dom["l2_clk_book"],
        canvas.dom["l2_clk_td"],
        canvas.dom["l2_clk_ct1"],
        canvas.dom["l2_clk_ct3"],
        canvas.dom["l2_clk_ct4"],
        canvas.dom["l2_clk_ct5"]

    ]);

    canvas.sprite["l2_td"].stop();
    canvas.sprite["l2_ct1"].stop();
    canvas.sprite["l2_ct2"].stop();
    canvas.sprite["l2_ct5"].stop();
    canvas.sprite["l2_ct3"].stop();
    canvas.sprite["l2_ct4"].stop();
    canvas.sprite["l2_wbl1"].stop();
    canvas.sprite["l2_wbl2"].stop();
    canvas.sprite["l2_yq"].stop();
    canvas.sprite["l2_td"].stop();
    canvas.sprite["l2_lz"].stop();
    canvas.sprite["l2_book1"].stop();
    canvas.sprite["l2_book2"].stop();
    canvas.sprite["l2_book3"].stop();


    //easy
    canvas.dom["l2_clk_td"].on("click", function () {
        canvas.sprite["l2_td"].gotoAndPlay("run");
        createjs.Sound.play("ml2_book2");
    });
    canvas.sprite["l2_td"].on("animationend", function(){
        canvas.sprite["l2_td"].stop();
    });

    function level2Back(i){
        if(i){
            game.level2["ct"+i] = 0;
            game.level2.ctBack = 1;

            canvas.sprite["l2_ct"+i].gotoAndPlay("back");
        }
    }

    //ct1
    canvas.dom["l2_clk_ct1"].on("click", function () {
        if(game.level2.ct1==1) return;

        level2Back(game.level2.ct_now);

        canvas.img["l2_mct1"].alpha = 0;
        canvas.dom["l2_clk_ct1"].alpha = 0;
        canvas.sprite["l2_ct1"].alpha = 1;
        game.level2.ct1 = 1;
        game.level2.ct = 1;
        game.level2.ct_now = 1;

        canvas.sprite["l2_ct1"].gotoAndPlay("run");
        createjs.Sound.play("ml2_ct1");
    });
    canvas.sprite["l2_ct1"].on("animationend", function(){
        canvas.sprite["l2_ct1"].stop();
        if(game.level2.ct1 == 1){
            //
        }else if(game.level2.ct1 == 0){
            canvas.img["l2_mct1"].alpha = 1;
            canvas.dom["l2_clk_ct1"].alpha = 0.01;
            canvas.sprite["l2_ct1"].alpha = 0;

            game.level2.ct1 = 0;
            game.level2.ct = 0;
            if(!game.level2.ctBack) game.level2.ct_now = 0;
            else game.level2.ctBack = 0;
        }
    });
    canvas.sprite["l2_ct1"].on("click", function () {
        if(game.level2.ct1==0) return;

        game.level2.ct1 = 0;

        canvas.sprite["l2_ct1"].gotoAndPlay("back");
        createjs.Sound.play("ml2_ct1");
    });

    //ct3
    canvas.dom["l2_clk_ct3"].on("click", function () {
        if(game.level2.ct3==1) return;

        level2Back(game.level2.ct_now);

        canvas.img["l2_mct3"].alpha = 0;
        canvas.dom["l2_clk_ct3"].alpha = 0;
        canvas.sprite["l2_ct3"].alpha = 1;
        game.level2.ct3 = 1;
        game.level2.ct = 1;
        game.level2.ct_now = 3;

        canvas.sprite["l2_ct3"].gotoAndPlay("run");
        createjs.Sound.play("ml2_ct3");
    });
    canvas.sprite["l2_ct3"].on("animationend", function(){
        canvas.sprite["l2_ct3"].stop();
        if(game.level2.ct3 == 1){
            //
        }else if(game.level2.ct3 == 0){
            canvas.img["l2_mct3"].alpha = 1;
            canvas.dom["l2_clk_ct3"].alpha = 0.01;
            canvas.sprite["l2_ct3"].alpha = 0;

            game.level2.ct3 = 0;
            game.level2.ct = 0;
            if(!game.level2.ctBack) game.level2.ct_now = 0;
            else game.level2.ctBack = 0;
        }
    });
    canvas.sprite["l2_ct3"].on("click", function () {
        if(game.level2.ct3==0) return;

        game.level2.ct3 = 0;

        canvas.sprite["l2_ct3"].gotoAndPlay("back");
        createjs.Sound.play("ml2_ct3");
    });


    //ct4
    canvas.dom["l2_clk_ct4"].on("click", function () {
        if(game.level2.ct4==1) return;

        level2Back(game.level2.ct_now);

        canvas.img["l2_mct4"].alpha = 0;
        canvas.dom["l2_clk_ct4"].alpha = 0;
        canvas.sprite["l2_ct4"].alpha = 1;
        game.level2.ct4 = 1;
        game.level2.ct = 1;
        game.level2.ct_now = 4;

        canvas.sprite["l2_ct4"].gotoAndPlay("run");
        createjs.Sound.play("ml2_ct4");
    });
    canvas.sprite["l2_ct4"].on("animationend", function(){
        canvas.sprite["l2_ct4"].stop();
        if(game.level2.ct4 == 1){
            //
        }else if(game.level2.ct4 == 0){
            canvas.img["l2_mct4"].alpha = 1;
            canvas.dom["l2_clk_ct4"].alpha = 0.01;
            canvas.sprite["l2_ct4"].alpha = 0;

            game.level2.ct4 = 0;
            game.level2.ct = 0;
            if(!game.level2.ctBack) game.level2.ct_now = 0;
            else game.level2.ctBack = 0;

        }
    });
    canvas.sprite["l2_ct4"].on("click", function () {
        if(game.level2.ct4==0) return;

        game.level2.ct4 = 0;

        canvas.sprite["l2_ct4"].gotoAndPlay("back");
        createjs.Sound.play("ml2_ct4");
    });

    //ct5
    canvas.dom["l2_clk_ct5"].on("click", function () {
        if(game.level2.ct5==1) return;

        level2Back(game.level2.ct_now);

        canvas.img["l2_mct5"].alpha = 0;
        canvas.dom["l2_clk_ct5"].alpha = 0;
        canvas.sprite["l2_ct5"].alpha = 1;
        game.level2.ct5 = 1;
        game.level2.ct = 1;
        game.level2.ct_now = 5;

        canvas.sprite["l2_ct5"].gotoAndPlay("run");
        createjs.Sound.play("ml2_ct5");
    });
    canvas.sprite["l2_ct5"].on("animationend", function(){
        canvas.sprite["l2_ct5"].stop();
        if(game.level2.ct5 == 1){
            //
        }else if(game.level2.ct5 == 0){
            canvas.img["l2_mct5"].alpha = 1;
            canvas.dom["l2_clk_ct5"].alpha = 0.01;
            canvas.sprite["l2_ct5"].alpha = 0;

            game.level2.ct5 = 0;
            game.level2.ct = 0;
            if(!game.level2.ctBack) game.level2.ct_now = 0;
            else game.level2.ctBack = 0;

        }
    });
    canvas.sprite["l2_ct5"].on("click", function () {
        if(game.level2.ct5==0) return;

        game.level2.ct5 = 0;

        canvas.sprite["l2_ct5"].gotoAndPlay("back");
        createjs.Sound.play("ml2_ct5");
    });



};