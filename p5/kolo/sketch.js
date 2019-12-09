function setup() {
  createCanvas(500,500);
  r=1;
  
  // put setup code here
}

function draw() {
  background(170, 57, 57, 0.602);
  if(mouseX>0 && mouseX<500 && mouseY>0 && mouseY<500){
  ellipse(mouseX,mouseY,r);
  }
  if(mouseIsPressed){
    r++;
  }else{
    r=2;
  }
  
  }

  // put drawing code here
