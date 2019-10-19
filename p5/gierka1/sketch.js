function setup() {
  createCanvas(496, 496);
tab.push(new kulka(140,140,200))
//noStroke()
}
let tab=[]
function draw() {
 background(170, 57, 57,0.6)
//fill(76,120,120,100)

for(i of tab){
  if(i.state)
  i.drawa()
}

}


function kulka(x,y,r){
this.x=x
this.y=y
this.vx=random(-5,5)
this.vy=random(-5,5)
this.r=r
this.state=true
this.drawa= function() {
  if(this.state){
ellipse(this.x,this.y,this.r)
this.x+=this.vx
this.y+=this.vy
if(this.x>width-this.r/2 || this.x<this.r/2){
  this.vx=-this.vx
}
if(this.y>height-this.r/2 || this.y<this.r/2){
  this.vy=-this.vy
}

  }
}


}
 

function mouseClicked(){

for(i of tab){
if(dist(i.x,i.y,mouseX,mouseY)<i.r && i.state){
  let q=new kulka(i.x,i.y,i.r/2)
  let w=new kulka(i.x,i.y,i.r/2)
  i.state=false
  clear()
tab.push(q,w)
break
}



}


}


