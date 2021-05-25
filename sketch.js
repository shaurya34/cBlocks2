const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var blueb,pinkb,redb,yellowb,lava,back,blockgp;
var bImg,pImg,rImg,yImg,lImg,backImg;


function preload(){
  bImg = loadImage("blue block.png")
  pImg = loadImage("pink block.png")
  rImg = loadImage("red block.png")
  yImg = loadImage("yellow block.png")
  lImg = loadImage("lava.png")
  backImg = loadImage("bg3.jpg")
}

function setup() {
  createCanvas(800,400);

  back = createSprite(400,150,800,350)
  back.addImage(backImg)
  blueb = createSprite(100, 200, 50, 50);
  blueb.addImage(bImg)
 
  redb = createSprite(600, 200, 50, 50);
  redb.addImage(rImg)
  yellowb = createSprite(700, 200, 50, 50);
  yellowb.addImage(yImg)
  lava = createSprite(400, 370, 800, 60);
  
  lava.shapeColor = rgb(255,77,0)

}

function draw() {
  background(0);   
  back.velocityX = -5
  if(back.x === 0){
    back.x = back.width/2
  }
  blueb.velocityY = 3
 if(mousePressedOver(blueb)){
   blueb.velocityY =  blueb.velocityY-30
 }

 pinkBlocks()

 blockgp = createGroup();
  drawSprites();


}
function pinkBlocks(){
  if(frameCount % 60 === 0){
    pinkb = createSprite(800,Math.round(random(15,300)), 50, 50);
    pinkb.addImage(pImg)
    pinkb.velocityX = -5

  }
}