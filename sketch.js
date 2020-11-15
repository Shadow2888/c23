var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10,);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	r1=createSprite(350, 625, 20,50);
	r1.shapeColor=color("red")

	r2=createSprite(400, 650,100,20);
	r2.shapeColor=color("red")

	r3=createSprite(450,625,20,50);
	r3.shapeColor=color("red")


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.1, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world,ground);

	 r1 = Bodies.rectangle(350, 625, 20,50, {isStatic:true} );
 	World.add(world, r1);

	 r2 = Bodies.rectangle(400, 650,100,20, {isStatic:true} );
 	World.add(world, r2);

	r3 = Bodies.rectangle(450, 625, 20,50, {isStatic:true} );
	 World.add(world, r3);
	 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
  
}

function keyPressed() {
 if (keyDown("space")) {
    
    Matter.Body.setStatic(packageBody,false);
  }
}



