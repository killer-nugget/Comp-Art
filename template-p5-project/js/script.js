var x=0;
var y=0;
var xSq = 0;
var ySq = 0;

function setup() {
  createCanvas(500,500);
  background(51);
}

function draw() {
var sqW=5;
var sqH=sqW;

while(xSq<width){
rect(xSq,ySq,sqW,sqH);
xSq+=sqW;
  }

  xSq=0;
  ySq+=sqH;

while(ySq<height && xSq<width){
  console.log('nextline');
  rect(xSq,ySq,sqW,sqH);
  xSq+=sqW;
}

}
