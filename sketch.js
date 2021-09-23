var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg;
var greenleaf, greenleafImg;
var redleaf,redleafImg;
var orangeleaf,orangeleafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg=loadImage("apple.png");
  greenleafImg=loadImage("leaf.png")
  redleafImg=loadImage("redImage.png");
  orangeleafImg=loadImage("orangeLeaf.png");

}

function setup()
{
  
  createCanvas(550,450);
  
// Background Sprite
garden=createSprite(200,200);
garden.addImage(gardenImg);
garden.scale=1.4

//creating green leaf
greenleaf = createSprite(480,430,30,30);
greenleaf.scale =0.07;
greenleaf.addImage(greenleafImg);

//creating red leaf
redleaf = createSprite(180,400,30,30);
redleaf.scale =0.065;
redleaf.addImage(redleafImg);

//creating rabbit
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.12;
rabbit.addImage(rabbitImg);

}



function draw()
{
  background(0);
  createapples();
  createorangeleaf();
  edges= createEdgeSprites();
  rabbit.collide(edges);
  //console.log(rabbit.x)
   drawSprites();
  rabbit.x=mouseX
}

//creating apple
function createapples()
{

  if(frameCount%80===0)
 {
   // write your code here 
   apple = createSprite(50,100,30,30);
   apple.scale =0.07;
   apple.addImage(appleImg);
   apple.velocityY=3;
   apple.x= Math.round(random(50,450))
   apple.life=60
 }
}


//creating orange leaf
function createorangeleaf()
{

  if(frameCount%70===0)
 {
   // write your code here 
   orangeleaf = createSprite(320,20,0,30)
   orangeleaf.scale =0.07;
   orangeleaf.addImage(orangeleafImg);
   orangeleaf.velocityY=2;
   orangeleaf.x= Math.round(random(50,450))
 }
}   

rabbit.depth = orangeleaf.depth+1
rabbit.depth = apple.depth+1;