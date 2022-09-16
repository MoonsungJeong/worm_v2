function drawHowToP1(){
	ctx.font = "16px Arial";
	ctx.fillStyle = "#0095DD";
	ctx.fillText("P1: "+(p1.body.length-21)/3, display+10,30);
	ctx.fillText("boost: ↑", display+10,50);
	ctx.fillText("right: →", display+10,70);
	ctx.fillText("left  : ←", display+10,90);				
}
function drawHowToP2(){
	ctx.font = "16px Arial";
	ctx.fillStyle = "#FF3300";
	ctx.fillText("P2: "+(p2.body.length-21)/3, display+10,110);
	ctx.fillText("boost: w", display+10,130);
	ctx.fillText("right: d", display+10,150);
	ctx.fillText("left  : a", display+10,170);
}
function Display(){
	ctx.font = "16px Arial";
	ctx.fillStyle = "#111111";
	ctx.fillText("Victory ", display+10,200);
	ctx.fillText("1.longer 30", display+10,220);
	ctx.fillText("2.Kill Worm", display+10,240);
	ctx.fillText("●:food +1", display+10,260);
	ctx.fillText("★:posion -2", display+7,280);
}
function condition(){
	if((p1.body.length-21)/3 == 30){
		alert(p1.name+" became Dragon!! "+p1.name+" win!!");
		clearInterval(interval);
		document.location.reload();
	}
	if((p2.body.length-21)/3 == 30){
		alert(p2.name+" became Dragon!! "+p2.name+" win!!");
		clearInterval(interval);
		document.location.reload();
	}
}
