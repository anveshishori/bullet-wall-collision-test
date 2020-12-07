var bullet, wall;
var b, w;

var speed = 0;
var weight = 0;
var thickness = 0;
var damage = 0;

var testState = "pause";

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 80, 50);
  bullet.shapeColor = "white";
  wall = createSprite(1200,200,60, height/2);
  wall.shapeColor = rgb(80,80,80); 
 
  
}

function draw() {
  background("black"); 
  text("Thickness: "+ thickness,1300,30);
  text("Speed: "+ speed,1300,50);
  text("Weight: "+ weight,1300, 70);
  text("Damage: "+ damage, 1300, 90);
  

  console.log("this is : " + testState);

  if(testState === "pause"){
    text ("Press Space to Test", 500 , 100);

  }

  if(keyDown("space") && testState === "pause"){
testState = "test";
thickness = random (22,83)
wall.width = thickness;
speed = random(223,321);
 weight = random (30,52);
  }

  if (testState === "test"){
    
     bullet.velocityX = speed;

     if (hascollided(bullet,wall)){
      bullet.velocityX = 0;
       damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);
       
    if (damage > 10){

      wall.shapeColor = "red";
    
    }    else {

      wall.shapeColor = "green";
    }
  
 testState = "retry";
  }
}
  


if (testState==="retry"){
  
text("Press r to retry!!", 500,300);

}
if(keyDown("r") && testState === "retry"){
 wall.shapeColor = "grey"
  testState = "pause";
  speed = 0;
  weight = 0;
  damage = 0;
  thickness = 0;
bullet.x=50;
bullet.velocityX = 0;
 
}

drawSprites();
}

function hascollided(b,w){
bRightEdge = b.x+b.width;
wLeftEdge = w.x;

if(bRightEdge>=wLeftEdge){

  return true;
}
return false;


}