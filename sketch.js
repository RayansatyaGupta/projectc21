var car, wall
var speed, wight,bullet
var wall,thickness


function setup() {
  speed = random(223,221)
  weight = random(30,52)
  thickness = random(22,83)
  createCanvas(1600,400);
  car = createSprite(50,200,50,50);
  car.shapeColor = color(255);
  wall = createSprite(1500,200,60,height/2);
  car.velocityX = speed;
  
}


function draw() {
  background(0);  
  
  if (wall.x - car.x < (car.width + wall.width)/2) 
{
  
      var deformaction = 0.5 * width * speed * speed/22509;
      if (deformaction > 180)
    {
        car.shapeColor = color(255,0,0);
    }

      if (deformaction < 180 && deformaction > 100)
    {
      car.shapeColor = color(230,230,0);
    }
      if(deformaction < 100)
    {
      car.shapeColor = color(0,255,0);
    }
} 
  drawSprites();
}

function hasCollided(lBullet,lwall){
  bulletRightEdge = lBullet.x + lBullet.width;
  wallLeftEdge = lwall.x;
  if (bulletRightEdge >= wallLeftEdge )
  {
    return true 
  }
    returnfalse;

    if (hasCollided(bullet,wall))
  {
      bullet.velocityX = 0;
      var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

      if (damage < 10)
      {
        wall.shapeColor = color(255,0,0);
      }
      if (damage < 10)
      {
        wall.shapeColor = color(0,255,0);
      }
  }
} 
