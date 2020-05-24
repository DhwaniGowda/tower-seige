const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var hitter;
var land;


function setup() 
{
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  land = new ground(550,300,300,20)
  hitter = new ball(200,100);

  box1 = new Box(550,250,50,50)
  box2 = new Box(600,250,50,50)
  box3 = new Box(650,250,50,50)
  box4 = new Box(600,200,50,50)
  box5 = new Box(550,250,50,50)
  box6 = new Box(500,200,50,50)
  box7 = new Box(450,250,50,50)
  box8 = new Box(550,150,50,50)
  box10 = new Box(500,250,50,50)
 
  
}

function draw() 
{
  background("lavender");  
  Engine.update(engine);

  land.display();
  hitter.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box10.display();
 
  drawSprites();
}