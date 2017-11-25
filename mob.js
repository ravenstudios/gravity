function Mob(){
  let x = 300;
  let y = 50;
  let size = 32;
  let speed = 0.6;
  // let gravity = true;
  let xVel = 0;
  let maxXVel = 3;
  let friction = -0.4;

  let dirRight = true;

  let gravity = 0.3;
  let yVel = 0;
  let maxYVel = 0;


  this.update = function(){

    this.falling();
    if(keyIsDown(RIGHT_ARROW)){
      dirRight = true;
      xVel += speed;
    }



    if(keyIsDown(LEFT_ARROW)){
      dirRight = false;
      xVel += -speed;
    }

    if(dirRight){
      xVel += friction;
    }

    else{
      xVel += -friction;
    }

    if(dirRight && xVel < 0){
      xVel = 0;
    }
    if(!dirRight && xVel > 0){
      xVel = 0;
    }

    x += xVel;


  }

  this.draw = function(){
    rect(x, y, size, size);
  }

  this.falling = function(){

    if(!this.isOnPlatform()){
      yVel += gravity;
      y += yVel;
    }



  }

  this.getCords = ()=>{
    return {
      x: x,
      y: y,
      size: size
    }
  }

  this.isOnPlatform = ()=>{
    let plats = platformController.getPlatforms();

    for (var i = 0; i < plats.length; i++) {
      let pc = plats[i].getCords();

      if(x + size > pc.x && x + size < pc.x + pc.width && y + size >= pc.y && y < pc.y + pc.height){
        y = pc.y - size;
        return true;
      }
    }
  }


}
