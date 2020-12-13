//push code to github and send to mr. sasson for problems
//how to scale all planets individually
//testing
let stars = [];
let me = [];
let moon = [];
let rocket = [];
let planeta = [];
let planetb = [];
let planetc = [];
let planetd = [];
let planete = [];
let planetf = [];


function setup() {
  createCanvas(1000, 700);
  me = new Rocket(width/2, 300, 3);
}

function draw(){
    background(8, 39, 89);

    me.moveMe();

  if (frameCount % 25 == 0) {//star
      let  s = new Star(random(0,500), 0, -3);
      stars.push(s);
      console.log(stars);
    }

  for (let i = 0; i < stars.length; i++) {
          stars[i].moveStar();
    }

    if (frameCount % 100 == 0) {//planeta
        let  a = new Planeta(random(0,500), 0, -5);
        planeta.push(a);
        console.log(planeta);
      }

    for (let i = 0; i < planetb.length; i++) {
            planeta[i].movePlaneta();
      }

    if (frameCount % 200 == 0) {//planetb
          let  b = new Planetb(random(0,500), 0, -.5);
          planetb.push(b);
          console.log(planetb);
        }

    for (let i = 0; i < planetb.length; i++) {
              planetb[i].movePlanetb();
        }

    if (frameCount % 150 == 0) {//planetc
              let  c = new Planetc(random(0,500), 0, -2);
              planetc.push(c);
              console.log(planetc);
            }

    for (let i = 0; i < planetc.length; i++) {
                  planetc[i].movePlanetc();
            }
    if (frameCount % 75 == 0) {//planetd
        let  d = new Planetd(random(0,500), 0, -2);
        planetd.push(d);
        console.log(planetd);
            }

    for (let i = 0; i < planetd.length; i++) {
        planetd[i].movePlanetd();
          }

    if (frameCount % 75 == 0) {//planete
    let  e = new Planete(random(0,500), 0, -2);
    planete.push(e);
    console.log(planete);
      }

    for (let i = 0; i < planete.length; i++) {
    planete[i].movePlanete();
        }

    if (frameCount % 75 == 0) {//planetf
      let  f = new Planetf(random(0,500), 0, -2);
      planetf.push(f);
      console.log(planetf);
        }

    for (let i = 0; i < planetf.length; i++) {
      planetf[i].movePlanetf();
          }

    drawThings(stars);
    drawThings(moon);
    drawThings(me);
    drawThings(planeta);
    drawThings(planetb);
    drawThings(planetc);
    drawThings(planetd);
    drawThings(planete);
    drawThings(planetf);
}

function drawThings(list) {
  for(let i = 0; i < list.length; i++ ){
    list[i].draw();
  }
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
    fill(70,150,200)
    ellipse(500,300,20)
  }

  moveStar(){
    this.x = this.x+ this.speed;
    this.y = this.y+ this.speed;
  }
}

  //bounceStars(){ set to something that makes stars disapear
  //  if (this.x >= me.x-10 && this.x <= me.x+10 && this.y > me.y-40 && this.y < me.y+80){
        //  this.speed = -this.speed;
  //   }
//  }
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

 moveMoon(){
     this.x = this.x+ this.speed;
     this.y = this.y+ this.speed;
  }
}

class Planeta{

  constructor(x,y, speed){
        this.x = x;
        this.y = y;
        this.speed = speed;
  }

  draw(){
    strokeWeight(0.0)
    ellipse(400,400,250,50)
    fill(8, 39, 89)
    ellipse(400,400,230,30)
    fill(224, 141, 65)
    ellipse(400,400,175)
}

  movePlaneta(){
    this.x = this.x+ this.speed;
    this.y = this.y+ this.speed;
  }
}

class Planetb{

  constructor(x,y, speed){
        this.x = x;
        this.y = y;
        this.speed = speed;
      }

  draw(){
  fill("lavender");
  ellipse(150,150,200);
  fill("purple");
  ellipse(130,120,40,30);
  ellipse(180,190,40,30);
  }
  movePlanetb(){
    this.x = this.x+ this.speed;
    this.y = this.y+ this.speed;
  }
}

class Planetc{
    constructor(x,y, speed){
          this.x = x;
          this.y = y;
          this.speed = speed;
        }

draw(){
    fill("crimson");
    ellipse(300,200,200);
    fill("pink");  ellipse(180,250,100,40);
    ellipse(330,160,90,30);
  }
  movePlanetc(){
    this.x = this.x+ this.speed;
    this.y = this.y+ this.speed;
  }
}

class Planetd{

  constructor(x,y, speed){
        this.x = x;
        this.y = y;
        this.speed = speed;
  }

  draw(){
  fill("turquoise");
  ellipse(200,400,200);
  fill("blue");
  ellipse(160,380,50,60);
  ellipse(250,420,80,40);
  ellipse(160,450,50)
  }
  movePlanetd(){
    this.x = this.x+ this.speed;
    this.y = this.y+ this.speed;
  }
}

class Planete{

  constructor(x,y, speed){
        this.x = x;
        this.y = y;
        this.speed = speed;
  }

  draw(){
  fill("yellow");
  ellipse(250,200,200);
  fill("gold");
  ellipse(310,180,50,40);
  ellipse(210,220,40,100);
  ellipse(270,250,50)
  }

  movePlanete(){
    this.x = this.x+ this.speed;
    this.y = this.y+ this.speed;
  }
}

class Planetf{

  constructor(x,y, speed){
        this.x = x;
        this.y = y;
        this.speed = speed;
  }

  draw(){
  fill("orange");
  ellipse(200,350,200);
  fill("yellow");
  ellipse(260,330,50,60);
  ellipse(150,370,80,40);
  ellipse(230,400,50)
  }
  movePlanetf(){
    this.x = this.x+ this.speed;
    this.y = this.y+ this.speed;
  }
}
