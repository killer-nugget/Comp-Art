/// DIY ART by Carlos Bran
/// People can make their own "abstarct art"
/// and save them

var palette;
var squares;
var c;
function setup(){
  noSmooth();
  c = createCanvas(1000,800);
  c;
  background(0);

  palette = [

  ]
}

function draw(){
  squares = new Square (abs(mouseX),abs(mouseY),abs(random(50,250)));

}

function mousePressed(){
  squares.display();
}

function keyPressed(){
  if (keyCode === UP_ARROW){
    console.log('down pressed');
    saveCanvas(c,"toile","png");
  }
}
