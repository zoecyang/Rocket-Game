//create a variable called b to hold one ball

class Square {
  constructor(x,y,color){
   this.x = x;
       this.y = y;
          this.color = color;
   }
   moveSquare(){
   	   this.x = this.x+2;
   	   this.y = this.y+.5;
     }

     drawSquare(){
    	   stroke(0);
    	   fill(this.color);
         rect(this.x,this.y,20,20);
	}
}

let b
let anotherSquare;

function setup() {
  createCanvas(800, 400);

  b = new Square(0, 100,"red");
  anotherSquare = new Square(200,20,"green");
  c = new Square(50,100,"blue")
  // construct the ball using the 'new' keyword
}

function draw(){
	background(150,225,200);
    	   stroke(0);
         b.moveSquare();
         b.drawSquare();
         c.moveSquare();
         c.drawSquare();
         anotherSquare.moveSquare();
         anotherSquare.drawSquare();
}



 //draw the ball called b (go look in the Ball class for the drawBall function)
 //move the ball called b (go look in the Ball class for the moveBall function)

//ball class from which to create new balls with similar properties.
