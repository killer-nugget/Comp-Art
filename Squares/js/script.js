
var squares;
var c;
function setup(){
  c = createCanvas(800,1000);
  c;
  background(0);
}

function draw(){
  squares = new Square (random(50,250));

  if (keyIsDown(UP_ARROW)){
  saveCanvas(c,"juste","jpg");
}
  else{
  return false;
  }
}

function mousePressed(){
  squares.display();
}
