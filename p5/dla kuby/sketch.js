function setup() {
  
  createCanvas(500,500)
  //tab[0]=new przeszkoda(100,100)
  for(let i=0;i<5;i++){
    tab.push(new przeszkoda(i*100+20,200))
  }
}

function draw() {
  background(120,120,120,100)
  kulka()
  ty()
  for(i of tab){
    i.drawa()
  }
  // put drawing code here
}
let tab=[]
let x=250
let y=430
let vx=0
let vy=0
function kulka(){
if(keyIsDown(32)){
  vy=random(-10,-2)
  vx=random(-5,1)
}
x+=vx
y+=vy
if(x<10){
  vx=random(1,5)
}
if(x>480){
  vx=random(-5,1)
}
if(y<10){

  vy=random(1,5)
}
if(y>500){
  text('LOSE',100,250)
}

if(y>450 && x>tyx && x<tyx+200){
  vy=random(-10,-3)
  vx=random(-5,5)
}
ellipse(x, y,30)
}

let tyx=150

function ty(){
if(keyIsDown(LEFT_ARROW)){
  tyx-=3
}
if(keyIsDown(RIGHT_ARROW)){
  tyx+=3
}
rect(tyx,450,200,30)

}

function przeszkoda(x1,y1){
this.x=x1
this.y=y1
this.s=true
this.drawa=function(){
  if(this.s){
rect(this.x,this.y,40,20)
 if(x>this.x && x<this.x+40 && y>this.y && y<this.y+20){
   this.s=false
 }
}
}








}