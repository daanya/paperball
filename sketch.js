
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	d = new dustbin (1200,650)
	p = new paper(200,450,40)
	g = new ground(width/2,670,width,20)
	var render = Render.create({
		element: document.body,
		engine: engine,
		options:{
		width: 1200,
		height: 700,
		wireframes : false
		}
	})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
 d.display();
 p.display();
 g.display();


 
}

function keyPressed(){
	if(keyCode=== UP_ARROW){
		Matter.Body.applyForce(p.body,p.body.position,{
			x:85,
			y:-85
		})
	}
}

