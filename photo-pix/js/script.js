function setup(){

  pixelDensity(1);
  var c= createCanvas (1000,800);
  c
  background (0);

  loadPixels();

    for ( var y = 0 ; y < height ; y++ ){
      for ( var x = 0 ; x < width ; x++ ){

        var index = (x + y * width)*4;

        pixels[index]=random(24,255);
        pixels[index+1]=random(250,255);      ;
        pixels[index+2]=random(0,255);
        pixels[index+3]=255;

      }

    }
  updatePixels();
  //saveCanvas(c, 'grand jaune','jpg');

}

function draw(){

}
