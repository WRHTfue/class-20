var mr,fr;
function setup() {
  createCanvas(800,400);
fr=  createSprite(400, 200, 50, 50);
fr.shapeColor="green";
mr= createSprite(600,200,50,50);
mr.shapeColor= "green"
}
function draw() {
  background(255,255,255);  

  mr.x = World.mouseX;
  mr.y= World.mouseY;
  if((mr.x - fr.x < mr.width/2 + fr.width/2) && 
  (fr.x - mr.x < mr.width/2 + fr.width/2)&& 
  (mr.y - fr.y < mr.height/2 + fr.height/2) && 
 (fr.y - mr.y < mr.height/2 + fr.height/2)){
    mr.shapeColor = "red";
    fr.shapeColor = "red";
  }
  else{
    mr.shapeColor = "green";
    fr.shapeColor = "green";
  }
  drawSprites();
}