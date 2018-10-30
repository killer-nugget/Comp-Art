
function Square(size) {
  this.x= mouseX;
  this.y= mouseY;
  this.size= size;
}

Square.prototype.display= function () {
  rectMode(CENTER);
  noStroke();
  fill(random(255),random(255),random(255),255);
  rect(this.x,this.y, this.size, this.size);

}
