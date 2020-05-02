const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var player, slingshot, box1, enemy1;
var backgroundImg, platform;
var gameState = "onSling";

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200, 500);
    engine = Engine.create();
    world = engine.world;
    
    player = new Player(200, 155);    
    slingshot = new SlingShot(player.body, {x: 200, y: 150});
    ground = new Ground(600, 490, 1200, 20);
    platform = new Ground(150, 420, 300, 170);

    enemy1 = new Enemy(760, 450);
    enemy2 = new Enemy(840, 450);
    box1 = new Box(680, 450, 70, 70);
    box2 = new Box(920, 450, 70, 70);
    log1 = new Log(800, 390, 330, PI/2);

    enemy3 = new Enemy(800, 355);
    box3 = new Box(700, 340, 65, 65);
    box4 = new Box(895, 340, 65, 65);
    log2 =  new Log(800, 300, 280, PI/2);

    enemy4 = new Enemy(800, 260);
    box5 = new Box(730, 250, 60, 60);
    box6 = new Box(870, 250, 60, 60);
    log3 = new Log(800, 220, 230, PI/2);
    box7 = new Box(800, 210, 55, 55);

}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
    ground.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    
    enemy1.display();
    enemy2.display();
    enemy3.display();
    enemy4.display();
    
    log1.display();
    log2.display();
    log3.display();

    player.display();
    platform.display();
    slingshot.display();    
}

function mouseDragged(){
    if (gameState != "launched") {
        Matter.Body.setPosition(player.body, {x: mouseX , y: mouseY});
        gameState = "loading";
    }
}

function mouseReleased(){
    if (gameState == "loading"){
        slingshot.fly();
        gameState = "launched";
    }
}

function keyPressed(){
    if(keyCode === 32 && gameState == "launched"){
        gameState = "onsling";
        World.remove(world, player.body);
        player = new Player(200, 150);
        slingshot.attach(player.body);
    }
}