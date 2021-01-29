var fixedRect, movingRect;
var car, wall;

function setup() {
  createCanvas(1200, 800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 200, 80, 30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  car = createSprite(100, 100, 30, 100);
  car.shapeColor = "yellow";
  car.velocityX = 4;

  wall = createSprite(1000, 100, 100, 30);
  wall.shapeColor = "red";
}

function draw() {
  background(0, 0, 0);
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  bounceOff(car, wall);
  drawSprites();
}

/*function bounceOff(ob1, ob2) {
  if (
    ob1.x - ob2.x < ob2.width / 2 + ob1.width / 2 &&
    ob2.x - ob1.x < ob2.width / 2 + ob1.width / 2
  ) {
    ob1.velocityX = ob1.velocityX * -1;
  } else if (
    ob1.y - ob2.y < ob2.height / 2 + ob1.height / 2 &&
    ob2.y - ob1.y < ob2.height / 2 + ob1.height / 2
  ) {
    ob1.velocityY = ob1.velocityY * -1;
  }
}*/
