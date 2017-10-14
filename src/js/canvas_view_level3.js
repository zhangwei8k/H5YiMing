view.loader3 = {};
view.loader3.loader3 = function(){
    canvas.ccv("l3_loader");
    canvas.drawArea("loader_bg", "", [0,0, 700, 1140], "#00000");
    canvas.drawImg("loader_line", "", {x:299 , y:561, scaleX:0.1}, canvas.loaded["loader_line"]);
    canvas.drawImg("loader_box", "", {x:267 , y:554}, canvas.loaded["loader_box"]);

    canvas.draw("l3_loader" , [
        canvas.dom["loader_bg"],
        canvas.img["loader_line"],
        canvas.img["loader_box"]
    ]);
};

view.start3 = {};
view.start3.start3 = function(){
    canvas.ccv("l3_start");
    canvas.drawArea("start_bg", "", [0,0, 700, 1140], "#00000");
    canvas.drawImg("p3", "", {x:116 , y:532});

    canvas.draw("l3_start" , [
        canvas.dom["start_bg"],
        canvas.img["p3"]
    ]);

    canvas.img["p3"].on("click", function () {
        action.level3();
    });
};

view.level3 = {};
view.level3.level3 = function(){
    canvas.ccv("level3");

    canvas.drawImg("l3_bg", "", {x: 0, y: 0});
    canvas.drawImg("l3_border", "", {x: 0, y: 0});

    canvas.drawImg("l3_cfj_png", "", {x: 438, y: 545});
    canvas.drawImg("l3_syj_png", "", {x: 212, y: 240});
    canvas.drawImg("l3_jpq_png", "", {x: 607, y: 416});
    canvas.drawImg("l3_gz_png", "", {x: 277, y: 432});
    canvas.drawSpriteE("l3_cfj", "", {
        framerate: 10,
        mov: {
            ini: [0],
            run: {
                frames: [0,1,2,3,4,5,6,7,8,9,10,11,12, 12,12,12,11,10,9,8,7,6,5,4,3,2,1,0]
            }
        },
        conf: {alpha: 0}
    });
    canvas.drawSpriteE("l3_ct", "", {
        framerate: 10,
        mov: {
            ini: [0],
            run: {
                frames: [0,1,2,3,4,5,6,7,8,9,10,11,12, 12, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
            }
        }
    });
    canvas.drawSpriteE("l3_gl", "", {
        framerate: 10,
        mov: {
            ini: [0],
            run: {
                frames: [0,1,2,3,4,5,6,7,8,9,10,11,12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
            }
        }
    });
    canvas.drawSpriteE("l3_gz", "", {
        framerate: 10,
        mov: {
            ini: [0],
            run: {
                frames: [0,1,2,3,4,5,6,7,8,9,10,11,12, 0,1,2,3]
            }
        },
        conf: {alpha: 0}
    });
    canvas.drawSpriteE("l3_jpq", "", {
        framerate: 10,
        mov: {
            ini: [0],
            run: [0, 12]
        },
        conf: {alpha: 0}
    });
    canvas.drawSpriteE("l3_lyj", "", {
        framerate: 10,
        mov: {
            ini: [0],
            run: {
                frames: [0,1,2,3,4,5,6,7,8,9,10,11,12, 0,1,2,3,4,5,6,7,8,9,10,11,12]
            }
        }
    });
    canvas.drawSpriteE("l3_nao", "", {
        framerate: 10,
        mov: {
            ini: [0],
            run: {
                frames: [0,1,2,3,4,5,6,7,8,9,10,11,12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
            }
        }
    });
    canvas.drawSpriteE("l3_ym", "", {
        framerate: 10,
        mov: {
            ini: [0, 12]
        }
    });
    canvas.drawSpriteE("l3_zxj", "", {
        framerate: 10,
        mov: {
            ini: [0],
            run: {
                frames: [0,1,2,3,4,5,6,7,8,9,10,11,12, 12,12,12,13,14,15,16,17,18,19,20,21]
            }
        }
    });

    canvas.drawArea("l3_clk_gz", "", [237, 377, 113, 213], "#ffffff", {alpha: 0.01});
    canvas.drawArea("l3_clk_lyj", "", [40, 387, 182, 203], "#ffffff", {alpha: 0.01});
    canvas.drawArea("l3_clk_zxj", "", [335, 880, 150, 121], "#ffffff", {alpha: 0.01});
    canvas.drawArea("l3_clk_syj", "", [55, 179, 295, 156], "#ffffff", {alpha: 0.01});

    canvas.draw("level3", [
        canvas.img["l3_bg"],

        canvas.img["l3_cfj_png"],
        canvas.img["l3_syj_png"],
        canvas.img["l3_jpq_png"],
        canvas.img["l3_gz_png"],

        canvas.sprite["l3_cfj"],
        canvas.sprite["l3_gl"],
        canvas.sprite["l3_gz"],
        canvas.sprite["l3_jpq"],
        canvas.sprite["l3_lyj"],
        canvas.sprite["l3_nao"],
        canvas.sprite["l3_ym"],
        canvas.sprite["l3_zxj"],

        canvas.sprite["l3_ct"],

        canvas.img["l3_border"],

        canvas.dom["l3_clk_gz"],
        canvas.dom["l3_clk_lyj"],
        canvas.dom["l3_clk_zxj"],
        canvas.dom["l3_clk_syj"]
    ]);

    canvas.sprite["l3_jpq"].stop();
    canvas.sprite["l3_cfj"].stop();

    /////ct
    canvas.sprite["l3_ct"].stop();
    canvas.sprite["l3_ct"].on("click", function () {
        if(game.level3.l3_ct) return;
        game.level3.l3_ct = 1;

        reYao1();

        canvas.sprite["l3_ct"].gotoAndPlay("run");
        createjs.Sound.play("ml3_ct");

        if(!game.time3.else1) {
            game.time3.else -= 3;
            game.time3.else1 = 1;
        }
    });
    canvas.sprite["l3_ct"].on("animationend", function(){
        canvas.sprite["l3_ct"].stop();
        game.level3.l3_ct = 0;
    });


    /////////gz
    canvas.sprite["l3_gz"].stop();
    canvas.dom["l3_clk_gz"].on("click", function () {
        if(game.level3.l3_gz) return;
        game.level3.l3_gz = 1;

        reYao1();

        canvas.sprite["l3_gz"].alpha = 1;
        canvas.img["l3_gz_png"].alpha = 0;
        canvas.sprite["l3_gz"].gotoAndPlay("run");
        createjs.Sound.play("ml3_gz");

        if(!game.time3.else2) {
            game.time3.else -= 3;
            game.time3.else2 = 1;
        }
    });
    canvas.sprite["l3_gz"].on("animationend", function(){
        canvas.sprite["l3_gz"].stop();

        canvas.sprite["l3_gz"].alpha = 0;
        canvas.img["l3_gz_png"].alpha = 1;
        game.level3.l3_gz = 0;
    });

    /////////gl
    canvas.sprite["l3_gl"].stop();
    canvas.sprite["l3_gl"].on("click", function () {
        if(game.level3.l3_gl) return;
        game.level3.l3_gl = 1;

        reYao1();

        canvas.sprite["l3_gl"].gotoAndPlay("run");
        createjs.Sound.play("ml3_gl");

        if(!game.time3.else3) {
            game.time3.else -= 3;
            game.time3.else3 = 1;
        }
    });
    canvas.sprite["l3_gl"].on("animationend", function(){
        canvas.sprite["l3_gl"].stop();

        game.level3.l3_gl = 0;
    });

    /////////nao
    canvas.sprite["l3_nao"].stop();
    canvas.sprite["l3_nao"].on("click", function () {
        if(game.level3.l3_nao) return;
        game.level3.l3_nao = 1;

        reYao1();

        canvas.sprite["l3_nao"].gotoAndPlay("run");
        createjs.Sound.play("ml3_nao");

        if(!game.time3.else4) {
            game.time3.else -= 3;
            game.time3.else4 = 1;
        }
    });
    canvas.sprite["l3_nao"].on("animationend", function(){
        canvas.sprite["l3_nao"].stop();

        game.level3.l3_nao = 0;
    });

    /////////lyj
    canvas.sprite["l3_lyj"].stop();
    canvas.dom["l3_clk_lyj"].on("click", function () {
        if(game.level3.l3_lyj) return;
        game.level3.l3_lyj = 1;

        reYao1();

        canvas.sprite["l3_lyj"].gotoAndPlay("run");
        createjs.Sound.play("ml3_lyj");

        if(!game.time3.else5) {
            game.time3.else -= 3;
            game.time3.else5 = 1;
        }
    });
    canvas.sprite["l3_lyj"].on("animationend", function(){
        canvas.sprite["l3_lyj"].stop();

        game.level3.l3_lyj = 0;
    });

    /////////zxj
    canvas.sprite["l3_zxj"].stop();
    canvas.dom["l3_clk_zxj"].on("click", function () {
        if(game.level3.l3_zxj) return;
        game.level3.l3_zxj = 1;

        game.level3.yao1 = 1;

        canvas.sprite["l3_zxj"].gotoAndPlay("run");
        createjs.Sound.play("ml3_zxj");
    });
    canvas.sprite["l3_zxj"].on("animationend", function(){
        canvas.sprite["l3_zxj"].stop();

        game.level3.l3_zxj = 0;
    });
    function reYao1(){
        game.level3.yao1 = 0;
    }

    /////////syj
    canvas.dom["l3_clk_syj"].on("click", function () {
        //if(game.level3.l3_syj) return;
        //game.level3.l3_syj = 1;

        if(game.level3.yao1){
            canvas.tw.get(canvas.img["l3_syj_png"]).to( {x:255}, 500, createjs.Ease.sineInOut);
            createjs.Sound.play("ml3_syj_yao");

            game.level3.yao2 = 1;

            game.level3.yaoHand = setTimeout(function(){
                game.level3.yao2 = 0;
                game.level3.yao1 = 0;

                canvas.tw.get(canvas.img["l3_syj_png"]).to( {x:212}, 500, createjs.Ease.sineInOut);
                createjs.Sound.play("ml3_syj");

            }, 5000);

        }else{
            createjs.Sound.play("ml3_syj");
        }

    });

};