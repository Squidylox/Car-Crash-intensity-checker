//variables are being created . . .
  var car
  var wall

  var speed
  var weight

function setup() {
  
//canvas is being created . . .
  createCanvas(1600,400);

//speed and weight are being given random variables . . .
  speed=random(10, 200);
  weight=random(400, 1500);

//sprites are being displayed . . .
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1500, 200, 60, height/2);
}

function draw() {
//background is being set . . . 
  background("white");  

//car velocity is being set . . .
  car.velocityX = speed;

//the car's color changes depending on how intense the car car crash was . . .
  if(wall.x - car.x < (car.width + wall.width)/2) {
    car.velocityX = 0;
    var deformation=0.5 * weight * speed * speed/22500;
    if(deformation > 180) {
      car.shapeColor = color(255, 0, 0);
    }
    if(deformation < 180 && deformation > 100) {
      car.shapeColor = color(230, 230, 0);
    }
    if(deformation < 100) {
      car.shapeColor = color(0, 255, 0);
    }
  }


  drawSprites();
}