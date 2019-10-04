function setup() {
  createCanvas(500,500);
  r=1;
  tab.push(new kwadrat(10,10,100))
  // put setup code here
}
let tab=[]
function draw() {
  background(170, 57, 57);
  

for(i of tab){
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


}

function mouseReleased(){
  console.log(tab.length)
for(i of tab){
  
  if(mouseX>i.x && mouseX<i.x+i.a && mouseY>i.y && mouseY<i.y+i.a){
    
    i.wx=(i.x+i.a)/2
    i.wy=(i.y+i.a)/2
    let q=new kwadrat(i.x,i.y,i.a/2)
    let w=new kwadrat(i.wx,i.y,i.a/2)
    let e=new kwadrat(i.x,i.wy,i.a/2)
    let r=new kwadrat(i.wx,i.wy,i.a/2)
    i.state=false
  tab.push(q,w,e,r)


}

}
}
