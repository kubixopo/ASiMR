//JAKUB CHEŁPA COPYRIGHT
function setup() {
  createCanvas(500, 500)
  background(218, 156, 32, 120)
  tab[0] = new kolka()
  tab[1] = new kolka()
  tab[2] = new kolka()
  //colorMode(HSB);
  stroke(255);
  strokeWeight(4);
  tab1[0] = new kulki()
  tab1[1] = new kulki()
  tab1[2] = new kulki()
  tab1[3] = new kulki()
}
function kulki(){
console.log("123")
this.x = random(0)
this.y = random(0,450)
this.v = random(1,5)
this.s = true;
this.drawb = function(){
  if(this.s){
  fill("white")
  ellipse(this.x,this.y,5)
  this.x +=this.v+25
  if(this.x>500){
    tab1.push(new kulki())
    this.s = false;
  }
}
}
}
function koniec123(){
  clear;
  background(0,0,0)
  fill("white")
  textSize(150)
  text("WIN!",70,300)
}
function sterowanie() {
  if (koloX > 485) {
    koloX -= 15;
  }
  if (koloX < 15) {
    koloX += 15;
  }
  if (koloY < 15) {
    koloY += 15;
  }
  if (koloY > 485) {
    koloY -= 15;
  }
  else {
    if (keyIsDown(LEFT_ARROW)) {
      koloX -= 10;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      koloX += 10;
    }
    if (keyIsDown(UP_ARROW)) {
      koloY -= 10;
    }
    if (keyIsDown(DOWN_ARROW)) {
      koloY += 10;
    }
  }

}
let nextLevelX = 200;
let nextLevelY = 400;
let tab = [];
function kolka() {
  this.x = random(30, 470)
  this.y = -50
  this.v = random(5, 10)
  this.f = true;
  this.drawa = function () {
    fill(218, 156, 32, 120)
    ellipse(this.x, this.y, 20)
    this.y += this.v
    if (dist(koloX, koloY, this.x, this.y) < 30) {
      clear()
      time = 0;
    }
    if (this.y > 400 && this.f == true) {
      tab.push(new kolka())
      time++;
      this.f = false;
    }

  }
}
//###################### ZMIENNE #####################################
let koniec = false;
let poziom = 0;
let time = 0;
let koloX = 300;
let koloY = 300;
tab1 = []
rtime1 = "GOAL : 30"
rtime2 = "GOAL : 60"
rtime3 = "GOAL : 90"
//###################### ZMIENNE ######################################
function draw() {
  //################### POZIOM 0 #######################################
  if(poziom == 0){
    background("red")
    textSize(80)
    text("WELCOME!",30,100)
    sterowanie()
    fill("white")
    rect(nextLevelX, nextLevelY, 100, 50)
    textSize(18)
    fill("black")
    text("START", 220, 430)
    fill("black")
    ellipse(koloX,koloY,20)

    if (koloX > nextLevelX && koloX < nextLevelX + 100 && koloY > nextLevelY && koloY < nextLevelY + 50) {
      poziom = 1
    }
      
  }

//################################### POZIOM 0 ###################################

  //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ POZIOM 1 @@@@@@@@@@@@@@@@@@@@@@@@@//
  if (poziom == 1) {
    kolka();
    sterowanie()
    fill("black")
    text(rtime1,115,100)
    if (time >= 30) {
      koniec = true;
      textSize(50);
      fill("red");
    }
    drawa();
    background(19, 131, 131, 120)
    fill(227, 200, 200)
    ellipse(koloX, koloY, 20)
    fill(127, 20, 270, 120)
    textSize(50);
    text(time, 230, 50)
    fill(19, 131, 131, 120)
    if (koniec == false) {
      for (i of tab) {
        i.drawa();
      }
    }
    else {
      wygranko()
      //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  POZIOM 1 @@@@@@@@@@@@@@@@@@@@@@
      if (koloX > nextLevelX && koloX < nextLevelX + 100 && koloY > nextLevelY && koloY < nextLevelY + 50) {
        poziom = 2
      }
    }
    function wygranko() {
      rtime1 == ""
      rtime2 == ""
      rtime3 == ""
      fill("black")
      textSize(250)
      text("WIN", 0, 250);
      fill("white")
      rect(nextLevelX, nextLevelY, 100, 50)
      textSize(18)
      fill("black")
      text("Next Level", 200, 430)
      fill("black")
      textSize(250)
      text("WIN", 0, 250);
      fill("white")
      textSize(18)

      
    }
  }
  //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ POZIOM 2 @@@@@@@@@@@@@@@@@@@@@@@@@
  if (poziom == 2) {
    fill("black")
    text(rtime2,115,100)
    sterowanie()
    fill(127, 20, 270, 120)
    textSize(50);
    text(time, 230, 50)
    background(142, 164, 33, 120)
    fill(225, 0, 68, 120)
    ellipse(koloX, koloY, 20)
    if (time >= 60) {
      koniec = true;
      wygranko();
      wygranko();
      fill("black")
      textSize(250)
      text("WIN", 0, 250);
      fill("white")
      rect(nextLevelX, nextLevelY, 100, 50)
      textSize(18)
      fill("black")
      text("Next Level", 200, 430)
      fill("black")
      textSize(250)
      text("WIN", 0, 250);
      fill("white")
      textSize(18)
      textSize(50);
      fill("red");
      
      if (koloX > nextLevelX && koloX < nextLevelX + 100 && koloY > nextLevelY && koloY < nextLevelY + 50) {
        poziom = 3
      }
      
    }
    
    else{
    koniec = false;
    drawa();
    
    if (koniec == false) {
      for (i of tab) {
        i.drawa();
      }
    }
    else{
      wygranko()
    }
  }
    
    function wygranko() {
      fill("black")
      textSize(250)
      text("WIN", 0, 250);
      fill("white")
      textSize(18)
      
      
    }
    
    
  }

  //#################################### POZIOM 2 ########################################

  if(poziom ==3){
    fill("black")
    text(rtime3,115,100)
    sterowanie()
    fill(27, 120, 270, 120)
    textSize(50);
    text(time, 230, 50)
    background(242, 64, 133, 120)
    fill(125, 0, 168, 120)
    ellipse(koloX, koloY, 20)
    if (time >= 90) {
      kulki()
      koniec = true;
      clear();
      textSize(50);
      fill("red");
      koniec123()
      for(i of tab1){
        fill("white")
        i.drawb()
      }
      
     
      
    }
    
    else{
    koniec = false;
    drawa();
    
    if (koniec == false) {
      for (i of tab) {
        i.drawa();
      }
    }
  }
  }
}
//######################################### POZIOM 3 ##########################################






