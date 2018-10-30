
var squares;
var c;
function setup(){
  c = createCanvas(800,1000);
  c;
  background(0);
}

function draw(){
  squares = new Square (random(50,250));

}

function mousePressed(){
  squares.display();
}

function keyPressed(){
  if (keyCode === UP_ARROW){
    console.log('down pressed');
    saveCanvas(c,"toile","jpg");
  }
}
