function setup() {
  createCanvas(496, 496);
  tab[0]=new przeszkoda_d(0)
  tab[1]= new przeszkoda_g(0)
  tab[2]= new przeszkoda_b()
  tab[3]= new przeszkoda_l(0)
  //noStroke()
}
let c=true
function draw() {
  clear()
  background(170, 57, 57,0.6)
  push()
 //clear()
  fill(16,255,16,190)
  ty()
  pop()
  push()
fill(100,120,200,80)
if(r>0.5){
//translate(width,0)
//rotate(PI/2)
lorp=true
}else{
  lorp=false
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
  
 // if(r>0.5){
  //  push()
  // translate(-width,0)
 // rotate(-(PI/2))
//}
if(!lorp){
 
  if(y>this.y && x>this.x && x<this.x+20){
    lose()
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
}

let r=0

function przeszkoda_g(t){
  this.x=0
  
  this.t=t
  this.h=int(random(100,200))
  this.y=-100
  this.tr=true
  this.drawa=function(){
    if(!lorp){
    if(y<this.y+this.h && x>this.x && x<this.x+20){
     lose()
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
  
  
  }
let x=200,y=250, skok=false
let vx=1,vy=2, l=0
  function ty(){
    if(keyIsDown(LEFT_ARROW)){
x-=2
    }
    if(keyIsDown(RIGHT_ARROW)){
      x+=2
          }
          if(keyIsDown(DOWN_ARROW)){
            y+=1
                }
if(x>width || x<0 || y>height || y<0){
  lose()
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


function przeszkoda_b(){
this.x=random(600,1000)
this.y=random(200,300)
this.t=true
this.drawa=function(){
  //if(!lorp){
  console.log(frameCount/500)
  if(this.t){
    push()
    //noStroke()
    fill(200,120,20,80)
rect(this.x,this.y,50,20)
pop()
if(x>this.x && x<this.x+100 && y>this.y && y<this.y+20){
  lose()
}
this.x-=frameCount/500
if(this.x<-100){
  //tab.push(new przeszkoda_b())
  this.x=random(600,1000)
  this.y=random(150,350)
 // this.t=false
}
  }
}
}
//}

function lose(){
//fill(0,0,0)
//rect(0,0,width,height)
  //clear()
  r=random(0,1)
  x=250
  c=true
y=250
clear()


}
let lorp=false
function przeszkoda_l(t){
  this.x=-100
  
  this.t=t
  this.h=int(random(100,200))
  this.y=0
  this.tr=true
  this.dx=random(0,400)
  this.drawa=function(){
    if(lorp){
    if(y<this.y+20 && x>this.x && x<this.x+this.h && y>this.y){
     lose()
    }
    if(this.x<this.dx ){
  this.x+=random(1,3)
    }
  rect(this.x,this.y,this.h,20)
  this.y++
  if(this.y>random(40,100) && this.t==0){
    let q=new przeszkoda_l(0)
  tab.push(q)
  this.t=1
  }
  if(this.x>430 ){
   this.x-=4
  }
  
}
  }
  
  
  
  }