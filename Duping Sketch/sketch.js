let cloud1 = 0;
let xcloud = 100

function setup() {
  createCanvas(400, 400);
  cloud1 = random(0, 1);
}

function draw() {
  background(220);

  noStroke();
  fill(255, 250, 250);
  xcloud++;
  circle(xcloud + 40, 100, 50);
  circle(cloud1 + 65, 100, 40);

  if (xcloud >= 500) {
    xcloud = 100
  }
}