
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var boy,boyImage;
var mango1,mango2,mango3,mango4,mango5
var stoneObj
var treeImage,tree
var launcherobj

function preload()
{

boyImage = loadImage("Pluckingmangoes/boy.png")
treeImage = loadImage("Pluckingmangoes/tree.png")

}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  
	boy = createSprite(250,650,20,20)
	boy.addImage(boyImage)
	boy.scale = 0.1

	tree = createSprite(700,400,20,20)
	tree.addImage(treeImage)
  tree.scale = 0.5
  
	mango1 = new Mango(550,250,40,10)
	mango2 = new Mango(750,200,40,10)
	mango3 = new Mango(780,360,30,10)
	mango4 = new Mango(650,350,50,10)
	mango5 = new Mango(700,310,30,10)
	stoneObj = new Stone(235,650,50)
  launcherobj = new Launcher(stoneObj.body,{x:185,y:570})

	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  imageMode(CENTER);
  drawSprites();
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  stoneObj.display()
  launcherobj.display()

  detectcollision(stoneObj,mango1);
  detectcollision(stoneObj,mango2);
  detectcollision(stoneObj,mango3);
  detectcollision(stoneObj,mango4);
  detectcollision(stoneObj,mango5);
  
 
}
function mouseDragged(){
    Matter.Body.setPosition(stoneObj.body,{x:mouseX,y: mouseY})
}
function mouseReleased(){
   launcherobj.fly()
}

function detectcollision(lstone,lmango){
mangoBodyPosition=lmango.body.position
stoneBodyPosition=lstone.body.position

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<=lmango.r+lstone.r){
	Matter.Body.setStatic(lmango.body,false);
}
}

function keyPressed(){
  if(keyCode === 32){
Matter.Body.setPosition(stoneObj.body,{x:185, y:570})
launcherobj.attach(stoneObj.body)
  }
}




