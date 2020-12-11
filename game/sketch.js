//how do i get game to show in local host, its only showing the code
let star = [];

let me = [];

let planet = [];

let moon = [];

let rocket = [];


function setup() {
  createCanvas(500, 400);
  me = new Rocket(width/2, 300, 3);
}

function draw(){
    background(8, 39, 89);

    me.moveMe();

  if (frameCount % 25 == 0) {
      let  s = new Star(random(0,500), 0, -3);
      stars.push(s);
      console.log(stars);
    }

  for (let i = 0; i < stars.length; i++) {
          stars[i].drawStar();
          stars[i].moveStar();
      //    stars[i].bounceStar(); set to something that makes stars disapear
    }

    drawThings(Planet);
    drawThings(Star);
    drawThings(Moon);
    drawThings(Me);
}

function drawThings(list) {
  for(let i = 0; i < list.length; i++ ){
    list[i].draw();
  }
}

class Planet{

  constructor(x,y, speed){
        this.x = x;
        this.y = y;
        this.speed = speed;
  }

  draw(){
    strokeWeight(0.0)
    ellipse(200,200,250,50)
    fill(8, 39, 89)
    ellipse(200,200,230,30)
    fill(224, 141, 65)
    circle(200,200,175)
}

  //movePlanet(){
    //same code as stars
//  }
}

class Moon{
  constructor(x,y, speed){
        this.x = x;
        this.y = y;
        this.speed = speed;
  }

  draw(){
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

//  moveMoon(){
//same code as stars
//  }
}

class Rocket{
  constructor(x,y, speed){ //every avatar needs an x value, a y value, and a speed
        this.x = x;
        this.y = y;
        this.speed = speed;
  }

draw(){
  scale(.5)
  strokeWeight(1);
  stroke(51);
  fill(6, 24, 145);
  ellipse(250,160,80);//window for avatar
  fill("white");
  ellipse(247,160,20); //body
  fill(255, 201, 255);
  arc(200, 170, 100, 260, 1.589, HALF_PI);//rocket
  //arc(50, 50, 80, 80, 0, PI + QUARTER_PI, CHORD);
  //arc(200, 100, 80, 80, -100, PI + QUARTER_PI, PIE);
  fill(255, 226, 201);
  ellipse(270,160,25);//head

  fill("white");
  ellipse(200,130,40);// window on rocket top
  ellipse(200,185,40); //window on rocket middle (last window is 6 lines lower)

  noStroke();
  fill(255, 201, 255);
  triangle(130, 345, 200, 205, 270, 345);//rocket jets
  strokeWeight(1);
  stroke(51);
  fill("white");
  ellipse(200,240,40);//window on rocket last

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
}


class Star {

  constructor(x,y, speed){
		this.x = x;
    this.y = y;
    this.speed = speed;
	}

  draw(){//trade in code for stars later
    stroke(0);
    strokeWeight(1);
    fill(50,150,60);
    ellipse(this.x,this.y,10,10);
  }

  moveStar(){
    this.x = this.x+ this.speed;
    this.y = this.y+ this.speed;//does this have to do with the direction the stars go?
  }
}

  //bounceStars(){ set to something that makes stars disapear
  //  if (this.x >= me.x-10 && this.x <= me.x+10 && this.y > me.y-40 && this.y < me.y+80){
        //  this.speed = -this.speed;
  //   }
//  }

class Planetone{

  constructor(x,y, speed){
        this.x = x;
        this.y = y;
        this.speed = speed;
      }


  draw(){
    fill("lavender");
    ellipse(200,200,200);
  fill("purple");
  ellipse(180,150,90,30);
  ellipse(230,240,90,30);
  }
}

class Planettwo{

    constructor(x,y, speed){
          this.x = x;
          this.y = y;
          this.speed = speed;
        }


draw(){
    fill("crimson");
    ellipse(200,200,200);

    fill("pink");  ellipse(180,250,100,40);


    ellipse(230,160,90,30);
  }
}

class Planetthree{

  constructor(x,y, speed){
        this.x = x;
        this.y = y;
        this.speed = speed;
  }

  draw(){
    fill("turquoise");
  ellipse(200,200,200);
  fill("blue");  ellipse(160,180,50,60);
  ellipse(250,220,80,40);
  circle(160,250,50)
  }
}

class Planetfour{

  constructor(x,y, speed){
        this.x = x;
        this.y = y;
        this.speed = speed;
  }

  draw(){
    fill("yellow");
  circle(200,200,200);
  fill("gold");  ellipse(260,180,50,40);
  ellipse(160,220,40,100);
  circle(220,250,50)
  }
}

class Planetfive{

  constructor(x,y, speed){
        this.x = x;
        this.y = y;
        this.speed = speed;
  }

  draw(){
    fill("orange");
  circle(200,200,200);

fill("yellow");  ellipse(260,180,50,60);


ellipse(150,220,80,40);

  circle(230,250,50)
}
}
