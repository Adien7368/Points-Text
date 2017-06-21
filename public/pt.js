
function Points(x,y,tarx,tary,ease){
	this.x = x;
	this.y = y;
	this.ease = ease||0.1;
	this.tarx = tarx;
	this.tary = tary;
}
Points.prototype.update = function(){
	var dx = this.tarx - this.x,
		dy = this.tary - this.y;
	this.x += dx*this.ease;
	this.y += dy*this.ease;
};

Points.prototype.show = function(){
	point(this.x,this.y);
};