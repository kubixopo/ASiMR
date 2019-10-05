function setup() {
  createCanvas(500,500);
  r=1;
  tab.push(new kwadrat(100,100,300))
  // put setup code here
  //noStroke()
}
let score=1
let tab=[]
function draw() {
  background(170, 57, 57,0.6);
  fill('black')
  text(score,width/2,50)
  score=tab.length
for(i of tab){
  if(i.a==300){
    fill(254,167,5,0.6)
  }else if(i.a==150){
    fill(248,5,23)
    
  }else if(i.a==75){
    fill(20,72,169)
    fill(20,72,169,0.6)
  }else if(i.a==37.5){
    fill(33,210,5)
    fill(33,210,5,0.6)
  }else if(i.a==18.75){
  fill(165,4,165)

  }else if(i.a==9.375){
    fill(254,76,5,0.6)
    
  }else if(i.a==4.6875){
    fill(204,245,5,0.6)
    
  }else if(i.a==2.34375){
    fill(15,94,165,0.6)
    
  }


  i.drawa()
  //i.mc()
}

  }

  // put drawing code here
function  kwadrat(x,y,a){
this.x=x
this.y=y
this.state=true
this.a=a
this.drawa=function(){


  if(this.state)
  rect(this.x,this.y,this.a,this.a)

}
this.mc=function mousePressed(){
  if(mouseX>this.x && mouseX<this.x+this.a && mouseY>this.y && mouseY<this.y+this.a && mouseIsPressed){
    this.wx=(this.x+this.a)/2
    this.wy=(this.y+this.a)/2
    let q=new kwadrat(this.x,this.y,a/2)
    let w=new kwadrat(this.wx,this.y,a/2)
    let e=new kwadrat(this.x,this.wy,a/2)
    let r=new kwadrat(this.wx,this.wy,a/2)
    this.state=false
  tab.push(q,w,e,r)

  }

}

let s=false
}
let q=0,w=0,e=0,r=0
function mouseReleased(){
  
for(i of tab){
  console.log(tab.length)
  if(mouseX>i.x && mouseX<i.x+i.a && mouseY>i.y && mouseY<i.y+i.a && i.state){
    
    let q=new kwadrat(i.x,i.y,i.a/2)
    let w=new kwadrat(i.a/2+i.x,i.y,i.a/2)
    let e=new kwadrat(i.x,i.a/2+i.y,i.a/2)
    let r=new kwadrat(i.x+i.a/2,i.y+i.a/2,i.a/2)
    i.state=false
    s=true
    tab.push(q,w,e,r)
    
   break;
    
  //
  
  
}

}
if(s){
  
  s=false
}
}
