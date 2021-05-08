
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bobObject1,bobObject2,bobObject3, bobObject4,bobObject5, roofObject
var rope1,rope2,rope3, rope4,rope5;
var world;


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	roofObject=new roof(400,360,230,20);
	bob1 = new bob(320,575,40);
	bob2 = new bob(360,575,40);
	bob3 = new bob(400,575,40);
	bob4 = new bob(450,575,40);
	bob5 = new bob(500,575,40);
	

	
	
	rope1=new rope(bob1.body,roofObject.body,-80, 10);
	rope2=new rope(bob2.body,roofObject.body,-40, 10);
	rope3=new rope(bob3.body,roofObject.body,0, 10);
	rope4=new rope(bob4.body,roofObject.body,40, 10);
	rope5=new rope(bob5.body,roofObject.body,80, 10);

	
	
	
	
	
	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background("#f08a99");
  roofObject.display();

 

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  
  
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x: -50, y: -50});
	}
}

