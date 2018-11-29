function Door (x,y,w,h,tl,tr,color){
  this.x=x;
  this.y=y;
  this.w=w;
  this.h=h;
  this.tl=tl;  /// top left of rect.
  this.tr=tr;  /// top right of rect.
  this.color=color;
}

Door.prototype.display= function(mX,mY){
  noStroke();
  fill(this.color);
  rectMode(CENTER);
  rect(mX,mY,this.w,this.h,this.tl,this.tr,0,0);
}
