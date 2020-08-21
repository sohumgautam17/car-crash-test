var car, wall;

var car1, wall1;

var car2, wall2;


var speed, weight;

var speed1, weight1;

var speed2, weight2;


var deformation, deformation1, deformation2;

function setup() {
 
  createCanvas(1510,800);
  speed=random(55,90);
  weight=random(400,1500);

  speed1=random(55,90);
  weight1=random(400,1500);

  speed2=random(55,90);
  weight2=random(400,1500);

  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;
  wall = createSprite(1200, 200, 25, 120);

  car1 = createSprite(50, 400, 50, 50);
  car1.velocityX = speed;
   wall1 = createSprite(1200, 400, 25, 120);

   car2 = createSprite(50, 600, 50, 50);
   car2.velocityX = speed;
   wall2 = createSprite(1200, 600, 25, 120);

}
console.log(speed);
function draw() {
  background("black");  
  if(car.x>1180)
   {
   car.velocityX = 0;
   deformation = 0.5*weight*speed* speed/22509;
   if(deformation<100){
     car.shapeColor = color(0, 255,0);
   }
   if(deformation<180 && deformation> 100)
   {
    car.shapeColor=color(230, 230, 0);
   }
   if(deformation>180)
   {
     car.shapeColor=color(250, 0, 0);
   }
  
   if(car1.x>1180)
   {
   car1.velocityX = 0;
   deformation1 = 0.5*weight1*speed1* speed1/22509;
   if(deformation1<100){
     car1.shapeColor = color(0, 255, 0);
   }
   if(deformation1<180 && deformation1> 100)
   {
    car1.shapeColor=color(230, 230, 0);
   }
   if(deformation1>180)
   {
     car1.shapeColor=color(250, 0, 0);
   }

   }

   if(car2.x>1180)
   {
   car2.velocityX = 0;
   deformation2 = 0.5*weight2*speed2* speed1/22509;
   if(deformation2<100){
     car2.shapeColor = color(0, 255, 0);
   }
   if(deformation2<180 && deformation2> 100)
   {
    car2.shapeColor=color(230, 230, 0);
   }
   if(deformation2>180)
   {
    car2.shapeColor=color(250, 0, 0);
   }

   }
  drawSprites();
 }
}
