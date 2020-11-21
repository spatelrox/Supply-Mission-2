var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var targetRect1, targetRect2, targetRect3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	helicopterImage = loadImage("helicopter.png")
	packageImage = loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	targetRect1 = createSprite(300,650,20,100)
	targetRect1.shapeColor = "white";
	targetRect2 = createSprite(400,690,200,20)
	targetRect2.shapeColor = "white";
	targetRect3 = createSprite(500,650,20,100)
	targetRect3.shapeColor = "white";
	
	packageSprite = createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageImage)
	packageSprite.scale = 0.2

	helicopterSprite = createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterImage)
	helicopterSprite.scale = 0.6
	helicopterSprite.velocityX = 2;

	groundSprite = createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor = color(255)

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	World.add(world, packageBody);
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  packageSprite.x = packageBody.position.x 
  packageSprite.y = packageBody.position.y 

  if(helicopterSprite.x == targetRect1.x){
	Matter.Body.setStatic(packageBody, false)
  }

  drawSprites();
}