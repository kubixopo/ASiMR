function setup() {
  createCanvas(500,500);
 angleMode(DEGREES)
 /*tab[0]= new rec(0);
 tab[1]= new rec(180);
 tab[2]= new rec(270);
 tab[3]= new rec(90);*/
for(let i=0;i<5;i++){
  tab[i]=new przeszkoda_k(72*i)
}
 /*tab[0]= new przeszkoda_k(0);
 tab[1]= new przeszkoda_k(30);
 tab[2]= new przeszkoda_k(60);
 tab[3]= new przeszkoda_k(90);
 tab[4]= new przeszkoda_k(120);
 tab[5]= new przeszkoda_k(150);
 tab[6]= new przeszkoda_k(180);*/
 //tab[3]= new rec(90);
}
//let a=0
//let y=200
let tab=[]
function draw() {
  //clear()
  background(170, 57, 57,60);
  ty()
for(i of tab){
  i.drawa()
}
/*ush()
rectMode(CENTER)
translate(250,250)
rotate(0)
rect(0,y,100,20)
a++
y-=0.5
pop()*/
}
let q
function przeszkoda_k(a){
this.y=300
this.a=a
this.state=2
this.pa=a
this.drawa= function(){
  //console.log(this.pa)
  if(this.state!=0){
  push()
  rectMode(CENTER)
  translate(width/2,height/2)
  rotate(this.a)
  fill(80,200,90,60)
  rect(0,this.y,50,20)
  this.y-=0.3
 
  //console.log(this.y)
  pop()
if(this.state==2 ){
  this.a++
}

if(this.y<120 && this.state==2){
  this.state=1
  q= new przeszkoda_k(this.pa)
  tab.push(q)
}

if(this.y<25 && this.state==1){
  this.state=0
  q= new przeszkoda_k(this.pa)
  
  /*if(this.pa==0){
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
  }*/

  tab.push(q)
}

  }


}
}
let x=250
let y=250
let c
let col=[130,117,70, 255]
function ty(){

  if(keyIsDown(LEFT_ARROW)){
    x-=2
  
  }
  if(keyIsDown(RIGHT_ARROW)){
    x+=2
  }
  if(keyIsDown(DOWN_ARROW)){
    y+=2
  }
  if(keyIsDown(UP_ARROW)){
    y-=2
  }
  if(mouseIsPressed){
    console.log(get(mouseX,mouseY))
  }
   c=get(x+21,y)
  if(c[0]==col[0] && c[1]==col[1] && c[2]==col[2]&& c[3]==col[3] ){
   // console.log('d')
   lose()
  //  clear()
  
  }
  c=get(x-21,y)
  if(c[0]==col[0] && c[1]==col[1] && c[2]==col[2]&& c[3]==col[3] ){
   // console.log('d')
   // clear()
   lose()
  }
  c=get(x,y+21)
  if(c[0]==col[0] && c[1]==col[1] && c[2]==col[2]&& c[3]==col[3] ){
   // console.log('d')
   // clear()
   lose()
  }
  c=get(x,y-21)
  if(c[0]==col[0] && c[1]==col[1] && c[2]==col[2]&& c[3]==col[3] ){
   // console.log('d')
   lose()
   // clear()
  }
  //translate(width / 2, height / 2)
  //rotate(r1)
  fill('lime')
  ellipse(x, y,20)
 
  //rotate(0)
  }

  function lose(){
clear()
console.log('przegranko')
background('red')

  }