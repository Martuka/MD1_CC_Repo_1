// var xPos = 30;
// var yPos = 10;
var d = 250;

var width, height;
var counter = "hello";
var counter2 = "world";



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
  //print();
  print(counter + " : " + counter2);
  noStroke();
  fill('#FFFF00');
  //rect(10,50,100,100);
  //line(0,0,width,height);
  //line(0,heigth,width,0);
  ellipse(xCenterEllipse,yCenterEllipse,d,d);

  fill(0);
  ellipse(xCenterEllipse - (d/6),yCenterEllipse - (d/6),d/10,d/6);

  fill(0);
  ellipse(xCenterEllipse + (d/6),yCenterEllipse - (d/6),d/10,d/6);

  noFill();
  stroke('#222222');
  strokeWeight(10);
  //bezier(85, 20, 10, 10, 90, 90, 15, 80);

  arc(xCenterEllipse - 60, yCenterEllipse + 40, 30, 30, PI, PI);
  arc(xCenterEllipse - 30, yCenterEllipse + 40, 30, 30, 2*PI, PI);
  arc(xCenterEllipse, yCenterEllipse + 40, 30, 30, PI, PI);
  arc(xCenterEllipse + 30, yCenterEllipse + 40, 30, 30, 2*PI, PI);
  arc(xCenterEllipse + 60, yCenterEllipse + 40, 30, 30, PI, PI);

}
