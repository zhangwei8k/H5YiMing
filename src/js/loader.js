//宽高比例，等待时间，运行的section
function Loader(w , h, run, waitTime ){

    var ww = $(window).width();
    var wh = $(window).height();
    var wr = ww/wh;
    var nr = w/h;


    if(wr<1) Loader_ipad(w , h, ww, wh, wr, nr);
    else Loader_ipad(w , h, ww, wh, wr, nr);


    //隐藏Loader
    function hideLoader(){
        var $loader = $("#Loader");
        var loader = $loader[0];
        var transition = "opacity .5s ease-out";
        loader.style.transition   = transition;
        loader.style.msTransform  = transition;
        loader.style.mozTransform = transition;
        loader.style.oTransform   = transition;
        loader.style.webkitTransition = transition;
        $loader.css("opacity","0");
        setTimeout(function(){
            $("#Loader").css("visibility", "hide");
            $("#"+run).css("visibility", "visible");

            init();

        },600);
    }
    if(!waitTime) waitTime = 1;
    setTimeout(hideLoader,waitTime*1000);

}

function Loader_mobile1(w , h, ww, wh, wr, nr){

    var nw,nh;

    nw = ww;
    nh = wh;

    var sw = nw/w;
    var sh = nh/h;

    var cc = $("#CC")[0];

    var translate = "scale("+sw+", "+sh+")";
    cc.style.transform = translate;
    cc.style.msTransform  = translate;
    cc.style.mozTransform = translate;
    cc.style.oTransform   = translate;
    cc.style.webkitTransform = translate;

    var origin = "top left";
    cc.style.transformOrigin    = origin;
    cc.style.msTransformOrigin  = origin;
    cc.style.mozTransformOrigin = origin;
    cc.style.oTransformOrigin   = origin;
    cc.style.webkitTransformOrigin = origin;

}

var LoaderX;
function Loader_mobile(w , h, ww, wh, wr, nr){

    var nw,nh;

    nw = ww;
    nh = nw/nr;

    var ss = nw/w;

    var sh = (wh-nh)/2;

    var cc = $("#CC")[0];

    var translate = "scale("+ss+")";
    cc.style.transform = translate;
    cc.style.msTransform  = translate;
    cc.style.mozTransform = translate;
    cc.style.oTransform   = translate;
    cc.style.webkitTransform = translate;

    var origin = "top left";
    cc.style.transformOrigin    = origin;
    cc.style.msTransformOrigin  = origin;
    cc.style.mozTransformOrigin = origin;
    cc.style.oTransformOrigin   = origin;
    cc.style.webkitTransformOrigin = origin;

    LoaderX = sh;

    $("#CC").css({"margin-top":sh+"px" , "margin-left":"0px"});

}

function Loader_ipad(w , h, ww, wh, wr, nr){

    var nw,nh;

    if(wr>nr){
        nh = wh;
        nw = nh*nr;
    }else{
        nw = ww;
        nh = nw/nr;
    }
    var ss = nw/w;
    var sw = (ww-nw)/2;
    var sh = (wh-nh)/2;

    var cc = $("#CC")[0];

    var translate = "scale("+ss+")";
    cc.style.transform = translate;
    cc.style.msTransform  = translate;
    cc.style.mozTransform = translate;
    cc.style.oTransform   = translate;
    cc.style.webkitTransform = translate;

    var origin = "top left";
    cc.style.transformOrigin    = origin;
    cc.style.msTransformOrigin  = origin;
    cc.style.mozTransformOrigin = origin;
    cc.style.oTransformOrigin   = origin;
    cc.style.webkitTransformOrigin = origin;

    $("#CC").css({"margin-top":sh+"px" , "margin-left":sw+"px"});

}