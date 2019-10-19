function setup() {
  createCanvas(496, 496);
  x1=random(40,400)
  y1=random(40,400)
  x2=random(40,400)
  y2=random(40,400)
  x3=random(40,400)
  y3=random(40,400)
}
function draw() {
  background('#303030')
  if (mouseIsPressed) {
    if (mouseButton === LEFT)
		line(x1, y1, x2, y2)
		line(x2, y2, x3, y3)
		line(x3, y3, x1, y1)
  }
  ellipse(x1,y1, 20, 20)
  ellipse(x2,y2, 20, 20)
  ellipse(x3,y3, 20, 20)

}
