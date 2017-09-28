var movObjs = document.getElementById("movObjs").getContext ("2d");

//Основной объект
	//координаты положения основного объекта
var mainX = 0,
	mainY = 200,
	//скорость основного объекта
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
};
// Конструктор для вражеских объектов
var Enemy = function(){
	this.param = {
		x: 1000,
		y: 200,
		speed: 2,
		bottomLimit: 400,
		topLimit: 200
	}
};
Enemy.prototype.moving = function(){
		var img = new Image();
		img.src = "images/airplane02.png";
		movObjs.drawImage(img,this.param.x,this.param.y);
		this.param.x -= this.param.speed;
		if (this.param.x < -100){
			this.param.x = 1000;
		}
		this.enMoveUp = function(){
			this.param.y -= this.param.speed;
		}
		this.enMoveDown = function(){
			this.param.y += this.param.speed;
		}
		switch(this.param.y){
			case this.param.bottomLimit: this.moveSwitch = "up"; break;
			case this.param.topLimit: this.moveSwitch = "down"; break;
		}
		switch(this.moveSwitch){
			case "up": this.enMoveUp(); break;
			case "down": this.enMoveDown(); break;
		}
	};
//Создание вражеских объектов
var enemy1 = new Enemy();
var enemy2 = new Enemy();
	enemy2.param.x = 1366;
	enemy2.param.bottomLimit = 200;
	enemy2.param.topLimit = 0;
var enemy3 = new Enemy();
	enemy3.param.y = 100;
	enemy3.param.x = 1733;
	enemy3.param.bottomLimit = 300;
	enemy3.param.topLimit = 100;

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
	enemy1.moving();
	enemy2.moving();
	enemy3.moving();
	Airplane.shoot();
	requestAnimationFrame(engineMove);
}




window.onload = function(){
	window.onkeydown = function(event){
		keyDown[event.keyCode] = true;
	};
	window.onkeyup = function(event){
		keyDown[event.keyCode] = false;
	};
	engineMove();
}
