function TPoints(){
	this.points = [{x:0,y:0}];
	this.dessamble = false;
}

TPoints.prototype.init = function(ft,ease){
	var pt = [];
	for(var i=0; i<ft.length; ++i){
		var tmp = this.points[i%this.points.length];
		pt.push(new Points(tmp.x,tmp.y,ft[i].x,ft[i].y,ease));
	}
	this.points = [];
	this.points = pt;
	this.dessamble = false;
};

TPoints.prototype.update = function(){
	for(var i=0 ; i<this.points.length ; ++i){
		this.points[i].update();
	}
	
};

TPoints.prototype.dess = function(){
	if(!this.dessamble){
		var pt = [];
		for(var i=0; i<this.points.length; ++i){
			var tmp = this.points[i];
			pt.push(new Points(tmp.x,tmp.y,0,0,this.ease));
		}

		var i=0,r=50;
		while(i<this.points.length){
			var angle=0;
			for(;i<this.points.length&&angle<2*Math.PI;++i){
				pt[i].tarx = width/2 + r*Math.cos(angle);
				pt[i].tary = height/2 + r*Math.sin(angle);
				angle+=Math.PI/18.00;
			}

			r += 10;
		}


		this.points = [{x:0,y:0}];
		this.points = pt;
		this.dessamble = true;
	}
};

TPoints.prototype.show = function(){
	for(var i=0 ; i<this.points.length; ++i){
		this.points[i].show();
	}
};

