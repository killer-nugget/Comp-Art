
function Square(x,y,size,color) {
  this.x= x;
  this.y= y;
  this.size= size;
  this.color= color;
}

Square.prototype.display= function () {
  rectMode(CENTER);
  fill(this.color);
  noStroke();
  rect(this.x,this.y, this.size, this.size);

}
