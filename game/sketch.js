let stars = [];

let me = [];

let planet = [];

let moon = [];

function setup() {
  createCanvas(500, 400);
  me = new rocket(width/2, 300, 3);
}

function draw(){
    background(8, 39, 89);

    me.drawMe();
    me.moveMe();
}

//if (frameCount % 25 == 0) {
    //let  b = new Stars(width, random(0,height), -3);
  //  stars.push(b);
  //  console.log(stars); //print the balls array to the console
//  } acts for when the stars enter screen

class planet(){

  drawPlanet(){
    strokeWeight(0.0)
    ellipse(200,200,250,50)
    fill(8, 39, 89)
    ellipse(200,200,230,30)
    fill(224, 141, 65)
    circle(200,200,175)
}
}

class moon(){

  drawMoon(){
    strokeWeight(0.0)
    fill(232, 230, 230)
    ellipse(200,200,200)
    fill(204, 198, 198)
    ellipse(170,240,55,60);//bottom left
    ellipse(270,200,20,50)//right
    ellipse(160,140,50,35)//top left
    ellipse(230,270,40,20)//bottom
    ellipse(120,230,10,30)//far bottom left
    ellipse(250,130,20,25)
  }
}

class rocket {
  constructor(x,y, speed){ //every avatar needs an x value, a y value, and a speed
        this.x = x;
        this.y = y;
        this.speed = speed;
  }
}

drawMe(){
  strokeWeight(1);
stroke(51);
fill(6, 24, 145);
circle(250,160,80);//window for avatar
fill("white");
circle(247,160,20); //body
fill(255, 201, 255);
arc(200, 170, 100, 260, 1.589, HALF_PI);//rocket
//arc(50, 50, 80, 80, 0, PI + QUARTER_PI, CHORD);
//arc(200, 100, 80, 80, -100, PI + QUARTER_PI, PIE);
fill(255, 226, 201);
circle(270,160,25);//head

fill("white");
circle(200,130,40);// window on rocket top
circle(200,185,40); //window on rocket middle (last window is 6 lines lower)

noStroke();
fill(255, 201, 255);
triangle(130, 345, 200, 205, 270, 345);//rocket jets
strokeWeight(1);
stroke(51);
fill("white");
circle(200,240,40);//window on rocket last

fill("orange");
triangle(130, 345, 155, 390, 174, 345);
triangle(175, 345, 200, 390, 222, 345);
triangle(222, 345, 245, 390, 269, 345);
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
