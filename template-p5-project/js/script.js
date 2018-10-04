var x=0;
var y=0;
var xSq = 0;
var ySq = 0;
function setup() {
  createCanvas(500,500);
  background(51);
}

function draw() {
var sqW=20;
var sqH=sqW;
var sqDistX = xSq+sqW;
var sqDistY = ySq+sqW;

while(xSq<width){
rect(xSq,ySq,sqDistX,sqDistY);
xSq+=sqW;
  }

  ySq+=sqH;
rect(xSq,ySq,sqDistX,sqDistY);

}
