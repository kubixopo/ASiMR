function setup() {
  createCanvas(500,500);
  r=1;
  tab.push(new kwadrat(100,100,300))
  // put setup code here
  //noStroke()
 /* col1=color('rgba(254,167,5,0.6)')
  col2=color('rgba(248,5,23,0.6)')
  col3=color('rgba(20,72,169,0.6)')
  col4=color('rgba(33,210,5,0.6)')*/

  /*col1=color('rgba(99%,50%,2%,60)')
  col2=color('rgba(85%,2%,10%,60)')
  col3=color('rgba(20,72,169,60)')
  col4=color('rgba(33,210,5,60)')*/
}
let col1,col2,col3,col4
let score=1
let tab=[]
function draw() {
 background(170, 57, 57,0.6);
 if(frameCount%60==0){
  fill(255,255,255)
  //rect(100,100,300,300)
 }
 fill('white')
  //fill(255,255,255,0.6)
  rect(100,100,300,300)
  fill('black')
  text(score,width/2,50)
  score=tab.length
for(i of tab){
 //if(i.state){
   //fill(100,100,100,0.5)
//if(i.e==1){
 // fill(255,255,255,0.6)
 //rect(i.x,i.y,i.a,i.a)
//}
  if(i.a==300){
   // if(i.e<240){
    //  fill(254,167,5,0.6)
   // }else{
    fill(254,167,5,i.e)
   // }
  }else if(i.a==150){
   // if(i.e<240){
    //  fill(248,5,23,0.6)
   // }else{
    fill(248,5,23,i.e)
   // }
    
  }else if(i.a==75){
    //if(i.e<240){
     // fill(20,72,169,0.6)
   // }else{
    fill(20,72,169,i.e)
   // }
  }else if(i.a==37.5){
    
    fill(33,210,5,i.e)
  }else if(i.a==18.75){
  fill(165,4,165,i.e)

  }else if(i.a==9.375){
    fill(254,76,5,i.e)
    
  }else if(i.a==4.6875){
    fill(204,245,5,i.e)
    
  }else if(i.a==2.34375){
    fill(15,94,165,i.e)
    
  }


  i.drawa()
 if(i.e<60){
  i.e++
 }
  //i.mc()
  
}

  }

  // put drawing code here
function  kwadrat(x,y,a){
this.x=x
this.y=y
this.state=true
this.a=a
this.e=30
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

//let s=false
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
   // s=true
    tab.push(q,w,e,r)
    
   break;
    
  //
  
  
}

}

}
