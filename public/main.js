
var font,canvas;
var Tpt = new TPoints();
var c_str='Avinash';
var str_arr = ['Hi','How','are','you?','I','am','program','made','by','Avinash','Thank','you'];
var step=0;
function preload(){
	font = loadFont('spaceage.otf');
}

function setup(){
	canvas = createCanvas(window.innerWidth,window.innerHeight-100);
	Tpt.init(font.textToPoints(str_arr[0],100,200,200),0.04);
	stroke(250,0,0);
	strokeWeight(5);
	canvas.mousePressed(dist_roy);
}

function dist_roy(){
	step++;
	if(step%2==1){
	if(str_arr.length>1){
		str_arr.splice(0,1);
	}
	Tpt.dess();
	}else{
	Tpt.init(font.textToPoints(str_arr[0],100,200,200),0.04);
	}
}


function draw(){
	background(255);
	Tpt.update();
	Tpt.show();
}

