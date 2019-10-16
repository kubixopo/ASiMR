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
  console.log("STEROWANIE DZIAŁA!")
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
//###################### ZMIENNE ######################################


function draw() {

  //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ POZIOM 1 @@@@@@@@@@@@@@@@@@@@@@@@@//
  if (poziom == 1) {
    kolka();
    sterowanie()
    //!!!!!!!!@@@KONIEC STEROWAŃSKA@@@!!!!!!!//

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
        console.log("pozdro dla korwina najlepsza partia kc JD")
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
      fill("black")
      textSize(250)
      text("WIN", 0, 250);
      fill("white")
      rect(nextLevelX, nextLevelY, 100, 50)
      textSize(18)
      fill("black")
      text("Next Level", 205, 430)
      console.log("działa?")
    }
  }
  //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ POZIOM 2 @@@@@@@@@@@@@@@@@@@@@@@@@
  if (poziom == 2) {
    koniec = false;
    drawa();
    sterowanie()
    fill(127, 20, 270, 120)
    textSize(50);
    text(time, 230, 50)
    background(142, 164, 33, 120)
    fill(225, 0, 68, 120)
    ellipse(koloX, koloY, 20)
    if (koniec == false) {
      for (i of tab) {
        i.drawa();

      }
    }



  }
}







