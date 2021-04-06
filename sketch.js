var Mia, Rover;
var bird,stone,fruit;
var ground;
var invisibleGrd;
var backGrdImg,backGrd;
var fruitsGroup;
function preload() {
appleImg = loadImage("images/apple.png");
bananaImg = loadImage("images/banana.png");
orangeImg = loadImage("images/orange.png");
pearImg = loadImage("images/pear.png");
miaImg = loadImage("images/mia.png");
backGrdImg = loadImage("images/sky.png");
}

function setup(){
    var canvas = createCanvas(750,700);
   
   
    
    backGrd = createSprite(0,300);
    backGrd.addImage(backGrdImg)
    backGrd.scale = 3;
    backGrd.velocityX = -5;
    backGrd.x = backGrd.width/8;

    Mia = createSprite(50,300,50,50);
    Mia.addImage(miaImg);

    invisibleGrd = createSprite(600,650,1200,25);
    invisibleGrd.visible = false;

    fruitsGroup = new Group();
}

function draw(){
    background("blue");
   
    
    if(keyDown(UP_ARROW)){
        Mia.velocityY = -8;
      }
      Mia.velocityY =  Mia.velocityY+0.5;
     
      if(keyDown(RIGHT_ARROW)){
        Mia.velocityX = +10;
      }
      if(keyDown(LEFT_ARROW)){
        Mia.velocityX = -10;
      }
      if(Mia.isTouching(fruitsGroup)){
        fruitsGroup.destroyEach();
      }

      backGrd.velocityX = -3;

      if(backGrd.x<0){
      backGrd.x = backGrd.width/8;
      }
      
      Mia.collide(invisibleGrd);
      Fruits();
    drawSprites();
}

function Fruits(){
  if(frameCount%100===0){
  fruit = createSprite(50,500,50,50);
  var r = Math.round(random(1,4));
  fruit.scale = 0.1;
  
  if(r ===1 ){
  fruit.addImage(appleImg);
  }
  else if (r ===2){
    fruit.addImage(pearImg);
  }
  else if (r === 3){
    fruit.addImage(bananaImg)
  }
  else if (r === 4){
    fruit.addImage(orangeImg)
  }
  
  fruit.x = Math.round(random(100,700));
  fruit.y = Math.round(random(450,500));
  fruit.lifetime = 100;
  fruitsGroup.add(fruit);
  }
  }
  
  

