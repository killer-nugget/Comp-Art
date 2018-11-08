var doors=[];

function setup(){
  var c=createCanvas(800,800);
  noSmooth();
  c;
  background(6,109,129);

 var colorMap=map(199,0,199,0,255);


  for (var i = 0; i < 199; i++) {

   doors.push(new Door(width/2,height/2,200-(i+2),300-(i+2),100,100,color(colorMap+i,33+i,0,colorMap-i)));
  }


  for (var i = 0; i < doors.length; i++) {
    doors[i].display((width/2),(height/2));
  }

saveCanvas(c, 'myCanvas', 'png');

}

function draw(){

}
