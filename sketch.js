var path,pathway;
var runner,runneranimation;
var invisiblewallleft,invisiblewallright;
function preload(){
  //pre-load images
  runneranimation=loadAnimation("Runner-1.png","Runner-2.png")
  pathway=loadImage("path.png")
}

function setup(){
  createCanvas(500,620);
  //create sprites here

 // create infinite path
  path=createSprite(250,170,50,300)
  path.addImage("ground",pathway)
  path.scale=1.5
  path.velocityY = 4;

//create jaxon the runner
runner=createSprite(250,520,50,50)
  runner.addAnimation("run",runneranimation)
  runner.scale=0.1
  


//create left invisible wall
invisiblewallleft=createSprite(10,170,45,900)
invisiblewallleft.shapeColor="red"

//create right invisible wall
invisiblewallright=createSprite(510,170,50,900)
invisiblewallright.shapeColor="red"
invisiblewallleft.visible=false
invisiblewallright.visible=false



}

function draw() {
  background(0);
  if (path.y>620)
  {
    path.y=path.height/2
  }
  //runner=createSprite(250,520,50,50)
  runner.x=mouseX;


  runner.collide(invisiblewallleft);
  runner.collide(invisiblewallright);
drawSprites();

}
