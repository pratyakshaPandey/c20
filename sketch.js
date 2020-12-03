var car, carImg;
var wall, wallImg;
var speed, weight;

function preload() {
  carImg = loadImage("car3.png");
  wallImg = loadImage("wall.png")
}

function setup() {
  createCanvas(windowWidth, 400);

  wall = createSprite(width - 100, 290, 60, height / 2);
  wall.shapeColor = rgb(80, 80, 80);

  car = createSprite(50, 350, 50, 50);
  car.scale = 0.5;
  car.tint = "blue";
  car.addImage(carImg);
  
  speed = Math.round(random(55, 90));
  weight = Math.round(random(400, 1500));

  car.velocityX = speed;

}

function draw() {

  background(220);

  if (car.x - wall.x < car.width / 2 + wall.width / 2 && wall.x - car.x < car.width / 2 + wall.width / 2) {
    car.velocityX = 0;
    
    var deformation = (0.5 * weight * speed * speed) / 22500;
    
    if (deformation > 180) {
      car.tint = "red";
    }
    
    if (deformation < 180 && deformation > 100) {
      car.tint = "yellow";
    }
    
    if (deformation < 100) {
      car.tint = "green";
    }    
  }

  drawSprites();
}