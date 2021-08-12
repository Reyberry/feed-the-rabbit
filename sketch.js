var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg;
var leaf,leafImg;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}


function createApple(){

apple = createSprite(random(50,350),40,10,10);
apple.addImage(appleImg);
apple.scale = 0.1;
apple.velocityY = 3;
apple.lifetime = 150;
}
function createLeaves(){

leaf = createSprite(random(50,350),40,10,10);
leaf.addImage(leafImg);
leaf.scale = 0.1;
leaf.velocityY = 3;
leaf.lifetime = 150;
}




function draw() {
  background(0);
  edges= createEdgeSprites();
  rabbit.collide(edges);
  drawSprites();
  var num1 = Math.round(random(1,3));
if (frameCount % 80 == 0) {
 if(num1 == 1) {
 createApple()
 }
else{ 
  createLeaves()

}
}
}