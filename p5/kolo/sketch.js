function setup() {
  createCanvas(500,500);
  r=1;
  background(240, 248, 255, 0.774);
  // put setup code here
}

function draw() {
  background(240, 248, 255, 0.774);
  ellipse(100,100,r);
  if(r>100){
    r=2;
  }else{
    r++;
  }

  // put drawing code here
}