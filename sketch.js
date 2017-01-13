var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(720, 400);
  background(51);
  noStroke();
  drawTarget(width*0.3, height*0.2, 120, 100);
  drawTarget(width*0.7, height*0.2, 120, 100);
  drawTarget(width*0.5, height*0.5, 300, 100);
}

function draw() {
}

function drawTarget(xloc, yloc, size, num) {
  grayvalues = 255/num;
  steps = size/num;
  for (i = 0; i < num; i++) {
    fill(i*grayvalues);
    ellipse(xloc, yloc, size - i*steps, size - i*steps);
  }
}

function drawEllipse(width, height) {
  ellipse(mouseX, mouseY, width, height);
}

function mouseDragged() {
  fill(r, g, b);
  ellipse(mouseX,mouseY, 10, 10);
}

function mousePressed() {
  fill(r, g, b);
  ellipse(mouseX,mouseY, 10, 10);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    r = 255;
    g = 0;
    b = 0;
  } else if (keyCode === RIGHT_ARROW) {
    r = 0;
    g = 255;
    b = 0;
  } else if (keyCode === UP_ARROW) {
    r = 0;
    g = 0;
    b = 255;
  } else if (keyCode === DOWN_ARROW) {
    r = 0;
    g = 0;
    b = 0;
  }
  else if (keyCode === ENTER) {
    createCanvas(720, 400);
    background(51);
    noStroke();
    drawTarget(width*0.3, height*0.2, 120, 100);
    drawTarget(width*0.7, height*0.2, 120, 100);
    drawTarget(width*0.5, height*0.5, 300, 100);
  }
}
