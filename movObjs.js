var movObjs = document.getElementById("movObjs").getContext ("2d");

//Основной объект
	//координаты положения основного объекта
var mainY = 0,
	mainX = 0,
	//скорость объекта
	mainSpeed = 4;

var Muzzle = function(){
	var img = new Image();
	img.src = "images/airplane01.png";
	if (mainX == 0 && mainY == 0){
		img.onload = function(){
			movObjs.drawImage(img,mainX,mainY);
		}
	} else {
		movObjs.drawImage(img,mainX,mainY);
	}
}

Muzzle();

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

window.onload = function(){
	window.onkeydown = function(event){
		keyDown[event.keyCode] = true;
	};
	window.onkeyup = function(event){
		keyDown[event.keyCode] = false;
	};
	engine();
}

function moveRight(){
	if (mainX < 900) {
		mainX += mainSpeed;
		movObjs.clearRect(0,0,1000,500);
		Muzzle();
	}
}
function moveLeft(){
	if(mainX>0){
		mainX -= mainSpeed;
		movObjs.clearRect(0,0,1000,500);
		Muzzle();
	}
}
function moveDown(){
	if(mainY<400){
		mainY += mainSpeed;
		movObjs.clearRect(0,0,1000,500);
		Muzzle();
	}
}
function moveUp(){
	if(mainY>0){
		mainY -= mainSpeed;
		movObjs.clearRect(0,0,1000,500);
		Muzzle();
	}
}

function engine(){
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
	if(isKeyDown("Space")){
		console.log("piu-piu-piu");
	}

	requestAnimationFrame(engine);
}
