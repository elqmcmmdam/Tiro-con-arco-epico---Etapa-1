//Maestra, no aparecen, las imagenes del jugador y de la base del jugador, puede que si aparezcan
//pero que estén detrás del escenario, no se como solucionar este problema, pero como puede ver hice
//tanto al jugador como a su respectiva base.

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase, playerArcher;
var baseimage;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

  //crear el cuerpo base del jugador
  playerimage = Bodies.rectangle(windowWidth/4,windowHeight/2,30,60,{isStatic: true});
  World.add(world,playerimage);

  baseimage = Bodies.rectangle(windowWidth/4,windowHeight/2-10,60,30,{isStatic: true});
  World.add(world,baseimage);

  //crear el cuerpo del jugador
  player = loadImage(playerimage);

  base = loadImage(baseimage);
 
 


}

function draw() {
  background(backgroundImg, 0, 0, width, height);

  //mostrar la imagen del jugador utilizando la función image()
  push();
  imageMode(CENTER);
  image(playerimage,playerimage.position.x,playerimage.position.y,30,60);
  pop();
  

  //mostrar la imagen de la base del jugador utilizando la función image()
  push();
  imageMode(CENTER);
  image(baseimage,baseimage.position.x,baseimage.position.y,60,30);
  pop();


  Engine.update(engine);

  // Título
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("TIRO CON ARCO ÉPICO", width / 2, 100);
}
