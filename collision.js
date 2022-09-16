function collisionDetection(Worm){
	// Worm and Bricks collisionDetect
	for(var i=0; i<bricks.length; i++){
		var X = Worm.body[0].x - bricks[i].x;
		var Y = Worm.body[0].y - bricks[i].y;
		// R1 + R2 = sqrt((X2-X1)^2 + (Y2-Y1)^2 )
		if(Worm.size+ brickSize > Math.sqrt(Math.pow(X,2) + Math.pow(Y,2))){
			bricks.splice(i,1);
			i--;
			
			for(var j=0; j<3; j++){
				var newX = Worm.body[Worm.body.length-1].x;
				var newY = Worm.body[Worm.body.length-1].y;
				Worm.body.push({x:newX,y:newY});
			}	
		}	
	}
	// Worm and Posions collisionDetect
	for(var i=0; i<posions.length; i++){
		var X = Worm.body[0].x - posions[i].x;
		var Y = Worm.body[0].y - posions[i].y;
		// R1 + R2 = sqrt((X2-X1)^2 + (Y2-Y1)^2 )
		if(Worm.size+ P_InLine > Math.sqrt(Math.pow(X,2) + Math.pow(Y,2))){
			posions.splice(i,1);
			i--;
			if(Worm.body.length<=21)break;
			for(var j=0; j<6; j++){
				Worm.body.pop();
			}	
		}
	}
}
function borderCheck(Worm){
	if(Worm.body[0].x < 0 + Worm.size || Worm.body[0].x > display - Worm.size || Worm.body[0].y < 0 + Worm.size || Worm.body[0].y > canvas.height - Worm.size){
		alert(Worm.name+" died... Game Over!~");	
		document.location.reload();
		clearInterval(interval);
	}
}
function bodyCheck(Worm1, Worm2){
	for(var i=0; i < Worm1.body.length; i++){
		var X = Worm1.body[i].x - Worm2.body[0].x;
		var Y = Worm1.body[i].y - Worm2.body[0].y;
		if(Worm1.size + Worm2.size > Math.sqrt(Math.pow(X,2) + Math.pow(Y,2))){
			if(i==0){
				alert("Even!");
				clearInterval(interval);
				document.location.reload();
				break;
			}else{
				alert(Worm1.name+" win!!");
				clearInterval(interval);
				document.location.reload();
				break;
			}
		}
	}
}

