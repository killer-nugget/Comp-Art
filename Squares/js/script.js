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
  background(59,58,2);

  palette = [
      color(127,0,0),
      color(255,76,76),
      color(255,0,0),
      color(127,38,38),
      color(204,0,0)
  ]
}

function draw(){
  var randomIndex= floor(random(0,palette.length));
  var randomColor=palette[randomIndex];
  squares = new Square (abs(mouseX),abs(mouseY),abs(random(50,250)),randomColor);

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
