const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4;
var pig1;
var log1;
var bird1;


function setup(){
    var canvas = createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(550,750);
    box2 = new Box(700,750);
    box3 = new Box(550,650);
    box4 = new Box(700,650);
    
    ground = new Ground(400,height,800,20);
    pig1 = new Pig(625,750);
    log1 = new Log(625,697,200,PI);
    bird1 = new Bird(200,300);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    bird1.display();
    box3.display();
    box4.display();

}