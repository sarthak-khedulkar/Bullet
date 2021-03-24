var bullet,wall
var thickness,speed,weight
function setup() {
  createCanvas(800,400);
 wall= createSprite(50, 200, thickness, 100);
 bullet= createSprite(1200, 200, 50, 10);

 speed=random (55,90)
 weight=random(1400,400)
 bullet.velocityX=speed;
 thickness=random(22,83);
}

function draw() {
  background("black");
  if(hascollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5*weight*speed/(thickness*thickness)
    if(damage>10){
      bullet.velocityX=0;
        wall.shapColor="red";
      }
      if (damage>5){
        wall.shapColor="yellow";
      }
      if (damage<10){
        wall.shapColor="green";
      }
  }  
  
  }
  drawSprites();
