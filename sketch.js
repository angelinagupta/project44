var ground;

function setup() {
  createCanvas(800,400);
  ground = createSprite(400, 375, 800, 50);
}


function draw() {
  background(0,196,255);
  drawSprites();
}
