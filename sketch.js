var wall, thickness;
var speed, weight, thickness;


function setup() {
  createCanvas(1600,800);

  thickness = random(90,180);
  weight = random(30,52);
  speed = random(223,321)

  bullet = createSprite(50,400,50,30);
  car.shapeColor= "white";
  //car.debug = true;
  wall = createSprite(1200,400,thickness,height/2);
  wall.shapeColor= "gray";
  //wall.debug = true;
  
}

function draw() {
  background("black");  

  bullet.velocityX = speed;

  if (hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage>10){
      wall.shapeColor = color(255,0,0);
    }

    if(damage<10){
      wall.shapeColor = color(0,255,0)
    }
  }
  
 
  drawSprites();
}

 function hasCollided(lbullet,lwall){
   bulletRightEdge = lwall.x+lbullet.width;
   wallLeftEdge = lwall.x;
   if(bulletRightEdge>=wallLeftEdge){
      return true
   }
   return false;
 }
