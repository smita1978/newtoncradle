
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var roof,bob1,bob2,bob3,bob4,bob5;
var r1,r2,r3,r4,r5;


function preload()
{
	
}

function setup() {
	createCanvas(1000,800);


	engine = Engine.create();
  world = engine.world;
  

roof=new Roof();
bob1=new Paper(415,600,20);
r1=new Rope(bob1.body,roof.body,-80,0);
bob2=new Paper(455,600,20);
r2=new Rope(bob2.body,roof.body,-40,0);

bob3=new Paper(495,600,20);
r3=new Rope(bob3.body,roof.body,0,0);

bob4=new Paper(535,600,20);
r4=new Rope(bob4.body,roof.body,40,0);

bob5=new Paper(575,600,20);
r5=new Rope(bob5.body,roof.body,80,0);

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {

  background("yellow");
  Engine.update(engine);
  roof.display();
  
  r1.display();
  bob1.display();
  r2.display();
   
  bob2.display();
  r3.display();
   
  bob3.display();
  r4.display();
  bob4.display();
  r5.display();
  bob5.display();
  
  
}



function keyPressed(){
	if(keyCode === UP_ARROW){
    
   
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-600,y:-600});
  	}
}
