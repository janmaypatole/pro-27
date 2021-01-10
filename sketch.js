
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;



var chain1,ball1
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    chain1 = new Cable(300,350,1,10)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
engine.update(Engine)

  chain1.display();


  drawSprites();
 
}




