const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bg 
var snow = []


function preload(){
bg = loadImage ("snow3.jpg")
}







function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;
  
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(bg);
  
  Engine.update(engine);

  if(frameCount%60===0){
    snow.push(new Snow(random(width/2-30, width/2+30), 10,10));
  }
  






  drawSprites();
}