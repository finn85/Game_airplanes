var background = document.getElementById("background").getContext ("2d");

var backSkyX1 = 0,
	backSkyX2 = 1000,
	backMountX1 = 0,
	backMountX2 = 1000,
	backWoodsX1 = 0,
	backWoodsX2 = 1000;
//Небо
function backgroundSky1(){
	var sky = new Image();
	sky.src = "images/backgroundSky.jpg";
	background.drawImage(sky,backSkyX1,0);
}
function backgroundSky2(){
	var sky = new Image();
	sky.src = "images/backgroundSky.jpg";
	background.drawImage(sky,backSkyX2,0);
}
//Горы
function backgroundMount1(){
	var mount = new Image();
	mount.src = "images/backgroundmountains.png";
	background.drawImage(mount,backMountX1,250);
}
function backgroundMount2(){
	var mount = new Image();
	mount.src = "images/backgroundmountains.png";
	background.drawImage(mount,backMountX2,250);
}
//Лес
function backgroundWoods1(){
	var woods = new Image();
	woods.src = "images/backgroundwoods.png";
	background.drawImage(woods,backWoodsX1,300);
}
function backgroundWoods2(){
	var woods = new Image();
	woods.src = "images/backgroundwoods.png";
	background.drawImage(woods,backWoodsX2,300);
}

function engineBackground(){
	background.clearRect(0,0,1000,500);
	backSkyX1 -= .5;
	backSkyX2 -= .5;
	backMountX1 -= 1;
	backMountX2 -= 1;
	backWoodsX1 -= 2;
	backWoodsX2 -= 2;
	if(backSkyX1 == -1000){
		backSkyX1 = 1000;
	};
	if(backSkyX2 == -1000){
		backSkyX2 = 1000;
	};
	if(backMountX1 == -1000){
		backMountX1 = 1000;
	};
	if(backMountX2 == -1000){
		backMountX2 = 1000;
	};
	if(backWoodsX1 == -1000){
		backWoodsX1 = 1000;
	};
	if(backWoodsX2 == -1000){
		backWoodsX2 = 1000;
	};
	backgroundSky1();
	backgroundSky2();
	backgroundMount1();
	backgroundMount2();
	backgroundWoods1();
	backgroundWoods2();

	requestAnimationFrame(engineBackground);
};

engineBackground();
