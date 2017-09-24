var backgroundLv3 = document.getElementById("backgroundLv3").getContext ("2d");

var backWoodsX1 = 0,
	backWoodsX2 = 1000;

function backgroundWoods1(){
	var woods = new Image();
	woods.src = "images/backgroundwoods.png";
	backgroundLv3.drawImage(woods,backWoodsX1,300);
}

function backgroundWoods2(){
	var woods = new Image();
	woods.src = "images/backgroundwoods.png";
	backgroundLv3.drawImage(woods,backWoodsX2,300);
}

setInterval(function(){
	backgroundLv3.clearRect(0,0,1000,500);
	if(backWoodsX1 == -1000){
		backWoodsX1 = 1000;
	}
	if(backWoodsX2 == -1000){
		backWoodsX2 = 1000;
	}
	backWoodsX1 -= 2;
	backWoodsX2 -= 2;
	backgroundWoods1();
	backgroundWoods2();
},1000/60)
