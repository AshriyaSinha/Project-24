
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	Matter.Bodies.circle(150, 620, 2)

	ground = new Ground(400,650,800,25);


	box1=new Box(580,640,100,20, {restitution:0, isStatic:false});
	box2=new Box(555,630,20,95, {restitution:0, isStatic:false});
	box3=new Box(654,630,20,95, {restitution:0, isStatic:false});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  box1.display();
  box2.display();
  box3.display();
  ground.display();
  circle.display();
 
}



