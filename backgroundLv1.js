var backgroundLv1 = document.getElementById("backgroundLv1").getContext ("2d");

var backSkyX1 = 0,
	backSkyX2 = 1000;

function backgroundSky1(){
	var sky = new Image();
	sky.src = "images/backgroundSky.jpg";
	sky.onload = function(){
		backgroundLv1.drawImage(sky,backSkyX1,0);
	}
}

function backgroundSky2(){
	var sky = new Image();
	sky.src = "images/backgroundSky.jpg";
	sky.onload = function(){
		backgroundLv1.drawImage(sky,backSkyX2,0);
	}
}

setInterval(function(){
	if(backSkyX1 == -1000){
		backSkyX1 = 1000;
	};
	if(backSkyX2 == -1000){
		backSkyX2 = 1000;
	};
	backSkyX1 -= .5;
	backSkyX2 -= .5;
	backgroundSky1();
	backgroundSky2();
},1000/60);
