
function Square(x,y,size) {
  this.x= x;
  this.y= y;
  this.size= size;
}

Square.prototype.display= function () {
  rectMode(CENTER);
  fill(random(255),random(255),random(255),255);
  noStroke();
  rect(this.x,this.y, this.size, this.size);

}
