function setup(){

createCanvas(500,500)
//frameRate(120)
background(120)
wyp.push(new wypelnienie(250,250,1),new wypelnienie(250,250,2),new wypelnienie(250,250,3),new wypelnienie(250,250,4))

wyp.push(new wypelnienie(250,250,5),new wypelnienie(250,250,6),new wypelnienie(250,250,7),new wypelnienie(250,250,8))
}
let tab=[]
let wyp=[]
let runda=true
function draw(){
background(120)
  for(i of tab){
    i.drawa()
  }

if(mouseIsPressed){
tab.push(new kwadrat(mouseX-(mouseX%10),mouseY-(mouseY%10)))
}

//if(keyIsDown(32)){
  if(frameCount>30){
 runda=true
  for(i of wyp){
    
    i.drawa()
    if(!runda){
      break;
    }
 }
  
}
}


function kwadrat(x,y){
this.x=x
this.y=y


this.drawa=function(){
  //noStroke()
  rect(this.x,this.y,10,10)

}
}

function wypelnienie(x,y,k){
  this.x=x
  this.y=y
  this.s=2
 this.k=k


  this.drawa=function(){
    

    if(this.s>0){
      for(i of tab){
        if(dist(i.x,i.y,this.x,this.y)<11){
         //runda=false
         
        // this.k=int(random(1,8))
        // this.x-=10
         //this.y-=10
          this.s=0
          break;
          
        }
      }
  
  
     if(this.x>500|| this.x<0 || this.y>500 || this.y<0){
     runda=false
     text("TRY AGAIN",200,250 )
       this.s=0
       }
    noStroke()
    fill("red")
    rect(this.x,this.y,10,10)
    fill('white')
    stroke(2)
    if(this.s==2 && frameCount%wyp.length==0){
     // for(i of wyp){
       // console.log(dist(i.x,i.y,this.x,this.y))
        //if(dist(i.x,i.y,this.x,this.y)>15 || dist(i.x,i.y,this.x,this.y)==0){

      
    if(this.k==3)
      wyp.push(new wypelnienie(this.x+10,this.y+10,3))  
    if(this.k==4)
     wyp.push(new wypelnienie(this.x-10,this.y-10,4)) 
    if(this.k==1)
     wyp.push(new wypelnienie(this.x-10,this.y+10,1)) 
    if(this.k==2)
      wyp.push(new wypelnienie(this.x+10,this.y-10,2)) 

    if(this.k==5)
      wyp.push(new wypelnienie(this.x+20,this.y,5))  
    if(this.k==6)
     wyp.push(new wypelnienie(this.x-20,this.y,6)) 
    if(this.k==7)
     wyp.push(new wypelnienie(this.x,this.y+20,7)) 
    if(this.k==8)
      wyp.push(new wypelnienie(this.x,this.y-20,8)) 
    this.s=1
        }
    //}
  //}
    //wyp.push(new wypelnienie(this.x+10,this.y+10),new wypelnienie(this.x-10,this.y+10),new wypelnienie(this.x+10,this.y-10),new wypelnienie(this.x-10,this.y-10))
      //runda=false
     // this.s=false
      //loadPixels()
    
     

    }
  
  }

}