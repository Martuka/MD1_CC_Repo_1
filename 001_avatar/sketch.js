
var d = 250.0;
var width, height;


function setup() {
  width = 1000;
  heigth = 300;
  createCanvas(500,300);
  background(0,0);
  frameRate(1);
  stroke(255);

}


function draw() {
  var xCenterEllipse = width/2;
  var yCenterEllipse = height/2;

  noStroke();
  fill('#FFC0CB');

  // Head
  ellipse(xCenterEllipse,yCenterEllipse,d,d);

  // left eye
  stroke(0);
  strokeWeight(2.5);
  fill('#00FF7F');
  ellipse(xCenterEllipse - (d/6),yCenterEllipse - (d/6) + 15,d/8,d/8);

  // right eye
  stroke(0);
  strokeWeight(2.5);
  fill('#00FF7F');
  ellipse(xCenterEllipse + (d/6),yCenterEllipse - (d/6) + 15,d/8,d/8);

  // left pupil
  fill(0);
  ellipse(xCenterEllipse - (d/6),yCenterEllipse - (d/6) + 15,d/14,d/14);

  // right pupil
  fill(0);
  ellipse(xCenterEllipse + (d/6),yCenterEllipse - (d/6) + 15,d/14,d/14);


  // nose
  stroke(0);
  strokeWeight(2.5);
  fill('#FFC0CB');
  ellipse(xCenterEllipse,yCenterEllipse + 10,d/2.25,d/3);

  // left nostril
  stroke(0);
  strokeWeight(2.5);
  noFill();
  ellipse(xCenterEllipse - (d/9),yCenterEllipse + (d/13),d/25,d/18);
  // right nostril
  noFill();
  ellipse(xCenterEllipse + (d/9),yCenterEllipse + (d/13),d/25,d/18);


}
