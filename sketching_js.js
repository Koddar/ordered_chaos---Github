function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(40);
}

var x;
var y;

var lx = -400;
var ly = -300;

var j = 0;

let sf = 150;
let a = 1;
let b = 2;
let r = 10;

function draw() {
    background(240);
    translate(windowWidth / 2, windowHeight / 2);

    stroke(150);
    
    for (var j = 0; j <= windowHeight; j++){
      line(lx, windowHeight / 2, lx, -(windowHeight/2));
      lx += 20;

    }

    for (var k = 0; k <= windowWidth; k++){
      line(windowWidth / 2, ly, -(windowWidth/2), ly);
      ly += 20;
    }

    lx = -(windowWidth/2);
    ly = -(windowHeight/2);

    j = 0;
    k = 0;

    for (i = 0; i <= 360; i+=1){
      x = (sin((a/b)*i)*cos(i))*sf;
      y = (sin((a/b)*i)*sin(i))*sf;

  		noStroke();
      fill(50, (x**2 + y**2)**(1/2), 60);
  		ellipse(x, y, r, r);
    } 

    if (mouseIsPressed){
      stroke(0);
      fill(255, 50, 50);
      ellipse(pmouseX - (windowWidth / 2), pmouseY - (windowHeight / 2), 20, 20);

      a = ((mouseX / mouseY) / 2) / 1000000;
      b = 0.00005;

      sf = (mouseY);

      r = ((mouseX + mouseY) / 2) / 15;

    }
}
