const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, ground, box1, polygon,polyImg, slingshot,backgroundImg;
var score=0;
//var color=random(0,255);
function preload() {
  
  bg1 = loadImage("images.jpg");
  bg2=loadImage("download.jpg");
  polyImg= loadImage("polygon.png") ;
}


function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  
  
  stand1= new Stand(390,300,250,10);
  stand2= new Stand (700,200,200,10);

  Box1 = new Box(300,275,30,40);
  console.log(Box1);
  Box2 = new Box(330,275,30,40);
  Box3 = new Box(360,275,30,40);
  Box4 = new Box(390,275,30,40);
  Box5 = new Box(420,275,30,40);
  Box6 = new Box(450,275,30,40);
  Box7 = new Box(480,275,30,40);
  //level two
  Box8 = new Box(330,235,30,40);
  Box9 = new Box(360,235,30,40);
  Box10 = new Box(390,235,30,40);
  Box11 = new Box(420,235,30,40);
  Box12 = new Box(450,235,30,40);
  //level three
  Box13 = new Box(360,195,30,40);
  Box14 = new Box(390,195,30,40);
  Box15 = new Box(420,195,30,40);
  //top
  Box16 = new Box(390,155,30,40);

  //set 2 for second stand
  //level one
  Boxs1 = new Box(640,175,30,40);
  Boxs2 = new Box(670,175,30,40);
  Boxs3 = new Box(700,175,30,40);
  Boxs4 = new Box(730,175,30,40);
  Boxs5 = new Box(760,175,30,40);
  //level two
  Boxs6 = new Box(670,135,30,40);
  Boxs7 = new Box(700,135,30,40);
  Boxs8 = new Box(730,135,30,40);
  //top
  Boxs9 = new Box(700,95,30,40);


//  createSprite(400, 200, 50, 50);
  
  ground = new Ground(600,400,1200,20);
 
  
 

polygon = Bodies.circle(100, 200, 50);
  World.add(world, polygon);

  slingshot = new Slingshot(this.polygon,{x:100, y:200});


}

function draw() {
  background(backgroundImg);  
  Engine.update(engine);

  noStroke();
  textSize(35)
  fill(color)
  text("Score  " + score, width-300, 50)
  
  stand1.display();
  stand2.display();
ground.display();
//ground2.display();
fill("skyblue");
Box1.display();
Box2.display();
Box3.display();
Box4.display();
Box5.display();
Box6.display();
Box7.display();
fill("pink");
Box8.display();
Box9.display();
Box10.display();
Box11.display();
Box12.display();
fill("turquoise");
Box13.display();
Box14.display();
Box15.display();
fill("grey");
Box16.display();
fill("skyblue");
Boxs1.display();
Boxs2.display();
Boxs3.display();
Boxs4.display();
Boxs5.display();
fill("turquoise");
Boxs6.display();
Boxs7.display();
Boxs8.display();
fill("pink");
Boxs9.display();

fill("gold");
image (polyImg,this.polygon.position.x,this.polygon.position.y,50,50)
  slingshot.display();

   

 drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x:mouseX, y:mouseY});
}

function mouseReleased(){
  
  slingshot.fly();
}

function keyPressed(){
if(keyCode=== 32){
  slingshot.attach(this.polygon);}

 async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if( hour>=0600 && hour<=1900){
      backgroundImg = "images.jpg";
      noStroke();
      textSize(35)
      fill("black")
      text("Score  " + score, width-300, 50)
  }
  else{
      backgroundImg = "download.jpg";
      noStroke();
      textSize(35)
      fill("white")
      text("Score  " + score, width-300, 50)
  }


}
}





