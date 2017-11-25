var gameWidth = 1200;
var gameHeight = 400;

var mob;
var platformController;

function setup(){
	createCanvas(gameWidth, gameHeight);
	mob = new Mob();

	platformController = new PlatformController();

}


function update(){

  mob.update();
	platformController.update();

}


function draw(){
	background(51);
	mob.draw();
	platformController.draw();
	

	update();
}
