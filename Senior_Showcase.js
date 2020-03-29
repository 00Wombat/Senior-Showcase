let hRotation = 0;
let pMouseX = 0;
let room1;
let roomTexture;
let dane;
let textbox;
let gameState = 0;

function preload()
{
  room1 = loadModel('models/ShedRoom2.obj', true);
  dane = loadImage('data/dane.png');
  textbox = loadImage('data/text.png');
}

function setup() {
  createCanvas(1200,800,WEBGL);
}

function draw() {
  background(51);
  if(gameState==0)
  {
  push();
  rotateZ(PI);
  rotateX(0.4); //Tilt needs to happen first
  rotateY(hRotation); //then horizontal rotation
  scale(4);
  stroke(1);
  ambientMaterial(255, 255, 255);
  model(room1);
  
  translate(40,-5,-45);
  //rotateY(-hRotation);
  ambientMaterial(255, 0, 255);
  noStroke();
  scale(1);
  sphere(7,7,7);
  pop();
  }
  
  if(gameState==1)
  {
  //UI
  push();
  translate(-600,-400);
  texture(dane);
  quad(132,91,132+327,91,132+327,91+618,132,91+618);
  texture(textbox);
  quad(99,495,99+1002,495,99+1002,495+251,99,495+251);
  pop();
  }
}

function mousePressed() {
  pMouseX = mouseX;
  print(get(mouseX,mouseY));
}

function mouseDragged() {
  hRotation -= 0.01 * (mouseX - pMouseX);
  pMouseX = mouseX;
}

function keyPressed() {
  if(key=='h')
  {
    gameState=1;
  }
}
