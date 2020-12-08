let stars = [];

let me = [];

function setup() {
  createCanvas(500, 400);
  me = new rocket(width/2, 300, 3);
}

function draw(){
    background(8, 39, 89);

    me.drawMe();
    me.moveMe();
}

class rocket {
  constructor(x,y, speed){ //every avatar needs an x value, a y value, and a speed
        this.x = x;
        this.y = y;
        this.speed = speed;
  }
}

drawMe(){
  //code for rocket ship
}

moveMe(){
  if (keyIsDown(UP_ARROW)) { //if you hold the up arrow, move up by speed
     this.y -= this.speed;
  }


  if (keyIsDown(RIGHT_ARROW)){
    this.x += this.speed;
  }

  if (keyIsDown(LEFT_ARROW)){
    this.x -= this.speed;
  }
}

class stars {

  constructor(x,y, speed){
		this.x = x;
    this.y = y;
    this.speed = speed;
	}

  drawStars(){
    strokeWeight(1);
    fill(50,150,60);
    ellipse(this.x,this.y,20,20);//change to star shape later
  }

  moveStars(){
    this.x = this.x+ this.speed;
    this.y = this.y+.5;
  }

  bounceStars(){
      if (this.x >= me.x-10 && this.x <= me.x+10 && this.y > me.y-40 && this.y < me.y+80){
          this.speed = -this.speed;
      }
  }
}
