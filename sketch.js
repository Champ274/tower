

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);
	engine = Engine.create();
	world = engine.world;
  Engine.run(engine)
ground1= new Ground(500,500,290,20) 
ground2=new Ground(880,300,290,20)
box1=new Box(880,274,30,30)
box2=new Box(849,274,30,30)
box3=new Box(818,274,30,30)
box4=new Box(910,274,30,30)
box5=new Box(895,244,30,30)
box6=new Box(864,244,30,30)
box7=new Box(832,244,30,30)
box8=new Box(860,214,30,30)
box9=new Box(500,474,30,30)
box10=new Box(470,474,30,30)
box11=new Box(440,474,30,30)
box12=new Box(530,474,30,30)
box13=new Box(560,474,30,30)
box14=new Box(466,444,30,30)
box15=new Box(496,444,30,30)
box16=new Box(526,444,30,30)
box17=new Box(496,414,30,30)
polo=new polygon(166,314,30,30)
slingshot1=new Sling(polo.body,{x:140,y:340})
	//Create the Bodies Here.



}
function mouseDragged(){
  //if (gameState!=="launched"){
      Matter.Body.setPosition(polo.body, {x: mouseX , y: mouseY});
  //}
}
function mouseReleased(){
  slingshot1.fly();
 
}
function keyPressed(){
  if(keyCode === 32){
     slingshot1.attach(polo.body);
  }
}
function draw() {
  rectMode(CENTER);
  background('white');
 ground1.display()
ground2.display()
box1.display()
box2.display()
box3.display()
box4.display()
box5.display()
box6.display()
box7.display()
box8.display()
box9.display()
box10.display()
box11.display()
box12.display()
box13.display()
box14.display()
box15.display()
box16.display()
box17.display()
polo.display()
slingshot1.display()
}



