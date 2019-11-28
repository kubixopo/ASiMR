function setup() {
  createCanvas(496, 496);
  tab[0]=new przeszkoda_d(0)
  tab[1]= new przeszkoda_g(0)
  tab[2]= new przeszkoda_b()
  tab[3]= new przeszkoda_l(0)
  // tab[4]= new przeszkoda_k(0);
 //tab[5]= new przeszkoda_k(180);
 //tab[6]= new przeszkoda_k(270);
 //tab[7]= new przeszkoda_k(90);
  //noStroke()
}
let c=true

function draw() {
  //console.log(r)
  console.log(lorp)
  if(lorp!=3){
    tabb=[]
  }
  clear()
  background(170, 57, 57,0.6)
  push()
 //clear()
  fill(16,255,16,190)
  ty()
  pop()
  push()
fill(100,120,200,80)
/*if(r>0.3 && r<0.6){
//translate(width,0)
//rotate(PI/2)
lorp=1
}
 if(r<0.3){
  lorp=2
}
if(r>0.6){
  lorp=3
}*/
for(i of tab){

i.drawa()


}
for(i of tabb){
  i.drawa()
}
if(c){
  clear()
  c=false
}
pop()
}

let tab=[]
tabb=[]

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
//console.log(lorp)
if(lorp==1){
 
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
    if(lorp==1){
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
let col=[0,0,0,255]
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
/*c=get(x+21,y)
if(c[0]==col[0] && c[1]==col[1] && c[2]==col[2]&& c[3]==col[3] ){
  lose()
}
c=get(x-21,y)
if(c[0]==col[0] && c[1]==col[1] && c[2]==col[2]&& c[3]==col[3] ){
  lose()
}
c=get(x,y+21)
if(c[0]==col[0] && c[1]==col[1] && c[2]==col[2]&& c[3]==col[3] ){
  lose()
}
c=get(x,y-21)
if(c[0]==col[0] && c[1]==col[1] && c[2]==col[2]&& c[3]==col[3] ){
  lose()
}

if(mouseIsPressed){
  console.log(get(mouseX,mouseY))
}*/

  }


function przeszkoda_b(){
  if(lorp==3){
    this.x=random(500,1500)
    this.y=random(20,480)
  }else{
  this.x=random(600,1000)
  this.y=random(150,350)
  }
this.t=true
this.drawa=function(){
  //if(!lorp){
  //console.log(frameCount/500)
  if(this.t){
    push()
    //noStroke()
    fill(200,120,20,80)
rect(this.x,this.y,50,20)
pop()
if(x>this.x && x<this.x+100 && y>this.y && y<this.y+20){
 lose()
 
}
if(frameCount<1000){
  this.x-=(frameCount/500)+2
}else{
  this.x-=frameCount/500
}


if(this.x<-100){
  //tab.push(new przeszkoda_b())
  if(lorp==3){
    this.x=random(500,1500)
    this.y=random(20,480)
  }else{
  this.x=random(600,1000)
  this.y=random(150,350)
  }
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
  if(lorp==1){
   // r=random(0,1)
    if(random(0,2)>0.5){
      lorp=2
      tab=[]
      tab.push(new przeszkoda_l(0))
    }else{
      lorp=3
      tab=[]
    }
  }else if(lorp==2){
 // r=random(0.2,0.1)
 if(random(0,1)>0.5){
    lorp=1
    tab=[]
    tab.push(new przeszkoda_d(0))
    tab.push(new przeszkoda_g(0))
  }else{
    lorp=3
    tab=[]
  }
  }else if(lorp==3){
   //r=random(0,0.7)
  if(random(0,1)>0.5){
    lorp=1
    tab=[]
    tab.push(new przeszkoda_d(0))
    tab.push(new przeszkoda_g(0))
  }else{
    lorp=2
    tab=[]
    tab.push(new przeszkoda_l(0))
  }
  }
  
  tab.push(new przeszkoda_b())
  x=250
  c=true
y=250
clear()
if(lorp==1){
  x=400
  y=100
  tabb=[]
}
tabb=[]
if(lorp==3){
  for(let i=0;i<10;i++){
tabb.push(new przeszkoda_b())
  }

}else{
  tabb=[]
}

}
//let lorp=1
var lorp=1
function przeszkoda_l(t){
  this.x=-100
  
  this.t=t
  this.h=int(random(100,200))
  this.y=0
  this.tr=true
  this.dx=random(0,400)
  this.drawa=function(){
    if(lorp==2){
    if(y<this.y+20 && x>this.x && x<this.x+this.h && y>this.y){
     lose()
    }
    if(this.x<this.dx ){
  this.x+=random(1,3)
    }
  rect(this.x,this.y,this.h,20)
  this.y++
  if(this.y>random(60,120) && this.t==0){
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


  /*function przeszkoda_k(a){
    this.y=300
    this.a=a
    this.state=2
    this.pa=a
    this.drawa= function(){
      if(lorp==3){
      //console.log(this.pa)
      if(this.state!=0){
      push()
      rectMode(CENTER)
      translate(width/2,height/2)
      rotate(this.a)
      fill(80,200,90,60)
      rect(0,this.y,200,20)
      this.y-=0.3
     
      //console.log(this.y)
      pop()
    if(this.state==2){
      this.a++
    }
    
    
    
    if(this.y<30){
      this.state=0
      clear()
      if(this.pa==0){
         q=new przeszkoda_k(90)
      }
      if(this.pa==90){
         q=new przeszkoda_k(180)
      }
      if(this.pa==180){
         q=new przeszkoda_k(270)
      }
      if(this.pa==270){
         q=new przeszkoda_k(0)
      }
      
      tab.push(q)
    }
    
      }
    
      }
    }
    }*/