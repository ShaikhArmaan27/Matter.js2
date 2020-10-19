
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var grounds,world,engine;
var box1,box2 ; 

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  box1 = new Box(200,300,50,50)
  box2 = new Box(220,100,50,100)
  grounds = new Ground(200,390,400,10)
}

function draw() {
  background(0);
  Engine.update(engine);
  box1.display()
  box2.display()
  grounds.display()
}