var canvas = document.getElementById('c1');
var ctx = canvas.getContext('2d');
var radio = document.getElementsByName('choice');
var fig = document.getElementsByName('choice1');
var rng = document.getElementById('range1');
var radius = 25;
ctx.fillRect(50, 20, 50, 50);
var a = rng.value;

function changeColor(){
	
	if(radio[0].checked){
		ctx.fillStyle = 'red';	
	}else if(radio[1].checked){
		ctx.fillStyle = 'green';
	}else if(radio[2].checked){
		ctx.fillStyle = 'blue';
	}
	changeFigure();
}

function changeFigure(){
	if (fig[0].checked) {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.fillRect(50, 20, 50, 50);
	}else if(fig[1].checked){
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.arc(75,45,radius,0,2*Math.PI);
		ctx.stroke();
		ctx.fill();
	}
}

var x = 100;
	y = 45;
	delay = 1000;
	edge = 250;
	b = true;
draw = function(){	
	ctx.beginPath();
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	if (fig[0].checked) {
		ctx.fillRect(x, y, 50, 50);
	}else if(fig[1].checked){
		ctx.closePath();
		ctx.arc(x,y,radius,0,2*Math.PI);
		ctx.stroke();
		ctx.fill();
	}
	if (x < 500 && b == true){
		if (x >= 240){b=false;}
		x = x + rng.value/10;
	}else {
		if (x <= 10){b=true;}
		x =x -rng.value/10;
	}
	console.log(rng.value);
	window.requestAnimationFrame(draw);
}

draw();











