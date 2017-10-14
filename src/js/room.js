///////////////////////////////////// Room ///////////////////////////////////////////

////房间规范
// (Room)go房间离开，come房间进来，ppt同步离开和进来
// (Room)hide暂时隐藏，会关闭run程序（stop程序）; show开始显示，会运行run程序
// (Rooms)come_before:进来前，coming：进来时，come_after:进来后；go_before：离开前，going：离开时,go_after：离开后;
// (Rooms)ppt同步后的循序 1.come_before , 2.go_before , 3.going , 4.coming , 5.come_after , 6.go_after
// (Rooms)run运行的程序，stop停止的程序
// (Rooms)act点击等事件，io事件


///////////////////////////////////// rooms ///////////////////////////////////////////

Rooms.Main = {};

Rooms.Video1 = {};
Rooms.Video1.dom = function(){
    Dom.Video1 = {};
    Dom.Video1.vbtn = $('#Video1 .vbtn');
    Dom.Video1.gbtn = $('#Video1 .gbtn');
    Dom.Video1.v = $('#v1');
};
Rooms.Video1.act = function(){
    Dom.Video1.gbtn.tap(function(){
        Room.ppt({id:["Video1", "Finish1"], mov:["fadeOut" , "fadeInUp"]});
    })

};
Rooms.Video1.come_after = function(next){
    Dom.Video1.v.show();
//  Dom.Video1.v[0].play();
    if(next) next();
};
Rooms.Video1.go_before = function(next){
//	Dom.Video1.v[0].pause();
    Dom.Video1.v.hide();
    if(next) next();
};

Rooms.Video2 = {};
Rooms.Video2.dom = function(){
    Dom.Video2 = {};
    Dom.Video2.vbtn = $('#Video2 .vbtn');
    Dom.Video2.gbtn = $('#Video2 .gbtn');
    Dom.Video2.v = $('#v2');
};
Rooms.Video2.act = function(){
    Dom.Video2.gbtn.tap(function(){
        Room.ppt({id:["Video2", "Finish2"], mov:["fadeOut" , "fadeInUp"]}
        );
       
    })
};
Rooms.Video2.come_after = function(next){
    Dom.Video2.v.show();
//  Dom.Video2.v[0].play();
    if(next) next();
};
Rooms.Video2.go_before = function(next){
//	Dom.Video2.v[0].pause();
    Dom.Video2.v.hide();
    if(next) next();
};

Rooms.Video3 = {};
Rooms.Video3.dom = function(){
    Dom.Video3 = {};
    Dom.Video3.vbtn = $('#Video3 .vbtn');
    Dom.Video3.gbtn = $('#Video3 .gbtn');
    Dom.Video3.v = $('#v3');
};
Rooms.Video3.act = function(){
    Dom.Video3.gbtn.tap(function(){
        Room.ppt({id:["Video3", "Finish3"], mov:["fadeOut" , "fadeInUp"]});
    })
};
Rooms.Video3.come_after = function(next){
    Dom.Video3.v.show();
//  Dom.Video3.v[0].play();
    if(next) next();
};
Rooms.Video3.go_before = function(next){
//	Dom.Video3.v[0].pause();
    Dom.Video3.v.hide();
    if(next) next();
};

Rooms.Finish1 = {};
Rooms.Finish1.dom = function(){
    Dom.Finish1 = {};
    Dom.Finish1.btns = $('#Finish1 .btns');
    Dom.Finish1.btn2 = $('#Finish1 .btn2');
    Dom.Finish1.btn3 = $('#Finish1 .btn3');
};
Rooms.Finish1.act = function(){
    Dom.Finish1.btns.tap(function(){
    	if(!action.nav_clkMK()) return;
    	
        Room.ppt({id:["Finish1", "Main"], mov:["fadeOut" , "show"]}, function(){
            action.nav_re();
        });
    })
    
//  Dom.Finish1.btn3.tap(function(){ 	
//     $("#_share").fadeIn();
//     setTimeout(function(){
//     	$("#_share").fadeOut();
//     },3000)
//  })
};
Rooms.Finish1.come_after = function(next){
    createjs.Sound.play("sound2",ppc);
    if(next) next();
};
Rooms.Finish1.go_before = function(next){
    if(next) next();
};

Rooms.Finish2 = {};
Rooms.Finish2.dom = function(){
    Dom.Finish2 = {};
    Dom.Finish2.btns = $('#Finish2 .btns');
    Dom.Finish2.btn2 = $('#Finish2 .btn2');
    Dom.Finish2.btn3 = $('#Finish2 .btn3');
};
Rooms.Finish2.act = function(){
    Dom.Finish2.btns.tap(function(){
    	if(!action.nav_clkMK()) return;
    	
        Room.ppt({id:["Finish2", "Main"], mov:["fadeOut" , "show"]}, function(){
            action.nav_re();
        });
    })
//  Dom.Finish2.btn3.tap(function(){ 	
//     $("#_share").fadeIn();
//     setTimeout(function(){
//     	$("#_share").fadeOut();
//     },3000)
//  })
};
Rooms.Finish2.come_after = function(next){
	createjs.Sound.play("sound2",ppc);
    if(next) next();
};
Rooms.Finish2.go_before = function(next){
    if(next) next();
};

Rooms.Finish3 = {};
Rooms.Finish3.dom = function(){
    Dom.Finish3 = {};
    Dom.Finish3.btns = $('#Finish3 .btns');
    Dom.Finish3.btn2 = $('#Finish3 .btn2');
    Dom.Finish3.btn3 = $('#Finish3 .btn3');
};
Rooms.Finish3.act = function(){
    Dom.Finish3.btns.tap(function(){
    	if(!action.nav_clkMK()) return;
    	
        Room.ppt({id:["Finish3", "Main"], mov:["fadeOut" , "show"]}, function(){
            action.nav_re();
        });
    })
//  Dom.Finish3.btn3.tap(function(){ 	
//     $("#_share").fadeIn();
//     setTimeout(function(){
//     	$("#_share").fadeOut();
//     },3000)
//  })
};
Rooms.Finish3.come_after = function(next){
	createjs.Sound.play("sound2",ppc);
    if(next) next();
};
Rooms.Finish3.go_before = function(next){
    if(next) next();
};
