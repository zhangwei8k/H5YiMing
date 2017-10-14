//启动函数
function init(){
    canvas.loads(
        [
            {src:"loader_box.png" , id:"loader_box"},
            {src:"loader_line.png", id:"loader_line"},
            //{src:"next.png", id:"next"},
            {src:"p1.png", id:"p1"},
            {src:"p2.png", id:"p2"},
            {src:"p3.png", id:"p3"},
            {src: "mp3/bg.mp3" , id: "mp3_bg"}
        ]
        ,{
            Complete: function(){
                canvas.run(25);
                canvas.view_ini("loader");

                canvas.set("loader", {alpha:0});
                canvas.show("loader", {alpha:1}, 500);

                init_load();

            }
        }
    );
}

function init_load(){
    canvas.loads(
        [
            {src:"enter.jpg" , id:"enter"},
            {src:"gz.jpg" , id:"gz"},
            {src:"level1/border.png" , id:"l1_border"},
            {src:"level1/bg.jpg" , id:"l1_bg"},

            {src:"level1/box1.png" , id:"l1_box1"},
            {src:"level1/box2.png" , id:"l1_box2"},
            {src:"level1/book.png" , id:"l1_book"},
            {src:"level1/eye.png" , id:"l1_eye"},
            {src:"level1/lu.png" , id:"l1_lu"},
            {src:"level1/guo.png" , id:"l1_guo"},
            {src:"level1/yan.png" , id:"l1_yan"},
            {src:"level1/hua.png" , id:"l1_hua"},
            {src:"level1/key.png" , id:"l1_key"},
            {src:"level1/tree.png" , id:"l1_tree"},
            {src:"level1/mao.png" , id:"l1_mao"},
            {src:"level1/pen.png" , id:"l1_pen"},
            {src:"level1/td.png" , id:"l1_td"},
            {src:"level1/mkey.png" , id:"l1_mkey"},
            {src:"level1/mtree.png" , id:"l1_mtree"},

            {src: "mp3/level1/book.mp3" , id: "ml1_book"},
            {src: "mp3/level1/box.mp3" , id: "ml1_box"},
            {src: "mp3/level1/eye.mp3" , id: "ml1_eye"},
            {src: "mp3/level1/hua.mp3" , id: "ml1_hua"},
            {src: "mp3/level1/key.mp3" , id: "ml1_key"},
            {src: "mp3/level1/mao.mp3" , id: "ml1_mao"},
            {src: "mp3/level1/pen.mp3" , id: "ml1_pen"},
            {src: "mp3/level1/td.mp3" , id: "ml1_td"},
            {src: "mp3/level1/ym.mp3" , id: "ml1_ym"}

        ]
        ,{
            Progress: function(ev){
                var i = parseInt(ev.progress*100);
                if(i>98) i=98;
                action.levelProgress(i);
            },
            Complete: function(){

                canvas.view_ini("enter");
                canvas.view_ini("start1");
                canvas.view_ini("level1");
                canvas.view_ini("start2");
                canvas.view_ini("loader2");

                setTimeout(function(){
                    action.levelProgress(100);
                    action.enter();

                }, 1000);

            }
        }
    )
}

function level2_load(){
    canvas.loads(
        [
            {src:"level2/bg.jpg" , id:"l2_bg"},
            {src:"level2/border.png" , id:"l2_border"},

            {src:"level2/ball.png" , id:"l2_ball"},
            {src:"level2/book1.png" , id:"l2_book1"},
            {src:"level2/book2.png" , id:"l2_book2"},
            {src:"level2/book3.png" , id:"l2_book3"},
            {src:"level2/td.png" , id:"l2_td"},

            {src:"level2/mct1.png" , id:"l2_mct1"},
            {src:"level2/mct3.png" , id:"l2_mct3"},
            {src:"level2/mct4.png" , id:"l2_mct4"},
            {src:"level2/mct5.png" , id:"l2_mct5"},

            {src:"level2/ct1.png" , id:"l2_ct1"},
            {src:"level2/ct2.png" , id:"l2_ct2"},
            {src:"level2/ct3.png" , id:"l2_ct3"},
            {src:"level2/ct4.png" , id:"l2_ct4"},
            {src:"level2/ct5.png" , id:"l2_ct5"},
            {src:"level2/door.png" , id:"l2_door"},
            {src:"level2/mlz.png" , id:"l2_mlz"},
            {src:"level2/lz.png" , id:"l2_lz"},
            {src:"level2/wbl1.png" , id:"l2_wbl1"},
            {src:"level2/wbl2.png" , id:"l2_wbl2"},
            {src:"level2/yq.png" , id:"l2_yq"},

            {src: "mp3/level2/book1.mp3" , id: "ml2_book1"},
            {src: "mp3/level2/book2.mp3" , id: "ml2_book2"},
            {src: "mp3/level2/ct1.mp3" , id: "ml2_ct1"},
            {src: "mp3/level2/ct3.mp3" , id: "ml2_ct3"},
            {src: "mp3/level2/ct4.mp3" , id: "ml2_ct4"},
            {src: "mp3/level2/ct5.mp3" , id: "ml2_ct5"},
            {src: "mp3/level2/door.mp3" , id: "ml2_door"},
            {src: "mp3/level2/lz.mp3" , id: "ml2_lz"},
            {src: "mp3/level2/wbl1.mp3" , id: "ml2_wbl1"},
            {src: "mp3/level2/wbl2.mp3" , id: "ml2_wbl2"},
            {src: "mp3/level2/yq.mp3" , id: "ml2_yq"}


        ]
        ,{
            Progress: function(ev){
                var i = parseInt(ev.progress*100);
                if(i>98) i=98;
                action.levelProgress(i);
            },
            Complete: function(){

                canvas.view_ini("level2");
                setTimeout(function(){
                    action.levelProgress(100);
                    action.level2_start();
                }, 1000);

            }
        }
    )
}

function level3_load(){
    canvas.loads(
        [
            {src:"level3/bg.jpg" , id:"l3_bg"},
            {src:"level3/border.png" , id:"l3_border"},

            {src:"level3/cfj.png" , id:"l3_cfj"},
            {src:"level3/cfj_png.png" , id:"l3_cfj_png"},
            {src:"level3/ct.png" , id:"l3_ct"},
            {src:"level3/gl.png" , id:"l3_gl"},
            {src:"level3/gz.png" , id:"l3_gz"},
            {src:"level3/gz_png.png" , id:"l3_gz_png"},
            {src:"level3/jpq.png" , id:"l3_jpq"},
            {src:"level3/jpq_png.png" , id:"l3_jpq_png"},
            {src:"level3/lyj.png" , id:"l3_lyj"},
            {src:"level3/nao.png" , id:"l3_nao"},
            {src:"level3/syj_png.png" , id:"l3_syj_png"},
            {src:"level3/ym.png" , id:"l3_ym"},
            {src:"level3/zxj.png" , id:"l3_zxj"},

            {src: "mp3/level3/cfj.mp3" , id: "ml3_cfj"},
            {src: "mp3/level3/ct.mp3" , id: "ml3_ct"},
            {src: "mp3/level3/gl.mp3" , id: "ml3_gl"},
            {src: "mp3/level3/gz.mp3" , id: "ml3_gz"},
            {src: "mp3/level3/lyj.mp3" , id: "ml3_lyj"},
            {src: "mp3/level3/nao.mp3" , id: "ml3_nao"},
            {src: "mp3/level3/syj.mp3" , id: "ml3_syj"},
            {src: "mp3/level3/syj_yao.mp3" , id: "ml3_syj_yao"},
            {src: "mp3/level3/yao.mp3" , id: "ml3_yao"},
            {src: "mp3/level3/zxj.mp3" , id: "ml3_zxj"}

        ]
        ,{
            Progress: function(ev){
                var i = parseInt(ev.progress*100);
                if(i>98) i=98;
                action.levelProgress(i);
            },
            Complete: function(){

                canvas.view_ini("level3");
                setTimeout(function(){
                    action.levelProgress(100);
                    action.level3_start();
                }, 1000);

            }
        }
    )
}