var girl,girl_Img;
var race,raceImg;
var apple,bottle,cash,sword,gameover;
var appleImg,bottleImg,cashImg,swordImg,gameoverImg;
var treasureCollection = 0
var appleG,bottleG,cashG,swordGroup;

var PLAY=1;
var END=0;
var gameState=1;


function preload(){
girl_Img = loadImage("girl.png")
raceImg = loadImage("race.jpg")
appleImg = loadImage("apple.png")
bottleImg = loadImage("bottle.png")
cashImg = loadImage("cash.png")
swordImg = loadImage("sword.png")
gameoverImg = loadImage("gameover.png")
}

function setup() {
createCanvas (400,400);

race=createSprite(200,200);
race.addImage(raceImg);
race.velocityY = 4;

girl = createSprite(150,280,20,20);
girl.addImage("girlRunning",girl_Img);
girl.scale=0.8

cashG=new Group();
bottleG=new Group();
appleG=new Group();
swordGroup=new Group();
}


function draw() {
 if(gameState===PLAY){
   background(0);
 girl.x = World.mouseX;
        
 edges= createEdgeSprites();
 girl.collide(edges);
 }
        

if(race.y > 400 ){
    race.y = height/2; 
}
  
createCash();
createApple();
createBottle();
createSword();

 if (cashG.isTouching(girl)) {
      cashG.destroyEach();
      treasureCollection=treasureCollection+50;
    }
    else if (bottleG.isTouching(girl)) {
      bottleG.destroyEach();
      treasureCollection=treasureCollection+100;
      
    }else if(appleG.isTouching(girl)) {
      appleG.destroyEach();
     treasureCollection= treasureCollection + 20;

  }else{
    if(swordGroup.isTouching(girl)) {
  gameState=END;

  cashG.destroyEach;
  appleG.destroyEach;
  bottleG.destroyEach;
  swordGroup.destroyEach;

  cashG.setVelocityYEach(0);
  diamondsG.setVelocityYEach(0);
  jewelryG.setVelocityYEach(0);
  swordGroup.setVelocityYEach(0);
 
  girl.changeImage("gameover.png")

    }
  }

drawSprites();
 textSize(20);
fill(255);
text("Treasure: "+ treasureCollection,10,30);
}


function createCash() {
  if (World.frameCount % 200 == 0) {
  var cash = createSprite(Math.round(random(50,250),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.12;
  cash.velocityY = 3;
  cash.lifetime = 150;
  cashG.add(cash);
  }
}
function createApple() {
  if (World.frameCount % 100 == 0) {
  var apple = createSprite(Math.round(random(50,250),40, 10, 10));
  apple.addImage(appleImg);
  apple.scale=0.10;
  apple.velocityY = 3;
  apple.lifetime = 150;
  appleG.add(apple);
  }
}
function createBottle(){
  if (World.frameCount % 100 == 0) {
    var bottle = createSprite(Math.round(random(50,250),40, 10, 10));
    bottle.addImage(bottleImg);
    bottle.scale=0.15;
    bottle.velocityY = 3;
    bottle.lifetime = 150;
    bottleG.add(bottle);
    }
  }

  function createSword(){
    if (World.frameCount % 530 == 0) {
      var sword = createSprite(Math.round(random(50, 350),40, 10, 10));
      sword.addImage(swordImg);
      sword.scale=0.15;
      sword.velocityY = 3;
      sword.lifetime = 150;
      swordGroup.add(sword);
      }
  }
