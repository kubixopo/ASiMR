//JAKUB CHEŁPA COPYRIGHT
function setup() {
  createCanvas(500, 500)
  background(218, 156, 32, 120)
  tab[0] = new kolka()
  tab[1] = new kolka()
  tab[2] = new kolka()


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
let poziom = 1
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
let time = 0;
let koloX = 300;
let koloY = 300;
rtime1 = "GOAL : 30"
//###################### ZMIENNE ######################################


function draw() {

  //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ POZIOM 1 @@@@@@@@@@@@@@@@@@@@@@@@@//
  if (poziom == 1) {
    kolka();
    sterowanie()
    fill("black")
    text(rtime1,115,100)
    //!!!!!!!!@@@@ONIEC STEROWAŃSKA@@@!!!!!!!//

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
      fill("black")
      textSize(250)
      text("WIN", 0, 250);
      fill("white")
      rect(nextLevelX, nextLevelY, 100, 50)
      textSize(18)
      fill("black")
      text("Next Level", 205, 430)

      
    }
  }
  //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ POZIOM 2 @@@@@@@@@@@@@@@@@@@@@@@@@
  if (poziom == 2) {
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
  }
    
    function wygranko() {
      fill("black")
      textSize(250)
      text("WIN", 0, 250);
      fill("white")
      textSize(18)
      
      
    }
    
  }

  if(poziom ==3){
    sterowanie()
    fill(27, 120, 270, 120)
    textSize(50);
    text(time, 230, 50)
    background(242, 64, 133, 120)
    fill(125, 0, 168, 120)
    ellipse(koloX, koloY, 20)
    if (time >= 90) {
      koniec = true;
      wygranko()
      textSize(50);
      fill("red");
      
      if (koloX > nextLevelX && koloX < nextLevelX + 100 && koloY > nextLevelY && koloY < nextLevelY + 50) {
        poziom=4
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







