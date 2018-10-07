var xL=15;
var yL=30;

function setup() {
  createCanvas(5,532);
  background(0);
}

function draw() {
// background(0);
writeLetter();
if(xL>width){
  xL=15;
  yL+=31;
  writeLetter();
  }
  if(yL>height){
    noLoop();
  }
 }

function writeLetter(){
  char=round(random(65,90));
  var rLetter= String.fromCharCode(char);
  fill(255);
  textAlign(CENTER);
  textSize(30);
  text(rLetter,xL,yL);
  xL+=30;
  }
