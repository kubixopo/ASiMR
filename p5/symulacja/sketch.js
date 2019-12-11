//DAWID LINEK   
function setup(){
  createCanvas(500, 500)
  background('#fed766')
  slier=createSlider(1, 30, 25, 1)
  kwadraty=[new kwadrat(250,250)]
}

function draw(){
  for(i of bloki){
    i.drawa()
  }
  if(mouseIsPressed){
    bloki.push(new blok())
    }
//if(keyIsDown(32)){
  if(frameCount%slier.value()==0){
    ile=kwadraty.length
    for(let i=0;i<ile;i++){
      stop=false
      kwadraty[i].tworzenie()
    }

    if((frameCount*slier.value()/10)%200==0){
      for(i=0;i<kwadraty.length-50;i++){
        kwadraty.shift()
      }
      console.log(kwadraty.length)
    }
  }

}

function kwadrat(x,y){
  this.x=int(x)
  this.y=int(y)
  this.s=true
  if(this.s){
    fill('#fe4a49')
    noStroke()
    rect(this.x,this.y,10,10)
    fill('#2ab7ca')
    //stroke(1)


    this.tworzenie=function(){
      if(this.x>500 || this.x<0 || this.y>500 || this.y<0){
        this.s=false
        textSize(50)
        text("LOSE",200,250)
      }
  
      this.l=true
      this.p=true
      this.g=true
      this.d=true
      for(i of bloki){
        if(dist(this.x,this.y,i.x,i.y)<10){
          this.s=false
        }
      }
      for(i of kwadraty){
      
        if(this.x+10==i.x && this.y==i.y){
          this.p=false
        }
        if(this.x-10==i.x && this.y==i.y){
          this.l=false
        }
        if(this.x==i.x && this.y+10==i.y){
          this.d=false
        }
        if(this.x==i.x && this.y-10==i.y){
          this.g=false
        }
      }
        if(this.s){
        if(this.l){
          kwadraty.push(new kwadrat(this.x-10,this.y))
          stop=true
        }
        if(this.p){
          kwadraty.push(new kwadrat(this.x+10,this.y))
          stop=true
        }
        if(this.g){
          kwadraty.push(new kwadrat(this.x,this.y-10))
          stop=true
        }
        if(this.d){
          kwadraty.push(new kwadrat(this.x,this.y+10))
          stop=true
        }
      }
        if(this.x>500 || this.x<0 || this.y>500 || this.y<0){
          this.s=false
        
        }
        
          }

}}


function blok(){
  this.x=mouseX-mouseX%10
  this.y=mouseY-mouseY%10
  this.drawa=function(){
    rect(this.x,this.y,10,10)
  }
}

//Zmienne
let bloki=[]
let kwadraty=[]
let ile=1
let slier