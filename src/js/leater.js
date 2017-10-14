(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 750,
	height: 519,
	fps: 38,
	color: "#FFFFFF",
	webfonts: {},
	manifest: [
		{src:"src/img/main/letter.png", id:"letter"}
	]
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.letter = function() {
	this.initialize(img.letter);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,157,122);


// stage content:
(lib.leater = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// letter
	this.instance = new lib.letter("synched",0);
	this.instance.setTransform(610.2,381.6,0.549,0.549,0,0,0,78.5,61);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.64,scaleY:0.64,guide:{path:[610.1,381.5,585.7,337.5,563.6,316.8]}},8).to({scaleX:0.6,scaleY:0.6,rotation:69.2,guide:{path:[563.6,316.8,551.4,305.3,539.9,301,507.7,289,447.5,302.8,437,305.2,427.3,308.4]}},24).to({regX:78.2,regY:60.9,scaleX:0.1,scaleY:0.1,rotation:105,x:348.1,y:361.6,alpha:0},23,cjs.Ease.get(1)).wait(1).call(function(){
		action.main_finish();
	}));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(942.1,607.6,86.2,67);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;