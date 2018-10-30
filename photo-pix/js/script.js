var self;

function preload(){
  self = loadImage('assets/images/self.png');
}

function setup(){
  pixelDensity(1);
  createCanvas (1000,800);
  background (0);

  self.loadPixels();

    for ( var y = 0 ; y < self.height ; y++ ){
      for ( var x = 0 ; x < self.width ; x++ ){
        var index = (x + y * self.width)*4;


      }

    }
  self.updatePixels();

}

function draw(){
  image(self,0,0);
}
