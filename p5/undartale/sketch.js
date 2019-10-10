function setup() {
  createCanvas(496, 496);
  tab[0]=new przeszkoda_d(0)
  tab[1]= new przeszkoda_g(0)
  //noStroke()
}
let c=true
function draw() {
  //clear()
  background(170, 57, 57,0.6)
  fill(0,200,0,120)
  ty()
  push()
fill(100,120,200,80)
if(r>0.5){
translate(width,0)
rotate(PI/2)
}
for(i of tab){

i.drawa()


}
if(c){
  clear()
  c=false
}
pop()
}

let tab=[]

function przeszkoda_d(t){
this.x=0

this.t=t
this.h=int(random(100,200))
this.y=500
this.tr=true
this.drawa=function(){
  if(r>0.5){
    push()
   // translate(-width,0)
 // rotate(-(PI/2))
  if(y>this.y && x>this.x && x<this.x+20){
    console.log('s')
    clear()
    x=250
    y=250
    r=random(0,1)
    clear()
    c=true
  }
  pop()
  }else{
 
  if(y>this.y && x>this.x && x<this.x+20){
    clear()
    x=250
    y=250
    r=random(0,1)
    clear()
    c=true
  }
}

  if(this.y> height-this.h+3){
this.y-=random(1,3)
  }
rect(this.x,this.y,20,this.h)
this.x++
if(this.x>20 && this.t==0){
  let q=new przeszkoda_d(0)
tab.push(q)
this.t=1
}
if(this.x>430 ){
  this.y+=4
 }

}



}
let r=0

function przeszkoda_g(t){
  this.x=0
  
  this.t=t
  this.h=int(random(100,200))
  this.y=-100
  this.tr=true
  this.drawa=function(){
    if(y<this.y+this.h && x>this.x && x<this.x+20){
      clear()
      r=random(0,1)
      x=250
      c=true
    y=250
    clear()
    }
    if(this.y<-1 ){
  this.y+=random(1,3)
    }
  rect(this.x,this.y,20,this.h)
  this.x++
  if(this.x>20 && this.t==0){
    let q=new przeszkoda_g(0)
  tab.push(q)
  this.t=1
  }
  if(this.x>430 ){
   this.y-=4
  }
  
  
  }
  
  
  
  }
let x=200,y=250, skok=false
let vx=1,vy=2, l=0
  function ty(){
    if(keyIsDown(LEFT_ARROW)){
x--
    }
    if(keyIsDown(RIGHT_ARROW)){
      x++
          }

ellipse(x, y, 20)
y++
if(x>200){
 // x-=0.2
}
if(keyIsDown(UP_ARROW)){
  y-=random(2,4)
  //x+=random(1,2)
 // skok=true
  //vx++
}
if(l==20){
  l=0
  skok=false
}
if(skok){
vy=abs(vx^2)
x-=vx
y-=vy
l++

}




  }