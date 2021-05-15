var path,pathImg
var boy,boyImg
var rightboundary,leftboundary
var edges


function preload(){
  pathImg = loadImage("path.png")
 boyImg = loadAnimation("jake1.png","jake2.png","jake3.png","jake4.PNG","jake5.png")
}

function setup(){
  createCanvas(400,400);
  path = createSprite(200,200)
  path.addImage(pathImg);
  path.velocityY = 4;

  boy = createSprite(180,340,30,30);
  boy.addAnimation("boyrunning",boyImg);
  
  rightboundary = createSprite(410,0,100,800);
  leftboundary = createSprite(0,0,100,800);
  
  rightboundary.visible = false;
  leftboundary.visible = false;
    
  
}

function draw() {
  background(0);
  
  boy.x = mouseX;
  
  edges = createEdgeSprites();
  
 boy.collide(edges);
 boy.collide(rightboundary);
 boy.collide(leftboundary);
  
  
  
  if (path.y>400){
   path.y = height/2 
    
    
  }
  
  
  
  
  
  
  
  
  
  
drawSprites()
}
