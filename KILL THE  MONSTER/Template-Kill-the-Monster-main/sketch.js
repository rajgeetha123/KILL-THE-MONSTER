const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

function preload() {
backgroundImg=loadImage("images/GamingBackground.png");

}

function setup() {
  createCanvas(3000, 800);
  

  engine=Engine.create();
  world=engine.world;



 ground=new Ground(155,541,6000,20);

//creating hero
 hero=new Hero(107,267,140,140);

 //creating blocks
 //block1=new Block()
 

}

function draw() {
  background(backgroundImg);

  text(mouseX + "," +mouseY,200,50);

  Engine.update(engine);

  ground.display();


  hero.display();

}


function mouseDragged()
{
  Matter.Body.setPosition(hero.hero,{x:mouseX,y:mouseY})
}




