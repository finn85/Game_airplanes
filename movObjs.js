var movObjs = document.getElementById("movObjs").getContext ("2d");

//Основной объект
	//координаты положения основного объекта
var mainX = 0,
	mainY = 200,
	//скорость основного объекта
	mainSpeed = 3;
var shootX1 = mainX+95,
	shootY1 = mainY+80;
var counterDestroy = 0,
	counterMissed = 0;

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
		speed: 4,
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
			counterMissed += 1;
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
	enemy2.param.y = 300;
	enemy2.param.x = 1275;
	enemy2.param.bottomLimit = 300;
	enemy2.param.topLimit = 0;
var enemy3 = new Enemy();
	enemy3.param.y = 100;
	enemy3.param.x = 1550;
	enemy3.param.bottomLimit = 300;
	enemy3.param.topLimit = 100;
var enemy4 = new Enemy();
	enemy4.param.x = 1825;
	enemy4.param.y = 350;
	enemy4.param.bottomLimit = 350;
	enemy4.param.topLimit = 50;

//Попадание пули во вражеский объект
function crash(){
	if((enemy1.param.x + 40) > shootX1 && (enemy1.param.x) < shootX1 && (enemy1.param.y + 110) > shootY1 && (enemy1.param.y + 10) < shootY1){
		shootX1 = mainX+95;
		shootY1 = mainY+80;
		function crashEn1(){
			enemy1.param.x = 1200;
			enemy1.param.y = 200;
		};
		counterDestroy += 1;
		crashEn1();
	};
	if((enemy2.param.x + 40) > shootX1 && (enemy2.param.x) < shootX1 && (enemy2.param.y + 110) > shootY1 && (enemy2.param.y + 10) < shootY1){
		shootX1 = mainX+95;
		shootY1 = mainY+80;
		function crashEn2(){
			enemy2.param.x = 1200;
			enemy2.param.y = 300;
		};
		crashEn2();
		counterDestroy += 1;
	};
	if((enemy3.param.x + 40) > shootX1 && (enemy3.param.x) < shootX1 && (enemy3.param.y + 110) > shootY1 && (enemy3.param.y + 10) < shootY1){
		shootX1 = mainX+95;
		shootY1 = mainY+80;
		function crashEn3(){
			enemy3.param.x = 1200;
			enemy3.param.y = 100;
		};
		crashEn3();
		counterDestroy += 1;
	};
	if((enemy4.param.x + 40) > shootX1 && (enemy4.param.x) < shootX1 && (enemy4.param.y + 110) > shootY1 && (enemy4.param.y + 10) < shootY1){
		shootX1 = mainX+95;
		shootY1 = mainY+80;
		function crashEn4(){
			enemy4.param.x = 1200;
			enemy4.param.y = 350;
		};
		crashEn4();
		counterDestroy += 1;
	};
}

//Счетчики
function countDestroy(){
	movObjs.font = "bold 30px sans-serif";
	movObjs.fillStyle = "white";
	movObjs.fillText("DESTROYED: " + counterDestroy, 10, 490);
	movObjs.fillText("MISSED: " + counterMissed, 300, 490);
};
//GameOver
function gameOver(){
	if (counterMissed >= 5){
		movObjs.font = "bold 160px sans-serif";
		movObjs.fillStyle = "#740B0B";
		movObjs.fillText("GAME OVER", 10, 300);
		enemy1.param.speed = 0;
		enemy2.param.speed = 0;
		enemy3.param.speed = 0;
		enemy4.param.speed = 0;
	}
};
//YouWin
function youWin(){
	if (counterDestroy >= 50){
		movObjs.font = "bold 160px sans-serif";
		movObjs.fillStyle = "#274CAA";
		movObjs.fillText("YOU WIN", 150, 300);
		enemy1.param.speed = 0;
		enemy2.param.speed = 0;
		enemy3.param.speed = 0;
		enemy4.param.speed = 0;
	}
};
//Движок
var keys = {
	"Space":32,
	"ArrowLeft":37,
	"ArrowUp":38,
	"ArrowRight":39,
	"ArrowDown":40
};
var keyDown = {};

function isKeyDown (keyName){
	return  keyDown[keys[keyName]] == true;
};

function moveRight(){
	if (mainX < 900) {
		mainX += mainSpeed;
		movObjs.clearRect(0,0,1000,500);
		Airplane();
	}
};
function moveLeft(){
	if(mainX>0){
		mainX -= mainSpeed;
		movObjs.clearRect(0,0,1000,500);
		Airplane();
	}
};
function moveDown(){
	if(mainY<400){
		mainY += mainSpeed;
		movObjs.clearRect(0,0,1000,500);
		Airplane();
	}
};
function moveUp(){
	if(mainY>0){
		mainY -= mainSpeed;
		movObjs.clearRect(0,0,1000,500);
		Airplane();
	}
};

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
	enemy4.moving();
	Airplane.shoot();
	crash();
	countDestroy();
	gameOver();
	youWin();
	requestAnimationFrame(engineMove);
};

window.onload = function(){
	window.onkeydown = function(event){
		keyDown[event.keyCode] = true;
	};
	window.onkeyup = function(event){
		keyDown[event.keyCode] = false;
	};
	engineMove();
};
