//Door
// Draws a door from a specific color and draws it to the smallest possible
// dimension and darkens it util black.
// It's an attempt to take a step from <<proper>> photography.
// simple form --> stoic form
// By Carlos Giron-Bran.
var doors=[];
var c;

function setup(){
  c =createCanvas(1200,3200);
  c;
  //background(6,109,129); (blue and red) -- just in case i need it back.
  background(233,161,255);
 var colorMap=map(255,0,255,0,600);

  for (var i = 0; i < colorMap; i++) {
//mapping colors so you can have more than just pure colors
    var mapRed=map(255,0,255,0,233)-(i*0.4);
    var mapGreen=map(255,0,255,0,161)-(i*0.4);
    var mapBlue=map(255,0,255,0,255)-(i*0.4);
    var mapAlpha=map(255,0,255,0,0)+(i*0.4);

   doors.push(new Door(width/2,height/2,1000-(i*1.5),1400-(i*1.5),600,600,color(mapRed,mapGreen,mapBlue)));
  }
  for (var i = 0; i < doors.length; i++) {
    doors[i].display((width/2),(height/2));
  }
  saveCanvas(c, 'myCanvas', 'png');
}
