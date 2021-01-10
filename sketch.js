
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground
var SurvialTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(400,400);
ground = createSprite(200,360,500,180);
  
monkey = createSprite(100,240,200,400);
monkey.addAnimation("running", monkey_running);
monkey.scale = 0.1;
  
FoodGroup = new Group();
obstacleGroup = new Group();
}

function draw() {
background("white");

  if(keyDown("space") && (monkey.y > 170)){
    monkey.velocityY = -15;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
  
  if (frameCount % 80 === 0) {
   spawnBanana(); 
  }
  
  if (frameCount % 300 === 0) {
   spawnRock(); 
  }
  
  drawSprites();
  stroke("black");
  textSize(20);
  fill("black");
  text("score:" + score, 125,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  SurvivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time:" + SurvivalTime, 125, 75);
}

function spawnBanana(){
  Banana = createSprite(400,1000,10,40);
  Banana.addImage(bananaImage);
  Banana.scale = 0.1;
  Banana.y = Math.round(random(120,200));
  Banana.velocityX = -10;
  Banana.lifetime = 100;
  FoodGroup.add(Banana);
}

function spawnRock(){
  obstacle = createSprite(500,255,50,50);
  obstacle.addImage(obstacleImage);
  obstacle.scale = 0.1;
  obstacle.velocityX = -10;
  obstacle.lifetime = 100;
  obstacleGroup.add(obstacle);
}