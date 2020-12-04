
//create an empty array called balls

let balls = [];
let b;
let c;

let square = [];
let a;
let z;

function setup() {
  createCanvas(800, 400);
  b = new Ball(0, 100);
  c = new Ball(50,100)
  a = new square(0,200);
  z = new square(50,200);

}

function draw(){
	background(220,150,100);
  b.moveBall();
  b.drawBall();
  c.moveBall();
  c.drawBall();
  a.moveSquare();
  z.drawBall();

//	draw all the balls in that array
	for (let i = 0; i < balls.length; i++) {
	    balls[i].drawBall();
      balls[i].moveBall();
	  }
  for (let i = 0; i <squares.length; i++){
    squares[i].drawSquare();
    squares[i].moveSquare();
  }
}

function keyPressed(){
  if (keyCode == DOWN_ARROW){
  let  b = new Ball(100, 100,"green");
balls.push(b);
print(balls);
} else if (keyCode == UP_ARROW){
  let c = new Ball(150,50,"blue");
  balls.push(c);
  print(balls);
}

  // todo:
  //every time you push a key, make a new ball from the ball class and add it to the balls array
}
  function keyPressed(){
    if (keyCode == a){
      let a = new Square(0,200);
      sqaures.push(a);
      print(squares);
    } else if (keyCode == z){
      let z = new Square(50,200);
        squares.push(z);
        print(squares);
    }
  }

//ball class from which to create new balls with similar properties.
class Ball {

	constructor(x,y){ //every ball needs an x value and a y value
		    this.x = x;
    		this.y = y;
	}

	drawBall(){  // draw a ball on the screen at x,y
    		stroke(0);
    		fill("green");
		    ellipse(this.x,this.y,10,10);
	}

	moveBall(){ //update the location of the ball, so it moves across the screen
		this.x = this.x+2;
		this.y = this.y+0;
	}
}

class Square {

  constructor(x,y){
    this.x = x;
    this.y = y;
  }

  drawSquare(){
    stroke(0)
    fill("blue")
    rect(this.x,this.y,20,20)
  }
  moveSquare(){
    this.x = this.x+5;
    this.y = this.y+1
  }
}

  // construct the ball using the 'new' keyword
