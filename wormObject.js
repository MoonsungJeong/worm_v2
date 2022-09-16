function drawWorm(Worm){
	for(var i=Worm.body.length-1; i>0; i--){
		ctx.beginPath();
		ctx.arc(Worm.body[i].x,Worm.body[i].y,Worm.size, 0, Math.PI*2, false);
		ctx.fillStyle = Worm.b_color;
		ctx.fill();
		ctx.closePath();
	}
	ctx.beginPath();
	ctx.arc(Worm.body[0].x,Worm.body[0].y,Worm.size, 0, Math.PI*2, false);
	ctx.fillStyle = Worm.h_color;
	ctx.fill();
	ctx.closePath();		
}
function wormMove(Worm){
	for(var i=Worm.body.length-1; i>0; i--){
		Worm.body[i].x = Worm.body[i-1].x;
		Worm.body[i].y = Worm.body[i-1].y;
	}
	Worm.body[0].x+=(Worm.accel*Math.cos(toRadians(Worm.degree)));
	Worm.body[0].y+=(Worm.accel*Math.sin(toRadians(Worm.degree)));
}
