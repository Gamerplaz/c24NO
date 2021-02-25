const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new stone(700,320,70,70);
    ground = new Ground(600,height,1200,20);
    hammer = new Hammer(400,400);
    rub = new rubber(300,300)
    san = new sand(300,300);
    san2 = new sand(400,300);
    san3 = new sand(500,300);
    ion = new iron(400,500);
    
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    ground.display();
    hammer.display();
    rub.display();
    san.display();
    san2.display();
    san3.display();
    ion.display();
}