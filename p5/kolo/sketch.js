function setup() {
  createCanvas(500,500)
  r=1
  // put setup code here
}

function draw() {
  ellipse(100,100,r)

  if(r>100){
    r=2
  }else{
    r++
  }

  // put drawing code here
}