view.loader2 = {};
view.loader2.loader2 = function(){
    canvas.ccv("l2_loader");
    canvas.drawArea("loader_bg", "", [0,0, 700, 1140], "#00000");
    canvas.drawImg("loader_line", "", {x:299 , y:561, scaleX:0.1}, canvas.loaded["loader_line"]);
    canvas.drawImg("loader_box", "", {x:267 , y:554}, canvas.loaded["loader_box"]);

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
    canvas.drawImg("p2", "", {x:204 , y:532});

    canvas.draw("l2_start" , [
        canvas.dom["start_bg"],
        canvas.img["p2"]
    ]);

    canvas.img["p2"].on("click", function () {
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
            run: [0, 12],
            back: {
                frames: [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
            }
        }
    });
    canvas.drawSpriteE("l2_book2", "", {
        framerate: 10,
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
        framerate: 10,
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
            run: {
                frames: [0,1,2,3,4,5,6,7,8,9,10,11,12, 12, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
            }
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

    canvas.drawImg("l2_ball", "", {x: 391, y: 571, alpha: 0});
    canvas.drawImg("l2_border", "", {x: 0, y: 0});
    canvas.drawImg("l2_mlz", "", {x: 95, y: 539});
    canvas.drawImg("l2_door", "", {x: 361, y: 172});

    canvas.drawImg("l2_mct1", "", {x: 438, y: 560});
    canvas.drawImg("l2_mct3", "", {x: 292, y: 660});
    canvas.drawImg("l2_mct4", "", {x: 292, y: 734});
    canvas.drawImg("l2_mct5", "", {x: 405, y: 653});

    //canvas.drawArea("l2_clk_wbl", "", [225, 300, 117, 145], "#ffffff", {alpha: 0.01});
    canvas.drawArea("l2_clk_lz", "", [105, 527, 98, 144], "#ffffff", {alpha: 0.01});
    canvas.drawArea("l2_clk_book", "", [203, 483, 189, 143], "#ffffff", {alpha: 0.01});
    canvas.drawArea("l2_clk_td", "", [392, 406, 119, 109], "#ffffff", {alpha: 0.01});
    canvas.drawArea("l2_clk_ct1", "", [440, 581, 65, 90], "#ffffff", {alpha: 0.01});
    canvas.drawArea("l2_clk_ct3", "", [292, 671, 69, 88], "#ffffff", {alpha: 0.01});
    canvas.drawArea("l2_clk_ct4", "", [292, 759, 100, 177], "#ffffff", {alpha: 0.01});
    canvas.drawArea("l2_clk_ct5", "", [425, 692, 80, 165], "#ffffff", {alpha: 0.01});

    canvas.draw("level2", [
        canvas.img["l2_bg"],

        canvas.img["l2_mct1"],
        canvas.img["l2_mct3"],
        canvas.img["l2_mct4"],
        canvas.img["l2_mct5"],

        canvas.sprite["td"],


        canvas.sprite["l2_yq"],
        canvas.img["l2_door"],
        canvas.sprite["l2_wbl1"],
        canvas.sprite["l2_wbl2"],


        canvas.sprite["l2_td"],

        canvas.img["l2_mlz"],
        canvas.sprite["l2_lz"],

        canvas.sprite["l2_book1"],
        canvas.sprite["l2_book2"],
        canvas.sprite["l2_book3"],

        canvas.sprite["l2_ct1"],
        canvas.sprite["l2_ct2"],

        canvas.sprite["l2_ct5"],
        canvas.sprite["l2_ct4"],
        canvas.sprite["l2_ct3"],

        canvas.img["l2_ball"],
        canvas.img["l2_border"],

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
        if(game.level2.ctEnd) return;
        bookBack();
        canvas.sprite["l2_td"].gotoAndPlay("run");
        createjs.Sound.play("ml2_book1");

        if(!game.time2.else1) {
            game.time2.else -= 3;
            game.time2.else1 = 1;
        }
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
        if(game.level2.ct1==1 || game.level2.ctEnd) return;

        bookBack();
        level2Back(game.level2.ct_now);

        canvas.img["l2_mct1"].alpha = 0;
        canvas.dom["l2_clk_ct1"].alpha = 0;
        canvas.sprite["l2_ct1"].alpha = 1;
        game.level2.ct1 = 1;
        game.level2.ct = 1;
        game.level2.ct_now = 1;

        canvas.sprite["l2_ct1"].gotoAndPlay("run");
        createjs.Sound.play("ml2_ct1");

        if(!game.time2.else2) {
            game.time2.else -= 3;
            game.time2.else2 = 1;
        }
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
        if(game.level2.ct1==0 || game.level2.ctEnd) return;

        game.level2.ct1 = 0;

        canvas.sprite["l2_ct1"].gotoAndPlay("back");
        createjs.Sound.play("ml2_ct1");
    });

    //ct3
    canvas.dom["l2_clk_ct3"].on("click", function () {
        if(game.level2.ct3==1 || game.level2.ctEnd) return;

        if(!game.level2.ct2_ok){
            level2Back(game.level2.ct_now);

            canvas.img["l2_mct3"].alpha = 0;
            canvas.dom["l2_clk_ct3"].alpha = 0;
            canvas.sprite["l2_ct3"].alpha = 1;
            game.level2.ct3 = 1;
            game.level2.ct = 1;
            game.level2.ct_now = 3;

            canvas.sprite["l2_ct3"].alpha = 1;
            canvas.sprite["l2_ct2"].alpha = 0;
            canvas.sprite["l2_ct3"].gotoAndPlay("run");
            createjs.Sound.play("ml2_ct3");

            if(!game.time2.else3) {
                game.time2.else -= 3;
                game.time2.else3 = 1;
            }
        }else{

            ballStart();

            game.level2.ctEnd = 1;

            canvas.sprite["l2_ct3"].alpha = 0;
            canvas.sprite["l2_ct2"].alpha = 1;
            canvas.sprite["l2_ct2"].gotoAndPlay("run");
            createjs.Sound.play("ml2_ct3");

            canvas.tw.get(canvas.img["l2_ball"]).wait(160).to( {y:551, alpha:1}, 500, createjs.Ease.sineInOut);
            //action.level3_loader();
        }

    });
    canvas.sprite["l2_ct2"].on("animationend", function(){
        canvas.sprite["l2_ct2"].stop();

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
        if(game.level2.ct3==0 || game.level2.ctEnd) return;

        game.level2.ct3 = 0;

        canvas.sprite["l2_ct3"].gotoAndPlay("back");
        createjs.Sound.play("ml2_ct3");
    });


    //ct4
    canvas.dom["l2_clk_ct4"].on("click", function () {
        if(game.level2.ct4==1 || game.level2.ctEnd) return;

        bookBack();
        level2Back(game.level2.ct_now);

        canvas.img["l2_mct4"].alpha = 0;
        canvas.dom["l2_clk_ct4"].alpha = 0;
        canvas.sprite["l2_ct4"].alpha = 1;
        game.level2.ct4 = 1;
        game.level2.ct = 1;
        game.level2.ct_now = 4;

        canvas.sprite["l2_ct4"].gotoAndPlay("run");
        createjs.Sound.play("ml2_ct4");

        if(!game.time2.else4) {
            game.time2.else -= 3;
            game.time2.else4 = 1;
        }
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
        if(game.level2.ct4==0 || game.level2.ctEnd) return;

        game.level2.ct4 = 0;

        canvas.sprite["l2_ct4"].gotoAndPlay("back");
        createjs.Sound.play("ml2_ct4");
    });

    //ct5
    canvas.dom["l2_clk_ct5"].on("click", function () {
        if(game.level2.ct5==1 || game.level2.ctEnd) return;

        bookBack();
        level2Back(game.level2.ct_now);

        canvas.img["l2_mct5"].alpha = 0;
        canvas.dom["l2_clk_ct5"].alpha = 0;
        canvas.sprite["l2_ct5"].alpha = 1;
        game.level2.ct5 = 1;
        game.level2.ct = 1;
        game.level2.ct_now = 5;

        canvas.sprite["l2_ct5"].gotoAndPlay("run");
        createjs.Sound.play("ml2_ct5");

        if(!game.time2.else5) {
            game.time2.else -= 3;
            game.time2.else5 = 1;
        }
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
        if(game.level2.ct5==0 || game.level2.ctEnd) return;

        game.level2.ct5 = 0;

        canvas.sprite["l2_ct5"].gotoAndPlay("back");
        createjs.Sound.play("ml2_ct5");
    });

    //door
    canvas.img["l2_door"].on("click", function () {
        if(game.level2.door && game.level2.ctEnd) return;

        if(!game.level2.ctEnd) bookBack();

        if(!game.level2.door){
            game.level2.door = 1;
            canvas.tw.get(canvas.img["l2_door"]).to( {x:532}, 500, createjs.Ease.sineInOut);

            canvas.sprite["l2_yq"].gotoAndPlay("run");
            createjs.Sound.play("ml2_yq");

            if(game.level2.ctEnd) {
                setTimeout(function(){
                    game.level2.ballStart = 1;
                },800);
            }

        }else{
            game.level2.door = 0;
            canvas.tw.get(canvas.img["l2_door"]).to( {x:361}, 500, createjs.Ease.sineInOut);
        }

        createjs.Sound.play("ml2_door");
    });
    canvas.sprite["l2_yq"].on("animationend", function(){
        canvas.sprite["l2_yq"].stop();
    });

    //wbl
    canvas.sprite["l2_wbl1"].on("click", function () {
        if(game.level2.ctEnd) return;
        bookBack();

        canvas.sprite["l2_wbl1"].gotoAndPlay("run");
        createjs.Sound.play("ml2_wbl1");

        if(!game.time2.else6) {
            game.time2.else -= 3;
            game.time2.else6 = 1;
        }
    });
    canvas.sprite["l2_wbl1"].on("animationend", function(){
        canvas.sprite["l2_wbl1"].stop();
    });

    //lz
    canvas.dom["l2_clk_lz"].on("click", function () {
        if(game.level2.book!= 1 || game.level2.ctEnd) return;

        clearTimeout(game.level2.bookHand1);

        canvas.img["l2_mlz"].alpha = 0;
        canvas.sprite["l2_lz"].alpha = 1;
        canvas.sprite["l2_lz"].gotoAndPlay("run");
        createjs.Sound.play("ml2_lz");

        game.level2.book = 2;
        canvas.sprite["l2_book2"].alpha = 1;
        canvas.sprite["l2_book2"].gotoAndPlay("run");
        createjs.Sound.play("ml2_book2");
    });
    canvas.sprite["l2_book2"].on("animationend", function(){
        canvas.sprite["l2_book2"].stop();

        canvas.sprite["l2_book1"].alpha = 0;

        if(game.level2.book == 2){

            game.level2.ct2_ok = 1;

            game.level2.bookHand2 = setTimeout(function(){

                game.level2.ct2_ok = 0;
                game.level2.book = 0;
                canvas.sprite["l2_book2"].alpha = 0;
                canvas.sprite["l2_book3"].alpha = 1;
                canvas.sprite["l2_book3"].gotoAndPlay("run");
                createjs.Sound.play("ml2_book1");
            }, 8000);
        }
    });
    canvas.sprite["l2_book3"].on("animationend", function(){
        canvas.sprite["l2_book3"].stop();

        canvas.sprite["l2_book1"].alpha = 0;
        canvas.sprite["l2_book2"].alpha = 0;
        canvas.sprite["l2_book3"].alpha = 0;
        canvas.sprite["l2_lz"].alpha = 0;
        canvas.img["l2_mlz"].alpha = 1;
    });

    //book
    canvas.dom["l2_clk_book"].on("click", function () {
        if(game.level2.book==1 || game.level2.ctEnd) return;

        game.level2.book = 1;

        canvas.sprite["l2_book1"].alpha = 1;
        canvas.sprite["l2_book1"].gotoAndPlay("run");
        createjs.Sound.play("ml2_book1");
    });
    canvas.sprite["l2_book1"].on("animationend", function(){
        canvas.sprite["l2_book1"].stop();

        if(game.level2.book == 1){
            game.level2.bookHand1 = setTimeout(function(){

                game.level2.book = 0;
                canvas.sprite["l2_book1"].gotoAndPlay("back");
                createjs.Sound.play("ml2_book1");
            }, 3000);
        }
    });
    function bookBack(){
        if(game.level2.book != 2) return;
        clearTimeout(game.level2.bookHand2);

        game.level2.ct2_ok = 0;
        game.level2.book = 0;
        canvas.sprite["l2_book2"].alpha = 0;
        canvas.sprite["l2_book3"].alpha = 1;
        canvas.sprite["l2_book3"].gotoAndPlay("run");
        createjs.Sound.play("ml2_book1");

    }

    function ballStart(){
        //console.log(game.level2.book, "xx");
        if(game.level2.book != 2) return;
        clearTimeout(game.level2.bookHand2);

        if(game.level2.door) {
            setTimeout(function(){
                game.level2.ballStart = 1;
            },800);

        }

    }

};