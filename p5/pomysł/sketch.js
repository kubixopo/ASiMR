function setup(){
 
createCanvas(500,500)
slider = createSlider(5, 30,15);
//frameRate(120)
background(120)
//wyp.push(new wypelnienie(250,250,1),new wypelnienie(250,250,2),new wypelnienie(250,250,3),new wypelnienie(250,250,4))

wyp.push(new wypelnienie(250,250,5,true),new wypelnienie(250,250,6,true),new wypelnienie(250,250,7,true),new wypelnienie(250,250,8,true))
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

function wypelnienie(x,y,k,m){
  this.x=x
  this.y=y
  this.s=2
 this.k=k
 this.m=m


  this.drawa=function(){
    

    if(this.s>0){
      for(i of tab){
        if(dist(i.x,i.y,this.x,this.y)<10){
         //runda=false
          this.s=0
          break;
        }
      }
  
  
     if(this.x>480|| this.x<20 || this.y>480 || this.y<20){
     runda=false
       this.s=0
       }
    noStroke()
    fill("red")
    //if(this.m)
    //fill('green')
    rect(this.x,this.y,10,10)
    fill('white')
    stroke(2)
    let val =slider.value()
    if(this.s==2 && frameCount%int(random(val-5,val+5))==0){
      //if(this.s==2){
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
      wyp.push(new wypelnienie(this.x+10,this.y,5,true))
      if(this.m)  
      wyp.push(new wypelnienie(this.x,this.y-10,8,false)) 
    if(this.k==6)
     wyp.push(new wypelnienie(this.x-10,this.y,6,true))
     if(this.m)
     wyp.push(new wypelnienie(this.x,this.y+10,7,false))
    if(this.k==7)
     wyp.push(new wypelnienie(this.x,this.y+10,7)) 
    if(this.k==8)
      wyp.push(new wypelnienie(this.x,this.y-10,8)) 
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