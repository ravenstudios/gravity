function Platform(x, y, width){

  let height = 32;



  this.update = function(){

  }

  this.draw = function(){
    fill(0, 255, 0);
    rect(x, y, width, height);
  }

  this.getCords = function(){
    return{
      x:x,
      y:y,
      width:width,
      heigt:height
    }
  }
}
