
function setup() {
  createCanvas(500,500)// put setup code here
  tab=[new kwadrat()]
}

let graczX = 250;
  let graczY = 450;
 
function draw() {
  // put drawing code here
  background(129,130,150,80)
  line(166,0,166,500)
  line(322,0,322,500)
  for(i of tab){
    i.drawa()
  }
  fill(200,120,50,30)
  ellipse(graczX,graczY,20)
  
  if(keyIsDown(LEFT_ARROW)){
    graczX = 80
  }

  if(keyIsDown(RIGHT_ARROW)){
    graczX = 420
  }

  if(keyIsDown(DOWN_ARROW)){
    graczX = 250
  }
  ellipse(graczX,graczY,20)

  if(keyIsDown(LEFT_ARROW)){
    graczX = 80
  }

  if(keyIsDown(RIGHT_ARROW)){
    graczX = 420
  }

  if(keyIsDown(DOWN_ARROW)){
    graczX = 250
  }
  if(keyIsDown(UP_ARROW)){
    graczX = 250
  }

  if(keyIsDown(UP_ARROW)){
    graczX = 250
  }

}
let tab=[]
function kwadrat(){
  this.r=random(0,500)
  this.state=true
  while((this.r>140 && this.r<170) || (this.r>320 && this.r<340)){
   
    this.r=random(0,500)
     
  }
 
 
   this.x=this.r
  this.y=-100
 
  this.drawa=function(){
    if(this.state){
      this.y+=3
    rect(this.x,this.y,20,20)
     
    if(this.y>500){
      tab.push(new kwadrat())
      this.state=false
    }
  }
  if(graczX==this.x && graczY==this.x+20 && graczX==this.y && graczY==this.y+20){
      background('red')
      console.log('pryegranko')
    }
  }
}
