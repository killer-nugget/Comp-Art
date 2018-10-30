var yRotate=0;
// Pippin had 3 different rotations
// for each planet.

function setup(){
  createCanvas(500,500,WEBGL);

}

function draw(){
  background(0);
  rotateY(yRotate*0.5);
  fill(255,255,0);
  box(100);
  translate(150,10,0)
  rotateY(yRotate);
  fill(0,0,255);
  box(50);
  translate(70,10,0);
  rotateY(yRotate*2);
  fill(150,150,150);
  box(25);

  yRotate+=radians(1);

}
