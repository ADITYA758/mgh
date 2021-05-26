var monkey, monkey_running, ground, groundImage;
var banana, bananaImage, obstacle, obstacleImage;
var SCORE = 0;
var foodsGroup;
var obsGroup;
var PLAY = 1;
var LOSE = 2;
var gamestate = PLAY;

function preload() {
  monkey_running = loadAnimation(
    "sprite_0.png",
    "sprite_1.png",
    "sprite_2.png",
    "sprite_3.png",
    "sprite_4.png",
    "sprite_5.png",
    "sprite_6.png",
    "sprite_7.png",
    "sprite_8.png"
  );

  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  groundImage = loadImage("OIP.jpg");
}

function setup() {
  createCanvas(450, 450);

  monkey = createSprite(50, 300, 25, 25);
  monkey.addAnimation("g", monkey_running);
  monkey.scale = 0.1;
  ground = createSprite(200, 395, 1800, 20);
  ground.velocityX = -5;
  ground.addImage("gI", groundImage);
  ground.x = ground.width / 2;
  
  foodsGroup = new Group();
  obsGroup = new Group();
  
}

function draw() {
  background("pink");

  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }
  monkey.collide(ground);

  if (monkey.y > 20) {
    if (monkey.y > 50) {
      if (mousePressedOver(ground) || keyDown("space")) {
        monkey.velocityY = -20;
      }
      monkey.velocityY = monkey.velocityY + 1.9;
    }
  }

  spawnObstacles();
  spawnbanana();
  Score();
  drawSprites();
}

function spawnbanana() {
  if (frameCount % 80 === 0) {
    banana = createSprite(600, 100, 40, 10);
    banana.y = Math.round(random([100, 150]));
    banana.addImage("banana", bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -6;
    banana.lifeTime = 6 / 420;
    foodsGroup.add(banana);
  }
}

function spawnObstacles() {
  if (frameCount % 300 === 0) {
    obstacle = Math.round(random);
    obstacle = createSprite(410, 280, 25, 25);
    obstacle.addImage("ob", obstaceImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -5;
    obstacle.lifeTime = 5 / 420;
    obsGroup.add(obstacle);
  }
}
function Score() {
  var score = 0;
  text("score=" + score, 200, 20);
  frameRate=score;
}
