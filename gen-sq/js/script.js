var bStartx=0;
var bStarty=0;
var bSizeW=100;
var bSizeH=bSizeW;
var w=255;
var b=0;
function setup() {
  createCanvas(windowWidth,windowHeight);
  background(51);
}

function draw() {
drawBeed();
if(bStartx>width){
  bStartx=0;
  bStarty+=bSizeH;
}
if(bStarty>height){
  console.log('the end');
  noLoop();
}

}
function drawBeed(){
    fill(random(255),random(255),random(255));
    noStroke();
    rect(bStartx,bStarty,bSizeW,bSizeH);
    bStartx+=bSizeW;

  }
