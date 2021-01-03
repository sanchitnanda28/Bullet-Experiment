var wall, thickness;
var speed, weight, bullet;
var gun;


function setup() {
  createCanvas(1600,400);

  thickness = random(90,180);
  weight = random(30,52);
  speed = random(223,321)

  bullet = createSprite(50,200,50,15);
  bullet.shapeColor= "white";
  bullet.debug = true;
  bullet.velocityX = speed;
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor= color(80,80,80);
  wall.debug = true;
  
}

function hasCollided(lbullet,lwall){
  bulletRightEdge = lbullet.x+bullet.width;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
     return true
  }
  return false;
}

function draw() {
  background("black");  

  bullet.velocityX =speed;

  

  if (hasCollided(bullet,wall)){
    
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage>10){
      wall.shapeColor = "green";
    }

    if(damage<=10){
      wall.shapeColor = "red"
      
      bullet.velocityX = 0;
    }
  }
  
 
  drawSprites();
}

 
