var backgroundLv2 = document.getElementById("backgroundLv2").getContext ("2d");

var backMountX1 = 0,
	backMountX2 = 1000;

function backgroundMount1(){
	var mount = new Image();
	mount.src = "images/backgroundmountains.png";
	backgroundLv2.drawImage(mount,backMountX1,250);
}

function backgroundMount2(){
	var mount = new Image();
	mount.src = "images/backgroundmountains.png";
	backgroundLv2.drawImage(mount,backMountX2,250);
}

setInterval(function(){
	backgroundLv2.clearRect(0,0,1000,500);
	if(backMountX1 == -1000){
		backMountX1 = 1000;
	}
	if(backMountX2 == -1000){
		backMountX2 = 1000;
	}
	backMountX1 -= 1;
	backMountX2 -= 1;
	backgroundMount1();
	backgroundMount2();
},1000/60)
