function setup() {
  createCanvas(496, 496);
  rectMode(CENTER)
  translate(width / 2, height / 2)
  rotate(PI/9)
  //frameRate(30)
  kw=new rec(10,250)
}
let r=0
function draw() {
  background(170, 57, 57,0.6)
  
  r++
  ty()
  kw.drawa()
hexagon(250,250,0.4)
}



function hexagon(transX, transY, s) {
	stroke(255);
	strokeWeight(5);
	fill('rgba(255, 255, 100, .25)');
	push();
	translate(transX, transY);
	scale(s);
	//translate(width / 2, height / 2)
  rotate(r)
	beginShape();
	  vertex(-75, -130);
	  vertex(75, -130);
	  vertex(150, 0);
	  vertex(75, 130);
	vertex(-75, 130);
	  vertex(-150, 0);
	  endShape(CLOSE); 
	  pop();
  }
  let r1=0
let x=300,y=300;
  function ty(){

if(keyIsDown(LEFT_ARROW)){
	x--

}
if(keyIsDown(RIGHT_ARROW)){
	x++
}
if(keyIsDown(DOWN_ARROW)){
	y++
}
if(keyIsDown(UP_ARROW)){
	y--
}

//translate(width / 2, height / 2)
//rotate(r1)
fill('lime')
ellipse(x, y,20)
fill('rgba(255, 255, 100, .25)');
rotate(0)
}
function keyDown(){
	if(key=="LEFT_ARROW"){
		console.log('a')
	}
}


function rec(x,y){
this.x=x
this.y=y
this.state=true
this.h=250
this.w=30

this.drawa=function(){
if(this.state){
rect(this.x,this.y,this.w,this.h)
if(this.x<250){
this.x++
}
if(this.x>250){
	this.x--
}



}
if((this.x>180 && this.x<240) || (this.x<320 && this.x>250)){
	this.state=false
	if(random(0,1)>0.5){
		kw=new rec(10,250)
	}else{
		kw=new rec(490,250)
}
	}
	
}

}