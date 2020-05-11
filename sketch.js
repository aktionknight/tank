const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world,top;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
ball1 = new Ball();
ground = new Ground(200,390,1200,30)
cannonbase = new Cannon(180,350,100,50)
cannonhead = new Cannon(180,330,70,40)
//cannontop = circle(180,300,30)
connon = new Cannon(240,330,70,20,PI/4)


}

function draw(){
    background(0);
    Engine.update(engine);
 
 ground.display();
 
 cannonhead.display();
 cannonbase.display()
 connon.display();

 if (keyCode===32){
ball1.display();


 }


 
}