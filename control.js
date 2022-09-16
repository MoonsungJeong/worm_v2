var mousePressed = false;
var upPressed = false;
var rightPressed = false;
var leftPressed = false;
var wPressed = false;
var aPressed = false;
var dPressed = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);
document.addEventListener("mousedown", mouseDownHandler, false);
document.addEventListener("mouseup", mouseUpHandler, false);

function mouseDownHandler(e){
	mousePressed = true;
}
function mouseUpHandler(e){
	mousePressed = false;
}
function mouseMoveHandler(e){
	var mouseX = e.clientX - canvas.offsetLeft;
	var mouseY = e.clientY - canvas.offsetTop;
	if(mouseX > 0 && mouseX < display && mouseY > 0 && mouseY < display){
		angle = toDegree(Math.atan2(mouseY-p1.body[0].y,mouseX-p1.body[0].x));
		if(angle < 0){angle+=360;}
		p1.degree = angle;
	}
}
function keyUpHandler(e){
	if(e.keyCode == 39){
		rightPressed = false;
	}
	else if(e.keyCode == 37){
		leftPressed = false;
	}
	else if(e.keyCode == 38){
		upPressed = false;
	}
	
	if(e.keyCode == 68){
		dPressed = false;
	}
	else if(e.keyCode == 65){
		aPressed = false;
	}
	else if(e.keyCode == 87){
		wPressed = false;
	}
}
function keyDownHandler(e){
	if(e.keyCode == 39){
		rightPressed = true;
	}
	else if(e.keyCode == 37){
		leftPressed = true;
	}
	else if(e.keyCode == 38){
		upPressed = true;
	}
	
	if(e.keyCode == 68){
		dPressed = true;
	}
	else if(e.keyCode == 65){
		aPressed = true;
	}
	else if(e.keyCode == 87){
		wPressed = true;
	}
}
function control(){
	//Worm control
	if(rightPressed){
		p1.degree+=2.5;
	}else if(leftPressed){
		p1.degree-=2.5;
	}
	if(upPressed){
		p1.accel = 2;
	}else if(mousePressed){
		p1.accel = 2;
	}else if(!upPressed){
		p1.accel = 1;
	}else if(!mousePressed){
		p1.accel = 1;
	}
	// Snake control
	if(dPressed){
		p2.degree+=2.5;
	}
	else if(aPressed){
		p2.degree-=2.5;
	}
	if(wPressed){
		p2.accel = 2;
	}else if(!wPressed){
		p2.accel = 1;
	}
	
	
}