var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,ground1,ground2,ground3,back,backImg;
var people,peopleImg;
var zombie,zombieImg;
var zombie2,zombie2Img;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
	backImg = loadImage("city.jpg");
	peopleImg = loadImage("needy.png");
	zombieImg = loadImage("zombie.png");
	zombie2Img = loadImage("zombie.png");

}

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);
	
	back = createSprite(400,300,800,600);
	back.addImage(backImg);
	back.scale = 1.2;

	zombie = createSprite(600,300);
	zombie.addImage(zombieImg);
	zombie.scale = 0.1;

	zombie2 = createSprite(300,350);
	zombie2.addImage(zombie2Img);
	zombie2.scale = 0.1;

	packageSprite=createSprite(width/2, 50, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 170, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	ground1=createSprite(width/2, 540, 200,20);
	ground1.shapeColor="red";
	ground1.visible = true;

	ground2=createSprite(310, 500, 20,100);
	ground2.shapeColor="red";
	ground2.visible = true;

	ground3=createSprite(490, 500, 20,100);
	ground3.shapeColor="red";
	ground3.visible = true;

	people = createSprite(400,550);
	people.addImage(peopleImg);
	people.scale = 0.4;
	people.visible = true;

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 170 , 12 , {restitution:0.2, isStatic:true});
	World.add(world, packageBody);
	

	ground1 = Bodies.rectangle(width/2, 526, 200,20 , {isStatic:true} );
	World.add(world, ground1);
	
	ground2 = Bodies.rectangle(310, 500, 20,100, {isStatic:true} );
	World.add(world, ground2);

	ground3 = Bodies.rectangle(490, 500, 20,100, {isStatic:true} );
	World.add(world, ground3);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  if(keyDown(DOWN_ARROW)) {
	Matter.Body.setStatic(packageBody,false);
	}

	console.log(packageSprite);
 
  Engine.update(engine);
  drawSprites();
}