function deletePosions(){//10~15가 적당
	if(posions.length == 15){
		posions.shift();
	}
}
		
function makePosions(){
	var pX = Math.floor(Math.random()*(display-3)+1);	
	var pY = Math.floor(Math.random()*(display-3)+1);
	posions.push({x:pX, y:pY});
}
		
// star.html 이용한 함수
function drawPosions(){
	for(var i=0; i<posions.length; i++){	
		var rot=Math.PI/2*3;
	    var x;
	    var y;
	    var step=Math.PI/spikes;
			    
	    ctx.beginPath();
		ctx.moveTo(posions[i].x,posions[i].y-P_OutLine);
	    for(j=0;j<spikes;j++){
		    x=posions[i].x+Math.cos(rot)*P_OutLine;
		    y=posions[i].y+Math.sin(rot)*P_OutLine;
		    ctx.lineTo(x,y);
		    rot+=step;
				
		    x=posions[i].x+Math.cos(rot)*P_InLine;
		    y=posions[i].y+Math.sin(rot)*P_InLine;
		    ctx.lineTo(x,y);
		    rot+=step;
	    }
	    ctx.lineTo(posions[i].x,posions[i].y-P_OutLine);
	    ctx.fillStyle="#108720";
	    ctx.fill();
	    ctx.closePath();
	}	
}
function makeBricks(){
	var bX = Math.floor(Math.random()*(display-3)+1);	
	var bY = Math.floor(Math.random()*(display-3)+1);
	var ran = Math.round(Math.random()*0xffffff).toString(16);	// 랜덤 색을 만든다.
	bricks.push({x:bX, y:bY, color:"#"+ran});				
}
function drawBricks(){
	for(var i=0; i<bricks.length; i++){	
		ctx.beginPath();
		ctx.arc(bricks[i].x,bricks[i].y,brickSize, 0, Math.PI*2, false);
		ctx.fillStyle = bricks[i].color;
		ctx.fill();
		ctx.closePath();
	}
}