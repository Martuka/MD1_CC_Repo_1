var d = 250;

var width, height;

function setup() {
  width = 1000;
  heigth = 300;
  createCanvas(500,300);
  background(0,0,0);
  frameRate(1);
  stroke(255);

}

function draw() {
  var xCenterEllipse = width/2;
  var yCenterEllipse = height/2;

  noStroke();
  fill('#FFFF00');
  ellipse(xCenterEllipse,yCenterEllipse,d,d);

  fill(0);
  ellipse(xCenterEllipse - (d/6),yCenterEllipse - (d/6),d/10,d/6);

  fill(0);
  ellipse(xCenterEllipse + (d/6),yCenterEllipse - (d/6),d/10,d/6);

  noFill();
  stroke('#222222');
  strokeWeight(10);

  arc(xCenterEllipse - 60, yCenterEllipse + 40, 30, 30, PI, PI);
  arc(xCenterEllipse - 30, yCenterEllipse + 40, 30, 30, 2*PI, PI);
  arc(xCenterEllipse, yCenterEllipse + 40, 30, 30, PI, PI);
  arc(xCenterEllipse + 30, yCenterEllipse + 40, 30, 30, 2*PI, PI);
  arc(xCenterEllipse + 60, yCenterEllipse + 40, 30, 30, PI, PI);

}
