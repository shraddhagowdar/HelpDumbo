var PLAY = 1;
var END = 0;
var gameState = PLAY;

var dumbo, circus, circusImage, plane, planeImage, dumboImage,planeGroup, gameOverImg, gameOverS, backgroundS;

 function preload(){
  dumboImage = loadImage("dumboPic.png");
  circusImage = loadImage("circus.png");
  planeImage = loadImage("toyPlane.png");
   gameOverImg = loadImage ("gameoverImage.png");
   gameOverS = loadSound("gameOver.wav");
   backgroundS = loadSound("gameBackgorund.mp3");
   
   
    }

function setup() {
  createCanvas(700, 600);
  
  //create dumbo
  dumbo = createSprite(200,200,50,50);
  dumbo.scale = 0.4;
  dumbo.addImage(dumboImage);
  //dumbo.debug = true;
  
  //make a new group
  planeGroup = new Group();
  
}

function draw() {
  background(circusImage);
  
  //create "play" gameState
if (gameState===PLAY){
  if(keyDown("space")){
    dumbo.velocityY = -7;
  }
  
  dumbo.velocityY = dumbo.velocityY + 0.6;
  
  
  if(keyDown("left_Arrow")){
    dumbo.x = dumbo.x-6;
  }
  
  if(keyDown("right_Arrow")){
    dumbo.x = dumbo.x+6;
  }
  
  spawnPlanes();
  
  
  if(dumbo > 500){
   gameState = END;
  }
  if(dumbo > 700){
    gameState = END;
  }
  if(dumbo.isTouching(planeGroup)){
    gameState = END
    dumbo.destroy();
  }
  if(dumbo > 700){
    gameState = END;
  }
  if(dumbo > 500){
    gameState = END;
  }
}
  
  //create "end" gameState
  else if (gameState === END){
  gameOverS.play();
  background(gameOverImg);
  planeGroup.destroy();

}
  drawSprites();
}

//function related to planes

function spawnPlanes(){
  
  if(World.frameCount%100===0){
    plane= createSprite(700,500,20,20);
    plane.scale = 0.3;
    plane.addImage(planeImage);
    plane.y = Math.round(random(100,300));
    plane.velocityX = -5;
    plane.setLifetime = 200;
    
  planeGroup.add(plane);
    
  }
}

