//"use strict";

var movObjs = document.getElementById("movObjs").getContext ("2d");

var gameLevel = 0;

var counterDestroy = 0,
	counterMissed = 0;

function airplane(){

	airplane.x = 0;
	airplane.y = 200;
	airplane.shootX = airplane.x + 95;
	airplane.shootY = airplane.y + 80;
	airplane.speed = 3;

	airplane.draw = function(){
		var img = new Image();
		img.src = "images/airplane01.png";
		movObjs.drawImage(img,airplane.x,airplane.y);
	}

	airplane.moveRight = function(){
		if (airplane.x < 900) {
			airplane.x += airplane.speed;
			movObjs.clearRect(0,0,1000,500);
			airplane.draw();
		}
	}

	airplane.moveLeft = function(){
		if(airplane.x>0){
			airplane.x -= airplane.speed;
			movObjs.clearRect(0,0,1000,500);
			airplane.draw();
		}
	}

	airplane.moveDown = function(){
		if(airplane.y<400){
			airplane.y += airplane.speed;
			movObjs.clearRect(0,0,1000,500);
			airplane.draw();
		}
	}

	airplane.moveUp = function(){
		if(airplane.y>0){
			airplane.y -= airplane.speed;
			movObjs.clearRect(0,0,1000,500);
			airplane.draw();
		}
	}

	airplane.shoot = function(){
		movObjs.fillStyle = "black";
		if(airplane.shootX > 1000){
			airplane.shootX = airplane.x+95;
			airplane.shootY = airplane.y+80;
		}
		airplane.shootX += 15;
		movObjs.fillRect(airplane.shootX-10,airplane.shootY,10,4);
		movObjs.fillRect(airplane.shootX,airplane.shootY-20,10,4);
	}
};
airplane();
// Конструктор для вражеских объектов
var Enemy = function(){
	this.param = {
		x: 1000,
		y: 200,
		bottomLimit: 400,
		topLimit: 200
	}
};
Enemy.prototype.speed = 2;
Enemy.prototype.moving = function(){
		var img = new Image();
		img.src = "images/airplane02.png";
		movObjs.drawImage(img,this.param.x,this.param.y);
		this.param.x -= this.speed;
		if (this.param.x < -100){
			this.param.x = 1000;
			counterMissed += 1;
		}
		this.enMoveUp = function(){
			this.param.y -= this.speed;
		}
		this.enMoveDown = function(){
			this.param.y += this.speed;
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
	if((enemy1.param.x + 40) > airplane.shootX && (enemy1.param.x) < airplane.shootX && (enemy1.param.y + 110) > airplane.shootY && (enemy1.param.y + 10) < airplane.shootY){
		airplane.shootX = airplane.x+95;
		airplane.shootY = airplane.y+80;
		function crashEn1(){
			enemy1.param.x = 1200;
			enemy1.param.y = 200;
		};
		counterDestroy += 1;
		crashEn1();
	};
	if((enemy2.param.x + 40) > airplane.shootX && (enemy2.param.x) < airplane.shootX && (enemy2.param.y + 110) > airplane.shootY && (enemy2.param.y + 10) < airplane.shootY){
		airplane.shootX = airplane.x+95;
		airplane.shootY = airplane.y+80;
		function crashEn2(){
			enemy2.param.x = 1200;
			enemy2.param.y = 300;
		};
		crashEn2();
		counterDestroy += 1;
	};
	if((enemy3.param.x + 40) > airplane.shootX && (enemy3.param.x) < airplane.shootX && (enemy3.param.y + 110) > airplane.shootY && (enemy3.param.y + 10) < airplane.shootY){
		airplane.shootX = airplane.x+95;
		airplane.shootY = airplane.y+80;
		function crashEn3(){
			enemy3.param.x = 1200;
			enemy3.param.y = 100;
		};
		crashEn3();
		counterDestroy += 1;
	};
	if((enemy4.param.x + 40) > airplane.shootX && (enemy4.param.x) < airplane.shootX && (enemy4.param.y + 110) > airplane.shootY && (enemy4.param.y + 10) < airplane.shootY){
		airplane.shootX = airplane.x+95;
		airplane.shootY = airplane.y+80;
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
	if (counterMissed >= 500){
		movObjs.fillStyle = "rgba(255,140,95,0.5)";
		movObjs.fillRect(0,0,1000,500);
		movObjs.font = "bold 160px sans-serif";
		movObjs.fillStyle = "#740B0B";
		movObjs.fillText("GAME OVER", 10, 300);
		Enemy.prototype.speed = 0;
	}
};
//YouWin
function youWin(){
	if (counterDestroy >= 50){
		movObjs.fillStyle = "rgba(95,103,255,0.3)";
		movObjs.fillRect(0,0,1000,500);
		movObjs.font = "bold 160px sans-serif";
		movObjs.fillStyle = "#274CAA";
		movObjs.fillText("YOU WIN", 150, 300);
		Enemy.prototype.speed = 0;
	}
};
//Движок
var keys = {
	"Space":32,
	"ArrowLeft":37,
	"ArrowUp":38,
	"ArrowRight":39,
	"ArrowDown":40,
	"Enter": 13
};
var keyDown = {};

function isKeyDown (keyName){
	return  keyDown[keys[keyName]] == true;
};

function mainMenu(){
	movObjs.clearRect(0,0,1000,500);
	movObjs.fillStyle = "rgba(105,105,105,0.8)";
	movObjs.fillRect(0,0,1000,500);
	movObjs.fillStyle = "white";
	movObjs.font = "bold 30px sans-serif";
	movObjs.fillText("THE GAME", 420, 100);
	movObjs.font = "bold 60px sans-serif";
	movObjs.fillText("AIRPLANES DESTROYER", 130, 160);
	movObjs.font = "bold 20px sans-serif";
	movObjs.fillText("ИНСТРУКЦИЯ:", 130, 220);
	movObjs.font = "bold 15px sans-serif";
	movObjs.fillText("Для управления самолетом необходимо использовать клавиши управления курсором.", 130, 260);
	movObjs.fillText("Если вы пропустили 5 вражеских самолетов - вы проиграли.", 130, 280);
	movObjs.fillText("Если вы уничтожили 50 вражеских самолетов - вы выиграли.", 130, 300);
	movObjs.fillText("Для начала игры нажмите 'Enter'", 130, 320);
	var menu = requestAnimationFrame(mainMenu);
	if (isKeyDown("Enter")){
		cancelAnimationFrame(menu);
		gammeLevels();
	};

}


function gammeLevels(){

	movObjs.clearRect(0,0,1000,500);
	airplane.draw();

	if(isKeyDown("ArrowUp")){
		airplane.moveUp();
	}
	if(isKeyDown("ArrowDown")){
		airplane.moveDown();
	}
	if(isKeyDown("ArrowLeft")){
		airplane.moveLeft();
	}
	if(isKeyDown("ArrowRight")){
		airplane.moveRight();
	}
	enemy1.moving();
	enemy2.moving();
	enemy3.moving();
	enemy4.moving();
	airplane.shoot();
	crash();
	countDestroy();
	gameOver();
	youWin();
	requestAnimationFrame(gammeLevels);
};

window.onload = function(){
	window.onkeydown = function(event){
		keyDown[event.keyCode] = true;
	};
	window.onkeyup = function(event){
		keyDown[event.keyCode] = false;
	};
	mainMenu();
};
