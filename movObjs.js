var movObjs = document.getElementById("movObjs").getContext ("2d");

//Основной объект
	//координаты положения основного объекта
var mainY = 200,
	mainX = 0,
	//скорость объекта
	mainSpeed = 4;
var shootX1 = mainX+95,
	shootY1 = mainY+80;

function Airplane(){
	var img = new Image();
	img.src = "images/airplane01.png";
	movObjs.drawImage(img,mainX,mainY);

	Airplane.shoot = function(){
		movObjs.fillStyle = "black";
		if(shootX1 > 1000){
			shootX1 = mainX+95;
			shootY1 = mainY+80;
		}
		shootX1 += 10;
		movObjs.fillRect(shootX1-10,shootY1,10,4);
		movObjs.fillRect(shootX1,shootY1-20,10,4);
	}
}

Airplane();
//Звуки
/*
var soundAirplane = document.getElementById("airplanesound");
soundAirplane.play()
setInterval(function(){
	soundAirplane.currentTime = 0;
	soundAirplane.play();
	console.log("repeat");
	}, 13000
);*/
function soundShot(){
	var sound = document.getElementById("shot");
	setInterval(function(){
		sound.currentTime = 0;
		sound.play();
	},510)
}

//Движок
var keys = {
	"Space":32,
	"ArrowLeft":37,
	"ArrowUp":38,
	"ArrowRight":39,
	"ArrowDown":40
}
var keyDown = {};

function isKeyDown (keyName){
	return  keyDown[keys[keyName]] == true;
}

function moveRight(){
	if (mainX < 900) {
		mainX += mainSpeed;
		movObjs.clearRect(0,0,1000,500);
		Airplane();
	}
}
function moveLeft(){
	if(mainX>0){
		mainX -= mainSpeed;
		movObjs.clearRect(0,0,1000,500);
		Airplane();
	}
}
function moveDown(){
	if(mainY<400){
		mainY += mainSpeed;
		movObjs.clearRect(0,0,1000,500);
		Airplane();
	}
}
function moveUp(){
	if(mainY>0){
		mainY -= mainSpeed;
		movObjs.clearRect(0,0,1000,500);
		Airplane();
	}
}

function engineMove(){

	movObjs.clearRect(0,0,1000,500);
	Airplane();

	if(isKeyDown("ArrowUp")){
		moveUp();
	}
	if(isKeyDown("ArrowDown")){
		moveDown();
	}
	if(isKeyDown("ArrowLeft")){
		moveLeft();
	}
	if(isKeyDown("ArrowRight")){
		moveRight();
	}
	Airplane.shoot();
	requestAnimationFrame(engineMove);
}




window.onload = function(){
	window.onkeydown = function(event){
		keyDown[event.keyCode] = true;
		if (event.keyCode == 32) {
			console.log("выстрел");
		};
	};
	window.onkeyup = function(event){
		keyDown[event.keyCode] = false;
	};
	engineMove();
}
