
function PlatformController(){

  let platforms = [];

  platforms.push(new Platform(200, 300, 400));
  platforms.push(new Platform(100, 390, 400));

  this.update = function(){

    for (var i = 0; i < platforms.length; i++) {
      platforms[i].update();
    }
  }

  this.draw = function(){
    for (var i = 0; i < platforms.length; i++) {
      platforms[i].draw();
    }
  }

  this.getPlatforms = ()=>{
    return platforms;
  }
}
