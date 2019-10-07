function setup() {
  createCanvas(496, 496);
  rectMode(CENTER)
  translate(width / 2, height / 2)
  rotate(PI/9)
  //frameRate(30)
  kw=new rec(10,250,250,30)
  kw1=new rec(250,10,30,250)
}
let r=0
function draw() {
  background(170, 57, 57,0.6)
  
  r++
  ty()
  kw.drawa()
  kw1.drawa()
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


function rec(x1,y1,h,w){
this.x=x1
this.y=y1
this.state=true
this.h=h
this.w=w


this.drawa=function(){
if(this.state){
	if(x>this.x-10 && x<this.x+10 && y>this.y-120 && y<this.y+120 || dist(250,250,x,y)<70){
		console.log('l')
		fill('white')
		rect(225,50,100,50)
		fill('red')
		text('BŁĄD',220,50)
	}

	if(x>this.x-120 && x<this.x+120 && y>this.y-10 && y<this.y+10 || dist(250,250,x,y)<70){
		console.log('l')
		fill('white')
		rect(225,50,100,50)
		fill('red')
		text('BŁĄD',220,50)
	}
rect(this.x,this.y,this.w,this.h)
if(this.x<250){
this.x++
}
if(this.x>250){
	this.x--
}
if(this.y<250){
	this.y++
	}
if(this.y>250){
		this.y--
	}



}

if(this.h>200){
if((this.x>180 && this.x<240) || (this.x<320 && this.x>250)){
	this.state=false
	if(random(0,1)>0.5){
		kw=new rec(10,250,250,30)
	}else{
		kw=new rec(490,250,250,30)
}
	}
}
if(this.h<150){
	if((this.y>180 && this.y<240) || (this.y<320 && this.y>250)){
		this.state=false
		if(random(0,1)>0.5){
			kw1=new rec(250,10,30,250)
		}else{
			kw1=new rec(250,490,30,250)
	}
		}




}
	
	}
	

	
	
}

