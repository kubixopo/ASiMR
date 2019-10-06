function setup() {
 
  createCanvas(500,1000);
  r=1;
  tab.push(new kwadrat(100,100,300))
  
}
let col1,col2,col3,col4
let score=1
let tab=[]
let f=true
function draw() {
  background(170, 57, 57,0.1);

  if(f){
  fill(170, 57, 57,0.1)

  noStroke()
  rect(0,0,500,100)
  rect(0,100,100,400)
  rect(100,400,400,100)
  rect(400,100,100,300)
  stroke(0.5)
  }
 

 fill('white')
 
  
  rect(width/2-18,35,50,20)
  fill('black')
  text(score,width/2,50)
  score=tab.length
for(i of tab){

  if(i.a==300){
    fill(254,167,5,i.e)
  }else if(i.a==150){
    fill(248,5,23,i.e)
  }else if(i.a==75){
    fill(20,72,250,i.e)
  }else if(i.a==37.5){
    fill(3,250,5,i.e)
  }else if(i.a==18.75){
  fill(205,47,236,i.e)
  }else if(i.a==9.375){
    fill(254,56,5,i.e) 
  }else if(i.a==4.6875){
    fill(204,245,5,i.e) 
  }else if(i.a==2.34375){
    fill(15,94,165,i.e)  
  }


  i.drawa()
  if(i.e<=2){
 i.e+=0.05
  }
  
  
}

  }

 
function  kwadrat(x,y,a){
this.x=x
this.y=y
this.state=true
this.a=a
this.e=0
this.drawa=function(){


  if(this.state)
  rect(this.x,this.y,this.a,this.a)

}



}
let q=0,w=0,e=0,r=0
function mouseReleased(){
  
for(i of tab){
  console.log(tab.length)
  if(mouseX>i.x && mouseX<i.x+i.a && mouseY>i.y && mouseY<i.y+i.a && i.state && i.a/2>2){
    
    let q=new kwadrat(i.x,i.y,i.a/2)
    let w=new kwadrat(i.a/2+i.x,i.y,i.a/2)
    let e=new kwadrat(i.x,i.a/2+i.y,i.a/2)
    let r=new kwadrat(i.x+i.a/2,i.y+i.a/2,i.a/2)
    i.state=false
   
   f=false
   
    tab.push(q,w,e,r)
    
   break;
    
  
  
  
}

}

}
let txt='tab=['
function keyPressed(){
if(key=='p'){
  for(i of tab){
    txt=txt+'new obraz('+ str(i.x)+','+str(i.y)+','+str(i.a)+','+str(i.state)+')'+','


  }


}


}

let tab_obraz1=[new obraz(100,100,300,false),new obraz(100,100,150,false),new obraz(250,100,150,false),new obraz(100,250,150,false),new obraz(250,250,150,false),new obraz(250,100,75,true),new obraz(325,100,75,true),new obraz(250,175,75,false),new obraz(325,175,75,true),new obraz(100,250,75,true),new obraz(175,250,75,false),new obraz(100,325,75,true),new obraz(175,325,75,true),new obraz(100,100,75,true),new obraz(175,100,75,true),new obraz(100,175,75,true),new obraz(175,175,75,false),new obraz(250,250,75,false),new obraz(325,250,75,true),new obraz(250,325,75,true),new obraz(325,325,75,true),new obraz(250,175,37.5,true),new obraz(287.5,175,37.5,true),new obraz(250,212.5,37.5,false),new obraz(287.5,212.5,37.5,true),new obraz(175,250,37.5,true),new obraz(212.5,250,37.5,false),new obraz(175,287.5,37.5,true),new obraz(212.5,287.5,37.5,true),new obraz(175,175,37.5,true),new obraz(212.5,175,37.5,true),new obraz(175,212.5,37.5,true),new obraz(212.5,212.5,37.5,false),new obraz(250,250,37.5,false),new obraz(287.5,250,37.5,true),new obraz(250,287.5,37.5,true),new obraz(287.5,287.5,37.5,true),new obraz(250,250,18.75,false),new obraz(268.75,250,18.75,true),new obraz(250,268.75,18.75,true),new obraz(268.75,268.75,18.75,true),new obraz(212.5,212.5,18.75,true),new obraz(231.25,212.5,18.75,true),new obraz(212.5,231.25,18.75,true),new obraz(231.25,231.25,18.75,false),new obraz(250,212.5,18.75,true),new obraz(268.75,212.5,18.75,true),new obraz(250,231.25,18.75,false),new obraz(268.75,231.25,18.75,true),new obraz(212.5,250,18.75,true),new obraz(231.25,250,18.75,false),new obraz(212.5,268.75,18.75,true),new obraz(231.25,268.75,18.75,true),new obraz(231.25,231.25,9.375,true),new obraz(240.625,231.25,9.375,true),new obraz(231.25,240.625,9.375,true),new obraz(240.625,240.625,9.375,false),new obraz(250,231.25,9.375,true),new obraz(259.375,231.25,9.375,true),new obraz(250,240.625,9.375,false),new obraz(259.375,240.625,9.375,true),new obraz(250,250,9.375,false),new obraz(259.375,250,9.375,true),new obraz(250,259.375,9.375,true),new obraz(259.375,259.375,9.375,true),new obraz(231.25,250,9.375,true),new obraz(240.625,250,9.375,false),new obraz(231.25,259.375,9.375,true),new obraz(240.625,259.375,9.375,true),new obraz(240.625,240.625,4.6875,true),new obraz(245.3125,240.625,4.6875,true),new obraz(240.625,245.3125,4.6875,true),new obraz(245.3125,245.3125,4.6875,true),new obraz(250,240.625,4.6875,true),new obraz(254.6875,240.625,4.6875,true),new obraz(250,245.3125,4.6875,true),new obraz(254.6875,245.3125,4.6875,true),new obraz(250,250,4.6875,true),new obraz(254.6875,250,4.6875,true),new obraz(250,254.6875,4.6875,true),new obraz(254.6875,254.6875,4.6875,true),new obraz(240.625,250,4.6875,true),new obraz(245.3125,250,4.6875,true),new obraz(240.625,254.6875,4.6875,true),new obraz(245.3125,254.6875,4.6875,true)]
function obraz(x,y,a,s){


    this.x=x+500
    this.y=y
    this.state=s
    this.a=a
  
    this.drawa=function(){
    
    
      if(this.state)
      rect(this.x,this.y,this.a,this.a)
    
    }
    
    
    
    }

    function draw(){

for(o of tab_obraz1){
  i.drawa();


}





    }